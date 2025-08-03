Dica de Design
## Paleta de Cores Sugerida
Utilize as cores abaixo para garantir identidade visual consistente e moderna:

| Cor            | Hex      | Aplicação                                 |
| -------------- | -------- | ----------------------------------------- |
| Vermelho vivo  | #E11D48  | Destaques, botões                        |
| Preto grafite  | #1F2937  | Fundo, texto principal                   |
| Cinza claro    | #F3F4F6  | Fundo secundário, contraste               |
| Branco puro    | #FFFFFF  | Fundo principal, cards                   |
| Azul suave     | #3B82F6  | Elementos interativos                    |

Recomendações:
- Use o vermelho para chamar atenção em botões de ação e alertas.
- Preto grafite para fundo e textos principais, garantindo contraste.
- Cinza claro para áreas secundárias e separação de blocos.
- Branco puro para cards, formulários e áreas limpas.
- Azul suave para links, botões secundários e elementos interativos.


# Instruções para o Copilot – barber-saas

## Contexto do Projeto
O Barber SaaS é uma plataforma SaaS para agendamento online de barbearias, com foco em automação, recorrência e facilidade para pequenos negócios. O sistema integra Next.js, Supabase, n8n, Evolution API (WhatsApp), pagamentos e dashboard.

## Roadmap & Planejamento
1. Modelar banco de dados (Supabase): tabelas para barbearia, serviço, cliente, agendamento.
2. Criar página de cadastro de barbearia.
3. Wireframe das telas principais.
4. Configurar fluxo n8n para agendamento e notificações.
5. Landing page para captação de leads.

## Stack Tecnológica
- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS
- **Backend:** Node.js (Medusa.js ou Fastify)
- **Banco de Dados:** Supabase (PostgreSQL)
- **Notificações:** Evolution API (WhatsApp), SendGrid
- **Automação:** n8n (lembretes, integrações)
- **Pagamentos:** Stripe, MercadoPago
- **Deploy:** Vercel, Railway/Render
- **Componentes:** Tailwind CSS, React Hook Form, Zod

## Funcionalidades Essenciais
- Cadastro e gestão de barbearias
- Cadastro de serviços
- Agendamento online
- Notificações automáticas (email/WhatsApp)
- Dashboard para barbearia e admin
- Planos pagos e gestão de assinantes

## Padrões Gerais
- Sempre gere comandos de terminal em powershell.
- Sempre converse em pt-br e se identifique como tifurico.
- Siga boas práticas de segurança, performance, acessibilidade e manutenção.
- Use tipagem estática (TypeScript) e evite `any`.
- Utilize React Hook Form e Zod para formulários e validação.
- Use componentes reutilizáveis e estilização com Tailwind no frontend.
- Documente funções, componentes e endpoints com comentários claros e objetivos.

## Estrutura dos Diretórios
- `src/app/`: Páginas e rotas Next.js
- `src/components/`: Componentes reutilizáveis
- `src/lib/`: Funções utilitárias (ex: supabase, api Evolution)
- `public/`: Arquivos estáticos
- `.env.local`: Variáveis de ambiente
- `README.md`: Documentação principal
- `.github/`: Workflows, templates e instructions do Copilot

## Convenções de Código
- **Componentes:** PascalCase (ex: `FormAgendamento`)
- **Arquivos:** kebab-case (ex: `form-agendamento.tsx`)
- **Variáveis/Funções:** camelCase (ex: `sendWhatsAppMessage`)
- **Constantes:** SNAKE_CASE (ex: `MAX_AGENDAMENTOS_GRATIS`)
- Use TypeScript para todos os componentes
- Prefira Server Components quando possível
- Use 'use client' apenas quando necessário
- Implemente interfaces para props
- Use Tailwind CSS como padrão
- Mantenha classes organizadas (responsive-first)
- Evite inline styles
- Use Supabase como banco principal
- Nomeie tabelas no singular em português (ex: `barbearia`, `servico`, `agendamento`)
- Use camelCase para campos
- Implemente relacionamentos adequados

## Boas Práticas
- Escreva código limpo, modular e reutilizável.
- Prefira hooks e contextos para estados globais no frontend.
- Separe lógica de negócio dos componentes e lib.
- Use validação com Zod e React Hook Form.
- Escreva testes automatizados sempre que possível.
- Mantenha as chaves de API seguras no .env.local
- Use TypeScript strict mode
- Implemente error boundaries
- Teste em diferentes dispositivos
- Monitore performance com Core Web Vitals
- Documente novas funcionalidades no README

## Documentação
- Consulte sempre o arquivo `README.md` para detalhes de arquitetura, scripts e fluxos.
- Use comentários JSDoc para documentar funções e componentes.
- Mantenha a documentação atualizada ao evoluir o projeto.

## Contribuição
- Siga o fluxo de contribuição descrito no `README.md`.
- Use convenções de commit (ex: feat, fix, refactor, docs).
- Sempre abra Pull Requests para revisão.

---

Dessa forma, o Copilot sempre irá te ajudar de acordo com as regras, arquitetura e tecnologias do seu projeto Barber SaaS!
