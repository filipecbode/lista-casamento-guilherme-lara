// ================== Dados da aplicação ==================
const APP_DATA = {
  noivos: {
    nome: "Guilherme & Lara",
    foto: "assets/casal.png",
    historia: "Nos conhecemos na faculdade há 6 anos e desde então construímos uma linda história juntos. Estamos muito felizes em celebrar esse momento especial com vocês!",
    // Horário de Brasília explícito
    dataCasamento: "2025-11-29T16:00:00-03:00",
    meta: 30000,
    senha: "guilhermelara2025"
  },
  presentes: [
    {"id":1, "nome":"Abastecer moto", "preco":80, "cotas":3, "compradas":0, "categoria":"Transporte & Logística", "imagem":"assets/gifts/01.jpg"},
    {"id":2, "nome":"Café da manhã", "preco":100, "cotas":5, "compradas":0, "categoria":"Gastronomia & Bebidas", "imagem":"assets/gifts/02.jpg"},
    {"id":3, "nome":"Almoço", "preco":120, "cotas":5, "compradas":0, "categoria":"Gastronomia & Bebidas", "imagem":"assets/gifts/03.jpg"},
    {"id":4, "nome":"Jantar", "preco":130, "cotas":5, "compradas":0, "categoria":"Gastronomia & Bebidas", "imagem":"assets/gifts/04.jpg"},
    {"id":5, "nome":"Drinks", "preco":95, "cotas":2, "compradas":0, "categoria":"Gastronomia & Bebidas", "imagem":"assets/gifts/05.jpg"},
    {"id":6, "nome":"Spa day", "preco":240, "cotas":1, "compradas":0, "categoria":"Cuidados & Bem-estar", "imagem":"assets/gifts/06.jpg"},
    {"id":7, "nome":"Ingresso de cinema", "preco":89, "cotas":1, "compradas":0, "categoria":"Experiências a Dois", "imagem":"assets/gifts/07.jpg"},
    {"id":8, "nome":"1 diária", "preco":200, "cotas":2, "compradas":0, "categoria":"Viagem & Hospedagem", "imagem":"assets/gifts/08.jpg"},
    {"id":9, "nome":"2 diárias", "preco":350, "cotas":2, "compradas":0, "categoria":"Viagem & Hospedagem", "imagem":"assets/gifts/09.jpg"},
    {"id":10, "nome":"Limpeza de pele", "preco":240, "cotas":1, "compradas":0, "categoria":"Cuidados & Bem-estar", "imagem":"assets/gifts/10.jpg"},
    {"id":11, "nome":"Cortar o cabelo do noivo", "preco":2000, "cotas":5, "compradas":0, "categoria":"Preparativos dos Noivos", "imagem":"assets/gifts/11.jpg"},
    {"id":12, "nome":"Vodka sem metanol", "preco":200, "cotas":1, "compradas":0, "categoria":"Gastronomia & Bebidas", "imagem":"assets/gifts/12.jpg"},
    {"id":13, "nome":"Vodka com metanol", "preco":250, "cotas":1, "compradas":0, "categoria":"Gastronomia & Bebidas", "imagem":"assets/gifts/13.jpg"},
    {"id":14, "nome":"Aulas de valsa", "preco":210, "cotas":1, "compradas":0, "categoria":"Experiências a Dois", "imagem":"assets/gifts/14.jpg"},
    {"id":15, "nome":"Passeio a cavalo", "preco":180, "cotas":1, "compradas":0, "categoria":"Experiências a Dois", "imagem":"assets/gifts/15.jpg"},
    {"id":16, "nome":"Passeio de jet ski", "preco":140, "cotas":1, "compradas":0, "categoria":"Experiências a Dois", "imagem":"assets/gifts/16.jpg"},
    {"id":17, "nome":"Mergulho", "preco":280, "cotas":1, "compradas":0, "categoria":"Experiências a Dois", "imagem":"assets/gifts/17.jpg"},
    {"id":18, "nome":"Ajuda antistress da noiva", "preco":500, "cotas":2, "compradas":0, "categoria":"Cuidados & Bem-estar", "imagem":"assets/gifts/18.jpg"},
    {"id":19, "nome":"Noite de fondue", "preco":190, "cotas":1, "compradas":0, "categoria":"Gastronomia & Bebidas", "imagem":"assets/gifts/19.jpg"},
    {"id":20, "nome":"Espumante no quarto", "preco":90, "cotas":1, "compradas":0, "categoria":"Viagem & Hospedagem", "imagem":"assets/gifts/20.jpg"},
    {"id":21, "nome":"Salto de paraquedas", "preco":650, "cotas":1, "compradas":0, "categoria":"Experiências a Dois", "imagem":"assets/gifts/21.jpg"},
    {"id":22, "nome":"Comprinhas", "preco":160, "cotas":5, "compradas":0, "categoria":"Extras & Lembrancinhas", "imagem":"assets/gifts/22.jpg"},
    {"id":23, "nome":"Protetor solar da noiva", "preco":120, "cotas":1, "compradas":0, "categoria":"Cuidados & Bem-estar", "imagem":"assets/gifts/23.jpg"},
    {"id":24, "nome":"Bronzeador solar do noivo", "preco":80, "cotas":1, "compradas":0, "categoria":"Cuidados & Bem-estar", "imagem":"assets/gifts/24.jpg"},
    {"id":25, "nome":"Sapato personalizado do noivo", "preco":200, "cotas":1, "compradas":0, "categoria":"Preparativos dos Noivos", "imagem":"assets/gifts/25.jpg"},
    {"id":26, "nome":"Primeira parcela da viagem", "preco":279.99, "cotas":1, "compradas":0, "categoria":"Viagem & Hospedagem", "imagem":"assets/gifts/26.jpg"},
    {"id":27, "nome":"Última parcela da viagem", "preco":279.99, "cotas":1, "compradas":0, "categoria":"Viagem & Hospedagem", "imagem":"assets/gifts/27.jpg"},
    {"id":28, "nome":"Despacho (8@) de bagagem da noiva", "preco":100, "cotas":1, "compradas":0, "categoria":"Viagem & Hospedagem", "imagem":"assets/gifts/28.jpg"},
    {"id":29, "nome":"Aula de natação da noiva", "preco":130, "cotas":2, "compradas":0, "categoria":"Cuidados & Bem-estar", "imagem":"assets/gifts/29.jpg"},
    {"id":30, "nome":"Tour completo lua de mel", "preco":1200, "cotas":1, "compradas":0, "categoria":"Viagem & Hospedagem", "imagem":"assets/gifts/30.jpg"},
    {"id":31, "nome":"Upgrade de hospedagem (lua de mel)", "preco":800, "cotas":1, "compradas":0, "categoria":"Viagem & Hospedagem", "imagem":"assets/gifts/31.jpg"}
  ],
  transacoes: [],
  mensagens: []
};

