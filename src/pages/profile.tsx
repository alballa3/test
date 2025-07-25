import ProfileHeader from "@/components/profile/profile-header";
import ProfileDetails from "@/components/profile/profile-details";
import FitnessGoals from "@/components/profile/fitness-goals";
// import AchievementBadges from "@/components/profile/achievement-badges"
// import ProfileSettings from "@/components/profile/profile-settings"
import { useEffect, useState } from "react";
import { Profile, User } from "@/types/user";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { AppHeader } from "@/components/layout/app-header";
import { AlertCircle, WifiOff } from "lucide-react";
import { client } from "@/supabase/supabase";
import moment from "moment";

export default function ProfilePage() {
  const [user, setUser] = useState<User>();
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [profile, setProfile] = useState<Profile>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Handle online/offline status changes
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      if (!isOnline) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const auth = (await client.auth.getSession()).data.session?.user;
        console.log(auth);
        let workoutCount = (
          await client
            .from("workouts")
            .select("*", { count: "exact", head: true })
            .eq("user_id", auth?.id)
        ).count;
        let goals = await client
          .from("goals")
          .select("*")
          .eq("user_id", auth?.id);
        let user: User = {
          id: 0,
          name: auth?.user_metadata.name,
          email: auth?.email || "NOT SET",
          user_data: {
            height: auth?.user_metadata.height,
            weight: auth?.user_metadata.weight,
            birth_date: auth?.user_metadata.birthdate,
            gender: auth?.user_metadata.gender,
          },
          created_at: "",
          updated_at: "",
        };
        let profile: Profile = {
          bio: auth?.user_metadata.bio,
          workout: workoutCount || 0,
          achievements: [],
          goals: goals.data || [],
          created_at: auth?.created_at || moment.now().toString(),
          updated_at: auth?.updated_at || moment.now().toString(),
          user,
        };

        setProfile(profile);
        setUser(user);
      } catch (err) {
        // setProfile()
        // setUser(user.data.user)
        setError("Failed to load profile data. Please try again later.");
        console.error("Error fetching profile:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [isOnline]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-950 text-white pb-20 pt-4 md:pt-8 px-4">
      <AppHeader />

      {!isOnline && (
        <div className="max-w-5xl mx-auto my-6 bg-red-900/30 border border-red-800 rounded-lg p-4 flex items-center gap-3 animate-pulse">
          <WifiOff className="h-5 w-5 text-red-400" />
          <div>
            <h3 className="font-medium text-red-300">You're offline</h3>
            <p className="text-sm text-red-200/80">
              Please check your internet connection to view your profile
            </p>
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="max-w-5xl mx-auto flex justify-center items-center py-12">
          <div className="flex flex-col items-center gap-3">
            <div className="h-10 w-10 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent animate-spin"></div>
            <p className="text-zinc-400">Loading profile...</p>
          </div>
        </div>
      ) : error ? (
        <div className="max-w-5xl mx-auto my-6 bg-red-900/30 border border-red-800 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="h-5 w-5 text-red-400" />
          <p className="text-red-200">{error}</p>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto space-y-8">
          {profile && <ProfileHeader user={profile} setUser={setUser} />}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              {user && (
                <ProfileDetails
                  user={user}
                  setUser={setUser}
                  setProfile={(profile: Profile) => setProfile(profile)}
                  profile={profile!}
                />
              )}
              {profile && <FitnessGoals profile={profile} />}
              {/* <WorkoutStats /> */}
            </div>

            <div className="space-y-6">
              {/* <AchievementBadges /> */}
              {/* <ProfileSettings /> */}
            </div>
          </div>
        </div>
      )}

      <MobileNavigation activeTab={"profile"} />
    </main>
  );
}
