// ================== Dados da aplicação ==================
const APP_DATA = {
  noivos: {
    nome: "Guilherme & Lara",
    foto: "assets/casal.png",
    historia: "Nos conhecemos na faculdade há 6 anos e desde então construímos uma linda história juntos. Estamos muito felizes em celebrar esse momento especial com vocês!",
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
  mensagens: [],
  rsvps: [] // Novo array para guardar a lista de convidados
};

// Estado/Elementos
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
  buyerMessage: document.getElementById('buyerMessage'),
  
  // ELEMENTOS DO RSVP
  rsvpForm: document.getElementById('rsvpForm'),
  rsvpSubmitBtn: document.getElementById('rsvpSubmitBtn'),
  rsvpMessage: document.getElementById('rsvpMessage'),
  guestName: document.getElementById('guestName'),
  guestCount: document.getElementById('guestCount'),
  guestMessage: document.getElementById('guestMessage'),
  rsvpList: document.getElementById('rsvpList') // Novo elemento da lista
};

// Utils
const formatCurrency = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value || 0);
// Ajustado para formatar data/hora corretamente para visualização
const formatDate = (date) => {
    const d = date instanceof Date ? date : (date ? new Date(date) : new Date());
    return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }).format(d);
};
const categoryEmojis = {
  'Gastronomia & Bebidas': '🍽️', 'Experiências a Dois': '💞', 'Viagem & Hospedagem': '✈️',
  'Cuidados & Bem-estar': '💆', 'Preparativos dos Noivos': '💍', 'Transporte & Logística': '⛽', 'Extras & Lembrancinhas': '🎁'
};

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){ if(this.getAttribute('href')==='#') return; e.preventDefault(); const t=document.querySelector(this.getAttribute('href')); if(t) t.scrollIntoView({behavior:'smooth',block:'start'}); });
});

elements.navToggle?.addEventListener('click', ()=> elements.navMenu?.classList.toggle('active'));
document.querySelectorAll('.nav-link').forEach(l=> l.addEventListener('click', ()=> elements.navMenu?.classList.remove('active')));

function updateCountdown(){
  const d=new Date(APP_DATA.noivos.dataCasamento), now=new Date(); const diff=d-now; let dd=0,hh=0,mm=0,ss=0; if(diff>0){dd=Math.floor(diff/86400000);hh=Math.floor((diff%86400000)/3600000);mm=Math.floor((diff%3600000)/60000);ss=Math.floor((diff%60000)/1000);} 
  elements.days.textContent=dd; elements.hours.textContent=hh; elements.minutes.textContent=mm; elements.seconds.textContent=ss;
}

const getRemaining = (p)=> Math.max(0,(p.cotas||0)-(p.compradas||0));
const isSoldOut   = (p)=> getRemaining(p)<=0;

function renderPresentes(presentes=APP_DATA.presentes){
  if(!elements.presentesGrid) return; elements.presentesGrid.innerHTML='';
  presentes.forEach(p=>{
    const soldOut=isSoldOut(p);
    const card=document.createElement('div'); card.className=`presente-card ${soldOut?'comprado':''}`;
    const emoji=categoryEmojis[p.categoria]||'🎁';
    card.innerHTML=`
      <div class="presente-image"><img src="${p.imagem}" alt="${p.nome}" loading="lazy" onerror="this.onerror=null;this.src='assets/gifts/placeholder.jpg';" /></div>
      <div class="presente-info">
        <div class="presente-categoria">${emoji} ${p.categoria}</div>
        <h3 class="presente-nome">${p.nome}</h3>
        <div class="presente-preco">${formatCurrency(p.preco)} <small>/ cota</small></div>
        <div class="cotas-info">Restam <strong>${getRemaining(p)}</strong> de ${p.cotas} cotas</div>
        <button class="btn-presentear" ${soldOut?'disabled':''} onclick="openCheckoutModal(${p.id})">${soldOut?'Esgotado':'💝 Presentear cotas'}</button>
      </div>`;
    elements.presentesGrid.appendChild(card);
  });
}

