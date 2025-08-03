"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSession } from "next-auth/react";
import { supabase } from "@/lib/supabase";

const schema = z.object({
  nome: z.string().min(2, "Nome obrigatório"),
  telefone: z.string().min(8, "Telefone obrigatório"),
  endereco: z.string().min(5, "Endereço obrigatório"),
});

export type FormCadastroBarbeariaData = z.infer<typeof schema>;

interface FormCadastroBarbeariaProps {
  onSuccess?: () => void;
}

/**
 * Formulário de cadastro de barbearia
 * Autenticado via Google (NextAuth)
 */
export function FormCadastroBarbearia({ onSuccess }: FormCadastroBarbeariaProps) {
  const { data: session } = useSession();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormCadastroBarbeariaData>({
    resolver: zodResolver(schema)
  });

  async function onSubmit(data: FormCadastroBarbeariaData) {
    if (!session?.user?.email) return;
    await supabase.from("barbearia").insert({
      ...data,
      usuario: session.user.email,
      created_at: new Date().toISOString(),
    });
    if (onSuccess) onSuccess();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("nome")} className="border p-2 rounded w-full" placeholder="Nome da barbearia" />
      {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}
      <input {...register("telefone")} className="border p-2 rounded w-full" placeholder="Telefone" />
      {errors.telefone && <span className="text-red-500 text-sm">{errors.telefone.message}</span>}
      <input {...register("endereco")} className="border p-2 rounded w-full" placeholder="Endereço" />
      {errors.endereco && <span className="text-red-500 text-sm">{errors.endereco.message}</span>}
      <button type="submit" className="bg-[#E11D48] text-white px-4 py-2 rounded w-full" disabled={isSubmitting}>
        {isSubmitting ? "Cadastrando..." : "Cadastrar Barbearia"}
      </button>
    </form>
  );
}
