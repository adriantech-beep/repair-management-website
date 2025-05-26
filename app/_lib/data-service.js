import { supabase } from "./supabase";

export async function getCompanySettings() {
  const { data, error } = await supabase
    .from("company_settings")
    .select("*")
    .single();

  if (error) {
    console.error(error);
    throw new Error("Company settings could not be loaded");
  }

  return data;
}
