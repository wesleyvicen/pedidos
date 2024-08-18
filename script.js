const productsData = {
    "Restauracao": [
        { name: "Acido foscorico", campoAberto: false },
        { name: "Adesivo", campoAberto: false },
        { name: "Ionomero", campoAberto: false },
        { name: "Carbono", campoAberto: false },
        { name: "Resina (Campo Aberto)", campoAberto: true },
        // Continue adicionando os produtos de "Restauração"
    ],
    "Anestesico": [
        { name: "BenzoTop", campoAberto: false },
        { name: "Lidocaina", campoAberto: false },
        { name: "Mepvacaina", campoAberto: false }
    ],
    "Limpeza": [
        { name: "Pasta Profilatica", campoAberto: false },
        { name: "Escova de Robinson", campoAberto: false },
        { name: "Taça de Borracha", campoAberto: false },
        { name: "Pedra Pomes", campoAberto: false }
    ],
    "Ortodontia": [
        { name: "Tubo simples (Campo Aberto)", campoAberto: true },
        { name: "Tubo duplo (Campo Aberto)", campoAberto: true },
        // Continue adicionando os produtos de "Ortodontia"
    ],
    "Descartaveis": [
        { name: "Luva", campoAberto: false },
        { name: "Agulha gengival 25mm", campoAberto: false },
        { name: "Bisturi 15", campoAberto: false },
        { name: "Fio de sutura 3/8*** 3-0", campoAberto: false },
        // Continue adicionando os produtos de "Descartáveis"
    ],
    "Moldagem": [
        { name: "Alginato", campoAberto: false },
        { name: "Gesso", campoAberto: false },
        { name: "Silicona de condensação", campoAberto: false },
        { name: "Cera 7", campoAberto: false }
    ],
    "Esterilizacao": [
        { name: "Agua destilada", campoAberto: false },
        { name: "Papel Gral", campoAberto: false }
    ],
    "Clareamento": [
        { name: "Placa flexivel 1mm", campoAberto: false },
        { name: "Gel clareador caseiro", campoAberto: false },
        { name: "Gel clareador consultório", campoAberto: false },
        { name: "Dessensibilizante Gluma", campoAberto: false }
    ],
    "Radiografia": [
        { name: "Filme", campoAberto: false },
        { name: "Fixador", campoAberto: false },
        { name: "Revelador", campoAberto: false }
    ],
    "Mercado": [
        { name: "Alcool 70ª", campoAberto: false },
        { name: "Agua sanitaria", campoAberto: false },
        { name: "Bolsa de Lixo preta", campoAberto: false },
        { name: "Bolsa de lixo Infectado", campoAberto: false }
        // Continue adicionando os produtos de "Mercado"
    ]
};

// Função para salvar os dados no localStorage
function saveFormData() {
    const formData = {};

    document.querySelectorAll('input[name="products"]:checked').forEach(checkbox => {
        const product = checkbox.value;
        const quantity = document.querySelector(`input[name="${product}-quantity"]`).value;
        const observationInput = document.querySelector(`input[name="${product}-observation"]`);
        const observation = observationInput ? observationInput.value : '';

        formData[product] = { quantity, observation };
    });

    localStorage.setItem('formData', JSON.stringify(formData));
}

// Função para carregar os dados do localStorage
function loadFormData() {
    const formData = JSON.parse(localStorage.getItem('formData')) || {};

    Object.keys(formData).forEach(product => {
        const checkbox = document.querySelector(`input[name="products"][value="${product}"]`);
        const quantityInput = document.querySelector(`input[name="${product}-quantity"]`);
        const observationInput = document.querySelector(`input[name="${product}-observation"]`);

        if (checkbox && quantityInput) {
            checkbox.checked = true;
            quantityInput.value = formData[product].quantity;
            quantityInput.disabled = false;

            if (observationInput) {
                observationInput.value = formData[product].observation;
                observationInput.style.display = 'block';
            }
        }
    });
}

// Função para limpar os dados do localStorage após envio bem-sucedido
function clearFormData() {
    localStorage.removeItem('formData');
}

