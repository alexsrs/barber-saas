// src/lib/supabase.ts
// Arquivo de conexão com Supabase para o projeto Barber SaaS
// Utilize este client para todas operações com o banco

import { createClient } from '@supabase/supabase-js';

// Variáveis de ambiente configuradas em .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Criação do client Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Exemplo de uso:
 * import { supabase } from '@/lib/supabase';
 * const { data, error } = await supabase.from('barbearias').select('*');
 */
