-- scripts/schema.sql
-- Crie as tabelas no Neon (abra o Console do Neon e cole este script)

CREATE TABLE IF NOT EXISTS gifts (
  id        integer PRIMARY KEY,
  name      text NOT NULL,
  category  text NOT NULL,
  price     numeric(10,2) NOT NULL,
  image     text,
  purchased boolean NOT NULL DEFAULT false
);

CREATE TABLE IF NOT EXISTS transactions (
  id            bigserial PRIMARY KEY,
  gift_id       integer NOT NULL REFERENCES gifts(id),
  buyer_name    text NOT NULL,
  buyer_email   text NOT NULL,
  buyer_phone   text,
  message       text,
  amount        numeric(10,2) NOT NULL,
  status        text NOT NULL, -- pending/approved/confirmed/rejected
  created_at    timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS meta (
  key   text PRIMARY KEY,
  value jsonb NOT NULL
);

-- Limpa e insere a lista personalizada do Filipe
TRUNCATE TABLE gifts RESTART IDENTITY;

INSERT INTO gifts (id, name, category, price, image, purchased) VALUES
-- Transporte & Logística
(1, 'Abastecer a moto', 'Transporte & Logística', 80,  'https://source.unsplash.com/featured/300x300/?gas,pump,motorcycle', false),

-- Gastronomia & Bebidas
(2, 'Café da manhã', 'Gastronomia & Bebidas', 100, 'https://source.unsplash.com/featured/300x300/?breakfast', false),
(3, 'Almoço', 'Gastronomia & Bebidas', 120, 'https://source.unsplash.com/featured/300x300/?lunch,food', false),
(4, 'Jantar', 'Gastronomia & Bebidas', 130, 'https://source.unsplash.com/featured/300x300/?dinner,restaurant', false),
(5, 'Drinks', 'Gastronomia & Bebidas', 95,  'https://source.unsplash.com/featured/300x300/?cocktails,bar', false),
(6, 'Noite de fondue', 'Gastronomia & Bebidas', 190, 'https://source.unsplash.com/featured/300x300/?fondue', false),
(7, 'Espumante no quarto', 'Gastronomia & Bebidas', 90,  'https://source.unsplash.com/featured/300x300/?champagne,hotel', false),
(8, 'Vodka premium', 'Gastronomia & Bebidas', 200, 'https://source.unsplash.com/featured/300x300/?vodka,bottle', false),

-- Experiências a Dois
(9,  'Ingresso de cinema', 'Experiências a Dois', 89,  'https://source.unsplash.com/featured/300x300/?cinema,popcorn', false),
(10, 'Aulas de valsa', 'Experiências a Dois', 210, 'https://source.unsplash.com/featured/300x300/?waltz,dance,couple', false),
(11, 'Passeio a cavalo', 'Experiências a Dois', 180, 'https://source.unsplash.com/featured/300x300/?horse,riding', false),
(12, 'Passeio de jet ski', 'Experiências a Dois', 140, 'https://source.unsplash.com/featured/300x300/?jetski,sea', false),
(13, 'Mergulho', 'Experiências a Dois', 280, 'https://source.unsplash.com/featured/300x300/?scuba,diving', false),
(14, 'Salto de paraquedas', 'Experiências a Dois', 650, 'https://source.unsplash.com/featured/300x300/?skydiving', false),

-- Viagem & Hospedagem
(15, '1 diária', 'Viagem & Hospedagem', 200, 'https://source.unsplash.com/featured/300x300/?hotel,room,bed', false),
(16, '2 diárias', 'Viagem & Hospedagem', 350, 'https://source.unsplash.com/featured/300x300/?hotel,resort', false),
(17, 'Primeira parcela da viagem', 'Viagem & Hospedagem', 279.99, 'https://source.unsplash.com/featured/300x300/?airplane,wing', false),
(18, 'Última parcela da viagem', 'Viagem & Hospedagem', 279.99, 'https://source.unsplash.com/featured/300x300/?suitcase,airport', false),
(19, 'Despacho (8@ de peso) de bagagem da noiva', 'Viagem & Hospedagem', 100, 'https://source.unsplash.com/featured/300x300/?luggage,check-in', false),

-- Cuidados & Bem-estar
(20, 'Spa day', 'Cuidados & Bem-estar', 240, 'https://source.unsplash.com/featured/300x300/?spa,relax', false),
(21, 'Limpeza de pele', 'Cuidados & Bem-estar', 240, 'https://source.unsplash.com/featured/300x300/?facial,skincare', false),
(22, 'Ajuda anti-stress da noiva', 'Cuidados & Bem-estar', 500, 'https://source.unsplash.com/featured/300x300/?meditation,relax', false),
(23, 'Protetor solar da noiva', 'Cuidados & Bem-estar', 120, 'https://source.unsplash.com/featured/300x300/?sunscreen', false),
(24, 'Bronzeador solar do noivo', 'Cuidados & Bem-estar', 80, 'https://source.unsplash.com/featured/300x300/?beach,sunscreen', false),
(25, 'Aula de natação da noiva', 'Cuidados & Bem-estar', 130, 'https://source.unsplash.com/featured/300x300/?swimming,pool', false),

-- Preparativos dos Noivos (com a piada 😄)
(26, 'Cortar o cabelo do noivo', 'Preparativos dos Noivos', 8000, 'https://source.unsplash.com/featured/300x300/?barbershop,men,haircut', false),
(27, 'Sapato personalizado do noivo', 'Preparativos dos Noivos', 200, 'https://source.unsplash.com/featured/300x300/?mens,dress,shoes', false),

-- Extras & Lembrancinhas
(28, 'Comprinhas', 'Extras & Lembrancinhas', 160, 'https://source.unsplash.com/featured/300x300/?shopping,bags', false);

-- Meta padrão (opcional)
INSERT INTO meta(key, value) VALUES('goal', '{"goal":30000}')
ON CONFLICT (key) DO UPDATE SET value='{"goal":30000}';
