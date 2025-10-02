// Application data - SITE COMPLETAMENTE ZERADO
const appData = {
  noivos: {
    nome: "Guilherme & Lara",
    foto: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop&crop=faces",
    historia: "Nos conhecemos na faculdade há 6 anos e desde então construímos uma linda história juntos. Estamos muito felizes em celebrar esse momento especial com vocês!",
    dataCasamento: "2025-11-29T16:00:00", // 29 de novembro de 2025 às 16:00
    meta: 30000,
    senha: "guilhermelara2025"
  },
  presentes: [
    {"id": 1, "nome": "Jogo de Panelas Antiaderente", "preco": 520, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 2, "nome": "Passagens Aéreas - França", "preco": 3200, "categoria": "Lua de Mel", "imagem": "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 3, "nome": "Smart TV 65 polegadas", "preco": 2299, "categoria": "Eletrônicos", "imagem": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 4, "nome": "Tour pela Torre Eiffel", "preco": 450, "categoria": "Lua de Mel", "imagem": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 5, "nome": "Geladeira Side by Side", "preco": 3500, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 6, "nome": "Spa Day de Luxo", "preco": 800, "categoria": "Experiência", "imagem": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 7, "nome": "Conjunto Mesa Jantar 6 Lugares", "preco": 1800, "categoria": "Móveis", "imagem": "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 8, "nome": "Cruzeiro pelo Mediterrâneo", "preco": 4500, "categoria": "Lua de Mel", "imagem": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 9, "nome": "Máquina de Lavar Roupas", "preco": 1200, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 10, "nome": "Curso de Gastronomia Francesa", "preco": 650, "categoria": "Experiência", "imagem": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 11, "nome": "Sofá 3 Lugares de Couro", "preco": 2500, "categoria": "Móveis", "imagem": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 12, "nome": "Degustação de Vinhos - Bordeaux", "preco": 380, "categoria": "Lua de Mel", "imagem": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 13, "nome": "Air Fryer Digital", "preco": 350, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 14, "nome": "Passeio de Balão - Toscana", "preco": 850, "categoria": "Lua de Mel", "imagem": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 15, "nome": "Microondas Inox", "preco": 480, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 16, "nome": "Notebook Gamer", "preco": 3800, "categoria": "Eletrônicos", "imagem": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 17, "nome": "Hospedagem 5 estrelas - Santorini", "preco": 2800, "categoria": "Lua de Mel", "imagem": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 18, "nome": "Conjunto de Toalhas de Banho", "preco": 180, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 19, "nome": "Guarda-Roupa Casal", "preco": 1900, "categoria": "Móveis", "imagem": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 20, "nome": "Console PlayStation 5", "preco": 2400, "categoria": "Eletrônicos", "imagem": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 21, "nome": "Aulas de Dança para Casais", "preco": 420, "categoria": "Experiência", "imagem": "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 22, "nome": "Aspirador de Pó Robô", "preco": 899, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 23, "nome": "Jantar Romântico - Vista Mar", "preco": 320, "categoria": "Experiência", "imagem": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 24, "nome": "Cama Box King Size", "preco": 2200, "categoria": "Móveis", "imagem": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 25, "nome": "Smartphone Top de Linha", "preco": 1800, "categoria": "Eletrônicos", "imagem": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 26, "nome": "Kit Utensílios de Cozinha", "preco": 280, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 27, "nome": "Passagem de Trem - Suíça", "preco": 1200, "categoria": "Lua de Mel", "imagem": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 28, "nome": "Mesa de Centro Moderna", "preco": 800, "categoria": "Móveis", "imagem": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 29, "nome": "Cafeteira Expresso Premium", "preco": 750, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null},
    {"id": 30, "nome": "Excursão Vinícolas - Argentina", "preco": 1500, "categoria": "Lua de Mel", "imagem": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&h=300&fit=crop", "comprado": false, "presenteador": null, "dataCompra": null}
  ],
  transacoes: [] // Array vazio - site zerado
};

// State management
let currentView = 'public';
let isAuthenticated = false;
let filteredPresents = [...appData.presentes];

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    updateCountdown();
    setInterval(updateCountdown, 1000); // Update every second
});

function initializeApp() {
    renderPresents();
    updateProgressBar();
    setupEventListeners();
    setupFilters();
    
    // Check if already authenticated
    if (localStorage.getItem('authenticated') === 'true') {
        showDashboard();
    }
}

function setupEventListeners() {
    // Login modal
    document.getElementById('loginBtn').addEventListener('click', showLoginModal);
    document.getElementById('closeLoginModal').addEventListener('click', hideLoginModal);
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    
    // Checkout modal
    document.getElementById('closeCheckoutModal').addEventListener('click', hideCheckoutModal);
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);
    
    // Logout
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    
    // Modal overlay clicks
    document.getElementById('loginModal').addEventListener('click', function(e) {
        if (e.target === this) hideLoginModal();
    });
    
    document.getElementById('checkoutModal').addEventListener('click', function(e) {
        if (e.target === this) hideCheckoutModal();
    });
}

