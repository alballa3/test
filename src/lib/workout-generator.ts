import type { Equipment, Exercise, GeneratedWorkout, MuscleGroup, WorkoutSet } from "@/types/workout"

// Exercise database (simplified)
const exerciseDatabase = {
  Chest: [
    { name: "Bench Press", equipment: ["Full Gym", "Home Gym"], difficulty: 2 },
    { name: "Push-Ups", equipment: ["Bodyweight"], difficulty: 1 },
    { name: "Dumbbell Chest Press", equipment: ["Dumbbells Only", "Home Gym", "Full Gym"], difficulty: 1 },
    { name: "Incline Bench Press", equipment: ["Full Gym", "Home Gym"], difficulty: 2 },
    { name: "Cable Chest Fly", equipment: ["Cables", "Full Gym"], difficulty: 2 },
    { name: "Chest Dips", equipment: ["Bodyweight", "Full Gym"], difficulty: 2 },
    { name: "Machine Chest Press", equipment: ["Machines", "Full Gym"], difficulty: 1 },
  ],
  Back: [
    { name: "Pull-Ups", equipment: ["Bodyweight", "Full Gym"], difficulty: 2 },
    { name: "Barbell Rows", equipment: ["Full Gym", "Home Gym"], difficulty: 2 },
    { name: "Lat Pulldowns", equipment: ["Cables", "Full Gym", "Machines"], difficulty: 1 },
    { name: "Dumbbell Rows", equipment: ["Dumbbells Only", "Home Gym", "Full Gym"], difficulty: 1 },
    { name: "Cable Rows", equipment: ["Cables", "Full Gym"], difficulty: 1 },
    { name: "Deadlifts", equipment: ["Full Gym", "Home Gym"], difficulty: 3 },
    { name: "Band Pull-Aparts", equipment: ["Resistance Bands"], difficulty: 1 },
  ],
  Legs: [
    { name: "Squats", equipment: ["Bodyweight", "Full Gym", "Home Gym"], difficulty: 2 },
    { name: "Lunges", equipment: ["Bodyweight", "Dumbbells Only", "Full Gym"], difficulty: 1 },
    { name: "Leg Press", equipment: ["Machines", "Full Gym"], difficulty: 1 },
    { name: "Romanian Deadlifts", equipment: ["Full Gym", "Home Gym", "Dumbbells Only"], difficulty: 2 },
    { name: "Leg Extensions", equipment: ["Machines", "Full Gym"], difficulty: 1 },
    { name: "Leg Curls", equipment: ["Machines", "Full Gym"], difficulty: 1 },
    { name: "Calf Raises", equipment: ["Bodyweight", "Dumbbells Only", "Full Gym"], difficulty: 1 },
  ],
  Shoulders: [
    { name: "Overhead Press", equipment: ["Full Gym", "Home Gym", "Dumbbells Only"], difficulty: 2 },
    { name: "Lateral Raises", equipment: ["Dumbbells Only", "Home Gym", "Full Gym"], difficulty: 1 },
    { name: "Front Raises", equipment: ["Dumbbells Only", "Home Gym", "Full Gym"], difficulty: 1 },
    { name: "Face Pulls", equipment: ["Cables", "Resistance Bands", "Full Gym"], difficulty: 1 },
    { name: "Upright Rows", equipment: ["Dumbbells Only", "Home Gym", "Full Gym"], difficulty: 2 },
    { name: "Shoulder Press Machine", equipment: ["Machines", "Full Gym"], difficulty: 1 },
    { name: "Pike Push-Ups", equipment: ["Bodyweight"], difficulty: 2 },
  ],
  Arms: [
    { name: "Bicep Curls", equipment: ["Dumbbells Only", "Home Gym", "Full Gym"], difficulty: 1 },
    { name: "Tricep Pushdowns", equipment: ["Cables", "Full Gym"], difficulty: 1 },
    { name: "Hammer Curls", equipment: ["Dumbbells Only", "Home Gym", "Full Gym"], difficulty: 1 },
    { name: "Skull Crushers", equipment: ["Dumbbells Only", "Home Gym", "Full Gym"], difficulty: 2 },
    { name: "Cable Curls", equipment: ["Cables", "Full Gym"], difficulty: 1 },
    { name: "Dips", equipment: ["Bodyweight", "Full Gym"], difficulty: 2 },
    { name: "Band Curls", equipment: ["Resistance Bands"], difficulty: 1 },
  ],
  Core: [
    { name: "Planks", equipment: ["Bodyweight"], difficulty: 1 },
    { name: "Crunches", equipment: ["Bodyweight"], difficulty: 1 },
    { name: "Russian Twists", equipment: ["Bodyweight", "Dumbbells Only"], difficulty: 1 },
    { name: "Leg Raises", equipment: ["Bodyweight", "Full Gym"], difficulty: 2 },
    { name: "Cable Crunches", equipment: ["Cables", "Full Gym"], difficulty: 2 },
    { name: "Ab Wheel Rollouts", equipment: ["Home Gym", "Full Gym"], difficulty: 3 },
    { name: "Mountain Climbers", equipment: ["Bodyweight"], difficulty: 1 },
  ],
}

