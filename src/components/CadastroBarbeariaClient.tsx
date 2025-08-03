"use client";
import Image from "next/image";
import React from "react";

/**
 * Componente responsável pela renderização do formulário de cadastro de barbearia.
 * Utiliza React Hook Form e Zod para validação.
 */
const CadastroBarbeariaPageClient: React.FC = () => {
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
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Cadastro de Barbearia
        </h1>
      </div>
      {/* TODO: Implementar formulário com React Hook Form e Zod */}
      <form>
        <div className="mb-4">
          <label
            htmlFor="nome"
            className="block text-gray-700 font-medium mb-2"
          >
            Nome da Barbearia
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite o nome da barbearia"
          />
        </div>
        <button
          type="submit"
          className="bg-[#E11D48] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#C81A43] transition"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export { CadastroBarbeariaPageClient };
