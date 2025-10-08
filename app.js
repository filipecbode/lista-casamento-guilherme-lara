// Dados da aplicação
const APP_DATA = {
  "noivos": {
    "nome": "Guilherme & Lara",
    "foto": "assets/casal.png",
    "historia": "Nós nos conhecemos dentro de um ônibus e a conversa fluiu tão leve que o tempo voou. Guilherme criou coragem e me deu o número dele; mesmo com um friozinho na barriga, no dia seguinte eu mandei mensagem. Marcamos nosso primeiro encontro e, desde então, seguimos lado a lado — com carinho, parceria e sonhos em comum. Agora, queremos celebrar esse capítulo tão especial com vocês!",
    // Horário de Brasília explícito (UTC-03:00) para evitar variação de fuso
    "dataCasamento": "2025-11-29T16:00:00-03:00",
    "meta": 30000,
    "senha": "guilhermelara2025"
  },
  "presentes": [
    // Transporte & Logística
    {"id": 1, "nome": "Abastecer a moto", "preco": 80, "categoria": "Transporte & Logística", "imagem": "assets/gifts/01-abastecer-a-moto.jpg", "cotasTotal": 3, "cotasCompradas": 1},

    // Gastronomia & Bebidas
    {"id":  Rosada", "nome": "Café da manhã", "preco": 100, "categoria": "Gastronomia & Bebidas", "imagem": "assets/gifts/02-cafe-da-manha.jpg", "cotasTotal": 5, "cotasCompradas": 1},
    {"id": 3, "nome": "Almoço", "preco": 120, "categoria": "Gastronomia & Bebidas", "imagem": "assets/gifts/03-almoco.jpg", "cotasTotal": 5, "cotasCompradas": 1},
    {"id": 4, "nome": "Jantar", "preco": 130, "categoria": "Gastronomia & Bebidas", "imagem": "assets/gifts/04-jantar.jpg", "cotasTotal": 5, "cotasCompradas": 1},
    {"id": 5, "nome": "Drinks", "preco": 95, "categoria": "Gastronomia & Bebidas", "imagem": "assets/gifts/05-drinks.jpg", "cotasTotal": 2, "cotasCompradas": 0},
    {"id": 6, "nome": "Noite de fondue", "preco": 190, "categoria": "Gastronomia & Bebidas", "imagem": "assets/gifts/06-noite-de-fondue.jpg", "cotasTotal": 1, "cotasCompradas": 0},
    {"id": 7, "nome": "Espumante no quarto", "preco": 90, "categoria": "Gastronomia & Bebidas", "imagem": "assets/gifts/07-espumante-no-quarto.jpg", "cotasTotal": 1, "cotasCompradas": 0},
    {"id": 8, "nome": "Vodka sem metanol", "preco": 200, "categoria": "Gastronomia & Bebidas", "imagem": "assets/gifts/vodka-sem-metanol.jpg", "cotasTotal": 1, "cotasCompradas": 0},
    {"id": 9, "nome": "Vodka com metanol", "preco": 250, "categoria": "Gastronomia & Bebidas", "imagem": "assets/gifts/vodka-com-metanol.jpg", "cotasTotal": 1, "cotasCompradas": 0},

    // Experiências a Dois
    {"id": 10, "nome": "Ingresso de cinema", "preco": 89, "categoria": "Experiências a Dois", "imagem": "assets/gifts/09-ingresso-de-cinema.jpg", "cotasTotal": 1, "cotasCompradas": 0},
    {"id": 11, "nome": "Aulas de valsa", "preco": 210, "categoria": "Experiências a Dois", "imagem": "assets/gifts/10-aulas-de-valsa.jpg", "cotasTotal": 1, "cotasCompradas": 0},
    {"id": 12, "nome": "Passeio a cavalo", "preco": 180, "categoria": "Experiências a Dois", "imagem": "assets/gifts/11-passeio-a-cavalo.jpg", "cotasTotal": 1, "cotasCompradas": 0},
    {"id": 13, "nome": "Passeio de jet ski", "preco": 140, "categoria": "Experiências a Dois", "imagem": "assets/gifts/12-passeio-de-jet-ski.jpg", "cotasTotal": 1, "cotasCompradas": 0},
    {"id": 14, "nome": "Mergulho", "preco": 280, "categoria": "Experiências a Dois", "imagem": "assets/gifts/13-mergulho.jpg", "cotasTotal": 1, "cotasCompradas": 0},
    {"id": 15, "nome": "Salto de paraquedas", "preco": 650, "categoria": "Experiências a Dois", "imagem": "assets/gifts/14-salto-de-paraquedas.jpg", "cotasTotal": 1, "cotasCompradas": 0},

    // Viagem & Hospedagem
    {"id": 16, "nome": "1 diária", "preco": 200, "categoria": "Viagem & Hospedagem", "imagem": "assets/gifts/15-1-diaria.jpg", "cotasTotal": 2, "cotasCompradas": 0},
    {"id": 17, "nome": "2 diárias", "preco": 350, "categoria": "Viagem & Hospedagem", "imagem": "assets/gifts/16-2-diarias.jpg", "cotasTotal": 2, "cotasCompradas": 0},
    {"id": 18, "nome": "Primeira parcela da viagem", "preco": 279.99, "categoria": "Viagem & Hospedagem", "imagem": "assets/gifts/17-primeira-parcela-da-viagem.jpg", "cotasTotal": 1, "cotasCompradas": 0},
    {"id": 19, "nome": "Última parcela da viagem", "preco": 279.99, "categoria": "Viagem & Hospedagem", "imagem": "assets/gifts/18-ultima-parcela-da-viagem.jpg", "cotasTotal": 1, "cotasCompradas": 0},
    {"id": 20, "nome": "Despacho (8kg de peso) de bagagem da noiva", "preco": 100, "categoria": "Viagem & Hospedagem", "imagem": "assets/gifts/19-despacho-8-de-peso-de-bagagem-da-noiva.jpg", "cotasTotal": 1, "cotasCompradas": 0},
    {"id": 21, "nome": "Tour completo lua de mel", "preco": 1200, "categoria": "Viagem & Hospedagem", "imagem": "assets/gifts/tour-completo-lua-de-mel.jpg", "cotasTotal": 1, "cotasCompradas": 0},
    {"id": 22, "nome": "Upgrade de hospedagem lua de mel", "preco": 800, "categoria": "Viagem & Hospedagem", "imagem": "assets/gifts/upgrade-de-hospedagem-lua-de-mel.jpg", "cotasTotal": 1, "cotasCompradas": 0},

    // Cuidados & Bem-estar
    {"id": 23, "nome": "Spa day", "preco": 240, "categoria": "Cuidados & Bem-estar", "imagem": "assets/gifts/20-spa-day.jpg", "cotasTotal": 1, "cotasCompradas": 0},
    {"id": 24, "nome": "Limpeza de pele", "preco": 240, "categoria": "Cuidados & Bem-estar", "imagem": "assets/gifts/21-limpeza-de-pele.jpg", "cotasTotal": 1, "cotasCompradas": 0},
    {"id": 25, "nome": "Ajuda anti-stress da noiva", "preco": 500, "categoria": "Cuidados & Bem-estar", "imagem": "assets/gifts/22-ajuda-anti-stress-da-noiva.jpg", "cotasTotal": 2, "cotasCompradas": 0},
    {"id": 26, "nome": "Protetor solar da noiva", "preco": 120, "categoria": "Cuidados & Bem-estar", "imagem": "assets/gifts/23-protetor-solar-da-noiva.jpg", "cotasTotal": 1, "cotasCompradas": 0},
    {"id": 27, "nome": "Bronzeador solar do noivo", "preco": 80, "categoria": "Cuidados & Bem-estar", "imagem": "assets/gifts/24-bronzeador-solar-do-noivo.jpg", "cotasTotal": 1, "cotasCompradas": 0},
    {"id": 28, "nome": "Aula de natação da noiva", "preco": 130, "categoria": "Cuidados & Bem-estar", "imagem": "assets/gifts/25-aula-de-natacao-da-noiva.jpg", "cotasTotal": 2, "cotasCompradas": 0},

    // Preparativos dos Noivos
    {"id": 29, "nome": "Cortar o cabelo do noivo", "preco": 8000, "categoria": "Preparativos dos Noivos", "imagem": "assets/gifts/26-cortar-o-cabelo-do-noivo.jpg", "cotasTotal": 4, "cotasCompradas": 1},
    {"id": 30, "nome": "Sapato personalizado do noivo", "preco": 200, "categoria": "Preparativos dos Noivos", "imagem": "assets/gifts/27-sapato-personalizado-do-noivo.jpg", "cotasTotal": 1, "cotasCompradas": 0},

    // Extras & Lembrancinhas
    {"id": 31, "nome": "Comprinhas", "preco": 160, "categoria": "Extras & Lembrancinhas", "imagem": "assets/gifts/28-comprinhas.jpg", "cotasTotal": 5, "cotasCompradas": 1}
  ],
  "transacoes": [],
  "mensagens": []
};

// Estado e elementos
let isLoggedIn = false;
let currentPresent = null;
let categoryChart = null;

const elements = {
  navToggle: document.getElementById('navToggle'),
  navMenu: document.getElementById('navMenu'),
  loginBtn: document.getElementById('loginBtn'),
  countdown: document.getElementById('countdown'),
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
  progressFillDashboard: document.getElementById('progressFillDashboard'),
  progressTextDashboard: document.getElementById('progressTextDashboard'),
  progressPercentageDashboard: document.getElementById('progressPercentageDashboard'),
  metaInput: document.getElementById('metaInput'),
  saveMeta: document.getElementById('saveMeta'),
  searchInput: document.getElementById('searchInput'),
  categoryFilter: document.getElementById('categoryFilter'),
  priceFilter: document.getElementById('priceFilter'),
  presentesGrid: document.getElementById('presentesGrid'),
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
  dashboard: document.getElementById('dashboard'),
  logoutBtn: document.getElementById('logoutBtn'),
  totalArrecadado: document.getElementById('totalArrecadado'),
  presentesComprados: document.getElementById('presentesComprados'),
  totalConvidados: document.getElementById('totalConvidados'),
  percentualMeta: document.getElementById('percentualMeta'),
  categoryChart: document.getElementById('categoryChart'),
  transactionsList: document.getElementById('transactionsList'),
  messagesList: document.getElementById('messagesList'),
  buyerName: document.getElementById('buyerName'),
  buyerEmail: document.getElementById('buyerEmail'),
  buyerPhone: document.getElementById('buyerPhone'),
  buyerMessage: document.getElementById('buyerMessage')
};

// Utilitários
const formatCurrency = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
const formatDate = (date) => new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date(date));

