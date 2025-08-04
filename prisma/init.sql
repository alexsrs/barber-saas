-- Migração inicial do banco de dados Barber SaaS (Supabase)

-- Tabela Barbearia
CREATE TABLE barbearia (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR NOT NULL,
  telefone VARCHAR NOT NULL,
  endereco VARCHAR NOT NULL,
  foto VARCHAR,
  cnpj VARCHAR(18),
  descricao VARCHAR(200),
  usuario VARCHAR NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

-- Tabela Cliente
CREATE TABLE cliente (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR NOT NULL,
  telefone VARCHAR NOT NULL,
  email VARCHAR NOT NULL
);

-- Tabela Servico
CREATE TABLE servico (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR NOT NULL,
  preco FLOAT NOT NULL,
  duracao INT NOT NULL,
  barbearia_id UUID NOT NULL REFERENCES barbearia(id)
);

-- Tabela Agendamento
CREATE TABLE agendamento (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  data TIMESTAMP NOT NULL,
  status VARCHAR NOT NULL,
  cliente_id UUID NOT NULL REFERENCES cliente(id),
  servico_id UUID NOT NULL REFERENCES servico(id),
  barbearia_id UUID NOT NULL REFERENCES barbearia(id)
);
