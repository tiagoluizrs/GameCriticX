import { supabase } from './SupabaseClient';

const save = async (table: string, data: any) => {
  const { data: result, error } = await supabase
    .from(table)
    .insert(data)
  if (error) {
    console.error('Error saving data:', error);
    throw error;
  }
}

const get = async (table: string, param: string, value: any) => {
  const { data, error } = await supabase
    .from(table)
    .select('*')
    .eq(param, value)
    .single();
  if (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
  return data;
}

export {
  save,
  get,
}