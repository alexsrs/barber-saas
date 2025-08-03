// src/app/teste-supabase-run.ts
// Executa o teste de conexão Supabase e exibe resultado no console

import { testarConexaoSupabase } from "./teste-supabase";

async function runTeste() {
  const resultado = await testarConexaoSupabase();
  if (resultado.sucesso) {
    console.log("Conexão Supabase OK! Dados:", resultado.dados);
  } else {
    console.error("Erro na conexão Supabase:", resultado.erro);
  }
}

runTeste();
