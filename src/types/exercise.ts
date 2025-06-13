
export type Exercise = {
  id: number
  name: string
  primaryMuscles: string
  equipment: string
  level: level
  instructions: string
}

export enum level{
  beginner,
  intermediate,
  advanced
}
export type ExerciseLibraryProps = {
  onSelectExercise: (exercise: Exercise) => void
}