// AI workout generation logic
export const generateWorkoutBasedOnInputs = (
  description: string,
  duration: number,
  selectedEquipment: Equipment[],
  selectedMuscleGroups: MuscleGroup[],
): GeneratedWorkout => {
  // Determine workout focus from description and selected muscle groups
  const lowerDescription = description.toLowerCase()

  // Default to a balanced workout if no specific focus is detected
  let workoutName = "Balanced Full Body Workout"
  let workoutDescription = "A well-rounded workout targeting multiple muscle groups for overall fitness."
  let intensity: "Low" | "Medium" | "High" = "Medium"
  let caloriesBurned = Math.round(duration * 7.5)

  // Analyze description for keywords
  if (lowerDescription.includes("strength") || lowerDescription.includes("strong")) {
    workoutName = "Strength Building Workout"
    workoutDescription = "Focus on building strength with compound movements and progressive overload."
    intensity = "High"
    caloriesBurned = Math.round(duration * 8)
  } else if (lowerDescription.includes("cardio") || lowerDescription.includes("endurance")) {
    workoutName = "Cardio and Endurance Workout"
    workoutDescription =
      "Improve cardiovascular health and muscular endurance with higher reps and shorter rest periods."
    intensity = "High"
    caloriesBurned = Math.round(duration * 10)
  } else if (lowerDescription.includes("muscle") || lowerDescription.includes("hypertrophy")) {
    workoutName = "Muscle Building Workout"
    workoutDescription =
      "Designed for hypertrophy with moderate weights, higher volume, and optimal time under tension."
    intensity = "Medium"
    caloriesBurned = Math.round(duration * 7)
  } else if (lowerDescription.includes("tone") || lowerDescription.includes("definition")) {
    workoutName = "Muscle Toning Workout"
    workoutDescription = "Focus on muscle definition with a mix of resistance training and conditioning."
    intensity = "Medium"
    caloriesBurned = Math.round(duration * 8.5)
  }

  // Adjust name based on selected muscle groups
  if (selectedMuscleGroups.length === 1) {
    workoutName = `${workoutName}: ${selectedMuscleGroups[0]}`
  } else if (selectedMuscleGroups.includes("Upper Body")) {
    workoutName = `${workoutName}: Upper Body Focus`
  } else if (selectedMuscleGroups.includes("Lower Body")) {
    workoutName = `${workoutName}: Lower Body Focus`
  }

  // Generate appropriate exercises based on equipment and muscle groups
  const exercises: Exercise[] = []

  // Determine which muscle groups to target
  let muscleGroupsToTarget: string[] = []

  if (selectedMuscleGroups.includes("Full Body")) {
    muscleGroupsToTarget = ["Chest", "Back", "Legs", "Shoulders", "Arms", "Core"]
  } else if (selectedMuscleGroups.includes("Upper Body")) {
    muscleGroupsToTarget = ["Chest", "Back", "Shoulders", "Arms"]
  } else if (selectedMuscleGroups.includes("Lower Body")) {
    muscleGroupsToTarget = ["Legs", "Core"]
  } else {
    // Use specifically selected muscle groups
    selectedMuscleGroups.forEach((group) => {
      if (group !== "Full Body" && group !== "Upper Body" && group !== "Lower Body") {
        muscleGroupsToTarget.push(group)
      }
    })

    // If nothing specific was selected, default to full body
    if (muscleGroupsToTarget.length === 0) {
      muscleGroupsToTarget = ["Chest", "Back", "Legs", "Shoulders", "Arms", "Core"]
    }
  }

  // Determine number of exercises based on duration
  const exerciseCount = Math.max(4, Math.min(8, Math.floor(duration / 10)))

  // Distribute exercises among muscle groups
  let exerciseId = 1

  // Ensure we have equipment selected
  const availableEquipment =
    selectedEquipment.length > 0
      ? selectedEquipment
      : (["Full Gym", "Home Gym", "Dumbbells Only", "Bodyweight"] as Equipment[])

  // Add "Full Gym" if it includes specific equipment types
  if (availableEquipment.includes("Cables") || availableEquipment.includes("Machines")) {
    if (!availableEquipment.includes("Full Gym")) {
      availableEquipment.push("Full Gym")
    }
  }

  // Generate exercises for each targeted muscle group
  muscleGroupsToTarget.forEach((muscleGroup) => {
    if (exercises.length >= exerciseCount) return

    // Get exercises for this muscle group that match available equipment
    const availableExercises = exerciseDatabase[muscleGroup as keyof typeof exerciseDatabase].filter((ex) =>
      ex.equipment.some((eq) => availableEquipment.includes(eq as Equipment)),
    )

    if (availableExercises.length > 0) {
      // Select a random exercise
      const randomIndex = Math.floor(Math.random() * availableExercises.length)
      const selectedExercise = availableExercises[randomIndex]

      // Generate sets based on difficulty and workout type
      const setCount = lowerDescription.includes("strength") ? 5 : lowerDescription.includes("endurance") ? 3 : 4

      const sets: WorkoutSet[] = []
      for (let i = 1; i <= setCount; i++) {
        // Generate appropriate weight and reps
        let weight = 0
        let reps = 0

        if (lowerDescription.includes("strength")) {
          weight = 50 + selectedExercise.difficulty * 20 + i * 5
          reps = 6 - (i % 3)
        } else if (lowerDescription.includes("endurance")) {
          weight = 30 + selectedExercise.difficulty * 10
          reps = 12 + i * 2
        } else if (lowerDescription.includes("muscle") || lowerDescription.includes("hypertrophy")) {
          weight = 40 + selectedExercise.difficulty * 15 + i * 5
          reps = 8 + (i % 4)
        } else {
          weight = 40 + selectedExercise.difficulty * 10
          reps = 10
        }

        // Adjust weight for bodyweight exercises
        if (selectedExercise.equipment.includes("Bodyweight")) {
          weight = 0
        }

        sets.push({
          id: i,
          weight,
          reps,
          isCompleted: false,
        })
      }

      // Determine rest time based on workout type
      let restTime = 60
      if (lowerDescription.includes("strength")) {
        restTime = 90
      } else if (lowerDescription.includes("endurance")) {
        restTime = 30
      } else if (lowerDescription.includes("muscle") || lowerDescription.includes("hypertrophy")) {
        restTime = 60
      }

      // Add exercise to workout
      exercises.push({
        id: exerciseId++,
        name: selectedExercise.name,
        sets,
        restTime,
        isExpanded: false,
        muscleGroup: muscleGroup as MuscleGroup,
        equipment: selectedExercise.equipment[0] as Equipment,
        difficulty: selectedExercise.difficulty as 1 | 2 | 3,
      })
    }
  })

  // If we don't have enough exercises, add more from random muscle groups
  while (exercises.length < exerciseCount) {
    const randomMuscleGroup = muscleGroupsToTarget[Math.floor(Math.random() * muscleGroupsToTarget.length)]

    // Get exercises for this muscle group that match available equipment
    const availableExercises = exerciseDatabase[randomMuscleGroup as keyof typeof exerciseDatabase]
      .filter((ex) => ex.equipment.some((eq) => availableEquipment.includes(eq as Equipment)))
      // Filter out exercises we've already added
      .filter((ex) => !exercises.some((e) => e.name === ex.name))

    if (availableExercises.length > 0) {
      // Select a random exercise
      const randomIndex = Math.floor(Math.random() * availableExercises.length)
      const selectedExercise = availableExercises[randomIndex]

      // Generate sets (similar logic as above)
      const setCount = lowerDescription.includes("strength") ? 5 : lowerDescription.includes("endurance") ? 3 : 4

      const sets: WorkoutSet[] = []
      for (let i = 1; i <= setCount; i++) {
        let weight = 0
        let reps = 0

        if (lowerDescription.includes("strength")) {
          weight = 50 + selectedExercise.difficulty * 20 + i * 5
          reps = 6 - (i % 3)
        } else if (lowerDescription.includes("endurance")) {
          weight = 30 + selectedExercise.difficulty * 10
          reps = 12 + i * 2
        } else if (lowerDescription.includes("muscle") || lowerDescription.includes("hypertrophy")) {
          weight = 40 + selectedExercise.difficulty * 15 + i * 5
          reps = 8 + (i % 4)
        } else {
          weight = 40 + selectedExercise.difficulty * 10
          reps = 10
        }

        if (selectedExercise.equipment.includes("Bodyweight")) {
          weight = 0
        }

        sets.push({
          id: i,
          weight,
          reps,
          isCompleted: false,
        })
      }

      let restTime = 60
      if (lowerDescription.includes("strength")) {
        restTime = 90
      } else if (lowerDescription.includes("endurance")) {
        restTime = 30
      } else if (lowerDescription.includes("muscle") || lowerDescription.includes("hypertrophy")) {
        restTime = 60
      }

      exercises.push({
        id: exerciseId++,
        name: selectedExercise.name,
        sets,
        restTime,
        isExpanded: false,
        muscleGroup: randomMuscleGroup as MuscleGroup,
        equipment: selectedExercise.equipment[0] as Equipment,
        difficulty: selectedExercise.difficulty as 1 | 2 | 3,
      })
    }
  }

  return {
    name: workoutName,
    description: workoutDescription,
    exercises,
    duration,
    intensity,
    caloriesBurned,
  }
}
