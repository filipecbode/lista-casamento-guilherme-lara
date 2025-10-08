// Dados da aplicação
const APP_DATA = {
  "noivos": {
    "nome": "Guilherme & Lara",
    "foto": "casal.png",
    "historia": "Nós nos conhecemos dentro de um ônibus, começamos a conversar e algo especial aconteceu. Guilherme teve coragem e me deu seu número, e mesmo com um pouco de receio, no dia seguinte eu mandei mensagem. Marcamos de nos ver e desde então estamos juntos, vivendo uma história cheia de amor e cumplicidade. Agora, queremos celebrar esse capítulo tão importante com vocês!",
    "dataCasamento": "2025-11-29T16:00:00",
    "meta": 30000,
    "senha": "guilhermelara2025"
  },
  "presentes": [{"id": 1, "nome": "Abastecer moto", "preco": 80, "categoria": "Transporte & Logística", "imagem": "https://source.unsplash.com/featured/300x300/?motorcycle,fuel", "comprado": false}, {"id": 2, "nome": "Café da manhã", "preco": 100, "categoria": "Gastronomia & Bebidas", "imagem": "https://source.unsplash.com/featured/300x300/?breakfast", "comprado": false}, {"id": 3, "nome": "Almoço", "preco": 120, "categoria": "Gastronomia & Bebidas", "imagem": "https://source.unsplash.com/featured/300x300/?lunch", "comprado": false}, {"id": 4, "nome": "Jantar", "preco": 130, "categoria": "Gastronomia & Bebidas", "imagem": "https://source.unsplash.com/featured/300x300/?dinner", "comprado": false}, {"id": 5, "nome": "Drinks", "preco": 95, "categoria": "Gastronomia & Bebidas", "imagem": "https://source.unsplash.com/featured/300x300/?cocktails", "comprado": false}, {"id": 6, "nome": "Spa day", "preco": 240, "categoria": "Cuidados & Bem-estar", "imagem": "https://source.unsplash.com/featured/300x300/?spa", "comprado": false}, {"id": 7, "nome": "Ingresso cinema", "preco": 89, "categoria": "Experiências a Dois", "imagem": "https://source.unsplash.com/featured/300x300/?cinema", "comprado": false}, {"id": 8, "nome": "1 diárias", "preco": 200, "categoria": "Viagem & Hospedagem", "imagem": "https://source.unsplash.com/featured/300x300/?hotel", "comprado": false}, {"id": 9, "nome": "2 diárias", "preco": 350, "categoria": "Viagem & Hospedagem", "imagem": "https://source.unsplash.com/featured/300x300/?resort", "comprado": false}, {"id": 10, "nome": "Limpeza de pele", "preco": 240, "categoria": "Cuidados & Bem-estar", "imagem": "https://source.unsplash.com/featured/300x300/?skincare", "comprado": false}, {"id": 11, "nome": "Cortar o cabelo do noivo", "preco": 8000, "categoria": "Preparativos dos Noivos", "imagem": "https://source.unsplash.com/featured/300x300/?barbershop", "comprado": false}, {"id": 12, "nome": "Vodka sem metanol", "preco": 200, "categoria": "Gastronomia & Bebidas", "imagem": "https://source.unsplash.com/featured/300x300/?vodka", "comprado": false}, {"id": 13, "nome": "Vodka com metanol", "preco": 250, "categoria": "Gastronomia & Bebidas", "imagem": "https://source.unsplash.com/featured/300x300/?vodka", "comprado": false}, {"id": 14, "nome": "Aulas de valsa", "preco": 210, "categoria": "Experiências a Dois", "imagem": "https://source.unsplash.com/featured/300x300/?dance", "comprado": false}, {"id": 15, "nome": "Passeio a cavalo", "preco": 180, "categoria": "Experiências a Dois", "imagem": "https://source.unsplash.com/featured/300x300/?horse", "comprado": false}, {"id": 16, "nome": "Passeio de Jet sky", "preco": 140, "categoria": "Experiências a Dois", "imagem": "https://source.unsplash.com/featured/300x300/?jetski", "comprado": false}, {"id": 17, "nome": "Mergulho", "preco": 280, "categoria": "Experiências a Dois", "imagem": "https://source.unsplash.com/featured/300x300/?diving", "comprado": false}, {"id": 18, "nome": "Ajuda antistress da noiva", "preco": 500, "categoria": "Cuidados & Bem-estar", "imagem": "https://source.unsplash.com/featured/300x300/?meditation", "comprado": false}, {"id": 19, "nome": "Noite de Fondue", "preco": 190, "categoria": "Gastronomia & Bebidas", "imagem": "https://source.unsplash.com/featured/300x300/?fondue", "comprado": false}, {"id": 20, "nome": "Espumante no quarto", "preco": 90, "categoria": "Gastronomia & Bebidas", "imagem": "https://source.unsplash.com/featured/300x300/?champagne", "comprado": false}, {"id": 21, "nome": "Salto de paraqueadas", "preco": 650, "categoria": "Experiências a Dois", "imagem": "https://source.unsplash.com/featured/300x300/?skydiving", "comprado": false}, {"id": 22, "nome": "Comprinhas", "preco": 160, "categoria": "Extras & Lembrancinhas", "imagem": "https://source.unsplash.com/featured/300x300/?shopping", "comprado": false}, {"id": 23, "nome": "Protetor solar da noiva", "preco": 120, "categoria": "Cuidados & Bem-estar", "imagem": "https://source.unsplash.com/featured/300x300/?sunscreen", "comprado": false}, {"id": 24, "nome": "Bronzeador solar do noivo", "preco": 80, "categoria": "Cuidados & Bem-estar", "imagem": "https://source.unsplash.com/featured/300x300/?beach", "comprado": false}, {"id": 25, "nome": "Sapato personalizado do noivo", "preco": 200, "categoria": "Preparativos dos Noivos", "imagem": "https://source.unsplash.com/featured/300x300/?shoes", "comprado": false}, {"id": 26, "nome": "Primeira parcela da viagem", "preco": 279.99, "categoria": "Viagem & Hospedagem", "imagem": "https://source.unsplash.com/featured/300x300/?airplane", "comprado": false}, {"id": 27, "nome": "Última parcela da viagem", "preco": 279.99, "categoria": "Viagem & Hospedagem", "imagem": "https://source.unsplash.com/featured/300x300/?suitcase", "comprado": false}, {"id": 28, "nome": "Despacho (8@ de peso) de bagagem da noiva", "preco": 100, "categoria": "Viagem & Hospedagem", "imagem": "https://source.unsplash.com/featured/300x300/?luggage", "comprado": false}, {"id": 29, "nome": "Aula de natação da noiva", "preco": 130, "categoria": "Cuidados & Bem-estar", "imagem": "https://source.unsplash.com/featured/300x300/?swimming", "comprado": false}],
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
  
  // Dashboard Progress (Only in dashboard)
  progressFillDashboard: document.getElementById('progressFillDashboard'),
  progressTextDashboard: document.getElementById('progressTextDashboard'),
  progressPercentageDashboard: document.getElementById('progressPercentageDashboard'),
  
  // Meta editing
  metaInput: document.getElementById('metaInput'),
  saveMeta: document.getElementById('saveMeta'),
  
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

// Update dashboard progress bar (Only visible in dashboard)
function updateDashboardProgress() {
  const totalArrecadado = APP_DATA.transacoes.reduce((sum, t) => sum + t.valor, 0);
  const percentage = (totalArrecadado / APP_DATA.noivos.meta) * 100;
  
  if (elements.progressFillDashboard) {
    elements.progressFillDashboard.style.width = `${Math.min(percentage, 100)}%`;
  }
  
  if (elements.progressTextDashboard) {
    elements.progressTextDashboard.textContent = `${formatCurrency(totalArrecadado)} de ${formatCurrency(APP_DATA.noivos.meta)}`;
  }
  
  if (elements.progressPercentageDashboard) {
    elements.progressPercentageDashboard.textContent = `${percentage.toFixed(1)}% da meta alcançada`;
  }
}

// Meta editing functionality
elements.saveMeta?.addEventListener('click', () => {
  const newMeta = parseFloat(elements.metaInput?.value);
  
  if (newMeta && newMeta > 0) {
    APP_DATA.noivos.meta = newMeta;
    updateDashboard();
    alert('Meta atualizada com sucesso!');
  } else {
    alert('Por favor, insira um valor válido para a meta.');
  }
});

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
  
  // Re-render presentes to show updated status
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
  
  // Update meta input
  if (elements.metaInput) {
    elements.metaInput.value = APP_DATA.noivos.meta;
  }
  
  // Update stats
  if (elements.totalArrecadado) elements.totalArrecadado.textContent = formatCurrency(totalArrecadado);
  if (elements.presentesComprados) elements.presentesComprados.textContent = presentesComprados;
  if (elements.totalConvidados) elements.totalConvidados.textContent = totalConvidados;
  if (elements.percentualMeta) elements.percentualMeta.textContent = `${percentualMeta}%`;
  
  // Update dashboard progress
  updateDashboardProgress();
  
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