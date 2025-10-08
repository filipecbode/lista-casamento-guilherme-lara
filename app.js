// Frontend logic using backend API (Neon via Vercel Functions)
const API = {
  gifts: '/api/gifts',
  transactions: '/api/transactions',
  meta: '/api/meta',
  dashboard: '/api/dashboard'
};

const APP_STATE = {
  gifts: [],
  meta: { goal: 30000 },
  noivos: {
    dataCasamento: '2025-11-29T16:00:00-03:00',
    senha: 'guilhermelara2025'
  }
};

// DOM shortcuts
const qs = (s) => document.querySelector(s);
const qsa = (s) => Array.from(document.querySelectorAll(s));

const elements = {
  navToggle: qs('#navToggle'),
  navMenu: qs('#navMenu'),
  loginBtn: qs('#loginBtn'),
  days: qs('#days'), hours: qs('#hours'), minutes: qs('#minutes'), seconds: qs('#seconds'),
  searchInput: qs('#searchInput'), categoryFilter: qs('#categoryFilter'), priceFilter: qs('#priceFilter'),
  presentesGrid: qs('#presentesGrid'),
  checkoutModal: qs('#checkoutModal'), closeModal: qs('#closeModal'), cancelCheckout: qs('#cancelCheckout'),
  presentInfo: qs('#presentInfo'), checkoutForm: qs('#checkoutForm'),
  buyerName: qs('#buyerName'), buyerEmail: qs('#buyerEmail'), buyerPhone: qs('#buyerPhone'), buyerMessage: qs('#buyerMessage'),
  loginModal: qs('#loginModal'), closeLoginModal: qs('#closeLoginModal'), loginForm: qs('#loginForm'), passwordInput: qs('#passwordInput'), cancelLogin: qs('#cancelLogin'),
  successModal: qs('#successModal'), closeSuccessModal: qs('#closeSuccessModal'),
  dashboard: qs('#dashboard'), logoutBtn: qs('#logoutBtn'),
  progressFillDashboard: qs('#progressFillDashboard'), progressTextDashboard: qs('#progressTextDashboard'), progressPercentageDashboard: qs('#progressPercentageDashboard'),
  metaInput: qs('#metaInput'), saveMeta: qs('#saveMeta'),
  totalArrecadado: qs('#totalArrecadado'), presentesComprados: qs('#presentesComprados'), totalConvidados: qs('#totalConvidados'), percentualMeta: qs('#percentualMeta'),
  categoryChartCanvas: qs('#categoryChart'), transactionsList: qs('#transactionsList'), messagesList: qs('#messagesList')
};

let currentPresent = null;
let categoryChart = null;

const fmtBRL = (v) => new Intl.NumberFormat('pt-BR', { style:'currency', currency:'BRL' }).format(v);

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

// ----------- API helpers -----------
async function apiGet(url){ const r = await fetch(url); if(!r.ok) throw new Error('GET failed'); return r.json(); }
async function apiPost(url, body){ const r = await fetch(url,{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)}); if(!r.ok) throw new Error('POST failed'); return r.json(); }
async function apiPut(url, body){ const r = await fetch(url,{method:'PUT', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)}); if(!r.ok) throw new Error('PUT failed'); return r.json(); }

// ----------- Countdown -----------
function updateCountdown(){
  const target = new Date(APP_STATE.noivos.dataCasamento);
  const now = new Date();
  const diff = target - now;
  const set = (el,v)=>{ if(el) el.textContent = v; };
  if(diff>0){
    set(elements.days, Math.floor(diff/(1000*60*60*24)));
    set(elements.hours, Math.floor((diff%(1000*60*60*24))/(1000*60*60)) );
    set(elements.minutes, Math.floor((diff%(1000*60*60))/(1000*60)) );
    set(elements.seconds, Math.floor((diff%(1000*60))/1000) );
  } else { set(elements.days,0); set(elements.hours,0); set(elements.minutes,0); set(elements.seconds,0); }
}

