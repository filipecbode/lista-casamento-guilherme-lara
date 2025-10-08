// api/gifts/index.js
import { query } from '../lib/db';

export default async function handler(req, res){
  try{
    if(req.method === 'GET'){
      const { rows } = await query('SELECT id, name, category, price, image, purchased FROM gifts ORDER BY id');
      return res.status(200).json(rows.map(r=>({ id:r.id, name:r.name, category:r.category, price:Number(r.price), image:r.image, purchased:r.purchased })));
    }
    if(req.method === 'PUT'){
      const { id, purchased } = req.body || {};
      if(!id || typeof purchased !== 'boolean') return res.status(400).json({error:'Dados inválidos'});
      await query('UPDATE gifts SET purchased=$2 WHERE id=$1',[id, purchased]);
      return res.status(200).json({ ok:true });
    }
    return res.status(405).end();
  }catch(e){
    console.error(e); return res.status(500).json({ error:'Erro no servidor' });
  }
}
