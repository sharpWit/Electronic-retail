import supabase from "@/server/DB/supabase ";

export async function getSlider() {
  const { data, error } = await supabase.from("slider").select("*");

  if (error) {
    console.log(error);
    throw new Error("Slider cannot be loaded!");
  }

  return data;
}