// ----------- Render presentes -----------
function renderPresentes(items = APP_STATE.gifts){
  const grid = elements.presentesGrid; if(!grid) return;
  grid.innerHTML = '';
  items.forEach(g => {
    const card = document.createElement('div');
    card.className = `presente-card ${g.purchased ? 'comprado' : ''}`;
    const emoji = categoryEmojis[g.category] || '🎁';
    card.innerHTML = `
      <div class="presente-image"><img src="${g.image}" alt="${g.name}" loading="lazy"></div>
      <div class="presente-info">
        <div class="presente-categoria">${emoji} ${g.category}</div>
        <h3 class="presente-nome">${g.name}</h3>
        <div class="presente-preco">${fmtBRL(g.price)}</div>
        <button class="btn-presentear" ${g.purchased ? 'disabled' : ''}>${g.purchased ? '✓ Presenteado' : '💝 Presentear'}</button>
      </div>`;
    card.querySelector('button').addEventListener('click', ()=> openCheckoutModal(g));
    grid.appendChild(card);
  });
}

function filterPresentes(){
  const q = (elements.searchInput?.value || '').toLowerCase();
  const cat = elements.categoryFilter?.value || '';
  const priceRange = elements.priceFilter?.value || '';
  let filtered = APP_STATE.gifts.filter((g)=>{
    const byText = (g.name + ' ' + g.category).toLowerCase().includes(q);
    const byCat = !cat || g.category === cat;
    let byPrice = true; const price = Number(g.price);
    switch(priceRange){
      case '0-100': byPrice = price <= 100; break;
      case '101-250': byPrice = price > 100 && price <= 250; break;
      case '251-500': byPrice = price > 250 && price <= 500; break;
      case '501+': byPrice = price > 500; break;
    }
    return byText && byCat && byPrice;
  });
  renderPresentes(filtered);
}

// ----------- Modal fluxo (sem pagamento ainda) -----------
function openCheckoutModal(g){
  currentPresent = g;
  elements.presentInfo.innerHTML = `<h4>${g.name}</h4><div class="price">${fmtBRL(g.price)}</div>`;
  elements.checkoutModal.classList.remove('hidden');
}

function closeCheckout(){ elements.checkoutModal.classList.add('hidden'); currentPresent = null; }

async function submitCheckout(e){
  e.preventDefault(); if(!currentPresent) return;
  const body = {
    giftId: currentPresent.id,
    buyerName: elements.buyerName.value,
    buyerEmail: elements.buyerEmail.value,
    buyerPhone: elements.buyerPhone.value,
    message: elements.buyerMessage.value
  };
  try{
    await apiPost(API.transactions, body); // salva no banco e marca presente comprado
    elements.checkoutForm.reset(); closeCheckout();
    elements.successModal.classList.remove('hidden');
    await refreshData();
    if (isLoggedIn) await loadDashboard();
  }catch(err){
    alert('Não foi possível registrar o presente. Tente novamente.');
  }
}

function closeSuccess(){ elements.successModal.classList.add('hidden'); }

// ----------- Login simples para dashboard -----------
let isLoggedIn = false;
function showDashboard(){
  document.querySelector('.hero')?.style.setProperty('display','none');
  document.querySelector('.historia')?.style.setProperty('display','none');
  document.querySelector('.presentes')?.style.setProperty('display','none');
  elements.dashboard?.classList.remove('hidden');
  loadDashboard();
}
function hideDashboard(){
  elements.dashboard?.classList.add('hidden');
  document.querySelector('.hero')?.style.removeProperty('display');
  document.querySelector('.historia')?.style.removeProperty('display');
  document.querySelector('.presentes')?.style.removeProperty('display');
}

