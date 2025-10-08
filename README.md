# Lista de Casamento — Backend (Vercel + Neon Postgres)

## Como publicar

1. **Crie o banco (Neon Postgres)** pelo Marketplace do Vercel (Storage → Neon) e copie a `DATABASE_URL`.
2. No **Vercel**, em *Project Settings → Environment Variables*, adicione `DATABASE_URL` (Production/Preview/Development) e **redeploy**.
3. No **Neon Console**, abra o editor SQL e rode o conteúdo de `scripts/schema.sql` (cria tabelas e insere a lista de presentes personalizada).
4. Faça `git push` para o GitHub; o Vercel cria/atualiza as rotas em `/api` automaticamente.

### Rotas usadas pelo front
- `GET /api/gifts` → lista de presentes
- `POST /api/transactions` → registra presente simbólico e marca como comprado
- `GET /api/meta` → meta atual
- `PUT /api/meta` → atualiza meta
- `GET /api/dashboard` → dados agregados do dashboard

> **Pagamentos (Mercado Pago)** serão adicionados depois em rotas separadas (Checkout + Webhook), sem mudar a infra.
