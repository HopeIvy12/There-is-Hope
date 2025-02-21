import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Add Route and Switch for routing
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import "./style/App.css";
import NavBar from "./src/components/NavBar";
import PageRoutes from "./logic/PageRoutes";

// Create a supabase client using environment variables
// const supabase = createClient(
//   process.env.REACT_APP_SUPABASE_URL,
//   process.env.REACT_APP_SUPABASE_ANON_KEY
// );

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Get the session when the component mounts
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Subscribe to changes in authentication state
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Clean up the subscription on unmount
    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    // If no session, show the authentication UI
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  }

  return (
    <Router>
      <>
        <NavBar />
        <PageRoutes />
      </>
    </Router>
  );
}

export default App; // Only export App component
