// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import { createClient } from "@supabase/supabase-js";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
// import NavBar from "./src/components/NavBar";
// import PageRoutes from "./logic/PageRoutes";

// // Initialize Supabase
// const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_ANON_KEY
// );

// function App() {
//   // const [session, setSession] = useState(null);

//   // useEffect(() => {
//   //   // Fetch session on mount
//   //   supabase.auth.getSession().then(({ data: { session } }) => {
//   //     setSession(session);
//   //   });

//   //   // Subscribe to auth changes
//   //   const {
//   //     data: { subscription },
//   //   } = supabase.auth.onAuthStateChange((_event, session) => {
//   //     setSession(session);
//   //   });

//   //   return () => subscription.unsubscribe();
//   // }, []);

//   return (
//     <Router>
//       {/* {session ? ( */}
//         <>
//           <NavBar />
//           <Routes>
//             <Route path="/*" element={<PageRoutes />} />
//           </Routes>
//         </>
//       {/* ) : (
//       //   <Auth */}
//       {/* //     supabaseClient={supabase}
//       //     appearance={{ theme: ThemeSupa }}
//       //     providers={["google"]}
//       //     redirectTo={`${import.meta.env.VITE_SITE_URL}/`} // Ensure proper redirect */}
//       {/* //   />
//       // )} */}
//     </Router>
//   );
// }

// export default App;


import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import NavBar from "./src/components/NavBar";
import PageRoutes from "./logic/PageRoutes";
import ProfilePage from "./src/pages/ProfilePage/Profile";
import Home from "./src/pages/HomePage/HomePage"; // Import your Home page
// import LoginPage from "./src/pages/LoginPage"; // Separate login page

// Initialize Supabase
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function App() {
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

  return (
    <Router>
      <>
        <NavBar />
        <Routes>
      <Route path="/*" element={<PageRoutes />} />
          {/* <Route path="/" element={<Home session={session} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<PageRoutes />} /> */}
          <Route path="/profile" element={<ProfilePage session={session} />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;