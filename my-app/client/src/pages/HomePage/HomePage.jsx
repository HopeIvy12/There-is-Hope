// import React from "react";
// import Header from "../../components/Header";
// import ButtonContainer from "../../components/ButtonContainer";
// // import styles from "../style/componentModules/HomePage.module.css";

// export default function HomePage() {
//   return (
//     // className={}
//     <div>
//       <Header />
//       <ButtonContainer />
//     </div>
//   );
// }

// import { Link } from "react-router-dom";
// // import React from "react";
// import Header from "../../components/Header";
// import ButtonContainer from "../../components/ButtonContainer";

// export default function Home({ session }) {
//   return (
//     <div>
//        <Header />
//        <ButtonContainer />
//       <h1>Welcome to My App</h1>
//       {session ? (
//         <p>You are logged in!</p>
//       ) : (
//         <>
//           <p>Please log in to access more features.</p>
//           <Link to="/login">
//             <button>
//               Login
//             </button>
//           </Link>
//         </>
//       )}
//     </div>
//   );
// }import { useState } from "react";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Header from "../../components/Header";
import ButtonContainer from "../../components/ButtonContainer";

// Initialize Supabase
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function Home({ session }) {
  const [showLogin, setShowLogin] = useState(false); // State for modal

  return (
    <div>
      <Header />
      <ButtonContainer />
      <p>Feel free to explore hotels or you can log in to save your preferences!</p>

      {/* Show Login button only if not logged in */}
      {!session && (
        <button onClick={() => setShowLogin(true)}>Login for More</button>
      )}

      {/* If logged in, show a welcome message */}
      {session && <p>Welcome back! You have access to extra features.</p>}

      {/* Login Popup Modal */}
      {showLogin && (
        <div>
          <div>
            <h2>Login</h2>
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              providers={["google"]}
              redirectTo={`${import.meta.env.VITE_SITE_URL}/`}
            />
            <button onClick={() => setShowLogin(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
