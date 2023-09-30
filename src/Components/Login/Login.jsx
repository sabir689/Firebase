import {
    GithubAuthProvider,
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  import app from "../../Firebase/Firebase.init";
  import { useState } from "react";
  
  const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
  
    const handleGoogleSignIn = () => {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          setUser(loggedUser);
        })
        .catch((error) => {
          console.error('Error', error.message);
        });
    };
  
    const handleGithubSignIn = () => {
      signInWithPopup(auth, githubProvider)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          setUser(loggedUser);
        })
        .catch((error) => {
          console.error('Error', error.message);
        });
    };
  
    const handleSignOut = () => {
      signOut(auth)
        .then(() => {
          setUser(null);
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    return (
      <div className="justify-between flex p-8 m-4 border bg-green-200 rounded-xl items-center">
        {user ? (
          <button
            className="border p-4 rounded-2xl bg-red-200 shadow-2xl text-white hover:bg-red-400"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        ) : (
          <div>
            <button
              className="border p-4 rounded-2xl bg-red-200 shadow-2xl text-white hover:bg-red-400"
              onClick={handleGoogleSignIn}
            >
              Google Login
            </button>
            <button
              className="border p-4 rounded-2xl bg-red-200 shadow-2xl text-white hover:bg-red-400"
              onClick={handleGithubSignIn}
            >
              GitHub Login
            </button>
          </div>
        )}
  
        {user && (
          <div>
            <h3>User: {user?.displayName}</h3>
            <p>Email: {user?.email}</p>
            <img className="rounded-2xl" src={user?.photoURL} alt={user?.displayName} />
          </div>
        )}
      </div>
    );
  };
  
  export default Login;
  