// Emojis por categoria
const categoryEmojis = {
  'Gastronomia & Bebidas': '🍽️',
  'Experiências a Dois': '💞',
  'Viagem & Hospedagem': '✈️',
  'Cuidados & Bem-estar': '💆',
  'Preparativos dos Noivos': '💍',
  'Transporte & Logística': '⛽',
  'Extras & Lembrancinhas': '🎁'
};

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') === '#') return; // login abre modal
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Mobile Navigation
elements.navToggle?.addEventListener('click', () => elements.navMenu?.classList.toggle('active'));
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => elements.navMenu?.classList.remove('active')));

// Countdown com fuso explícito (-03:00)
function updateCountdown() {
  const weddingDate = new Date(APP_DATA.noivos.dataCasamento);
  const now = new Date();
  const diff = weddingDate - now;
  if (diff > 0) {
    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((diff % (1000*60)) / 1000);
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

// Atualiza barra de progresso (dashboard)
function updateDashboardProgress() {
  const total = APP_DATA.transacoes.reduce((s, t) => s + t.valor, 0);
  const pct = (total / APP_DATA.noivos.meta) * 100;
  if (elements.progressFillDashboard) elements.progressFillDashboard.style.width = `${Math.min(pct,100)}%`;
  if (elements.progressTextDashboard) elements.progressTextDashboard.textContent = `${formatCurrency(total)} de ${formatCurrency(APP_DATA.noivos.meta)}`;
  if (elements.progressPercentageDashboard) elements.progressPercentageDashboard.textContent = `${pct.toFixed(1)}% da meta alcançada`;
}

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

// Renderização da lista de presentes
function renderPresentes(presentes = APP_DATA.presentes) {
  if (!elements.presentesGrid) return;
  elements.presentesGrid.innerHTML = '';
  presentes.forEach(presente => {
    const cotasDisponiveis = presente.cotasTotal - presente.cotasCompradas;
    const isEsgotado = cotasDisponiveis <= 0;
    const card = document.createElement('div');
    card.className = `presente-card ${isEsgotado ? 'esgotado' : ''}`;
    const emoji = categoryEmojis[presente.categoria] || '🎁';
    card.innerHTML = `
      <div class="presente-image">
        <img src="${presente.imagem}" alt="${presente.nome}" loading="lazy" onerror="this.onerror=null;this.src='assets/gifts/placeholder.jpg';" />
      </div>
      <div class="presente-info">
        <div class="presente-categoria">${emoji} ${presente.categoria}</div>
        <h3 class="presente-nome">${presente.nome}</h3>
        <div class="presente-preco">${formatCurrency(presente.preco)}</div>
        <div class="presente-cotas">Restam ${cotasDisponiveis} de ${presente.cotasTotal} cotas</div>
        <button class="btn-presentear" ${isEsgotado ? 'disabled' : ''} onclick="openCheckoutModal(${presente.id})">${isEsgotado ? 'Esgotado' : '💝 Presentear'}</button>
      </div>
    `;
    elements.presentesGrid.appendChild(card);
  });
}

// Filtros
function filterPresentes() {
  const search = (elements.searchInput?.value || '').toLowerCase();
  const category = elements.categoryFilter?.value || '';
  const priceRange = elements.priceFilter?.value || '';
  let filtered = APP_DATA.presentes.filter(p => {
    const matchesSearch = p.nome.toLowerCase().includes(search);
    const matchesCategory = !category || p.categoria === category;
    let matchesPrice = true;
    if (priceRange) {
      const price = p.preco;
      switch (priceRange) {
        case '0-500': matchesPrice = price <= 500; break;
        case '500-1000': matchesPrice = price > 500 && price <= 1000; break;
        case '1000-2000': matchesPrice = price > 1000 && price <= 2000; break;
        case '2000+': matchesPrice = price > 2000; break;
      }
    }
    return matchesSearch && matchesCategory && matchesPrice;
  });
  renderPresentes(filtered);
}

elements.searchInput?.addEventListener('input', filterPresentes);
elements.categoryFilter?.addEventListener('change', filterPresentes);
elements.priceFilter?.addEventListener('change', filterPresentes);

// Modal de checkout
function openCheckoutModal(presenteId) {
  const presente = APP_DATA.presentes.find(p => p.id === presenteId);
  if (!presente || (presente.cotasTotal - presente.cotasCompradas) <= 0) return;
  currentPresent = presente;
  if (elements.presentInfo) {
    elements.presentInfo.innerHTML = `<h4>${presente.nome}</h4><div class="price">${formatCurrency(presente.preco)}</div>`;
  }
  elements.checkoutModal?.classList.remove('hidden');
}
window.openCheckoutModal = openCheckoutModal; // para uso no onclick

elements.closeModal?.addEventListener('click', () => { elements.checkoutModal?.classList.add('hidden'); currentPresent = null; });
elements.cancelCheckout?.addEventListener('click', () => { elements.checkoutModal?.classList.add('hidden'); currentPresent = null; });
elements.closeLoginModal?.addEventListener('click', () => elements.loginModal?.classList.add('hidden'));
elements.cancelLogin?.addEventListener('click', () => elements.loginModal?.classList.add('hidden'));
elements.closeSuccessModal?.addEventListener('click', () => elements.successModal?.classList.add('hidden'));

// Submit do presente (placeholder, futura integração Mercado Pago)
elements.checkoutForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!currentPresent) return;

  const formData = {
    nome: elements.buyerName?.value,
    email: elements.buyerEmail?.value,
    telefone: elements.buyerPhone?.value,
    mensagem: elements.buyerMessage?.value
  };

  // Aqui entraremos com a criação da preferência de pagamento do Mercado Pago
  // e redirecionamento para o Checkout (ou exibição do QR Pix). Por enquanto,
  // seguimos com o comportamento de simulação abaixo.

  currentPresent.cotasCompradas++;
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
  if ((formData.mensagem || '').trim()) {
    APP_DATA.mensagens.push({ id: Date.now(), nome: formData.nome, mensagem: formData.mensagem, data: new Date().toISOString() });
  }

  elements.checkoutModal?.classList.add('hidden');
  elements.successModal?.classList.remove('hidden');
  elements.checkoutForm?.reset();
  currentPresent = null;
  renderPresentes();
  if (isLoggedIn) updateDashboard();
});

