export type User = {
    id: number;
    name: string;
    email: string;
    user_data: {
        height: string;
        weight: string;
        birth_date: string; // format: "DD/MM/YYYY"
        gender: 'Female' | 'Male' ; 
      
    };
    created_at: string; // ISO 8601 format
    updated_at: string; // ISO 8601 format
};
export type Profile = {
    bio: string;
    workout:number;
    achievements: any[]; // You can define a specific Achievement type if needed
    goals: any[];        // You can define a specific Goal type if needed
    created_at: string; // ISO date string
    updated_at: string;
    user: User;
};
