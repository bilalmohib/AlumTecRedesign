import { auth } from "@/firebase";
import { Button, TextField } from "@mui/material";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, loading, error] = useAuthState(auth);

  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) {
        // alert("User is already Signed In" + user.email);
        // do something with the user
        router.push("/admin");
      } else {
        console.log("user is null");
        // alert("User is not Signed In");
        // if user is not logged in, redirect to login page
      }
      // if user is null, redirect to login page
    }
  }, [user, loading, router]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (email !== "" && password !== "") {
      console.log("email", email);
      console.log("password", password);
      console.log("submit");

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential: { user: any }) => {
          // Signed up
          const user = userCredential.user;
          console.log("user signed In", user);
          // alert("user signed In successfully : " + user.email);
        })
        .catch((error: { code: any; message: any }) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          // alert(errorMessage);
          return;
          // ..
        });
    } else {
      console.log("error");
    }
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;

        // alert("user signed In successfully : " + user.email);

        console.log("user signed In", user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="pt-28">
      <section className="bg-[#0e4a83] min-h-screen flex items-center justify-center">
        <div className="bg-white p-5 flex rounded-2xl shadow-lg max-w-3xl my-12 w-[400px]">
          <div className="px-5">
            <h2 className="text-2xl font-bold text-[#002D74]">Login</h2>
            <p className="text-sm mt-4 text-[#002D74]">
              If you have an account, please login
            </p>
            <form className="mt-6" action={""} onSubmit={handleSubmit}>
              <div className="mt-2">
                <label className="block text-gray-700">Email Address</label>
                <TextField
                  type="email"
                  name="email"
                  variant="standard"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="Enter Email Address"
                  className="w-full mt-2"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <TextField
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  variant="standard"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full mt-2"
                  required
                />
              </div>
              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>
              <Button
                type="submit"
                className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
              >
                Log In
              </Button>
            </form>
            <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
              <hr className="border-gray-500" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-500" />
            </div>
            <Button
              onClick={handleGoogleLogin}
              className="bg-gray-100 border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="w-6 h-6"
                viewBox="0 0 48 48"
              >
                <defs>
                  <path
                    id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  />
                </defs>
                <clipPath id="b">
                  <use xlinkHref="#a" overflow="visible" />
                </clipPath>
                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <path
                  clipPath="url(#b)"
                  fill="#EA4335"
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#34A853"
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                />
              </svg>
              <span className="ml-4">Login with Google</span>
            </Button>
            <div className="text-sm flex justify-between items-center mt-3">
              <p>
                If you don&apos;t have an account please contact admin to give
                you access.
              </p>
              {/* <button className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  ">
                Register
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LoginScreen;
