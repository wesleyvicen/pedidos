// Dados dos produtos organizados por categoria
const productsData = {
    "Restauracao": [
        { name: "Acido foscorico", campoAberto: false },
        { name: "Adesivo", campoAberto: false },
        { name: "Ionomero", campoAberto: false },
        { name: "Carbono", campoAberto: false },
        { name: "Resina", campoAberto: true },
        { name: "Dycal", campoAberto: false },
        { name: "MicroBrush", campoAberto: true },
        { name: "Fio Dental", campoAberto: false },
        { name: "ZOE", campoAberto: false },
        { name: "Vaselina solida", campoAberto: false },
        { name: "Hidroxido PA", campoAberto: false },
        { name: "Discos de Polimento", campoAberto: true },
        { name: "Mandril", campoAberto: false },
        { name: "Lixa de Resina", campoAberto: false },
        { name: "Lixa de aço", campoAberto: false },
        { name: "Matriz", campoAberto: true },
        { name: "Tiras de Poliéster", campoAberto: false },
        { name: "Cinta Profilática", campoAberto: false },
        { name: "Pincel", campoAberto: false },
        { name: "Fio Retrator", campoAberto: false },
        { name: "Hemostop", campoAberto: false },
        { name: "Tricresol", campoAberto: false },
        { name: "Formocresol", campoAberto: false },
        { name: "Otosporin", campoAberto: false },
        { name: "Fluor", campoAberto: false },
        { name: "Matriz Pre-moldada", campoAberto: false },
        { name: "Cunha", campoAberto: false },
        { name: "Resina Flow", campoAberto: false }
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
        { name: "Tubo simples", campoAberto: true },
        { name: "Tubo duplo", campoAberto: true },
        { name: "Tubo simples conversivel", campoAberto: true },
        { name: "Tubo triplo", campoAberto: true },
        { name: "Botão lingual", campoAberto: true },
        { name: "Stop", campoAberto: true },
        { name: "Esporão", campoAberto: false },
        { name: "Tubo cruzado", campoAberto: false },
        { name: "Gancho Bola", campoAberto: false },
        { name: "Aparelho autoligado", campoAberto: false },
        { name: "Aparelho convencional", campoAberto: false },
        { name: "Fio niti", campoAberto: true },
        { name: "Fios de Aço", campoAberto: true },
        { name: "Fio Termo Ativado", campoAberto: true },
        { name: "Fio copper niti", campoAberto: true },
        { name: "Elastico corrente", campoAberto: true },
        { name: "Elastico unitario", campoAberto: true },
        { name: "Amarrilho 010 / 008 / 012", campoAberto: false },
        { name: "Caixa para elastico", campoAberto: false },
        { name: "Cera Ortodontica", campoAberto: false },
        { name: "Saqinho para elastico intraoral", campoAberto: false },
        { name: "Elasticos intraoral", campoAberto: true },
        { name: "Caixa de aparelho", campoAberto: false },
        { name: "Elastico separador", campoAberto: false },
        { name: "Placa rigida 1mm", campoAberto: false },
        { name: "Placa rigida 2mm", campoAberto: false },
        { name: "Mola Aberta", campoAberto: false },
        { name: "Mola Fechada", campoAberto: false },
        { name: "Protetor de fio", campoAberto: false },
        { name: "Fio TMA Vareta", campoAberto: false }
    ],
    "Descartaveis": [
        { name: "Luva", campoAberto: false },
        { name: "Agulha gengival 25mm", campoAberto: false },
        { name: "Bisturi 15", campoAberto: false },
        { name: "Fio de sutura 3/8*** 3-0", campoAberto: false },
        { name: "Sugador normal", campoAberto: false },
        { name: "Sugador cirugico", campoAberto: false },
        { name: "Touca", campoAberto: false },
        { name: "Babador", campoAberto: false },
        { name: "Capote", campoAberto: false },
        { name: "Gaze", campoAberto: false },
        { name: "Gaze não esteril", campoAberto: false },
        { name: "Algodão", campoAberto: false },
        { name: "Mascara Cirurgica", campoAberto: false },
        { name: "Mascara descartavel", campoAberto: false },
        { name: "Lençol de borracha", campoAberto: false },
        { name: "Copo descatavel", campoAberto: false },
        { name: "Papel toalha dobrado", campoAberto: false },
        { name: "Papel toalha rolo", campoAberto: false },
        { name: "Etiqueta de preço", campoAberto: false },
        { name: "Pano de chão", campoAberto: false },
        { name: "Luva Limpeza pesada (P)", campoAberto: false },
        { name: "Toalha de mão Branco", campoAberto: false },
        { name: "Bolsa hotdog", campoAberto: false }
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
        { name: "Dessensibilizante Gluma", campoAberto: false },
        { name: "Top dam", campoAberto: false }
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
        { name: "Bolsa de lixo Infectado", campoAberto: false },
        { name: "Papel higienico", campoAberto: false },
        { name: "Papel reutilizavel", campoAberto: false },
        { name: "Lustra moveis", campoAberto: false },
        { name: "Desinfetante", campoAberto: false },
        { name: "Bom Ar", campoAberto: false },
        { name: "Sabonete liquido", campoAberto: false },
        { name: "Bombril", campoAberto: false },
        { name: "Veja Gold multiuso azul", campoAberto: false },
        { name: "Bucha (Esponja)", campoAberto: false },
        { name: "Pastilha agua azul", campoAberto: false },
        { name: "Vassoura do Mop", campoAberto: false }
    ]
};

