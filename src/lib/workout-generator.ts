import type { Equipment, GeneratedWorkout, MuscleGroup } from "@/types/workout"
import openai from "openai";
// Exercise database (simplified)

export const openAi = new openai({
  baseURL: 'https://api.deepseek.com',
  apiKey: import.meta.env.VITE_DEEPSEEK_API_KEY,
  dangerouslyAllowBrowser: true
})
// AI workout generation logic
export const generateWorkoutBasedOnInputs = async (
  description: string,
  selectedEquipment: Equipment[],
  selectedMuscleGroups: MuscleGroup[],
): Promise<GeneratedWorkout> => {
  // Determine workout focus from description and selected muscle groups

  // Default to a balanced workout if no specific focus is detected



  const prompt = `
You are an elite fitness coach and certified personal trainer with extensive experience in creating customized workout programs. Design a safe, effective, and personalized workout routine optimized for the following parameters.

User Profile:
- Height: 170 cm
- Weight: 85 kg
- Age: 16 (Note: Prioritize age-appropriate exercises and proper form)
- Gender: Male
- Fitness Goal: Get fit

Workout Specifications:
- Available Equipment: ${selectedEquipment.join(", ")}
- Target Muscle Groups: ${selectedMuscleGroups.join(", ")}
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
  "description": "string - Comprehensive overview with safety guidelines, form cues, and key focus areas",
  "exercises": [
    {
      "id": "number - Sequential exercise number",
      "name": "string - Clear, specific exercise name",
      "difficulty": "number from 1-3 - Either '1=Beginner', '2=Intermediate', or '3=Advanced'",
      "restTime": "number - Rest period in seconds",
      "muscleGroup": "string - Primary muscle group targeted",
      "isExpanded": false,
      "equipment": "string - Required equipment",
      "sets": [
        {
          "id": "number - Sequential set number",
          "reps": "number - Target repetitions",
          "weight": "number - Recommended weight in kg (0 for bodyweight)",
          "isCompleted": false
        }
      ]
    }
  ],
  "duration": "string - Total workout duration in minutes",
  "intensity": "string - Either 'Low', 'Medium', or 'High'",
  "caloriesBurned": "number - Estimated caloric expenditure"
}

Return only valid JSON without additional text or formatting. Ensure all exercises are appropriate for a teenage athlete, focusing on foundational movements and proper progression.`;
  const open = await openAi.chat.completions.create({
    model: "deepseek-chat",
    messages: [{ role: "user", content: prompt }],
    stream: false,
  })
  console.log(open.choices[0].message.content)
  const cleanContent = open.choices[0].message.content?.replace(/```json|```/g, '').trim() ?? '';

  let Zap = JSON.parse(cleanContent)
console.log(Zap)
  // Generate workout based on focus and selected equipment and muscle groups
  // Implement AI logic here to generate a workout based on the user's preferences
  return Zap
}