// Login/logout
elements.loginBtn?.addEventListener('click', (e) => { e.preventDefault(); elements.loginModal?.classList.remove('hidden'); });
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

elements.logoutBtn?.addEventListener('click', () => { isLoggedIn = false; hideDashboard(); });

function showDashboard() {
  document.querySelector('.hero')?.style.setProperty('display','none');
  document.querySelector('.historia')?.style.setProperty('display','none');
  document.querySelector('.presentes')?.style.setProperty('display','none');
  elements.dashboard?.classList.remove('hidden');
  updateDashboard();
}
function hideDashboard() {
  elements.dashboard?.classList.add('hidden');
  document.querySelector('.hero')?.style.removeProperty('display');
  document.querySelector('.historia')?.style.removeProperty('display');
  document.querySelector('.presentes')?.style.removeProperty('display');
}

// Dashboard helpers
function updateDashboard() {
  const total = APP_DATA.transacoes.reduce((s, t) => s + t.valor, 0);
  const qtd = APP_DATA.transacoes.length;
  const convidados = new Set(APP_DATA.transacoes.map(t => t.email)).size;
  const pct = ((total / APP_DATA.noivos.meta) * 100).toFixed(1);

  if (elements.metaInput) elements.metaInput.value = APP_DATA.noivos.meta;
  if (elements.totalArrecadado) elements.totalArrecadado.textContent = formatCurrency(total);
  if (elements.presentesComprados) elements.presentesComprados.textContent = qtd;
  if (elements.totalConvidados) elements.totalConvidados.textContent = convidados;
  if (elements.percentualMeta) elements.percentualMeta.textContent = `${pct}%`;

  updateDashboardProgress();
  updateTransactionsList();
  updateMessagesList();
  updateCategoryChart();
}

