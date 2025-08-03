"use client";
// src/components/FormAgendamento.tsx
// Formulário de agendamento para Barber SaaS
// Utiliza React Hook Form, Zod e Tailwind CSS

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Schema de validação
const schema = z.object({
  nome_cliente: z.string().min(2, "Nome obrigatório"),
  whatsapp_cliente: z.string().min(9, "WhatsApp obrigatório"),
  servico_id: z.string().uuid("Serviço inválido"),
  data: z.string(),
  hora: z.string(),
});

export type FormAgendamentoData = z.infer<typeof schema>;

interface FormAgendamentoProps {
  servicos: Array<{ id: string; nome: string }>;
  onSubmit: (data: FormAgendamentoData) => void;
  isLoading?: boolean;
}

/**
 * Componente de formulário de agendamento
 * - Utiliza acessibilidade, validação e boas práticas
 */
export function FormAgendamento({ servicos, onSubmit, isLoading }: FormAgendamentoProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormAgendamentoData>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto p-4 bg-white rounded shadow">
      <label className="block">
        <span className="text-sm font-medium">Nome</span>
        <input {...register("nome_cliente")}
          className="border p-2 rounded w-full mt-1" placeholder="Nome do cliente" aria-invalid={!!errors.nome_cliente} />
        {errors.nome_cliente && <span className="text-red-500 text-xs">{errors.nome_cliente.message}</span>}
      </label>
      <label className="block">
        <span className="text-sm font-medium">WhatsApp</span>
        <input {...register("whatsapp_cliente")}
          className="border p-2 rounded w-full mt-1" placeholder="WhatsApp" aria-invalid={!!errors.whatsapp_cliente} />
        {errors.whatsapp_cliente && <span className="text-red-500 text-xs">{errors.whatsapp_cliente.message}</span>}
      </label>
      <label className="block">
        <span className="text-sm font-medium">Serviço</span>
        <select {...register("servico_id")}
          className="border p-2 rounded w-full mt-1" aria-invalid={!!errors.servico_id}>
          <option value="">Selecione o serviço</option>
          {servicos.map(s => (
            <option key={s.id} value={s.id}>{s.nome}</option>
          ))}
        </select>
        {errors.servico_id && <span className="text-red-500 text-xs">{errors.servico_id.message}</span>}
      </label>
      <label className="block">
        <span className="text-sm font-medium">Data</span>
        <input {...register("data")}
          type="date" className="border p-2 rounded w-full mt-1" aria-invalid={!!errors.data} />
        {errors.data && <span className="text-red-500 text-xs">{errors.data.message}</span>}
      </label>
      <label className="block">
        <span className="text-sm font-medium">Hora</span>
        <input {...register("hora")}
          type="time" className="border p-2 rounded w-full mt-1" aria-invalid={!!errors.hora} />
        {errors.hora && <span className="text-red-500 text-xs">{errors.hora.message}</span>}
      </label>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full" disabled={isLoading}>
        {isLoading ? "Agendando..." : "Agendar"}
      </button>
    </form>
  );
}