function filterPresentes(){
  const s=(elements.searchInput?.value||'').toLowerCase();
  const c=elements.categoryFilter?.value||''; const pr=elements.priceFilter?.value||'';
  let f=APP_DATA.presentes.filter(p=>{ const ms=p.nome.toLowerCase().includes(s); const mc=!c||p.categoria===c; let mp=true; if(pr){const price=p.preco; switch(pr){case '0-500':mp=price<=500;break;case '500-1000':mp=price>500&&price<=1000;break;case '1000-2000':mp=price>1000&&price<=2000;break;case '2000+':mp=price>2000;break;} } return ms&&mc&&mp; });
  renderPresentes(f);
}

elements.searchInput?.addEventListener('input', filterPresentes);
elements.categoryFilter?.addEventListener('change', filterPresentes);
elements.priceFilter?.addEventListener('change', filterPresentes);

function openCheckoutModal(id){
  const p=APP_DATA.presentes.find(x=>x.id===id); if(!p||isSoldOut(p)) return; currentPresent=p;
  if(elements.presentInfo){ elements.presentInfo.innerHTML=`<h4>${p.nome}</h4><div class="price">${formatCurrency(p.preco)} <small>/ cota</small></div><div class="help-text">${p.cotas} cotas de ${formatCurrency(p.preco)} (valor total: ${formatCurrency(p.cotas*p.preco)}).<br>Você poderá escolher quantas cotas deseja presentear.</div>`; }
  const rem=getRemaining(p); if(elements.shareQty){ elements.shareQty.min=1; elements.shareQty.max=Math.max(1,rem); elements.shareQty.value=1; elements.shareQty.oninput=()=>{ const q=Math.min(Math.max(parseInt(elements.shareQty.value||'1',10),1),rem); elements.shareQty.value=q; if(elements.checkoutTotal) elements.checkoutTotal.textContent=formatCurrency(q*p.preco); }; elements.shareQty.dispatchEvent(new Event('input')); }
  if(elements.sharesRemaining) elements.sharesRemaining.textContent=`Restam ${rem} de ${p.cotas} cotas para este presente.`;
  elements.checkoutModal?.classList.remove('hidden');
}
window.openCheckoutModal=openCheckoutModal;

// Fechar modais
['closeModal','cancelCheckout','closeLoginModal','cancelLogin','closeSuccessModal'].forEach(id=>{
  const el = elements[id]; if(!el) return; el.addEventListener('click',()=>{
    if(id==='closeModal'||id==='cancelCheckout'){ elements.checkoutModal?.classList.add('hidden'); currentPresent=null; }
    if(id==='closeLoginModal'||id==='cancelLogin'){ elements.loginModal?.classList.add('hidden'); }
    if(id==='closeSuccessModal'){ elements.successModal?.classList.add('hidden'); }
  });
});

// -----------------------------------------------------------
// 🚨 URL CORRETO DO GOOGLE APPS SCRIPT (APLICATIVO DA WEB) 🚨
// -----------------------------------------------------------
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzuPm58g8DQtFbsKIgti-u5AI3byVHLnhHhogt9Cau2ZWliVtkJXokM8YknNBpF0ZXZ/exec'; 

// Submit (INTEGRAÇÃO REAL de Transação/Mensagem)
elements.checkoutForm?.addEventListener('submit', async (e) => { 
    e.preventDefault(); 
    if(!currentPresent) return;

    const rem=getRemaining(currentPresent); 
    const qty=Math.min(Math.max(parseInt(elements.shareQty?.value||'1',10),1),rem);
    const nome=elements.buyerName?.value; 
    const email=elements.buyerEmail?.value; 
    const telefone=elements.buyerPhone?.value; 
    const mensagem=elements.buyerMessage?.value || 'Sem mensagem.';
    const valorTotal = currentPresent.preco * qty;
    
    // --- LÓGICA DE ENVIO DA TRANSAÇÃO PARA O GOOGLE SHEETS ---
    const transactionFormData = new FormData();
    transactionFormData.append('type', 'transaction'); 
    transactionFormData.append('NomeComprador', nome);
    transactionFormData.append('Email', email);
    transactionFormData.append('Telefone', telefone);
    transactionFormData.append('Mensagem', mensagem);
    transactionFormData.append('PresenteNome', currentPresent.nome);
    transactionFormData.append('Quantidade', qty);
    transactionFormData.append('ValorTotal', valorTotal);

    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            body: transactionFormData,
            mode: 'no-cors' 
        });
        
        // Simulação LOCAL para o dashboard até o próximo login (melhoria futura seria recarregar)
        currentPresent.compradas=(currentPresent.compradas||0)+qty;
        APP_DATA.transacoes.push({
            data: new Date().toISOString(), 
            presenteNome: currentPresent.nome,
            valorTotal: valorTotal,
            quantidade: qty,
            nomeComprador: nome,
            email: email,
            mensagem: mensagem
        });
        if((mensagem||'').trim()) APP_DATA.mensagens.push({nome: nome, mensagem: mensagem, data: new Date().toISOString()});
        
        console.log('Transação enviada com sucesso para o Google Sheets.');
    } catch (error) {
        console.error('Erro ao enviar transação para o Google Sheets:', error);
    }
    // Fim da lógica de envio

    elements.checkoutModal?.classList.add('hidden'); 
    elements.successModal?.classList.remove('hidden'); 
    elements.checkoutForm?.reset(); 
    currentPresent=null; 
    renderPresentes();
    if (isLoggedIn) updateDashboard(); // Atualiza o dashboard se o noivo estiver logado
});


