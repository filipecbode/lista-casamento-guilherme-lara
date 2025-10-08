// api/dashboard/index.js
import { query } from '../lib/db';

export default async function handler(req, res){
  try{
    const goalRow = await query("SELECT COALESCE((value->>'goal')::numeric,30000) AS goal FROM meta WHERE key='goal' LIMIT 1");
    const goal = goalRow.rowCount ? Number(goalRow.rows[0].goal) : 30000;

    const totalRow = await query("SELECT COALESCE(SUM(amount),0) AS total FROM transactions WHERE status='confirmed'");
    const totalArrecadado = Number(totalRow.rows[0].total);

    const presRow = await query("SELECT COUNT(*) AS c FROM transactions WHERE status='confirmed'");
    const presentesComprados = Number(presRow.rows[0].c);

    const convRow = await query("SELECT COUNT(DISTINCT buyer_email) AS c FROM transactions");
    const totalConvidados = Number(convRow.rows[0].c);

    const pct = goal > 0 ? (totalArrecadado/goal)*100 : 0;

    const byCat = await query(
      `SELECT g.category, COALESCE(SUM(t.amount),0) AS total
         FROM gifts g
         LEFT JOIN transactions t ON t.gift_id=g.id AND t.status='confirmed'
        GROUP BY g.category
        HAVING COALESCE(SUM(t.amount),0) > 0
        ORDER BY total DESC`
    );

    const tx = await query(
      `SELECT t.id, t.gift_id, g.name AS gift_name, t.buyer_name, t.amount, t.created_at
         FROM transactions t INNER JOIN gifts g ON g.id=t.gift_id
        WHERE t.status='confirmed' ORDER BY t.created_at DESC LIMIT 20`
    );

    const messages = await query(
      `SELECT t.buyer_name, t.message, t.created_at
         FROM transactions t
        WHERE t.status='confirmed' AND COALESCE(t.message,'') <> ''
        ORDER BY t.created_at DESC LIMIT 20`
    );

    return res.status(200).json({
      goal,
      totalArrecadado,
      presentesComprados,
      totalConvidados,
      percentualMeta: pct,
      byCategoria: byCat.rows.map(r=>({ category:r.category, total: Number(r.total) })),
      transactions: tx.rows,
      messages: messages.rows
    });
  }catch(e){ console.error(e); return res.status(500).json({ error:'Erro no servidor' }); }
}