async function loadDashboard(){
  const data = await apiGet(API.dashboard);
  elements.metaInput.value = data.goal;
  if(elements.totalArrecadado) elements.totalArrecadado.textContent = fmtBRL(data.totalArrecadado);
  if(elements.presentesComprados) elements.presentesComprados.textContent = data.presentesComprados;
  if(elements.totalConvidados) elements.totalConvidados.textContent = data.totalConvidados;
  if(elements.percentualMeta) elements.percentualMeta.textContent = `${data.percentualMeta.toFixed(1)}%`;
  if(elements.progressFillDashboard) elements.progressFillDashboard.style.width = `${Math.min(data.percentualMeta,100)}%`;
  if(elements.progressTextDashboard) elements.progressTextDashboard.textContent = `${fmtBRL(data.totalArrecadado)} de ${fmtBRL(data.goal)}`;
  if(elements.progressPercentageDashboard) elements.progressPercentageDashboard.textContent = `${data.percentualMeta.toFixed(1)}% da meta alcançada`;

  // transações
  if(elements.transactionsList){
    if(!data.transactions.length){ elements.transactionsList.innerHTML = '<p class="no-transactions">Nenhuma transação ainda</p>'; }
    else {
      elements.transactionsList.innerHTML = data.transactions.map(t=>
        `<div class="transaction-item"><div class="transaction-info"><h5>${t.gift_name}</h5><p>${t.buyer_name} • ${new Date(t.created_at).toLocaleString('pt-BR')}</p></div><div class="transaction-amount">${fmtBRL(t.amount)}</div></div>`
      ).join('');
    }
  }
  // mensagens
  if(elements.messagesList){
    if(!data.messages.length){ elements.messagesList.innerHTML = '<p class="no-messages">Nenhuma mensagem ainda</p>'; }
    else {
      elements.messagesList.innerHTML = data.messages.map(m=>
        `<div class="message-item"><div class="message-header"><span class="message-name">${m.buyer_name}</span><span class="message-date">${new Date(m.created_at).toLocaleString('pt-BR')}</span></div><div class="message-text">${m.message || ''}</div></div>`
      ).join('');
    }
  }

  // gráfico por categoria
  if(elements.categoryChartCanvas){
    const ctx = elements.categoryChartCanvas.getContext('2d');
    if(categoryChart) categoryChart.destroy();
    if(!data.byCategoria.length){
      categoryChart = new Chart(ctx, { type:'doughnut', data:{ labels:['Nenhum dado'], datasets:[{ data:[1], backgroundColor:['#f0f0f0'], borderWidth:0 }] }, options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ display:false } } } });
    } else {
      const colors = ['#1FB8CD','#FFC185','#B4413C','#ECEBD5','#5D878F','#E91E63','#8E24AA'];
      categoryChart = new Chart(ctx, { type:'doughnut', data:{ labels:data.byCategoria.map(x=>x.category), datasets:[{ data:data.byCategoria.map(x=>x.total), backgroundColor: colors.slice(0, data.byCategoria.length), borderWidth:2, borderColor:'#fff' }] }, options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'bottom', labels:{ padding:20, usePointStyle:true, font:{ size:12 } } } } } });
    }
  }
}

async function refreshData(){
  APP_STATE.gifts = await apiGet(API.gifts);
  try{ const meta = await apiGet(API.meta); APP_STATE.meta.goal = meta.goal; }catch{}
  renderPresentes(APP_STATE.gifts);
}

// ----------- Events -----------
document.addEventListener('DOMContentLoaded', async () => {
  // mobile nav
  elements.navToggle?.addEventListener('click', ()=> elements.navMenu?.classList.toggle('active'));
  qsa('.nav-link').forEach(l=> l.addEventListener('click', ()=> elements.navMenu?.classList.remove('active')));

  // countdown
  updateCountdown(); setInterval(updateCountdown, 1000);

  // filtros
  elements.searchInput?.addEventListener('input', filterPresentes);
  elements.categoryFilter?.addEventListener('change', filterPresentes);
  elements.priceFilter?.addEventListener('change', filterPresentes);

  // modal
  elements.closeModal?.addEventListener('click', closeCheckout);
  elements.cancelCheckout?.addEventListener('click', closeCheckout);
  elements.checkoutForm?.addEventListener('submit', submitCheckout);
  elements.closeSuccessModal?.addEventListener('click', closeSuccess);

  // login
  elements.loginBtn?.addEventListener('click', (e)=>{ e.preventDefault(); elements.loginModal?.classList.remove('hidden'); });
  elements.closeLoginModal?.addEventListener('click', ()=> elements.loginModal?.classList.add('hidden'));
  elements.cancelLogin?.addEventListener('click', ()=> elements.loginModal?.classList.add('hidden'));
  elements.loginForm?.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(elements.passwordInput?.value === APP_STATE.noivos.senha){ isLoggedIn = true; elements.loginModal?.classList.add('hidden'); showDashboard(); elements.passwordInput.value=''; } else { alert('Senha incorreta!'); elements.passwordInput.value=''; }
  });
  elements.logoutBtn?.addEventListener('click', ()=>{ isLoggedIn=false; hideDashboard(); });

  // salvar meta
  elements.saveMeta?.addEventListener('click', async ()=>{
    const v = parseFloat(elements.metaInput?.value); if(!v || v<=0) return alert('Informe um valor válido');
    await apiPut(API.meta, { goal: v }); await loadDashboard(); alert('Meta atualizada!');
  });

  // carregar dados
  await refreshData();
});