// ================== LÓGICA DO RSVP (Integração) ==================

elements.rsvpForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = elements.guestName?.value.trim();
    const count = parseInt(elements.guestCount?.value, 10);
    const message = elements.guestMessage?.value.trim() || 'Sem mensagem.';

    // Validação
    if (!name || count < 1 || isNaN(count)) {
        elements.rsvpMessage.textContent = 'Por favor, preencha seu nome e o número de convidados corretamente.';
        elements.rsvpMessage.className = 'help-text text-center rsvp-error';
        return;
    }

    elements.rsvpSubmitBtn.textContent = 'Enviando...';
    elements.rsvpSubmitBtn.disabled = true;
    elements.rsvpMessage.textContent = '';
    elements.rsvpMessage.className = 'help-text text-center';
    
    const formData = new FormData();
    formData.append('type', 'rsvp'); // Indica ao Script o que fazer
    formData.append('Nome', name);
    formData.append('Contagem', count);
    formData.append('Mensagem', message);
    
    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Necessário para a comunicação simples
        });

        // Simulação LOCAL do RSVP
        APP_DATA.rsvps.push({ nome: name, contagem: count, mensagem: message, data: new Date().toISOString() });
        if (isLoggedIn) updateDashboard(); // Atualiza o dashboard se o noivo estiver logado

        elements.rsvpMessage.textContent = '✅ Presença confirmada com sucesso! Obrigado!';
        elements.rsvpMessage.className = 'help-text text-center rsvp-success';
        elements.rsvpForm.reset();

    } catch (error) {
        console.error('Erro de submissão do RSVP:', error);
        elements.rsvpMessage.textContent = `❌ Houve um erro. Verifique a URL do Script.`;
        elements.rsvpMessage.className = 'help-text text-center rsvp-error';
    } finally {
        elements.rsvpSubmitBtn.textContent = 'Confirmar Presença';
        elements.rsvpSubmitBtn.disabled = false;
    }
});


// Login/Logout
elements.loginBtn?.addEventListener('click',(e)=>{ e.preventDefault(); elements.loginModal?.classList.remove('hidden'); });
document.getElementById('loginForm')?.addEventListener('submit', async (e)=>{ 
    e.preventDefault(); 
    const pwd=elements.passwordInput?.value||''; 
    if(pwd===APP_DATA.noivos.senha){ 
        isLoggedIn=true; 
        elements.loginModal?.classList.add('hidden'); 
        await showDashboard(); // Chamada agora é async para carregar dados
    } else { 
        alert('Senha incorreta!'); 
    } 
    elements.passwordInput.value=''; 
});
elements.logoutBtn?.addEventListener('click',()=>{ isLoggedIn=false; hideDashboard(); });

// Funções do Dashboard
async function showDashboard(){ 
  document.querySelector('.hero')?.style.setProperty('display','none'); 
  document.querySelector('.historia')?.style.setProperty('display','none'); 
  document.querySelector('.presentes')?.style.setProperty('display','none'); 
  elements.dashboard?.classList.remove('hidden'); 
  
  // NOVA FUNÇÃO: Carregar todos os dados antes de atualizar o dashboard
  await loadAllDataFromScript(); 
  updateDashboard(); 
}

