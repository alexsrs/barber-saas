// src/app/teste-supabase.ts
// Teste de conexão com Supabase
// Executa uma consulta simples na tabela 'barbearia' para validar integração

import { supabase } from "../lib/supabase";

export async function testarConexaoSupabase() {
  // Consulta simples na tabela 'barbearia'
  const { data, error } = await supabase.from("barbearias").select("*").limit(1);
  if (error) {
    // Retorna erro para debug
    return { sucesso: false, erro: error.message };
  }
  // Retorna dados se conexão estiver ok
  return { sucesso: true, dados: data };
}

/**
 * Como usar:
 * import { testarConexaoSupabase } from "@/app/teste-supabase";
 * const resultado = await testarConexaoSupabase();
 * console.log(resultado);
 */
