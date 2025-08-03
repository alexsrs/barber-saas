"use client";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
  // Máscara de CNPJ
  function formatCnpj(value: string) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  }
import { supabase } from "@/lib/supabase";

/**
 * Esquema de validação do formulário de cadastro de barbearia.
 */
const cadastroBarbeariaSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  telefone: z.string().min(8, "Informe um telefone válido"),
  endereco: z.string().min(5, "Informe um endereço válido"),
  foto: z.string().url("URL inválida").optional().or(z.literal("").optional()),
  cnpj: z.string().min(14, "CNPJ deve ter 14 dígitos").max(18, "CNPJ inválido").optional().or(z.literal("").optional()),
  descricao: z.string().max(200, "Máximo 200 caracteres").optional().or(z.literal("").optional()),
});

type CadastroBarbeariaData = z.infer<typeof cadastroBarbeariaSchema>;

/**
 * Componente responsável pelo formulário de cadastro de barbearia.
 * Utiliza NextAuth para autenticação e React Hook Form + Zod para validação.
 */
export function CadastroBarbeariaPageClient() {
  const { data: session } = useSession();
  const [sucesso, setSucesso] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CadastroBarbeariaData>({
    resolver: zodResolver(cadastroBarbeariaSchema),
  });

  async function onSubmit(data: CadastroBarbeariaData) {
    if (!session?.user?.email) return;
    const { error } = await supabase.from("barbearias").insert({
      ...data,
      usuario: session.user.email,
      created_at: new Date().toISOString(),
    });
    if (!error) {
      setSucesso(true);
      reset();
    } else {
      alert("Erro ao cadastrar barbearia: " + error.message);
    }
  }

  if (!session) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto mt-10 text-center">
        <h2 className="text-xl font-bold text-[#1F2937] mb-4">Faça login para cadastrar sua barbearia</h2>
        <a
          href="/api/auth/signin"
          className="bg-[#3B82F6] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#2563EB] transition"
        >
          Entrar com Google
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto mt-10">
      <div className="flex flex-col items-center mb-6">
        <Image
          src="/file.svg"
          alt="Logo Barbearia"
          width={64}
          height={64}
          priority
        />
        <h1 className="text-2xl font-bold text-[#1F2937] mb-4">
          Cadastro de Barbearia
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="nome" className="block text-[#1F2937] font-medium mb-1">
            Nome da Barbearia
          </label>
          <input
            id="nome"
            {...register("nome")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] bg-[#F3F4F6]"
            placeholder="Digite o nome da barbearia"
          />
          {errors.nome && (
            <span className="text-[#E11D48] text-sm">{errors.nome.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="telefone" className="block text-[#1F2937] font-medium mb-1">
            Telefone
          </label>
          <input
            id="telefone"
            {...register("telefone")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] bg-[#F3F4F6]"
            placeholder="(99) 99999-9999"
          />
          {errors.telefone && (
            <span className="text-[#E11D48] text-sm">{errors.telefone.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="endereco" className="block text-[#1F2937] font-medium mb-1">
            Endereço
          </label>
          <input
            id="endereco"
            {...register("endereco")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] bg-[#F3F4F6]"
            placeholder="Rua, número, bairro"
          />
          {errors.endereco && (
            <span className="text-[#E11D48] text-sm">{errors.endereco.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="foto" className="block text-[#1F2937] font-medium mb-1">
            Foto (URL)
          </label>
          <input
            id="foto"
            {...register("foto")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] bg-[#F3F4F6]"
            placeholder="https://..."
            type="url"
          />
          {errors.foto && (
            <span className="text-[#E11D48] text-sm">{errors.foto.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="cnpj" className="block text-[#1F2937] font-medium mb-1">
            CNPJ
          </label>
          <input
            id="cnpj"
            {...register("cnpj")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] bg-[#F3F4F6]"
            placeholder="00.000.000/0000-00"
            type="text"
            onChange={e => {
              e.target.value = formatCnpj(e.target.value);
              // Chama o handler padrão do RHF
              register("cnpj").onChange(e);
            }}
            maxLength={18}
          />
          {errors.cnpj && (
            <span className="text-[#E11D48] text-sm">{errors.cnpj.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="descricao" className="block text-[#1F2937] font-medium mb-1">
            Descrição
          </label>
          <textarea
            id="descricao"
            {...register("descricao")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] bg-[#F3F4F6]"
            placeholder="Breve descrição da barbearia (opcional)"
            maxLength={200}
          />
          {errors.descricao && (
            <span className="text-[#E11D48] text-sm">{errors.descricao.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#E11D48] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#C81A43] transition w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Cadastrando..." : "Cadastrar"}
        </button>
        {sucesso && (
          <div className="text-[#3B82F6] text-center mt-2">
            Barbearia cadastrada com sucesso!
          </div>
        )}
      </form>
    </div>
  );
}
