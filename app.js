// Application data
const appData = {
  noivos: {
    nome: "Guilherme & Lara",
    foto: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop&crop=faces",
    historia: "Nos conhecemos na faculdade há 6 anos e desde então construímos uma linda história juntos. Estamos muito felizes em celebrar esse momento especial com vocês, nossa família e amigos queridos!",
    dataCasamento: "2025-12-20",
    meta: 30000
  },
  presentes: [
    {"id": 1, "nome": "Jogo de Panelas Antiaderente", "preco": 520, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop", "comprado": false, "presenteador": null},
    {"id": 2, "nome": "Passagens Aéreas - França", "preco": 3200, "categoria": "Lua de Mel", "imagem": "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=300&h=300&fit=crop", "comprado": true, "presenteador": "Família Santos"},
    {"id": 3, "nome": "Smart TV 65 polegadas", "preco": 2299, "categoria": "Eletrônicos", "imagem": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop", "comprado": false, "presenteador": null},
    {"id": 4, "nome": "Tour pela Torre Eiffel", "preco": 450, "categoria": "Lua de Mel", "imagem": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=300&h=300&fit=crop", "comprado": true, "presenteador": "Marina e Ricardo"},
    {"id": 5, "nome": "Geladeira Side by Side", "preco": 3500, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300&h=300&fit=crop", "comprado": false, "presenteador": null},
    {"id": 6, "nome": "Spa Day de Luxo", "preco": 800, "categoria": "Experiência", "imagem": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&h=300&fit=crop", "comprado": true, "presenteador": "Amigas da Lara"},
    {"id": 7, "nome": "Conjunto Mesa Jantar 6 Lugares", "preco": 1800, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=300&fit=crop", "comprado": false, "presenteador": null},
    {"id": 8, "nome": "Cruzeiro pelo Mediterrâneo", "preco": 4500, "categoria": "Lua de Mel", "imagem": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=300&fit=crop", "comprado": false, "presenteador": null},
    {"id": 9, "nome": "Máquina de Lavar Roupas", "preco": 1200, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop", "comprado": true, "presenteador": "Tios do Guilherme"},
    {"id": 10, "nome": "Curso de Gastronomia Francesa", "preco": 650, "categoria": "Experiência", "imagem": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop", "comprado": false, "presenteador": null},
    {"id": 11, "nome": "Sofá 3 Lugares de Couro", "preco": 2500, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop", "comprado": false, "presenteador": null},
    {"id": 12, "nome": "Degustação de Vinhos - Bordeaux", "preco": 380, "categoria": "Lua de Mel", "imagem": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&h=300&fit=crop", "comprado": false, "presenteador": null}
  ],
  transacoes: [
    {"id": 1, "presenteador": "Família Santos", "presente": "Passagens Aéreas - França", "valor": 3200, "data": "2025-09-18", "mensagem": "Desejamos uma lua de mel inesquecível na França! Com muito amor, família Santos! 🇫🇷"},
    {"id": 2, "presenteador": "Marina e Ricardo", "presente": "Tour pela Torre Eiffel", "valor": 450, "data": "2025-09-22", "mensagem": "Que vocês vivam momentos mágicos em Paris! Aproveitem cada segundo juntos! ❤️"},
    {"id": 3, "presenteador": "Amigas da Lara", "presente": "Spa Day de Luxo", "valor": 800, "data": "2025-09-26", "mensagem": "Para relaxar antes do grande dia! Vocês merecem todo o amor do mundo! 💕"},
    {"id": 4, "presenteador": "Tios do Guilherme", "presente": "Máquina de Lavar Roupas", "valor": 1200, "data": "2025-09-30", "mensagem": "Para facilitar a vida de vocês dois! Que sejam muito felizes sempre! 🏠"}
  ]
};

// Global variables
let selectedPresent = null;
let filteredPresents = [...appData.presentes];

// DOM Elements
const mainPage = document.getElementById('mainPage');
const checkoutPage = document.getElementById('checkoutPage');
const dashboardPage = document.getElementById('dashboardPage');
const successModal = document.getElementById('successModal');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
  updateCountdown();
  updateProgressBar();
  renderPresents();
});

function initializeApp() {
  // Set initial page state
  showMainPage();
}

function setupEventListeners() {
  // Navigation buttons
  document.getElementById('acessarDashboardBtn').addEventListener('click', showDashboard);
  document.getElementById('backToListBtn').addEventListener('click', showMainPage);
  document.getElementById('backToMainBtn').addEventListener('click', showMainPage);
  document.getElementById('closeModalBtn').addEventListener('click', hideModal);

  // Filters
  document.getElementById('categoryFilter').addEventListener('change', applyFilters);
  document.getElementById('priceFilter').addEventListener('change', applyFilters);
  document.getElementById('searchFilter').addEventListener('input', applyFilters);

  // Checkout form
  document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);

  // Modal backdrop click
  document.querySelector('.modal__backdrop').addEventListener('click', function(e) {
    if (e.target === this) {
      hideModal();
    }
  });
}

// Navigation functions
function showMainPage() {
  mainPage.classList.remove('hidden');
  checkoutPage.classList.add('hidden');
  dashboardPage.classList.add('hidden');
}

function showCheckout(presentId) {
  selectedPresent = appData.presentes.find(p => p.id === presentId);
  if (!selectedPresent || selectedPresent.comprado) return;

  renderSelectedPresent();
  mainPage.classList.add('hidden');
  checkoutPage.classList.remove('hidden');
  dashboardPage.classList.add('hidden');
}

function showDashboard() {
  renderDashboard();
  mainPage.classList.add('hidden');
  checkoutPage.classList.add('hidden');
  dashboardPage.classList.remove('hidden');
}

// Present rendering functions
function renderPresents() {
  const grid = document.getElementById('presentsGrid');
  grid.innerHTML = '';

  filteredPresents.forEach(present => {
    const presentCard = createPresentCard(present);
    grid.appendChild(presentCard);
  });
}

function createPresentCard(present) {
  const card = document.createElement('div');
  card.className = `present-card ${present.comprado ? 'comprado' : ''}`;

  card.innerHTML = `
    <img src="${present.imagem}" alt="${present.nome}" class="present-card__image">
    <div class="present-card__content">
      <h3 class="present-card__name">${present.nome}</h3>
      <div class="present-card__category">${present.categoria}</div>
      <div class="present-card__price">R$ ${present.preco.toLocaleString('pt-BR')}</div>
      ${present.comprado ? 
        `<div class="present-card__presenteador">Presente de: ${present.presenteador}</div>` : 
        `<button class="btn btn--primary btn--full-width" onclick="showCheckout(${present.id})">
          Presentear
        </button>`
      }
    </div>
  `;

  return card;
}

function renderSelectedPresent() {
  const container = document.getElementById('selectedPresent');
  container.innerHTML = `
    <img src="${selectedPresent.imagem}" alt="${selectedPresent.nome}">
    <div class="selected-present__info">
      <h4>${selectedPresent.nome}</h4>
      <div class="price">R$ ${selectedPresent.preco.toLocaleString('pt-BR')}</div>
    </div>
  `;
}

// Filter functions
function applyFilters() {
  const categoryFilter = document.getElementById('categoryFilter').value;
  const priceFilter = document.getElementById('priceFilter').value;
  const searchFilter = document.getElementById('searchFilter').value.toLowerCase();

  filteredPresents = appData.presentes.filter(present => {
    // Category filter
    if (categoryFilter && present.categoria !== categoryFilter) {
      return false;
    }

    // Price filter
    if (priceFilter) {
      const [min, max] = priceFilter.split('-').map(Number);
      if (max) {
        if (present.preco < min || present.preco > max) return false;
      } else if (priceFilter === '2000+') {
        if (present.preco < 2000) return false;
      }
    }

    // Search filter
    if (searchFilter && !present.nome.toLowerCase().includes(searchFilter)) {
      return false;
    }

    return true;
  });

  renderPresents();
}

// Checkout functions
function handleCheckout(e) {
  e.preventDefault();

  const nome = document.getElementById('presenteadorNome').value;
  const email = document.getElementById('presenteadorEmail').value;
  const mensagem = document.getElementById('presenteadorMensagem').value;
  const pagamento = document.querySelector('input[name="pagamento"]:checked').value;

  // Simulate purchase
  selectedPresent.comprado = true;
  selectedPresent.presenteador = nome;

  // Add transaction
  const newTransaction = {
    id: appData.transacoes.length + 1,
    presenteador: nome,
    presente: selectedPresent.nome,
    valor: selectedPresent.preco,
    data: new Date().toISOString().split('T')[0],
    mensagem: mensagem || "Parabéns pelo casamento!"
  };

  appData.transacoes.push(newTransaction);

  // Update UI
  updateProgressBar();
  renderPresents();
  showSuccessModal();

  // Reset form
  document.getElementById('checkoutForm').reset();
}

function showSuccessModal() {
  successModal.classList.remove('hidden');
}

function hideModal() {
  successModal.classList.add('hidden');
  showMainPage();
}

// Dashboard functions
function renderDashboard() {
  updateDashboardStats();
  renderCategoryChart();
  renderPresenteadores();
  renderMensagens();
}

function updateDashboardStats() {
  const totalArrecadado = calculateTotalArrecadado();
  const presentesComprados = appData.presentes.filter(p => p.comprado).length;
  const valorMedio = presentesComprados > 0 ? Math.round(totalArrecadado / presentesComprados) : 0;
  const progresso = ((totalArrecadado / appData.noivos.meta) * 100).toFixed(1);

  document.getElementById('dashTotalArrecadado').textContent = totalArrecadado.toLocaleString('pt-BR');
  document.getElementById('dashPresentesComprados').textContent = presentesComprados;
  document.getElementById('dashValorMedio').textContent = valorMedio.toLocaleString('pt-BR');
  document.getElementById('dashProgresso').textContent = progresso + '%';
}

function renderCategoryChart() {
  const ctx = document.getElementById('categoryChart').getContext('2d');
  
  // Calculate category totals
  const categoryTotals = {};
  appData.presentes.filter(p => p.comprado).forEach(present => {
    categoryTotals[present.categoria] = (categoryTotals[present.categoria] || 0) + present.preco;
  });

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(categoryTotals),
      datasets: [{
        data: Object.values(categoryTotals),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function renderPresenteadores() {
  const container = document.getElementById('presenteadoresList');
  container.innerHTML = '';

  appData.transacoes.forEach(transacao => {
    const item = document.createElement('div');
    item.className = 'presenteador-item';
    item.innerHTML = `
      <div class="presenteador-item__header">
        <span class="presenteador-item__name">${transacao.presenteador}</span>
        <span class="presenteador-item__value">R$ ${transacao.valor.toLocaleString('pt-BR')}</span>
      </div>
      <div class="presenteador-item__present">${transacao.presente}</div>
    `;
    container.appendChild(item);
  });
}

function renderMensagens() {
  const container = document.getElementById('mensagensList');
  container.innerHTML = '';

  appData.transacoes.forEach(transacao => {
    if (transacao.mensagem) {
      const item = document.createElement('div');
      item.className = 'mensagem-item';
      item.innerHTML = `
        <div class="mensagem-item__header">
          <span class="mensagem-item__author">${transacao.presenteador}</span>
          <span class="mensagem-item__date">${formatDate(transacao.data)}</span>
        </div>
        <div class="mensagem-item__content">"${transacao.mensagem}"</div>
      `;
      container.appendChild(item);
    }
  });
}

// Share functions
function shareOnWhatsApp() {
  const message = "Olha a lista de casamento do Guilherme e Lara! 💍✨ " + window.location.href;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

function shareOnFacebook() {
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
  window.open(facebookUrl, '_blank');
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert('Link copiado para a área de transferência!');
  }).catch(() => {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = window.location.href;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Link copiado para a área de transferência!');
  });
}

// Utility functions
function calculateTotalArrecadado() {
  return appData.transacoes.reduce((total, transacao) => total + transacao.valor, 0);
}

function updateProgressBar() {
  const totalArrecadado = calculateTotalArrecadado();
  const porcentagem = Math.min((totalArrecadado / appData.noivos.meta) * 100, 100);
  
  document.getElementById('progressFill').style.width = porcentagem + '%';
  document.getElementById('totalArrecadado').textContent = totalArrecadado.toLocaleString('pt-BR');
}

function updateCountdown() {
  const weddingDate = new Date(appData.noivos.dataCasamento);
  const now = new Date();
  const difference = weddingDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('countdown').textContent = `${days} dias, ${hours}h ${minutes}min`;
  } else {
    document.getElementById('countdown').textContent = "O grande dia chegou! 🎉";
  }

  // Update countdown every minute
  setTimeout(updateCountdown, 60000);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR');
}

// Make functions globally available
window.showCheckout = showCheckout;
window.shareOnWhatsApp = shareOnWhatsApp;
window.shareOnFacebook = shareOnFacebook;
window.copyLink = copyLink;
