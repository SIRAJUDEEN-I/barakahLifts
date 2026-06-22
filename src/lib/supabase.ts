import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ServiceRequired = 'AMC' | 'Repair' | 'Modernization' | 'Installation';

export interface EnquiryPayload {
  name: string;
  phone: string;
  email: string;
  building_name: string;
  location: string;
  number_of_elevators: number;
  service_required: ServiceRequired;
  message: string;
}

export async function submitEnquiry(payload: EnquiryPayload) {
  const { data, error } = await supabase
    .from('enquiries')
    .insert([payload])
    .select('id')
    .single();
  if (error) throw error;
  return data;
}
