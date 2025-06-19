import { client } from "./supabase";

export async function storeWorkoutOnline(workout: any, is_template: boolean) {
  const user = await client.auth.getSession();
  if (!user.data.session) {
    throw new Error("User not logged in");
  }
  const { data, error } = await client.from("workouts").insert([
    {
      user_id: user.data.session.user.id,
      name: workout.name,
      description: workout.description,
      exercises: workout.exercises,
      timer: workout.timer,
      is_template,
    },
  ]);
  console.log(error);
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
export async function getAllTemplateOnline() {
  const user_id = (await client.auth.getSession()).data.session?.user.id;
  const template = await client
    .from("workouts")
    .select("*")
    .eq("user_id", user_id)
    .eq("is_template", true);
  return template.data;
}
export async function getAllWorkoutOnline() {
  const user_id = (await client.auth.getSession()).data.session?.user.id;
  const template = await client
    .from("workouts")
    .select("*")
    .eq("user_id", user_id)
    .eq("is_template", false);
  return template.data;
}
export async function getWorkoutOnline(name: string) {
  const user_id = (await client.auth.getSession()).data.session?.user.id;
  const workout = await client
    .from("workouts")
    .select("*")
    .eq("user_id", user_id)
    .eq("name", name)
    .order("created_at", { ascending: false })
    .limit(1);
  console.log(workout);
  return workout.data?.[0];
}
