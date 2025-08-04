# Migração inicial do banco de dados (Supabase)

O script de criação das tabelas está disponível em:

`prisma/init.sql`

Para futuras migrações ou restauração do banco, execute o conteúdo desse arquivo no painel do Supabase (SQL Editor).

# Barber SaaS

Plataforma SaaS para agendamento online de barbearias, com notificações automáticas via WhatsApp (Evolution API) e lembretes usando n8n.

## 🚀 Como rodar

```powershell
pnpm install
pnpm dev
```

## 🗂 Estrutura

```
barber-saas/
├── src/app/           # Páginas Next.js
├── src/components/    # Componentes reutilizáveis
├── src/lib/           # Supabase, Evolution API
├── src/styles/        # Estilos globais
├── public/            # Imagens e estáticos
├── .env.local         # Variáveis de ambiente
├── README.md          # Documentação
├── LICENSE            # Licença
```

## 🛠 Principais Tecnologias

- Next.js, React, Tailwind CSS, Supabase, Evolution API, n8n

## 📋 Funcionalidades

- Cadastro de barbearia e serviços
- Agendamento público
- Dashboard de agendamentos
- Notificações e lembretes automáticos

## 📦 Scripts úteis

```powershell
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run test     # Testes automatizados
```

## 📑 Documentação

Consulte o arquivo `.github/copilot-instructions.md` para padrões e boas práticas.