function hideDashboard(){ elements.dashboard?.classList.add('hidden'); document.querySelector('.hero')?.style.removeProperty('display'); document.querySelector('.historia')?.style.removeProperty('display'); document.querySelector('.presentes')?.style.removeProperty('display'); }

// NOVO: Carrega TODOS os dados do Google Sheets (Meta, Transações, RSVPs)
async function loadAllDataFromScript() {
    try {
        const response = await fetch(SCRIPT_URL); 
        const data = await response.json();
        
        if (data && data.meta > 0) {
            APP_DATA.noivos.meta = data.meta;
        }

        if (data && Array.isArray(data.transacoes)) {
            APP_DATA.transacoes = data.transacoes.map(t => ({
                id: Date.parse(t.data) || Date.now(),
                presenteNome: t.presenteNome,
                valor: t.valorTotal,
                quantidade: t.quantidade,
                comprador: t.nomeComprador,
                email: t.email,
                telefone: t.telefone,
                data: t.data,
            }));
             // Atualiza a lista de mensagens filtrando as transações com mensagem
            APP_DATA.mensagens = data.transacoes
                .filter(t => (t.mensagem || '').trim() !== 'Sem mensagem.')
                .map(t => ({ nome: t.nomeComprador, mensagem: t.mensagem, data: t.data }));
        }
        
        if (data && Array.isArray(data.rsvps)) {
            APP_DATA.rsvps = data.rsvps;
        }

        // Atualiza a contagem de cotas compradas nos presentes (localmente)
        APP_DATA.presentes.forEach(p => p.compradas = 0); // Zera
        APP_DATA.transacoes.forEach(t => {
            const presente = APP_DATA.presentes.find(p => p.nome === t.presenteNome);
            if (presente) {
                presente.compradas += t.quantidade;
            }
        });
        
    } catch (error) {
        console.warn('Não foi possível carregar os dados completos do Google Sheets.', error);
    }
}

// Salva a Meta no Google Sheets
document.getElementById('saveMeta')?.addEventListener('click', async ()=>{ 
  const v=parseFloat(elements.metaInput?.value); 
  if(v&&v>0){ 
    const metaFormData = new FormData();
    metaFormData.append('type', 'meta_update');
    metaFormData.append('NovoValor', v);
    
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: metaFormData,
        mode: 'no-cors'
      });
      
      APP_DATA.noivos.meta=v;
      updateDashboard(); 
      alert('Meta atualizada com sucesso e salva no Google Sheets!'); 
      
    } catch(error) {
      console.error('Erro ao salvar meta no Script:', error);
      alert('Houve um erro ao salvar a meta no Google Sheets.');
    }
    
  } else { 
    alert('Por favor, insira um valor válido para a meta.'); 
  } 
});

function updateDashboard(){ 
    const totalArrecadado = APP_DATA.transacoes.reduce((s,t)=>s+t.valor,0); 
    const totalPresentesComprados = APP_DATA.transacoes.length; 
    const totalConvidadosRSVP = APP_DATA.rsvps.reduce((total, r) => total + r.contagem, 0); 
    const percentualMeta = ((totalArrecadado / APP_DATA.noivos.meta) * 100) || 0;

    elements.metaInput.value = APP_DATA.noivos.meta; 
    elements.totalArrecadado.textContent = formatCurrency(totalArrecadado); 
    elements.presentesComprados.textContent = totalPresentesComprados; 
    elements.totalConvidados.textContent = totalConvidadosRSVP;
    elements.percentualMeta.textContent = `${percentualMeta.toFixed(1)}%`;

    updateDashboardProgress(totalArrecadado, APP_DATA.noivos.meta); 
    updateTransactionsList(); 
    updateMessagesList(); 
    updateRsvpList(); // Novo
    updateCategoryChart();
    renderPresentes(); // Atualiza a lista de presentes (cotas) na tela principal
}

function updateDashboardProgress(total, meta){ 
    const pct=(total/meta)*100; 
    elements.progressFillDashboard.style.width=`${Math.min(pct,100)}%`; 
    elements.progressTextDashboard.textContent=`${formatCurrency(total)} de ${formatCurrency(meta)}`; 
    elements.progressPercentageDashboard.textContent=`${(pct||0).toFixed(1)}%`; 
}