// Função para salvar os dados no localStorage
function saveFormData() {
    // Obtém o nome da categoria selecionada
    const selectedCategory = document.getElementById('categorySelect').value;

    if (!selectedCategory) return;

    // Obtém os dados existentes do localStorage ou cria um novo objeto
    const formData = JSON.parse(localStorage.getItem('formData')) || {};

    // Garante que a categoria exista no formData
    if (!formData[selectedCategory]) {
        formData[selectedCategory] = [];
    }

    // Limpa os dados existentes da categoria antes de adicionar os novos dados
    formData[selectedCategory] = [];

    // Adiciona os produtos selecionados da categoria
    document.querySelectorAll('input[name="products"]:checked').forEach(checkbox => {
        const product = checkbox.value;
        const quantity = document.querySelector(`input[name="${product}-quantity"]`).value;
        const observationInput = document.querySelector(`input[name="${product}-observation"]`);
        const observation = observationInput ? observationInput.value : '';

        formData[selectedCategory].push({ product, quantity, observation });
    });

    // Adiciona os campos "Outro" da categoria
    const otherFields = Array.from(document.querySelectorAll('.other-product-input'));
    otherFields.forEach(input => {
        const product = input.value.trim();
        if (product) {
            const quantity = input.nextElementSibling.value;
            formData[selectedCategory].push({ product, quantity });
        }
    });

    // Salva os dados atualizados no localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
}


// Função para carregar os dados do localStorage
function loadFormData() {
    const formData = JSON.parse(localStorage.getItem('formData')) || {};

    const selectedCategory = document.getElementById('categorySelect').value;

    if (formData[selectedCategory]) {
        formData[selectedCategory].forEach(item => {
            const { product, quantity, observation } = item;
            const checkbox = document.querySelector(`input[name="products"][value="${product}"]`);
            const quantityInput = document.querySelector(`input[name="${product}-quantity"]`);
            const observationInput = document.querySelector(`input[name="${product}-observation"]`);

            if (checkbox && quantityInput) {
                checkbox.checked = true;
                quantityInput.value = quantity;
                quantityInput.disabled = false;

                if (observationInput) {
                    observationInput.value = observation;
                    observationInput.style.display = 'block';
                }
            } else {
                // Restaura os campos "Outro"
                const otherField = createOtherField();
                otherField.querySelector('.other-product-input').value = product;
                const quantityInput = otherField.querySelector('input[type="number"]');
                quantityInput.disabled = false;
                quantityInput.value = quantity;
                document.getElementById('productList').appendChild(otherField);
            }
        });
    }
}


// Função para limpar os dados do localStorage após envio bem-sucedido
function clearFormData() {
    localStorage.removeItem('formData');
}

function createOtherField() {
    const otherItem = document.createElement('div');
    otherItem.classList.add('product-item');

    const labelContainer = document.createElement('div');
    labelContainer.classList.add('product-label-container');

    const productInput = document.createElement('input');
    productInput.type = 'text';
    productInput.placeholder = 'Digite outro produto';
    productInput.classList.add('other-product-input');

    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.placeholder = 'Qtd';
    quantityInput.min = 0; // Valor mínimo para 0
    quantityInput.disabled = true;

    labelContainer.appendChild(productInput);
    labelContainer.appendChild(quantityInput);

    otherItem.appendChild(labelContainer);

    productInput.addEventListener('input', function () {
        const productName = productInput.value.trim();
        if (productName !== '') {
            quantityInput.disabled = false;
            saveFormData(); // Salva dados ao alterar o texto
            if (!otherItem.nextElementSibling || !otherItem.nextElementSibling.classList.contains('product-item')) {
                const newOtherField = createOtherField();
                otherItem.parentNode.appendChild(newOtherField);
            }
        } else {
            quantityInput.disabled = true;
            quantityInput.value = '';
            if (productName !== '') {
                saveFormData(); // Salva dados ao apagar o texto
            }
            otherItem.remove();

            const formData = JSON.parse(localStorage.getItem('formData')) || {};
            if (formData[productName]) {
                delete formData[productName];
                localStorage.setItem('formData', JSON.stringify(formData));
            }

            if (otherItem.nextElementSibling && otherItem.nextElementSibling.classList.contains('product-item')) {
                otherItem.nextElementSibling.remove();
            }
        }
    });

    quantityInput.addEventListener('input', function () {
        // Validação para garantir que o valor seja maior ou igual a 0
        if (quantityInput.value === '') {
            quantityInput.value = 0; // Define para 0 se o campo estiver vazio
        } else if (quantityInput.value < 0) {
            quantityInput.value = 0; // Ajusta automaticamente para 0 se for menor
        }
        saveFormData(); // Salva dados ao alterar a quantidade
    });

    return otherItem;
}