function setupFilters() {
    document.getElementById('categoryFilter').addEventListener('change', applyFilters);
    document.getElementById('priceFilter').addEventListener('change', applyFilters);
    document.getElementById('searchFilter').addEventListener('input', applyFilters);
}

function applyFilters() {
    const category = document.getElementById('categoryFilter').value;
    const priceRange = document.getElementById('priceFilter').value;
    const searchTerm = document.getElementById('searchFilter').value.toLowerCase();
    
    filteredPresents = appData.presentes.filter(present => {
        let matches = true;
        
        // Category filter
        if (category && present.categoria !== category) {
            matches = false;
        }
        
        // Price filter
        if (priceRange && matches) {
            const price = present.preco;
            switch(priceRange) {
                case '0-500':
                    matches = price <= 500;
                    break;
                case '500-1000':
                    matches = price > 500 && price <= 1000;
                    break;
                case '1000-2000':
                    matches = price > 1000 && price <= 2000;
                    break;
                case '2000+':
                    matches = price > 2000;
                    break;
            }
        }
        
        // Search filter
        if (searchTerm && matches) {
            matches = present.nome.toLowerCase().includes(searchTerm);
        }
        
        return matches;
    });
    
    renderPresents();
}

function renderPresents() {
    const grid = document.getElementById('presentsGrid');
    
    if (filteredPresents.length === 0) {
        grid.innerHTML = '<div class="empty-state">Nenhum presente encontrado</div>';
        return;
    }
    
    grid.innerHTML = filteredPresents.map(present => `
        <div class="present__card ${present.comprado ? 'present__card--purchased' : ''}">
            <div class="present__image">
                <img src="${present.imagem}" alt="${present.nome}">
                ${present.comprado ? '<div class="present__badge">Comprado</div>' : ''}
            </div>
            <div class="present__content">
                <div class="present__category">${present.categoria}</div>
                <h3 class="present__name">${present.nome}</h3>
                <div class="present__price">R$ ${present.preco.toLocaleString('pt-BR')}</div>
                ${present.comprado ? 
                    `<div class="present__giver">Por: ${present.presenteador}</div>` :
                    `<button class="btn btn--primary" onclick="selectPresent(${present.id})">Presentear</button>`
                }
            </div>
        </div>
    `).join('');
}

function updateProgressBar() {
    const total = appData.transacoes.reduce((sum, t) => sum + t.valor, 0);
    const percentage = (total / appData.noivos.meta) * 100;
    
    document.getElementById('progressFill').style.width = `${Math.min(percentage, 100)}%`;
    document.getElementById('progressText').textContent = `R$ ${total.toLocaleString('pt-BR')} de R$ ${appData.noivos.meta.toLocaleString('pt-BR')}`;
    document.getElementById('progressPercent').textContent = `${percentage.toFixed(1)}%`;
}

function updateCountdown() {
    const weddingDate = new Date(appData.noivos.dataCasamento);
    const now = new Date();
    const diff = weddingDate - now;
    
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('countdown').innerHTML = `
            <div class="countdown__item">
                <span class="countdown__number">${days}</span>
                <span class="countdown__label">Dias</span>
            </div>
            <div class="countdown__item">
                <span class="countdown__number">${hours}</span>
                <span class="countdown__label">Horas</span>
            </div>
            <div class="countdown__item">
                <span class="countdown__number">${minutes}</span>
                <span class="countdown__label">Minutos</span>
            </div>
            <div class="countdown__item">
                <span class="countdown__number">${seconds}</span>
                <span class="countdown__label">Segundos</span>
            </div>
        `;
    } else {
        document.getElementById('countdown').innerHTML = '<div class="countdown__finished">🎉 Hoje é o grande dia! 🎉</div>';
    }
}

function selectPresent(presentId) {
    const present = appData.presentes.find(p => p.id === presentId);
    if (!present || present.comprado) return;
    
    document.getElementById('selectedPresent').innerHTML = `
        <div class="selected-present">
            <img src="${present.imagem}" alt="${present.nome}" class="selected-present__image">
            <div class="selected-present__info">
                <h4>${present.nome}</h4>
                <div class="selected-present__category">${present.categoria}</div>
                <div class="selected-present__price">R$ ${present.preco.toLocaleString('pt-BR')}</div>
            </div>
        </div>
    `;
    
    document.getElementById('checkoutModal').dataset.presentId = presentId;
    showCheckoutModal();
}

function showLoginModal() {
    document.getElementById('loginModal').classList.remove('hidden');
}

function hideLoginModal() {
    document.getElementById('loginModal').classList.add('hidden');
    document.getElementById('passwordInput').value = '';
}

function showCheckoutModal() {
    document.getElementById('checkoutModal').classList.remove('hidden');
}

function hideCheckoutModal() {
    document.getElementById('checkoutModal').classList.add('hidden');
    document.getElementById('checkoutForm').reset();
}

