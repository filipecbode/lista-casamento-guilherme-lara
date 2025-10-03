// Dados da aplicação
const APP_DATA = {
  "noivos": {
    "nome": "Guilherme & Lara",
    "foto": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop&crop=faces",
    "historia": "Nos conhecemos na faculdade há 6 anos e desde então construímos uma linda história juntos. Estamos muito felizes em celebrar esse momento especial com vocês, nossa família e amigos queridos!",
    "dataCasamento": "2025-11-29T16:00:00",
    "meta": 30000,
    "senha": "guilhermelara2025"
  },
  "presentes": [
    {"id": 1, "nome": "Jogo de Panelas Antiaderente", "preco": 520, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop", "comprado": false},
    {"id": 2, "nome": "Passagens Aéreas - França", "preco": 3200, "categoria": "Lua de Mel", "imagem": "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=300&h=300&fit=crop", "comprado": false},
    {"id": 3, "nome": "Smart TV 65 polegadas", "preco": 2299, "categoria": "Eletrônicos", "imagem": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop", "comprado": false},
    {"id": 4, "nome": "Tour pela Torre Eiffel", "preco": 450, "categoria": "Lua de Mel", "imagem": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=300&h=300&fit=crop", "comprado": false},
    {"id": 5, "nome": "Geladeira Side by Side", "preco": 3500, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300&h=300&fit=crop", "comprado": false},
    {"id": 6, "nome": "Spa Day de Luxo", "preco": 800, "categoria": "Experiência", "imagem": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&h=300&fit=crop", "comprado": false},
    {"id": 7, "nome": "Conjunto Mesa Jantar 6 Lugares", "preco": 1800, "categoria": "Móveis", "imagem": "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=300&fit=crop", "comprado": false},
    {"id": 8, "nome": "Cruzeiro pelo Mediterrâneo", "preco": 4500, "categoria": "Lua de Mel", "imagem": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=300&fit=crop", "comprado": false},
    {"id": 9, "nome": "Máquina de Lavar Roupas", "preco": 1200, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop", "comprado": false},
    {"id": 10, "nome": "Curso de Gastronomia Francesa", "preco": 650, "categoria": "Experiência", "imagem": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop", "comprado": false},
    {"id": 11, "nome": "Sofá 3 Lugares de Couro", "preco": 2500, "categoria": "Móveis", "imagem": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop", "comprado": false},
    {"id": 12, "nome": "Degustação de Vinhos - Bordeaux", "preco": 380, "categoria": "Lua de Mel", "imagem": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&h=300&fit=crop", "comprado": false},
    {"id": 13, "nome": "Air Fryer Digital", "preco": 350, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop", "comprado": false},
    {"id": 14, "nome": "Passeio de Balão - Toscana", "preco": 850, "categoria": "Lua de Mel", "imagem": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop", "comprado": false},
    {"id": 15, "nome": "Microondas Inox", "preco": 480, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop", "comprado": false},
    {"id": 16, "nome": "Notebook Gamer", "preco": 3800, "categoria": "Eletrônicos", "imagem": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop", "comprado": false},
    {"id": 17, "nome": "Hospedagem 5 estrelas - Santorini", "preco": 2800, "categoria": "Lua de Mel", "imagem": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=300&h=300&fit=crop", "comprado": false},
    {"id": 18, "nome": "Conjunto de Toalhas de Banho", "preco": 180, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=300&h=300&fit=crop", "comprado": false},
    {"id": 19, "nome": "Guarda-Roupa Casal", "preco": 1900, "categoria": "Móveis", "imagem": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop", "comprado": false},
    {"id": 20, "nome": "Console PlayStation 5", "preco": 2400, "categoria": "Eletrônicos", "imagem": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop", "comprado": false},
    {"id": 21, "nome": "Aulas de Dança para Casais", "preco": 420, "categoria": "Experiência", "imagem": "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=300&h=300&fit=crop", "comprado": false},
    {"id": 22, "nome": "Aspirador de Pó Robô", "preco": 899, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop", "comprado": false},
    {"id": 23, "nome": "Jantar Romântico - Vista Mar", "preco": 320, "categoria": "Experiência", "imagem": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=300&fit=crop", "comprado": false},
    {"id": 24, "nome": "Cama Box King Size", "preco": 2200, "categoria": "Móveis", "imagem": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300&h=300&fit=crop", "comprado": false},
    {"id": 25, "nome": "Smartphone Top de Linha", "preco": 1800, "categoria": "Eletrônicos", "imagem": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop", "comprado": false},
    {"id": 26, "nome": "Kit Utensílios de Cozinha", "preco": 280, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop", "comprado": false},
    {"id": 27, "nome": "Passagem de Trem - Suíça", "preco": 1200, "categoria": "Lua de Mel", "imagem": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop", "comprado": false},
    {"id": 28, "nome": "Mesa de Centro Moderna", "preco": 800, "categoria": "Móveis", "imagem": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop", "comprado": false},
    {"id": 29, "nome": "Cafeteira Expresso Premium", "preco": 750, "categoria": "Casa", "imagem": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop", "comprado": false},
    {"id": 30, "nome": "Excursão Vinícolas - Argentina", "preco": 1500, "categoria": "Lua de Mel", "imagem": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&h=300&fit=crop", "comprado": false}
  ],
  "transacoes": [],
  "mensagens": []
};

// Estado da aplicação
let isLoggedIn = false;
let currentPresent = null;
let categoryChart = null;

// Elementos DOM
const elements = {
  // Navigation
  navToggle: document.getElementById('navToggle'),
  navMenu: document.getElementById('navMenu'),
  loginBtn: document.getElementById('loginBtn'),
  
  // Countdown
  countdown: document.getElementById('countdown'),
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
  
  // Progress
  progressFill: document.getElementById('progressFill'),
  progressText: document.getElementById('progressText'),
  progressPercentage: document.getElementById('progressPercentage'),
  
  // Filters
  searchInput: document.getElementById('searchInput'),
  categoryFilter: document.getElementById('categoryFilter'),
  priceFilter: document.getElementById('priceFilter'),
  
  // Presentes
  presentesGrid: document.getElementById('presentesGrid'),
  
  // Modals
  checkoutModal: document.getElementById('checkoutModal'),
  closeModal: document.getElementById('closeModal'),
  presentInfo: document.getElementById('presentInfo'),
  checkoutForm: document.getElementById('checkoutForm'),
  cancelCheckout: document.getElementById('cancelCheckout'),
  
  loginModal: document.getElementById('loginModal'),
  closeLoginModal: document.getElementById('closeLoginModal'),
  loginForm: document.getElementById('loginForm'),
  passwordInput: document.getElementById('passwordInput'),
  cancelLogin: document.getElementById('cancelLogin'),
  
  successModal: document.getElementById('successModal'),
  closeSuccessModal: document.getElementById('closeSuccessModal'),
  
  // Dashboard
  dashboard: document.getElementById('dashboard'),
  logoutBtn: document.getElementById('logoutBtn'),
  totalArrecadado: document.getElementById('totalArrecadado'),
  presentesComprados: document.getElementById('presentesComprados'),
  totalConvidados: document.getElementById('totalConvidados'),
  percentualMeta: document.getElementById('percentualMeta'),
  categoryChart: document.getElementById('categoryChart'),
  transactionsList: document.getElementById('transactionsList'),
  messagesList: document.getElementById('messagesList'),
  
  // Form fields
  buyerName: document.getElementById('buyerName'),
  buyerEmail: document.getElementById('buyerEmail'),
  buyerPhone: document.getElementById('buyerPhone'),
  buyerMessage: document.getElementById('buyerMessage')
};

// Utilitários
const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

const formatDate = (date) => {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(date));
};

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile Navigation
elements.navToggle?.addEventListener('click', () => {
  elements.navMenu?.classList.toggle('active');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    elements.navMenu?.classList.remove('active');
  });
});

// Countdown Timer
function updateCountdown() {
  const weddingDate = new Date(APP_DATA.noivos.dataCasamento);
  const now = new Date();
  const difference = weddingDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    if (elements.days) elements.days.textContent = days;
    if (elements.hours) elements.hours.textContent = hours;
    if (elements.minutes) elements.minutes.textContent = minutes;
    if (elements.seconds) elements.seconds.textContent = seconds;
  } else {
    if (elements.days) elements.days.textContent = '0';
    if (elements.hours) elements.hours.textContent = '0';
    if (elements.minutes) elements.minutes.textContent = '0';
    if (elements.seconds) elements.seconds.textContent = '0';
  }
}

// Update progress bar
function updateProgress() {
  const totalArrecadado = APP_DATA.transacoes.reduce((sum, t) => sum + t.valor, 0);
  const percentage = (totalArrecadado / APP_DATA.noivos.meta) * 100;
  
  if (elements.progressFill) {
    elements.progressFill.style.width = `${Math.min(percentage, 100)}%`;
  }
  
  if (elements.progressText) {
    elements.progressText.textContent = `${formatCurrency(totalArrecadado)} de ${formatCurrency(APP_DATA.noivos.meta)}`;
  }
  
  if (elements.progressPercentage) {
    elements.progressPercentage.textContent = `${percentage.toFixed(1)}% da meta alcançada`;
  }
}

// Render presentes
function renderPresentes(presentes = APP_DATA.presentes) {
  if (!elements.presentesGrid) return;
  
  elements.presentesGrid.innerHTML = '';
  
  presentes.forEach(presente => {
    const presenteCard = document.createElement('div');
    presenteCard.className = `presente-card ${presente.comprado ? 'comprado' : ''}`;
    
    // Get category emoji
    const categoryEmojis = {
      'Casa': '🏠',
      'Lua de Mel': '🌙',
      'Eletrônicos': '📱',
      'Móveis': '🪑',
      'Experiência': '✨'
    };
    
    presenteCard.innerHTML = `
      <div class="presente-image">
        <img src="${presente.imagem}" alt="${presente.nome}" loading="lazy">
      </div>
      <div class="presente-info">
        <div class="presente-categoria">
          ${categoryEmojis[presente.categoria] || '🎁'} ${presente.categoria}
        </div>
        <h3 class="presente-nome">${presente.nome}</h3>
        <div class="presente-preco">${formatCurrency(presente.preco)}</div>
        <button class="btn-presentear" ${presente.comprado ? 'disabled' : ''} 
                onclick="openCheckoutModal(${presente.id})">
          ${presente.comprado ? '✓ Presenteado' : '💝 Presentear'}
        </button>
      </div>
    `;
    
    elements.presentesGrid.appendChild(presenteCard);
  });
}

// Filter presentes
function filterPresentes() {
  const search = elements.searchInput?.value.toLowerCase() || '';
  const category = elements.categoryFilter?.value || '';
  const priceRange = elements.priceFilter?.value || '';
  
  let filtered = APP_DATA.presentes.filter(presente => {
    const matchesSearch = presente.nome.toLowerCase().includes(search);
    const matchesCategory = !category || presente.categoria === category;
    
    let matchesPrice = true;
    if (priceRange) {
      const price = presente.preco;
      switch (priceRange) {
        case '0-500':
          matchesPrice = price <= 500;
          break;
        case '500-1000':
          matchesPrice = price > 500 && price <= 1000;
          break;
        case '1000-2000':
          matchesPrice = price > 1000 && price <= 2000;
          break;
        case '2000+':
          matchesPrice = price > 2000;
          break;
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });
  
  renderPresentes(filtered);
}

// Event listeners for filters
elements.searchInput?.addEventListener('input', filterPresentes);
elements.categoryFilter?.addEventListener('change', filterPresentes);
elements.priceFilter?.addEventListener('change', filterPresentes);

// Open checkout modal
function openCheckoutModal(presenteId) {
  const presente = APP_DATA.presentes.find(p => p.id === presenteId);
  if (!presente || presente.comprado) return;
  
  currentPresent = presente;
  
  if (elements.presentInfo) {
    elements.presentInfo.innerHTML = `
      <h4>${presente.nome}</h4>
      <div class="price">${formatCurrency(presente.preco)}</div>
    `;
  }
  
  elements.checkoutModal?.classList.remove('hidden');
}

// Close modals
elements.closeModal?.addEventListener('click', () => {
  elements.checkoutModal?.classList.add('hidden');
  currentPresent = null;
});

elements.cancelCheckout?.addEventListener('click', () => {
  elements.checkoutModal?.classList.add('hidden');
  currentPresent = null;
});

elements.closeLoginModal?.addEventListener('click', () => {
  elements.loginModal?.classList.add('hidden');
});

elements.cancelLogin?.addEventListener('click', () => {
  elements.loginModal?.classList.add('hidden');
});

elements.closeSuccessModal?.addEventListener('click', () => {
  elements.successModal?.classList.add('hidden');
});

// Handle checkout form
elements.checkoutForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (!currentPresent) return;
  
  const formData = {
    nome: elements.buyerName?.value,
    email: elements.buyerEmail?.value,
    telefone: elements.buyerPhone?.value,
    mensagem: elements.buyerMessage?.value
  };
  
  // Mark present as bought
  currentPresent.comprado = true;
  
  // Add transaction
  APP_DATA.transacoes.push({
    id: Date.now(),
    presenteId: currentPresent.id,
    presenteNome: currentPresent.nome,
    valor: currentPresent.preco,
    comprador: formData.nome,
    email: formData.email,
    telefone: formData.telefone,
    data: new Date().toISOString()
  });
  
  // Add message if provided
  if (formData.mensagem.trim()) {
    APP_DATA.mensagens.push({
      id: Date.now(),
      nome: formData.nome,
      mensagem: formData.mensagem,
      data: new Date().toISOString()
    });
  }
  
  // Close checkout modal
  elements.checkoutModal?.classList.add('hidden');
  
  // Show success modal
  elements.successModal?.classList.remove('hidden');
  
  // Reset form
  elements.checkoutForm?.reset();
  currentPresent = null;
  
  // Update displays
  updateProgress();
  renderPresentes();
  
  if (isLoggedIn) {
    updateDashboard();
  }
});

// Login functionality
elements.loginBtn?.addEventListener('click', () => {
  elements.loginModal?.classList.remove('hidden');
});

elements.loginForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const password = elements.passwordInput?.value;
  
  if (password === APP_DATA.noivos.senha) {
    isLoggedIn = true;
    elements.loginModal?.classList.add('hidden');
    showDashboard();
    elements.passwordInput.value = '';
  } else {
    alert('Senha incorreta!');
    elements.passwordInput.value = '';
  }
});

// Logout
elements.logoutBtn?.addEventListener('click', () => {
  isLoggedIn = false;
  hideDashboard();
});

// Show/Hide Dashboard
function showDashboard() {
  document.querySelector('.hero')?.style.setProperty('display', 'none');
  document.querySelector('.historia')?.style.setProperty('display', 'none');
  document.querySelector('.presentes')?.style.setProperty('display', 'none');
  elements.dashboard?.classList.remove('hidden');
  updateDashboard();
}

function hideDashboard() {
  elements.dashboard?.classList.add('hidden');
  document.querySelector('.hero')?.style.removeProperty('display');
  document.querySelector('.historia')?.style.removeProperty('display');
  document.querySelector('.presentes')?.style.removeProperty('display');
}

// Update dashboard
function updateDashboard() {
  const totalArrecadado = APP_DATA.transacoes.reduce((sum, t) => sum + t.valor, 0);
  const presentesComprados = APP_DATA.transacoes.length;
  const totalConvidados = new Set(APP_DATA.transacoes.map(t => t.email)).size;
  const percentualMeta = ((totalArrecadado / APP_DATA.noivos.meta) * 100).toFixed(1);
  
  // Update stats
  if (elements.totalArrecadado) elements.totalArrecadado.textContent = formatCurrency(totalArrecadado);
  if (elements.presentesComprados) elements.presentesComprados.textContent = presentesComprados;
  if (elements.totalConvidados) elements.totalConvidados.textContent = totalConvidados;
  if (elements.percentualMeta) elements.percentualMeta.textContent = `${percentualMeta}%`;
  
  // Update transactions list
  updateTransactionsList();
  
  // Update messages list
  updateMessagesList();
  
  // Update category chart
  updateCategoryChart();
}

// Update transactions list
function updateTransactionsList() {
  if (!elements.transactionsList) return;
  
  if (APP_DATA.transacoes.length === 0) {
    elements.transactionsList.innerHTML = '<p class="no-transactions">Nenhuma transação ainda</p>';
    return;
  }
  
  const sortedTransactions = [...APP_DATA.transacoes].sort((a, b) => new Date(b.data) - new Date(a.data));
  
  elements.transactionsList.innerHTML = sortedTransactions.map(transacao => `
    <div class="transaction-item">
      <div class="transaction-info">
        <h5>${transacao.presenteNome}</h5>
        <p>${transacao.comprador} • ${formatDate(transacao.data)}</p>
      </div>
      <div class="transaction-amount">${formatCurrency(transacao.valor)}</div>
    </div>
  `).join('');
}

// Update messages list
function updateMessagesList() {
  if (!elements.messagesList) return;
  
  if (APP_DATA.mensagens.length === 0) {
    elements.messagesList.innerHTML = '<p class="no-messages">Nenhuma mensagem ainda</p>';
    return;
  }
  
  const sortedMessages = [...APP_DATA.mensagens].sort((a, b) => new Date(b.data) - new Date(a.data));
  
  elements.messagesList.innerHTML = sortedMessages.map(mensagem => `
    <div class="message-item">
      <div class="message-header">
        <span class="message-name">${mensagem.nome}</span>
        <span class="message-date">${formatDate(mensagem.data)}</span>
      </div>
      <div class="message-text">${mensagem.mensagem}</div>
    </div>
  `).join('');
}

// Update category chart
function updateCategoryChart() {
  if (!elements.categoryChart) return;
  
  const ctx = elements.categoryChart.getContext('2d');
  
  // Calculate category data
  const categoryData = {};
  const categoryColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'];
  
  APP_DATA.transacoes.forEach(transacao => {
    const presente = APP_DATA.presentes.find(p => p.id === transacao.presenteId);
    if (presente) {
      categoryData[presente.categoria] = (categoryData[presente.categoria] || 0) + transacao.valor;
    }
  });
  
  const labels = Object.keys(categoryData);
  const data = Object.values(categoryData);
  
  // Destroy existing chart
  if (categoryChart) {
    categoryChart.destroy();
  }
  
  if (labels.length === 0) {
    // No data yet
    categoryChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Nenhum dado'],
        datasets: [{
          data: [1],
          backgroundColor: ['#f0f0f0'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
    return;
  }
  
  categoryChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: categoryColors.slice(0, labels.length),
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 20,
            usePointStyle: true,
            font: {
              size: 12
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.label + ': ' + formatCurrency(context.raw);
            }
          }
        }
      }
    }
  });
}

// Close modals when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === elements.checkoutModal) {
    elements.checkoutModal.classList.add('hidden');
    currentPresent = null;
  }
  if (e.target === elements.loginModal) {
    elements.loginModal.classList.add('hidden');
  }
  if (e.target === elements.successModal) {
    elements.successModal.classList.add('hidden');
  }
});

// Initialize application
function init() {
  // Start countdown timer
  updateCountdown();
  setInterval(updateCountdown, 1000);
  
  // Initial progress update
  updateProgress();
  
  // Initial render of presentes
  renderPresentes();
  
  console.log('Lista de Casamento - Guilherme & Lara inicializada! 💕');
}

// Start the application when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}