// ================== Estado/Elementos ==================
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

  shareQty: document.getElementById('shareQty'),
  sharesRemaining: document.getElementById('sharesRemaining'),
  checkoutTotal: document.getElementById('checkoutTotal'),

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

// ================== Utilitários ==================
const formatCurrency = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value || 0);
const formatDate = (date) => new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date(date));

const categoryEmojis = {
  'Gastronomia & Bebidas': '🍽️',
  'Experiências a Dois': '💞',
  'Viagem & Hospedagem': '✈️',
  'Cuidados & Bem-estar': '💆',
  'Preparativos dos Noivos': '💍',
  'Transporte & Logística': '⛽',
  'Extras & Lembrancinhas': '🎁'
};

// Smooth scroll (ignora # do login, que abre modal)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') === '#') return; // botão login usa #
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Mobile menu
elements.navToggle?.addEventListener('click', () => elements.navMenu?.classList.toggle('active'));
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => elements.navMenu?.classList.remove('active')));

// ================== Countdown ==================
function updateCountdown() {
  const weddingDate = new Date(APP_DATA.noivos.dataCasamento);
  const now = new Date();
  const diff = weddingDate - now;
  const parts = { d:0,h:0,m:0,s:0 };
  if (diff > 0) {
    parts.d = Math.floor(diff / (1000*60*60*24));
    parts.h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    parts.m = Math.floor((diff % (1000*60*60)) / (1000*60));
    parts.s = Math.floor((diff % (1000*60)) / 1000);
  }
  if (elements.days) elements.days.textContent = parts.d;
  if (elements.hours) elements.hours.textContent = parts.h;
  if (elements.minutes) elements.minutes.textContent = parts.m;
  if (elements.seconds) elements.seconds.textContent = parts.s;
}

// ================== Cotas helpers ==================
const getRemaining = (p) => Math.max(0, (p.cotas || 0) - (p.compradas || 0));
const isSoldOut   = (p) => getRemaining(p) <= 0;

