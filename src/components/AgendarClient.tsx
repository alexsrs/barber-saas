"use client";
// Componente Client para agendamento
import { FormAgendamento, FormAgendamentoData } from "@/components/FormAgendamento";
import { supabase } from "@/lib/supabase";

interface AgendarClientProps {
  servicos: Array<{ id: number; nome: string }>;
}

/**
 * Wrapper client para o formulário de agendamento
 * Responsável por persistir o agendamento no Supabase
 */
export function AgendarClient({ servicos }: AgendarClientProps) {
  async function handleAgendar(data: FormAgendamentoData) {
    await supabase.from("agendamentos").insert({
      ...data,
      status: "agendado",
      created_at: new Date().toISOString(),
    });
    // TODO: Adicionar feedback ao usuário
  }

  // Corrige tipagem: id deve ser string
  const servicosFormatados = servicos.map(s => ({ ...s, id: String(s.id) }));
  return (
    <FormAgendamento servicos={servicosFormatados} onSubmit={handleAgendar} />
  );
}