function updateTransactionsList() {
  if (!elements.transactionsList) return;
  if (APP_DATA.transacoes.length === 0) {
    elements.transactionsList.innerHTML = '<p class="no-transactions">Nenhuma transação ainda</p>';
    return;
  }
  const sorted = [...APP_DATA.transacoes].sort((a,b) => new Date(b.data) - new Date(a.data));
  elements.transactionsList.innerHTML = sorted.map(t => `
    <div class="transaction-item">
      <div class="transaction-info">
        <h5>${t.presenteNome}</h5>
        <p>${t.comprador} • ${formatDate(t.data)}</p>
      </div>
      <div class="transaction-amount">${formatCurrency(t.valor)}</div>
    </div>
  `).join('');
}

function updateMessagesList() {
  if (!elements.messagesList) return;
  if (APP_DATA.mensagens.length === 0) {
    elements.messagesList.innerHTML = '<p class="no-messages">Nenhuma mensagem ainda</p>';
    return;
  }
  const sorted = [...APP_DATA.mensagens].sort((a,b) => new Date(b.data) - new Date(a.data));
  elements.messagesList.innerHTML = sorted.map(m => `
    <div class="message-item">
      <div class="message-header"><span class="message-name">${m.nome}</span><span class="message-date">${formatDate(m.data)}</span></div>
      <div class="message-text">${m.mensagem}</div>
    </div>
  `).join('');
}

