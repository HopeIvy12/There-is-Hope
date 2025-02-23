// import React from "react";

// export default function ProfilePage() {
//   return <p>Your profile</p>;
// }
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

// Initialize Supabase
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function Profile({ session }) {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate("/"); // Redirect to home if not logged in
    } else {
      getProfile();
    }
  }, [session]);

  async function getProfile() {
    const { user } = session;
    setProfile(user); // Supabase session already has user details
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/"); // Redirect to home after logout
  }

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Profile Page</h2>
      <p><strong>Email:</strong> {profile.email}</p>
      <button
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;

