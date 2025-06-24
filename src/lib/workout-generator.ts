import { client } from "@/supabase/supabase";
import type { Equipment, MuscleGroup, Set } from "@/types/workout";
type exercises = {
  id: number;
  name: string;
  isExpanded?: boolean;

  difficulty: number; // Consider using an enum if values are fixed (e.g., 1 = Easy, 2 = Medium, etc.)
  restTime: number; // in seconds
  muscleGroup: string;
  equipment: string;

  sets: number | Set[];
};

export type WorkoutPlan = {
  name: string;
  description: string;
  exercises: exercises[];
  duration: string; // in minutes; can also be a number if preferred
  intensity: "Low" | "Medium" | "High"; // You can expand this union if needed
  caloriesBurned: number;
};

// AI workout generation logic
export const generateWorkoutBasedOnInputs = async (
  description: string,
  selectedEquipment: Equipment[],
  selectedMuscleGroups: MuscleGroup[]
) => {
  const user = (await client.auth.getSession()).data.session?.user;
  console.log(user);
  const prompt = `
  You are an elite fitness coach and certified personal trainer with extensive experience in creating customized workout programs. Design a safe, effective, and personalized workout routine optimized for the following parameters.

User Profile:
- Height: ${user?.user_metadata?.height}
- Weight: ${user?.user_metadata?.weight}
- Age: ${
    new Date().getFullYear() -
    new Date(user?.user_metadata?.birthdate).getFullYear()
  }
- Gender: ${user?.user_metadata?.gender}

Workout Specifications:
- Available Equipment ${selectedEquipment}
- Target Muscle Groups: ${selectedMuscleGroups}
- Special Instructions: ${description}

Critical Requirements:
1. Design age-appropriate exercises with proper progression
2. Include detailed warm-up sequence and mobility work
3. Emphasize perfect form and injury prevention
4. Optimize work-rest ratios for maximum results
5. Implement progressive overload safely
6. Ensure exercise variety for engagement
7. Include proper cool-down recommendations

Provide a structured workout plan in this exact JSON format:

{
  "name": "string - Create a motivating, descriptive workout name",
  "description": "string - Comprehensive overview with safety guidelines, form cues, and key focus areas(Be short and concise)",
  "exercises": [
    {
      "id": "number - Sequential exercise number",
      "name": "string - Clear, specific exercise name", 
      "difficulty": "number from 1-3 - Either '1=Beginner', '2=Intermediate', or '3=Advanced'",
      "restTime": "number - Rest period in seconds",
      "muscleGroup": "string - Primary muscle group targeted",
      "equipment": "string - Required equipment",
      "sets": how much sets you want to do
    }
  ],
  "duration": "string - Total workout duration in minutes",
  "intensity": "string - Either 'Low', 'Medium', or 'High'",
  "caloriesBurned": "number - Estimated caloric expenditure"
}

Return only valid JSON without additional text or formatting. Ensure all exercises are appropriate for a teenage athlete, focusing on foundational movements and proper progression.`;
  console.log(prompt);
  const reponse =await client.functions.invoke("ai", {
    body: {prompt:"PRINT HELLO WORLD"}
  })
  console.log(reponse)
  // let workout_plan = (await response.json()) as unknown as WorkoutPlan;
  // console.log(workout_plan);
  // let total_set = workout_plan.exercises.map((exercise) => {
  //   let sets_number = exercise.sets as number;
  //   let sets = [];
  //   exercise["isExpanded"] = true;
  //   for (let i = 0; i < sets_number; i++) {
  //     sets.push({
  //       id: i,
  //       weight: 1,
  //       reps: 0,
  //     });
  //   }
  //   exercise.sets = sets;
  //   return exercise;
  // });
  // let data = {
  //   id: crypto.randomUUID(),
  //   name: workout_plan.name,
  //   description: workout_plan.description,
  //   exercises: total_set,
  //   duration: workout_plan.duration,
  //   intensity: workout_plan.intensity,
  //   caloriesBurned: workout_plan.caloriesBurned,
  //   is_template: true,
  // };
  // console.log(data);
  // return data;
};