function updateCategoryChart() {
  if (!elements.categoryChart) return;
  const ctx = elements.categoryChart.getContext('2d');
  const categoryData = {};
  const colors = ['#1FB8CD','#FFC185','#B4413C','#ECEBD5','#5D878F','#E91E63','#8E24AA'];
  APP_DATA.transacoes.forEach(t => {
    const p = APP_DATA.presentes.find(x => x.id === t.presenteId);
    if (p) categoryData[p.categoria] = (categoryData[p.categoria] || 0) + t.valor;
  });
  const labels = Object.keys(categoryData);
  const data = Object.values(categoryData);
  if (categoryChart) categoryChart.destroy();
  if (labels.length === 0) {
    categoryChart = new Chart(ctx, { type:'doughnut', data:{ labels:['Nenhum dado'], datasets:[{ data:[1], backgroundColor:['#f0f0f0'], borderWidth:0 }] }, options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ display:false } } } });
    return;
  }
  categoryChart = new Chart(ctx, { type:'doughnut', data:{ labels, datasets:[{ data, backgroundColor: colors.slice(0, labels.length), borderWidth:2, borderColor:'#fff' }] }, options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'bottom', labels:{ padding:20, usePointStyle:true, font:{ size:12 } } }, tooltip:{ callbacks:{ label:(ctx)=> `${ctx.label}: ${formatCurrency(ctx.raw)}` } } } } });
}

// Clique fora fecha modais
window.addEventListener('click', (e) => {
  if (e.target === elements.checkoutModal) { elements.checkoutModal.classList.add('hidden'); currentPresent = null; }
  if (e.target === elements.loginModal) elements.loginModal.classList.add('hidden');
  if (e.target === elements.successModal) elements.successModal.classList.add('hidden');
});

function init() {
  updateCountdown();
  setInterval(updateCountdown, 1000);
  renderPresentes();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();