// src/app/cadastrar-barbearia/page.tsx
// Página de cadastro de barbearia com autenticação Google

import { CadastroBarbeariaPageClient } from "@/components/CadastroBarbeariaClient";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function PageCadastroBarbearia() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/cadastrar-barbearia");
    return null;
  }
  return <CadastroBarbeariaPageClient />;
}