// ================== Renderização de presentes ==================
function renderPresentes(presentes = APP_DATA.presentes) {
  if (!elements.presentesGrid) return;
  elements.presentesGrid.innerHTML = '';
  presentes.forEach(presente => {
    const soldOut = isSoldOut(presente);
    const card = document.createElement('div');
    card.className = `presente-card ${soldOut ? 'comprado' : ''}`;
    const emoji = categoryEmojis[presente.categoria] || '🎁';
    card.innerHTML = `
      <div class="presente-image">
        <img src="${presente.imagem}" alt="${presente.nome}" loading="lazy" onerror="this.onerror=null;this.src='assets/gifts/placeholder.jpg';" />
      </div>
      <div class="presente-info">
        <div class="presente-categoria">${emoji} ${presente.categoria}</div>
        <h3 class="presente-nome">${presente.nome}</h3>
        <div class="presente-preco">${formatCurrency(presente.preco)} <small>/ cota</small></div>
        <div class="cotas-info">Restam <strong>${getRemaining(presente)}</strong> de ${presente.cotas} cotas</div>
        <button class="btn-presentear" ${soldOut ? 'disabled' : ''} onclick="openCheckoutModal(${presente.id})">${soldOut ? 'Esgotado' : '💝 Presentear cotas'}</button>
      </div>`;
    elements.presentesGrid.appendChild(card);
  });
}

// ================== Filtros ==================
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
      switch(priceRange) {
        case '0-500':   matchesPrice = price <= 500; break;
        case '500-1000':matchesPrice = price > 500 && price <= 1000; break;
        case '1000-2000':matchesPrice = price > 1000 && price <= 2000; break;
        case '2000+':  matchesPrice = price > 2000; break;
      }
    }
    return matchesSearch && matchesCategory && matchesPrice;
  });
  renderPresentes(filtered);
}

elements.searchInput?.addEventListener('input', filterPresentes);
elements.categoryFilter?.addEventListener('change', filterPresentes);
elements.priceFilter?.addEventListener('change', filterPresentes);

// ================== Modal de checkout ==================
function openCheckoutModal(presenteId) {
  const presente = APP_DATA.presentes.find(p => p.id === presenteId);
  if (!presente || isSoldOut(presente)) return;
  currentPresent = presente;

  if (elements.presentInfo) {
    elements.presentInfo.innerHTML = `
      <h4>${presente.nome}</h4>
      <div class="price">${formatCurrency(presente.preco)} <small>/ cota</small></div>
      <div class="help-text">Valor por cota. Você poderá escolher quantas cotas deseja presentear.</div>`;
  }
  const remaining = getRemaining(presente);
  if (elements.shareQty) {
    elements.shareQty.min = 1;
    elements.shareQty.max = Math.max(1, remaining);
    elements.shareQty.value = 1;
    elements.shareQty.oninput = () => {
      const q = Math.min(Math.max(parseInt(elements.shareQty.value || '1', 10), 1), remaining);
      elements.shareQty.value = q;
      if (elements.checkoutTotal) elements.checkoutTotal.textContent = formatCurrency(q * presente.preco);
    };
    elements.shareQty.dispatchEvent(new Event('input'));
  }
  if (elements.sharesRemaining) {
    elements.sharesRemaining.textContent = `Restam ${remaining} de ${presente.cotas} cotas para este presente.`;
  }

  elements.checkoutModal?.classList.remove('hidden');
}
window.openCheckoutModal = openCheckoutModal; // usado no onclick

// Fechar modais/cancelar
elements.closeModal?.addEventListener('click', () => { elements.checkoutModal?.classList.add('hidden'); currentPresent = null; });
elements.cancelCheckout?.addEventListener('click', () => { elements.checkoutModal?.classList.add('hidden'); currentPresent = null; });
elements.closeLoginModal?.addEventListener('click', () => elements.loginModal?.classList.add('hidden'));
elements.cancelLogin?.addEventListener('click', () => elements.loginModal?.classList.add('hidden'));
elements.closeSuccessModal?.addEventListener('click', () => elements.successModal?.classList.add('hidden'));