function handleLogin(e) {
    e.preventDefault();
    const password = document.getElementById('passwordInput').value;
    
    if (password === appData.noivos.senha) {
        isAuthenticated = true;
        localStorage.setItem('authenticated', 'true');
        hideLoginModal();
        showDashboard();
    } else {
        alert('Senha incorreta!');
    }
}

function handleLogout() {
    isAuthenticated = false;
    localStorage.removeItem('authenticated');
    showPublicView();
}

function handleCheckout(e) {
    e.preventDefault();
    
    const presentId = parseInt(document.getElementById('checkoutModal').dataset.presentId);
    const present = appData.presentes.find(p => p.id === presentId);
    
    if (!present || present.comprado) return;
    
    const giftGiver = document.getElementById('giftGiverName').value;
    const giftEmail = document.getElementById('giftGiverEmail').value;
    const giftMessage = document.getElementById('giftMessage').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    
    // Mark present as purchased
    present.comprado = true;
    present.presenteador = giftGiver;
    present.dataCompra = new Date().toISOString().split('T')[0];
    
    // Add transaction
    appData.transacoes.push({
        id: appData.transacoes.length + 1,
        presenteador: giftGiver,
        presente: present.nome,
        valor: present.preco,
        data: present.dataCompra,
        mensagem: giftMessage,
        email: giftEmail,
        pagamento: paymentMethod
    });
    
    // Update UI
    renderPresents();
    updateProgressBar();
    hideCheckoutModal();
    
    // Show success message
    alert(`Obrigado, ${giftGiver}! Seu presente foi confirmado. Em breve você receberá as instruções de pagamento por email.`);
}

function showDashboard() {
    currentView = 'dashboard';
    document.getElementById('publicHeader').classList.add('hidden');
    document.getElementById('privateHeader').classList.remove('hidden');
    document.getElementById('publicPage').classList.add('hidden');
    document.getElementById('dashboardPage').classList.remove('hidden');
    
    updateDashboardStats();
    renderTransactions();
    renderMessages();
    renderCategoryChart();
}

function showPublicView() {
    currentView = 'public';
    document.getElementById('publicHeader').classList.remove('hidden');
    document.getElementById('privateHeader').classList.add('hidden');
    document.getElementById('publicPage').classList.remove('hidden');
    document.getElementById('dashboardPage').classList.add('hidden');
}

function updateDashboardStats() {
    const total = appData.transacoes.reduce((sum, t) => sum + t.valor, 0);
    const count = appData.transacoes.length;
    const average = count > 0 ? total / count : 0;
    const progress = (total / appData.noivos.meta) * 100;
    
    document.getElementById('totalArrecadado').textContent = `R$ ${total.toLocaleString('pt-BR')}`;
    document.getElementById('totalPresentes').textContent = count;
    document.getElementById('mediaPresente').textContent = `R$ ${average.toLocaleString('pt-BR')}`;
    document.getElementById('progressoMeta').textContent = `${progress.toFixed(1)}%`;
}

function renderTransactions() {
    const container = document.getElementById('transactionsList');
    
    if (appData.transacoes.length === 0) {
        container.innerHTML = '<p class="empty-state">Nenhuma transação ainda</p>';
        return;
    }
    
    container.innerHTML = appData.transacoes
        .sort((a, b) => new Date(b.data) - new Date(a.data))
        .map(t => `
            <div class="transaction">
                <div class="transaction__header">
                    <strong>${t.presenteador}</strong>
                    <span class="transaction__date">${new Date(t.data).toLocaleDateString('pt-BR')}</span>
                </div>
                <div class="transaction__details">
                    ${t.presente} - <strong>R$ ${t.valor.toLocaleString('pt-BR')}</strong>
                </div>
            </div>
        `).join('');
}

function renderMessages() {
    const container = document.getElementById('messagesList');
    const messagesWithContent = appData.transacoes.filter(t => t.mensagem && t.mensagem.trim());
    
    if (messagesWithContent.length === 0) {
        container.innerHTML = '<p class="empty-state">Nenhuma mensagem ainda</p>';
        return;
    }
    
    container.innerHTML = messagesWithContent.map(t => `
        <div class="message">
            <div class="message__header">
                <strong>${t.presenteador}</strong>
                <span class="message__date">${new Date(t.data).toLocaleDateString('pt-BR')}</span>
            </div>
            <div class="message__content">${t.mensagem}</div>
        </div>
    `).join('');
}

function renderCategoryChart() {
    const canvas = document.getElementById('categoryChart');
    
    if (appData.transacoes.length === 0) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ccc';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Nenhum dado disponível', canvas.width / 2, canvas.height / 2);
        return;
    }
    
    // Group transactions by category
    const categoryData = {};
    appData.transacoes.forEach(t => {
        const present = appData.presentes.find(p => p.nome === t.presente);
        if (present) {
            categoryData[present.categoria] = (categoryData[present.categoria] || 0) + t.valor;
        }
    });
    
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(categoryData),
            datasets: [{
                data: Object.values(categoryData),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}