document.getElementById('selectCategoryButton').addEventListener('click', function() {
    const selectedCategory = document.getElementById('categorySelect').value;
    if (!selectedCategory) {
        alert('Por favor, selecione uma categoria.');
        return;
    }

    // Atualiza o título com a categoria selecionada
    document.getElementById('selectedCategoryTitle').textContent = `Produtos da Categoria: ${selectedCategory}`;

    // Gera a lista de produtos com base na categoria selecionada
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Limpa a lista anterior

    if (productsData[selectedCategory]) {
        productsData[selectedCategory].forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');

            const productLabel = document.createElement('label');
            productLabel.classList.add('product-label');
            const productName = product.name;
            productLabel.innerHTML = `
                <input type="checkbox" name="products" value="${productName}">
                ${productName.replace(' (Campo Aberto)', '')}
            `;

            const quantityInput = document.createElement('input');
            quantityInput.type = 'number';
            quantityInput.name = `${productName}-quantity`;
            quantityInput.placeholder = 'Qtd';
            quantityInput.min = 1;
            quantityInput.disabled = true;

            productItem.appendChild(productLabel);
            productItem.appendChild(quantityInput);

            // Adiciona campo de observação se o produto for "Campo Aberto"
            if (product.campoAberto) {
                const observationInput = document.createElement('input');
                observationInput.type = 'text';
                observationInput.name = `${productName}-observation`;
                observationInput.placeholder = 'Observação';
                observationInput.style.display = 'none'; // Inicialmente escondido
                productItem.appendChild(observationInput);

                // Exibe o campo de observação quando o checkbox for marcado
                productLabel.querySelector('input[type="checkbox"]').addEventListener('change', function() {
                    if (this.checked) {
                        observationInput.style.display = 'block';
                    } else {
                        observationInput.style.display = 'none';
                        observationInput.value = ''; // Limpa o campo de observação se desmarcado
                    }
                });
            }

            productList.appendChild(productItem);
        });

        // Exibe a tela de produtos e oculta a tela de categorias
        document.getElementById('categorySelection').style.display = 'none';
        document.getElementById('productSelection').style.display = 'block';

        // Habilita o campo de quantidade quando o produto for selecionado
        document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
            checkbox.addEventListener('change', function() {
                const quantityInput = document.querySelector(`input[name="${this.value}-quantity"]`);
                if (this.checked) {
                    quantityInput.disabled = false;
                    quantityInput.focus();
                } else {
                    quantityInput.value = '';
                    quantityInput.disabled = true;
                }
                saveFormData();
            });
        });

        // Salva os dados quando os campos de quantidade e observação são preenchidos
        document.querySelectorAll('input[type="number"], input[type="text"]').forEach(input => {
            input.addEventListener('input', saveFormData);
        });

        // Carrega os dados salvos
        loadFormData();
    } else {
        console.error('Categoria selecionada não existe nos dados fornecidos.');
    }
});

document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const selectedCategory = document.getElementById('categorySelect').value;
    const selectedProducts = Array.from(document.querySelectorAll('input[name="products"]:checked'))
        .map(checkbox => {
            const product = checkbox.value;
            const quantity = document.querySelector(`input[name="${product}-quantity"]`).value;
            const observationInput = document.querySelector(`input[name="${product}-observation"]`);
            const observation = observationInput ? observationInput.value : '';
            return { category: selectedCategory, product, quantity, observation };
        });

    if (selectedProducts.length === 0) {
        document.getElementById('responseMessage').textContent = "Por favor, selecione ao menos um produto.";
        document.getElementById('responseMessage').style.color = "red";
        return;
    }

    // Acesse a variável de ambiente (supondo que você esteja usando Node.js ou outro ambiente que suporte process.env)
    const token = process.env.WEBHOOK_TOKEN;

    // URL do webhook com o token adicionado
    const url = `https://script.google.com/macros/s/${token}/exec`;

// Agora a URL completa será construída utilizando a variável de ambiente.

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(selectedProducts)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseMessage').textContent = "Dados enviados com sucesso!";
        document.getElementById('responseMessage').style.color = "green";
        document.getElementById('productForm').reset();
        document.querySelectorAll('input[type="number"]').forEach(input => input.disabled = true);
        document.querySelectorAll('input[type="text"]').forEach(input => input.style.display = 'none');
        clearFormData(); // Limpa os dados do localStorage
    })
    .catch(error => {
        document.getElementById('responseMessage').textContent = "Erro ao enviar os dados: " + error;
        document.getElementById('responseMessage').style.color = "red";
    });
});