// Submit de presente (simulação – integrações podem ser adicionadas aqui)
elements.checkoutForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!currentPresent) return;

  const formData = {
    nome: elements.buyerName?.value,
    email: elements.buyerEmail?.value,
    telefone: elements.buyerPhone?.value,
    mensagem: elements.buyerMessage?.value
  };

  const remaining = getRemaining(currentPresent);
  const qty = Math.min(Math.max(parseInt(elements.shareQty?.value || '1', 10), 1), remaining);

  // Atualiza cotas compradas
  currentPresent.compradas = (currentPresent.compradas || 0) + qty;

  // Registra transação
  APP_DATA.transacoes.push({
    id: Date.now(),
    presenteId: currentPresent.id,
    presenteNome: currentPresent.nome,
    valor: currentPresent.preco * qty,
    quantidade: qty,
    comprador: formData.nome,
    email: formData.email,
    telefone: formData.telefone,
    data: new Date().toISOString()
  });

  if ((formData.mensagem || '').trim()) {
    APP_DATA.mensagens.push({ id: Date.now() + 1, nome: formData.nome, mensagem: formData.mensagem, data: new Date().toISOString() });
  }

  // Fecha modal e reseta
  elements.checkoutModal?.classList.add('hidden');
  elements.successModal?.classList.remove('hidden');
  elements.checkoutForm?.reset();
  currentPresent = null;

  // Re-render
  renderPresentes();
  if (isLoggedIn) updateDashboard();
});

// ================== Login/Logout ==================
elements.loginBtn?.addEventListener('click', (e) => { e.preventDefault(); elements.loginModal?.classList.remove('hidden'); });
elements.loginForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const password = elements.passwordInput?.value || '';
  if (password === APP_DATA.noivos.senha) {
    isLoggedIn = true;
    elements.loginModal?.classList.add('hidden');
    showDashboard();
  } else {
    alert('Senha incorreta!');
  }
  elements.passwordInput.value = '';
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

// ================== Dashboard ==================
function updateDashboard() {
  const total = APP_DATA.transacoes.reduce((s,t) => s + t.valor, 0);
  const qtd = APP_DATA.transacoes.length;
  const convidados = new Set(APP_DATA.transacoes.map(t => t.email)).size;
  const pct = ((total / APP_DATA.noivos.meta) * 100) || 0;

  if (elements.metaInput) elements.metaInput.value = APP_DATA.noivos.meta;
  if (elements.totalArrecadado) elements.totalArrecadado.textContent = formatCurrency(total);
  if (elements.presentesComprados) elements.presentesComprados.textContent = qtd;
  if (elements.totalConvidados) elements.totalConvidados.textContent = convidados;
  if (elements.percentualMeta) elements.percentualMeta.textContent = `${pct.toFixed(1)}%`;

  updateDashboardProgress();
  updateTransactionsList();
  updateMessagesList();
  updateCategoryChart();
}

function updateDashboardProgress() {
  const total = APP_DATA.transacoes.reduce((s,t)=> s+t.valor, 0);
  const pct = (total / APP_DATA.noivos.meta) * 100;
  if (elements.progressFillDashboard) elements.progressFillDashboard.style.width = `${Math.min(pct,100)}%`;
  if (elements.progressTextDashboard) elements.progressTextDashboard.textContent = `${formatCurrency(total)} de ${formatCurrency(APP_DATA.noivos.meta)}`;
  if (elements.progressPercentageDashboard) elements.progressPercentageDashboard.textContent = `${(pct||0).toFixed(1)}%`;
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
        <h5>${t.presenteNome} ${t.quantidade ? `• ${t.quantidade} cota(s)` : ''}</h5>
        <p>${t.comprador} • ${formatDate(t.data)}</p>
      </div>
      <div class="transaction-amount">${formatCurrency(t.valor)}</div>
    </div>`).join('');
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
    </div>`).join('');
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
  categoryChart = new Chart(ctx, { type:'doughnut', data:{ labels, datasets:[{ data, backgroundColor: colors.slice(0, labels.length), borderWidth:2, borderColor:'#fff' }] }, options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'bottom', labels:{ padding:16, usePointStyle:true, font:{ size:12 } } }, tooltip:{ callbacks:{ label:(ctx)=> `${ctx.label}: ${formatCurrency(ctx.raw)}` } } } } });
}

// Fechar modais clicando fora
window.addEventListener('click', (e) => {
  if (e.target === elements.checkoutModal) { elements.checkoutModal.classList.add('hidden'); currentPresent = null; }
  if (e.target === elements.loginModal) elements.loginModal.classList.add('hidden');
  if (e.target === elements.successModal) elements.successModal.classList.add('hidden');
});

// ================== Init ==================
function init() {
  updateCountdown();
  setInterval(updateCountdown, 1000);
  renderPresentes();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
