# NEXT-STEPS – Barber SaaS

Este arquivo organiza o plano de implementação do projeto, com etapas claras para evoluir o MVP e garantir um SaaS funcional, seguro e escalável.

---

## 1. Preparação do Ambiente
- [x] Limpar dependências e organizar o `package.json`
- [x] Atualizar README.md e copilot-instructions
- [x] Configurar `.env.local` com chaves do Supabase e Evolution API

---

## 2. Modelagem de Dados (Supabase)
- [x] Criar tabelas: `barbearias`, `servicos`, `agendamentos`
- [x] Conexão Supabase validada e testada
- [x] Definir relacionamentos e campos conforme o modelo sugerido
- [ ] Executar scripts SQL no Supabase para garantir estrutura correta

## 2.1. Scripts SQL sugeridos
Consulte o README ou peça ao tifurico para gerar os scripts SQL das tabelas e relacionamentos.
## 3. Estrutura Inicial do Projeto
- [x] Organizar pastas: `src/app`, `src/components`, `src/lib`, `public`, `styles`
- [x] Configurar Tailwind CSS
- [x] Criar instância do Supabase client (`src/lib/supabase.ts`)
- [ ] Configurar Tailwind CSS
- [ ] Criar instância do Supabase client (`src/lib/supabase.ts`)
- [ ] Formulário de agendamento com React Hook Form + Zod
- [ ] Integração Supabase para persistência dos dados
- [ ] Função de envio WhatsApp via Evolution API (`src/lib/api.ts`)
- [ ] Página pública `[slug].tsx` para exibir barbearia e horários
- [ ] Dashboard para barbearia gerenciar agendamentos e serviços

---

## 5. Automação e Lembretes (n8n)
- [ ] Criar fluxo n8n para buscar agendamentos e enviar lembrete via WhatsApp 1h antes
- [ ] Testar integração Evolution API + n8n

---

## 6. Melhorias e Admin
- [ ] Exportação de dados (CSV)
- [ ] Gestão de planos e limites de agendamentos
- [ ] Painel admin SaaS para listar barbearias

---

## 7. Boas Práticas e Documentação
- [ ] Documentar endpoints, componentes e fluxos n8n
- [ ] Escrever testes automatizados
- [ ] Atualizar README.md conforme novas funcionalidades

---

## 8. Deploy e Monitoramento
- [ ] Deploy no Vercel
- [ ] Monitorar performance (Core Web Vitals)
- [ ] Configurar domínio e SSL

---

## 9. Próximos Passos
- Priorize as tarefas do MVP
- Avance para automações e dashboard
- Mantenha a documentação e instruções sempre atualizadas

Se quiser detalhar alguma etapa ou pedir exemplos de código, fluxos n8n ou scripts SQL, peça aqui!
