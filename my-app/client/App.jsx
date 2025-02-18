// import { useState } from "react";
// import reactLogo from "/assets/react.svg";
// // import viteLogo from "/vite.svg";
// import { BrowserRouter as Router } from "react-router-dom";
// // React Router to define the routes for different pages and include the Navbar component.
// import "./style/App.css";
// import PageRoutes from "./logic/PageRoutes";
// import NavBar from "./src/components/NavBar";
// import './index.css'
// import { useState, useEffect } from 'react'
// import { createClient } from '@supabase/supabase-js'
// import { Auth } from '@supabase/auth-ui-react'
// import { ThemeSupa } from '@supabase/auth-ui-shared'

import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
// import './index.css';
import "./style/App.css";
import NavBar from "./src/components/NavBar";
import PageRoutes from "./logic/PageRoutes";

const supabase = createClient(
  'https://zqidjnwchewjwimzeobz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxaWRqbndjaGV3andpbXplb2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4Nzk3NzQsImV4cCI6MjA1NTQ1NTc3NH0.2IVsIPCqFx_asISWuIn5pqHZUT3r8aO6qcom7Nsw6ko'
);

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
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
