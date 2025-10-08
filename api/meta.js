// api/meta/index.js
import { query } from '../lib/db';

export default async function handler(req, res){
  try {
    if(req.method === 'GET'){
      const r = await query("SELECT value->>'goal' AS goal FROM meta WHERE key='goal' LIMIT 1");
      const goal = r.rowCount ? Number(r.rows[0].goal) : 30000;
      return res.status(200).json({ goal });
    }
    if(req.method === 'PUT'){
      const { goal } = req.body || {}; if(!goal || isNaN(goal)) return res.status(400).json({error:'Valor inválido'});
      await query("INSERT INTO meta(key, value) VALUES('goal', $1)
                  ON CONFLICT (key) DO UPDATE SET value=$1", [ { goal: Number(goal) } ]);
      return res.status(200).json({ ok:true, goal: Number(goal) });
    }
    return res.status(405).end();
  } catch(e){ console.error(e); return res.status(500).json({ error:'Erro no servidor' }); }
}