document.getElementById('selectCategoryButton').addEventListener('click', function() {
    const selectedCategory = document.getElementById('categorySelect').value;
    if (!selectedCategory) {
        alert('Por favor, selecione uma categoria.');
        return;
    }

    document.getElementById('selectedCategoryTitle').textContent = `Produtos da Categoria: ${selectedCategory}`;

    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    if (productsData[selectedCategory]) {
        productsData[selectedCategory].forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');

            const labelContainer = document.createElement('div');
            labelContainer.classList.add('product-label-container');

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

            labelContainer.appendChild(productLabel);
            labelContainer.appendChild(quantityInput);

            productItem.appendChild(labelContainer);

            if (product.campoAberto) {
                const observationInput = document.createElement('input');
                observationInput.type = 'text';
                observationInput.name = `${productName}-observation`;
                observationInput.placeholder = 'Observação';
                observationInput.style.display = 'none';
                productItem.appendChild(observationInput);

                productLabel.querySelector('input[type="checkbox"]').addEventListener('change', function() {
                    if (this.checked) {
                        observationInput.style.display = 'block';
                    } else {
                        observationInput.style.display = 'none';
                        observationInput.value = '';
                    }
                    saveFormData(); // Salva dados ao alterar o estado do checkbox
                });
            }

            productList.appendChild(productItem);
        });

        // Adiciona o primeiro campo "Outro"
        const otherField = createOtherField();
        productList.appendChild(otherField);

        document.getElementById('categorySelection').style.display = 'none';
        document.getElementById('productSelection').style.display = 'block';

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
                saveFormData(); // Salva dados ao alterar o estado do checkbox
            });
        });

        document.querySelectorAll('input[type="number"], input[type="text"]').forEach(input => {
            input.addEventListener('input', saveFormData); // Salva dados ao alterar a quantidade ou texto
        });

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

    // Captura os campos "Outro"
    const otherFields = Array.from(document.querySelectorAll('.other-product-input'));
    otherFields.forEach(input => {
        const product = input.value.trim();
        if (product) {
            const quantity = input.nextElementSibling.value;
            selectedProducts.push({ category: selectedCategory, product, quantity });
        }
    });

    if (selectedProducts.length === 0) {
        document.getElementById('responseMessage').textContent = "Por favor, selecione ao menos um produto.";
        document.getElementById('responseMessage').style.color = "red";
        return;
    }

    // Formata a mensagem
    let message = `*Pedidos para a Categoria: ${selectedCategory}*\n\n`;

    selectedProducts.forEach(item => {
        message += `*Produto*: ${item.product}\n*Quantidade*: ${item.quantity}\n`;
        if (item.observation) {
            message += `*Observação*: ${item.observation}\n`;
        }
        message += '\n'; // Adiciona uma linha em branco entre os produtos
    });

    const phoneNumber = '5581999441494';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Exibe a mensagem de confirmação
    document.getElementById('responseMessage').textContent = "Redirecionando para o WhatsApp...";
    document.getElementById('responseMessage').style.color = "green";

    // Limpa os campos do formulário
    document.getElementById('productForm').reset();
    
    // Desativa os campos de quantidade e oculta os campos de observação
    document.querySelectorAll('input[type="number"]').forEach(input => input.disabled = true);
    document.querySelectorAll('input[type="text"].other-product-input').forEach(input => input.value = '');
    document.querySelectorAll('input[name$="-observation"]').forEach(input => {
        input.style.display = 'none';
        input.value = '';
    });

    // Limpa os dados do localStorage após o envio
    clearFormData();

    // Redireciona para a área principal após alguns segundos
    setTimeout(() => {
        // Redireciona para a área principal (home)
        document.getElementById('categorySelection').style.display = 'block';
        document.getElementById('productSelection').style.display = 'none';
        document.getElementById('responseMessage').textContent = "Você deseja solicitar outro estoque?";

        // Oculta a mensagem após 3 segundos e mostra a pergunta
        setTimeout(() => {
            document.getElementById('responseMessage').textContent = "";
            const confirmMessage = document.createElement('div');
            confirmMessage.textContent = "Você deseja solicitar outro estoque?";
            confirmMessage.style.color = "blue";
            document.getElementById('categorySelection').appendChild(confirmMessage);
        }, 3000);
    }, 2000); // Tempo para redirecionar e mostrar a mensagem
});