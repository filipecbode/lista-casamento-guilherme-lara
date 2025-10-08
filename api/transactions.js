// api/transactions/index.js
import { query } from '../lib/db';

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).end();
  const { giftId, buyerName, buyerEmail, buyerPhone, message } = req.body || {};
  if(!giftId || !buyerName || !buyerEmail) return res.status(400).json({ error:'Dados inválidos' });
  try{
    // buscar presente
    const g = await query('SELECT id, price, purchased FROM gifts WHERE id=$1',[giftId]);
    if(!g.rowCount) return res.status(404).json({ error:'Presente não encontrado' });
    if(g.rows[0].purchased) return res.status(409).json({ error:'Presente já foi presenteado' });

    // cria transação simbólica (sem pagamento ainda)
    await query(
      `INSERT INTO transactions (gift_id, buyer_name, buyer_email, buyer_phone, message, amount, status)
       VALUES ($1,$2,$3,$4,$5,$6,'confirmed')`,
      [giftId, buyerName, buyerEmail, buyerPhone || null, message || null, g.rows[0].price]
    );
    // marca presente como comprado
    await query('UPDATE gifts SET purchased=true WHERE id=$1',[giftId]);

    return res.status(200).json({ ok:true });
  }catch(e){ console.error(e); return res.status(500).json({ error:'Erro no servidor' }); }
}
