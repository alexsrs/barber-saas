// src/app/agendar/page.tsx
// Página pública de agendamento para Barber SaaS
// Exibe o formulário de agendamento e busca serviços do Supabase

import { AgendarClient } from "@/components/AgendarClient";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

async function getServicos() {
  const { data } = await supabase.from("servicos").select("id, nome").eq("ativo", true);
  return data ?? [];
}

export default async function PageAgendar() {
  const servicos = await getServicos();


  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/file.svg"
            alt="Logo Barbearia"
            width={64}
            height={64}
            priority
          />
          <h1 className="text-xl font-bold mt-2">Agende seu horário</h1>
        </div>
        <AgendarClient servicos={servicos} />
      </div>
    </main>
  );
}