function updateTransactionsList(){ 
    if(!elements.transactionsList) return; 
    if(APP_DATA.transacoes.length===0){ 
        elements.transactionsList.innerHTML='<p class="no-transactions">Nenhuma transação ainda</p>'; 
        return; 
    } 
    const sorted=[...APP_DATA.transacoes].sort((a,b)=> new Date(b.data)-new Date(a.data)); 
    elements.transactionsList.innerHTML=sorted.map(t=>`<div class="transaction-item"><div class="transaction-info"><h5>${t.presenteNome} • ${t.quantidade?`${t.quantidade} cota(s)`:''}</h5><p>${t.comprador} • ${formatDate(t.data)}</p></div><div class="transaction-amount">${formatCurrency(t.valor)}</div></div>`).join(''); 
}

function updateMessagesList(){ 
    if(!elements.messagesList) return; 
    if(APP_DATA.mensagens.length===0){ 
        elements.messagesList.innerHTML='<p class="no-messages">Nenhuma mensagem ainda</p>'; 
        return; 
    } 
    const sorted=[...APP_DATA.mensagens].sort((a,b)=> new Date(b.data)-new Date(a.data)); 
    elements.messagesList.innerHTML=sorted.map(m=>`<div class="message-item"><div class="message-header"><span class="message-name">${m.nome}</span><span class="message-date">${formatDate(m.data)}</span></div><div class="message-text">${m.mensagem}</div></div>`).join(''); 
}

function updateRsvpList(){
    if(!elements.rsvpList) return;
    if(APP_DATA.rsvps.length===0){
        elements.rsvpList.innerHTML='<p class="no-rsvps">Nenhuma confirmação de presença ainda.</p>';
        return;
    }
    const sorted=[...APP_DATA.rsvps].sort((a,b)=> new Date(b.data)-new Date(a.data));
    elements.rsvpList.innerHTML=sorted.map(r=>`
        <div class="rsvp-item">
            <div class="rsvp-info">
                <p class="rsvp-name"><strong>${r.nome}</strong> (${r.contagem} pessoa${r.contagem > 1 ? 's' : ''})</p>
                <p class="rsvp-date">${formatDate(r.data)}</p>
            </div>
            ${r.mensagem && r.mensagem !== 'Sem mensagem.' ? `<div class="rsvp-message">${r.mensagem}</div>` : ''}
        </div>
    `).join('');
}


function updateCategoryChart(){ 
    if(!elements.categoryChart) return; 
    const ctx=elements.categoryChart.getContext('2d'); 
    const cat={}; 
    const colors=['#1FB8CD','#FFC185','#B4413C','#ECEBD5','#5D878F','#E91E63','#8E24AA']; 
    APP_DATA.transacoes.forEach(t=>{ 
        const p=APP_DATA.presentes.find(x=>x.nome === t.presenteNome); // Busca por nome, não por ID
        if(p) cat[p.categoria]=(cat[p.categoria]||0)+t.valor; 
    }); 
    const labels=Object.keys(cat); 
    const data=Object.values(cat); 
    if(categoryChart) categoryChart.destroy(); 
    if(labels.length===0){ 
        categoryChart=new Chart(ctx,{type:'doughnut',data:{labels:['Nenhum dado'],datasets:[{data:[1],backgroundColor:['#f0f0f0'],borderWidth:0}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}}}}); return;
    } 
    categoryChart=new Chart(ctx,{type:'doughnut',data:{labels,datasets:[{data,backgroundColor:colors.slice(0,labels.length),borderWidth:2,borderColor:'#fff'}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{padding:16,usePointStyle:true,font:{size:12}}},tooltip:{callbacks:{label:(ctx)=>`${ctx.label}: ${formatCurrency(ctx.raw)}`}}}}}); 
}

window.addEventListener('click',(e)=>{ 
  if(e.target===elements.checkoutModal){ elements.checkoutModal.classList.add('hidden'); currentPresent=null; } 
  if(e.target===elements.loginModal) elements.loginModal.classList.add('hidden'); 
  if(e.target===elements.successModal) elements.successModal.classList.add('hidden'); 
});

function init(){ 
  updateCountdown(); 
  setInterval(updateCountdown,1000); 
  renderPresentes(); 
}

if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();
