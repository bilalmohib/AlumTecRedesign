// import React, { useState, useEffect } from "react";
// // Importing MUI
// import {
//   Box,
//   Typography,
//   Checkbox,
//   FormControlLabel,
//   FormGroup,
//   Button,
//   Link,
//   useMediaQuery,
//   Card,
//   // Modal,
//   // Drawer,
//   // Dialog,
//   CircularProgress,
// } from "@mui/material";

// import { motion } from "framer-motion";

// // Importing firebase
// // import {
// //   signInWithEmailAndPassword,
// //   onAuthStateChanged,
// //   signOut,
// //   signInWithPopup,
// //   GoogleAuthProvider,
// //   FacebookAuthProvider,
// //   TwitterAuthProvider,
// //   signInAnonymously,
// // } from "firebase/auth";
// import { auth } from "../../firebase";

// // Importing for navigating to other pages
// import { useNavigate } from "react-router";

// // Importing Styles
// import "../../index.css";

// //Importing Images
// import bannerImage from "../../assets/Login/banner.png";
// import nextImage from "../../assets/Login/arrow_right.png";
// import Google from "../../assets/Login/Google.png";
// import Twitter from "../../assets/Login/Twitter.png";
// import Fb from "../../assets/Login/Fb.png";

// //For Animating the texts
// import AnimatedText from "react-animated-text-content";

// //Importing Components
// import CustomIconButton from "../../components/IconButton";
// import CustomInput from "../../components/CustomInput";
// import theme from "../../theme";
// import LoginModal from "../../components/LoginModal";

// //Importing Icons
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";

// import { db } from "../../firebase";
// import {
//   doc,
//   collection,
//   onSnapshot,
//   addDoc,
//   query,
//   orderBy,
//   deleteDoc,
//   setDoc,
//   Timestamp,
// } from "firebase/firestore";

// const container = {
//   show: {
//     transition: {
//       staggerChildren: 0.05,
//     },
//   },
// };
// const item = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0 },
// };
// const Login: React.FC = () => {
//   // navigate hook
//   const navigate = useNavigate();

//   // const x = useMotionValue(0)
//   // const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])

//   // Defining States
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");

//   const [rememberPassWord, setRememberPassWord] = useState(false);
//   const [feedback, setFeedback] = useState<string>("");
//   const [openModal, setOpenModal] = useState(false);
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   // States for status of login users
//   const [signedInUserData, setSignedInUserData] = useState<any>(null);
//   const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // If user is signed in Navigate to Home Page
//         // navigate('/');
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         const uid = user.uid;
//         // When the user state is known, we set the state isSignedIn to true
//         if (signedInUserData === null) {
//           setSignedInUserData(user);
//           console.log("Signed In User Data ==> ", user);
//           setIsSignedIn(true);
//         }
//       } else {
//         // User is signed out
//         console.log("User is Not Signed In Yet");
//         // When the user state is known, we set the state isSignedIn to false
//         setIsSignedIn(false);
//         // ...
//       }
//       // When the user state is known, we set the loading state to false
//       setLoading(false);
//     });
//   });

//   const handleLoginWithEmail = (e: React.SyntheticEvent) => {
//     e.preventDefault();

//     // if (password.length < 6) {
//     //   alert("Password must be at least 6 characters long");
//     //   return;
//     // }

//     if (email === "" || password === "") {
//       // alert("Please fill all the fields");
//       return;
//     } else {
//       signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//           // Signed in
//           const user = userCredential.user;
//           console.log("user is: ", user);
//           // alert("Signed In Successfully");
//           // ...
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           console.log("error is: ", errorCode, errorMessage);
//           alert(`Error logging In : ${errorMessage}`);
//           // ..
//         });
//     }
//   };

//   // Login with Google
//   const handleLoginWithGoogle = () => {
//     const provider = new GoogleAuthProvider();

//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         // alert(`Congratulations! ${user.displayName} you are successfully registered`);
//         // Navigate to Home Page
//         navigate("/");
//         // ...
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log("error is: ", errorCode, errorMessage);
//         alert(`Error Signing Up: ${errorMessage}`);
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });
//   };

//   const handleLoginWithFacebook = () => {
//     const provider = new FacebookAuthProvider();
//     provider.addScope("user_birthday");

//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // The signed-in user info.
//         const user = result.user;

//         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//         const credential = FacebookAuthProvider.credentialFromResult(result);
//         const accessToken = credential.accessToken;

//         console.log("Access Token is equal to : ", accessToken);

//         // alert(`Congratulations! ${user.displayName} you are successfully registered`);
//         // Navigate to Home Page
//         navigate("/");
//         // ...
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = FacebookAuthProvider.credentialFromError(error);
//         alert("Error Signing Up: " + errorMessage);
//         // ...
//       });
//   };

//   const handleLoginWithTwitter = () => {
//     const provider = new TwitterAuthProvider();

//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
//         // You can use these server side with your app's credentials to access the Twitter API.
//         const credential = TwitterAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         const secret = credential.secret;

//         // The signed-in user info.
//         const user = result.user;

//         // alert(`Congratulations! ${user.displayName} you are successfully registered`);
//         // Navigate to Home Page
//         navigate("/");
//         // ...
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // On Error show the error message.
//         console.log("error is: ", errorCode, errorMessage);
//         alert(`Error Signing Up: ${errorMessage}`);
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = TwitterAuthProvider.credentialFromError(error);
//         // ...
//       });
//   };

//   // Anonymous Login
//   const signInAnonymous = () => {
//     signInAnonymously(auth)
//       .then(() => {
//         // Signed in..
//         // alert("Anonymous Sign In Successful");
//         // Navigate to Home Page
//         navigate("/");
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log("Error Signing In Anonymously : ", errorCode, errorMessage);
//         alert(`Error Signing In Anonymously : ${errorMessage}`);
//         // ...
//       });
//   };

//   const handleFeedback = (e: React.SyntheticEvent) => {
//     e.preventDefault();
//     if (feedback !== "") {
//       if (isSignedIn) {
//         const feedBackData = {
//           name: signedInUserData.displayName,
//           email: signedInUserData.email,
//           photo: signedInUserData.photoURL,
//           message: feedback,
//         };
//         // Add job to active jobs section
//         addDoc(collection(db, "Feedback"), feedBackData)
//           .then(() => {
//             console.log("Feedback Sent Successfully");
//             setFeedback("");
//             // alert(`Thank you! ${signedInUserData.displayName} Your Feedback is valuable to us`);
//           })
//           .catch((err) => {
//             console.error(err);
//             alert(`Error Sending Feedback: ${err.message}`);
//           });
//         //
//       } else {
//         const feedBackData = {
//           name: "Anonymous",
//           email: "Anonymous",
//           message: feedback,
//         };
//         // Add job to active jobs section
//         addDoc(collection(db, "Feedback"), feedBackData)
//           .then(() => {
//             console.log("Feedback Sent Successfully");
//             setFeedback("");
//             // alert("Thank you! Your Feedback is valuable to us");
//           })
//           .catch((err) => {
//             console.error(err);
//             alert(`Error Sending Feedback: ${err.message}`);
//           });
//         //
//       }
//     } else {
//       // alert("Please enter your feedback to submit it");
//       return;
//     }
//   };

//   return (
//     <>
//       {!isMobile ? (
//         <Box
//           component={motion.div}
//           // drag="x"
//           // dragConstraints={{ left: -100, right: 100 }}
//           // drag="x"
//           // whileHover={{
//           //     scale: 1.2,
//           //     transition: { duration: 0.3 }
//           // }}
//           // whileTap={{ scale: 0.9 }}
//           sx={{
//             backgroundImage: `url(${bannerImage})`,
//             background: `#C4C4Cf4`,
//             backgroundPosition: "center",
//             backgroundSize: "cover",
//             backgroundRepeat: "no-repeat",
//             width: 1,
//             height: { lg: 580, md: 450, xs: 450 },
//             marginTop: "-45px",
//             borderRadius: "0px 0px 74px 74px",
//             // x, opacity
//             // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.7)'
//           }}
//         >
//           <Box
//             component={"div"}
//             sx={{
//               backgroundColor: "rgba(0, 0, 0, 0.7)",
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: 1,
//               height: { lg: 580, md: 450, xs: 450 },
//               marginTop: "-45px",
//               borderRadius: "0px 0px 74px 74px",
//             }}
//           >
//             <Box
//               component={"div"}
//               sx={{
//                 // border: "5px solid #000000",
//                 width: 1,
//                 height: 1,
//               }}
//             >
//               <Typography
//                 variant="h3"
//                 component="div"
//                 sx={{
//                   height: { lg: "200px", md: "150px" },
//                   marginTop: { lg: "140px", xs: "110px" },
//                   marginLeft: { sm: "15%", xs: "5%" },
//                   marginRight: { sm: "15%", xs: "5%" },
//                   fontFamily: "Poppins",
//                   fontStyle: "normal",
//                   fontWeight: "700",
//                   fontSize: { lg: "56px", md: "36px", sm: "30px", xs: "25px" },
//                   lineHeight: "10px",
//                   // border: "1px solid #FFFFFF",
//                   textAlign: "center",
//                   letterSpacing: "0.233333px",
//                   color: "#FAFAFB",
//                 }}
//                 gutterBottom
//               >
//                 <AnimatedText
//                   type="words" // animate words or chars
//                   animation={{
//                     x: "200px",
//                     y: "-20px",
//                     scale: 1.1,
//                     ease: "ease-in-out",
//                   }}
//                   animationType="lights"
//                   interval={0.2}
//                   duration={1}
//                   tag="p"
//                   className="animated-paragraph"
//                   includeWhiteSpaces
//                   threshold={0.2}
//                   // rootMargin="20%"
//                 >
//                   Welcome to the
//                 </AnimatedText>
//                 <AnimatedText
//                   type="chars" // animate words or chars
//                   animation={{
//                     x: "200px",
//                     y: "-20px",
//                     scale: 1.1,
//                     ease: "ease-in-out",
//                   }}
//                   animationType="rifle"
//                   interval={0.03}
//                   duration={1}
//                   tag="p"
//                   className="animated-paragraph"
//                   includeWhiteSpaces
//                   threshold={0.1}
//                   // rootMargin="20%"
//                 >
//                   Professional Community
//                 </AnimatedText>
//               </Typography>
//               <Box
//                 component={"div"}
//                 sx={{
//                   width: { md: "560px", sm: "450px", xs: "90%" },
//                   height: { sm: "691px" },
//                   margin: "0 auto",
//                   // border: "1px solid #000000",
//                   background: "#FFFFFF",
//                   boxShadow: "3px -5px 40px rgba(205, 205, 212, 0.1)",
//                   borderRadius: "20px",
//                   padding: { sm: "30px", xs: "15px" },
//                 }}
//               >
//                 {loading === false ? (
//                   <Box component="div">
//                     {isSignedIn === false ? (
//                       <Box component="div">
//                         <Typography
//                           component="div"
//                           sx={{
//                             width: "100%",
//                             textAlign: "center",
//                             display: "flex",
//                             flexDirection: "row",
//                             justifyContent: "center",
//                           }}
//                         >
//                           <Typography
//                             variant="h5"
//                             component="div"
//                             sx={{
//                               fontFamily: "'Poppins'",
//                               fontStyle: "normal",
//                               fontWeight: "600",
//                               fontSize: { md: "24px", sm: "20px", xs: "16px" },
//                               lineHeight: "36px",
//                               letterSpacing: "0.15px",
//                               color: "#171725",
//                             }}
//                           >
//                             <Typography
//                               sx={{
//                                 color: "#0062FF",
//                                 fontStyle: "normal",
//                                 fontWeight: "600",
//                                 fontSize: {
//                                   md: "24px",
//                                   sm: "20px",
//                                   xs: "18px",
//                                 },
//                                 lineHeight: "36px",
//                                 letterSpacing: "0.15px",
//                               }}
//                               component={"span"}
//                             >
//                               Login {` `}
//                             </Typography>
//                             | Continue as anonymous
//                           </Typography>
//                           <Box sx={{ display: "flex", alignItems: "center" }}>
//                             <Box
//                               onClick={() => signInAnonymous()}
//                               component={"img"}
//                               sx={{
//                                 display: "block",
//                                 marginLeft: "14px",
//                                 width: { sm: "36px", xs: "24px" },
//                                 height: { sm: "36px", xs: "24px" },
//                                 cursor: "pointer",
//                               }}
//                               src={nextImage}
//                               title={"next"}
//                               alt="next"
//                             />
//                           </Box>
//                         </Typography>

//                         <Typography
//                           component="div"
//                           variant="h5"
//                           sx={{
//                             fontFamily: "'Poppins'",
//                             fontStyle: "normal",
//                             fontWeight: "400",
//                             fontSize: { sm: "18px", xs: "15px" },
//                             lineHeight: "27px",
//                             letterSpacing: "0.02em",
//                             color: "#94959B",
//                             textAlign: "center",
//                             marginTop: "11px",
//                           }}
//                         >
//                           Don’t have an account? {` `}
//                           <Link
//                             onClick={() => navigate("/signup")}
//                             sx={{
//                               fontFamily: "'Poppins'",
//                               fontStyle: "normal",
//                               fontWeight: "500",
//                               cursor: "pointer",
//                               fontSize: { sm: "18px", xs: "15px" },
//                               lineHeight: "27px",
//                               letterSpacing: "0.02em",
//                               color: "#3865F3",
//                             }}
//                             component={"span"}
//                           >
//                             Register
//                           </Link>
//                         </Typography>

//                         {/* ####################################################################### */}
//                         {/* ________________________ Complete Login Form ________________________ */}
//                         {/* ####################################################################### */}

//                         <form onSubmit={handleLoginWithEmail}>
//                           {/* Input Box */}
//                           <CustomInput
//                             placeHolder={"Your Email"}
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required={true}
//                             Icon={<EmailOutlinedIcon />}
//                             InputStyles={{
//                               background: "#F6F6F6",
//                               borderRadius: "12px",
//                               marginTop: { sm: "45px", xs: "25px" },
//                             }}
//                           />
//                           <CustomInput
//                             placeHolder={"Password"}
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required={true}
//                             Icon={<LockOutlinedIcon />}
//                             InputStyles={{
//                               background: "#F6F6F6",
//                               borderRadius: "12px",
//                               marginTop: "16px",
//                             }}
//                           />
//                           {/* Input Box */}
//                           {/* Forgot Password Section */}
//                           <Box component={"div"}>
//                             <FormGroup
//                               sx={{
//                                 display: "flex",
//                                 flexDirection: "row",
//                                 justifyContent: "space-between",
//                                 marginTop: "42px",
//                               }}
//                             >
//                               <FormControlLabel
//                                 control={
//                                   <Checkbox
//                                     defaultChecked
//                                     onChange={() =>
//                                       setRememberPassWord(!rememberPassWord)
//                                     }
//                                     checked={rememberPassWord}
//                                     size="medium"
//                                   />
//                                 }
//                                 label={
//                                   <Box
//                                     sx={{
//                                       fontStyle: "normal",
//                                       fontWeight: "600",
//                                       fontSize: { sm: "18px", xs: "14px" },
//                                       lineHeight: "27px",
//                                       letterSpacing: "0.02em",
//                                       color: "#222222",
//                                     }}
//                                   >
//                                     Remember me
//                                   </Box>
//                                 }
//                               />
//                               <Link
//                                 // onClick={
//                                 //   () => alert("Forgot Password")
//                                 // }
//                                 sx={{
//                                   lineHeight: "50px",
//                                   cursor: "pointer",
//                                   fontStyle: "normal",
//                                   fontWeight: "600",
//                                   fontSize: { sm: "18px", xs: "14px" },
//                                   letterSpacing: "0.02em",
//                                   color: "#3865F3",
//                                 }}
//                                 underline="hover"
//                               >
//                                 Forgot Password?
//                               </Link>
//                             </FormGroup>
//                           </Box>
//                           {/* Forgot Password Section */}
//                           {/* Login Button */}
//                           <Button
//                             variant="contained"
//                             type="submit"
//                             sx={{
//                               height: { sm: "48px", xs: "35px" },
//                               fontStyle: "normal",
//                               fontWeight: "600",
//                               fontSize: { sm: "18px", xs: "14px" },
//                               lineHeight: "27px",
//                               letterSpacing: "0.02em",
//                               color: "#FFFFFF",
//                               background: "#3865F3",
//                               borderRadius: "12px",
//                               width: "100%",
//                               textTransform: "none",
//                               mt: "13px",
//                             }}
//                           >
//                             Log In
//                           </Button>
//                           {/* Login Button */}
//                         </form>
//                         {/* Feedback Section */}
//                         <Box
//                           component={"section"}
//                           sx={{
//                             width: "100%",
//                             height: "fit-content",
//                             position: "relative",
//                             mt: { sm: "26px", xs: "17px" },
//                           }}
//                         >
//                           <Box>
//                             <Typography
//                               sx={{
//                                 position: "relative",
//                                 fontStyle: "normal",
//                                 fontWeight: "400",
//                                 fontSize: { sm: "18px", xs: "14px" },
//                                 lineHeight: "27px",
//                                 letterSpacing: "0.02em",
//                                 color: "#94959B",
//                                 margin: "0 auto",
//                                 width: "100px",
//                                 textAlign: "center",
//                                 zIndex: "1",
//                                 background: "#ffffff",
//                               }}
//                               component={"p"}
//                             >
//                               Feedback
//                             </Typography>
//                             <Box
//                               component={"p"}
//                               sx={{
//                                 position: "absolute",
//                                 top: "-1px",
//                                 right: "0",
//                                 width: "100%",
//                                 borderBottom: "1px solid #F1F1F5",
//                               }}
//                             ></Box>
//                           </Box>
//                           <CustomInput
//                             placeHolder={"Feedback"}
//                             type="text"
//                             value={feedback}
//                             onChange={(e) => setFeedback(e.target.value)}
//                             required={true}
//                             Icon={<RateReviewOutlinedIcon />}
//                             endElement={
//                               <Button
//                                 variant="contained"
//                                 onClick={handleFeedback}
//                                 sx={{
//                                   borderRadius: "12px",
//                                   textTransform: "none",
//                                 }}
//                               >
//                                 Submit
//                               </Button>
//                             }
//                             InputStyles={{
//                               background: "#F6F6F6",
//                               borderRadius: "12px",
//                               marginTop: { sm: "28px", xs: "18px" },
//                             }}
//                           />
//                         </Box>
//                         {/* Feedback Section */}

//                         {/* social icons section*/}
//                         <Box
//                           sx={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                             marginTop: { sm: "32px", xs: "18px" },
//                             marginBottom: { sm: "39px", xs: "18px" },
//                           }}
//                         >
//                           <CustomIconButton
//                             InputStyles={{
//                               width: "155px",
//                               height: { sm: "48px", xs: "38px" },
//                               border: "1px solid #F1F1F5",
//                               borderRadius: "10px",
//                             }}
//                             icon={Google}
//                             onClick={handleLoginWithGoogle}
//                           />
//                           <CustomIconButton
//                             InputStyles={{
//                               width: "155px",
//                               height: { sm: "48px", xs: "38px" },
//                               border: "1px solid #F1F1F5",
//                               borderRadius: "10px",
//                             }}
//                             icon={Fb}
//                             onClick={handleLoginWithFacebook}
//                           />
//                           <CustomIconButton
//                             InputStyles={{
//                               width: "155px",
//                               height: { sm: "48px", xs: "38px" },
//                               border: "1px solid #F1F1F5",
//                               borderRadius: "10px",
//                             }}
//                             icon={Twitter}
//                             onClick={handleLoginWithTwitter}
//                           />
//                         </Box>
//                         {/* social icons section */}

//                         {/* ####################################################################### */}
//                         {/* ________________________ Complete Login Form ________________________ */}
//                         {/* ####################################################################### */}
//                       </Box>
//                     ) : (
//                       <Box>
//                         <Typography
//                           variant="h5"
//                           component="div"
//                           sx={{
//                             width: "100%",
//                             textAlign: "center",
//                             display: "flex",
//                             flexDirection: "row",
//                             justifyContent: "center",
//                           }}
//                         >
//                           <Typography
//                             sx={{
//                               color: "#0062FF",
//                               fontStyle: "normal",
//                               fontWeight: "600",
//                               fontSize: { md: "24px", sm: "20px", xs: "18px" },
//                               lineHeight: "36px",
//                               letterSpacing: "0.15px",
//                             }}
//                             component={"span"}
//                           >
//                             Login Page
//                           </Typography>
//                         </Typography>

//                         <Typography
//                           sx={{
//                             fontStyle: "normal",
//                             fontWeight: "400",
//                             fontSize: { sm: "18px", xs: "14px" },
//                             lineHeight: "27px",
//                             letterSpacing: "0.02em",
//                             color: "#94959B",
//                             textAlign: "center",
//                             mt: "15px",
//                           }}
//                         >
//                           Hi {signedInUserData.displayName} ! You are logged in
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontStyle: "normal",
//                             fontWeight: "400",
//                             fontSize: { sm: "18px", xs: "14px" },
//                             lineHeight: "27px",
//                             letterSpacing: "0.02em",
//                             color: "#94959B",
//                             textAlign: "center",
//                             mt: "30px",
//                           }}
//                         >
//                           Your email address is : {signedInUserData.email}.
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontStyle: "normal",
//                             fontWeight: "400",
//                             fontSize: { sm: "18px", xs: "14px" },
//                             lineHeight: "27px",
//                             letterSpacing: "0.02em",
//                             color: "#94959B",
//                             textAlign: "center",
//                             mt: "30px",
//                           }}
//                         >
//                           Your provider is : {signedInUserData.providerId}.
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontStyle: "normal",
//                             fontWeight: "400",
//                             fontSize: { sm: "18px", xs: "14px" },
//                             lineHeight: "27px",
//                             letterSpacing: "0.02em",
//                             color: "#94959B",
//                             textAlign: "center",
//                             mt: "30px",
//                           }}
//                         >
//                           Your account was created at :{" "}
//                           {signedInUserData.metadata.creationTime}.
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontStyle: "normal",
//                             fontWeight: "400",
//                             fontSize: { sm: "18px", xs: "14px" },
//                             lineHeight: "27px",
//                             letterSpacing: "0.02em",
//                             color: "#94959B",
//                             textAlign: "center",
//                             mt: "30px",
//                           }}
//                         >
//                           Last Time you Signed In :{" "}
//                           {signedInUserData.metadata.lastSignInTime}.
//                         </Typography>

//                         <Box
//                           sx={{
//                             display: "flex",
//                             flexDirection: "row",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             mt: "25px",
//                           }}
//                         >
//                           <Button
//                             variant="outlined"
//                             color="error"
//                             sx={{
//                               borderRadius: "12px",
//                               textTransform: "none",
//                               fontSize: { sm: "18px", xs: "20px" },
//                             }}
//                             onClick={() => {
//                               signOut(auth)
//                                 .then(() => {
//                                   // Sign-out successful.
//                                   setSignedInUserData(null);
//                                 })
//                                 .catch((error) => {
//                                   // An error happened.
//                                   alert(`Error Logging Out : ${error.message}`);
//                                   console.log(`Error Logging out==> ${error}`);
//                                 });
//                             }}
//                           >
//                             Sign Out
//                           </Button>
//                         </Box>

//                         {/* Feedback Section */}
//                         <Box
//                           component={"section"}
//                           sx={{
//                             width: "100%",
//                             height: "fit-content",
//                             position: "relative",
//                             mt: { sm: "26px", xs: "17px" },
//                           }}
//                         >
//                           <Box>
//                             <Typography
//                               sx={{
//                                 position: "relative",
//                                 fontStyle: "normal",
//                                 fontWeight: "400",
//                                 fontSize: { sm: "18px", xs: "14px" },
//                                 lineHeight: "27px",
//                                 letterSpacing: "0.02em",
//                                 color: "#94959B",
//                                 margin: "0 auto",
//                                 width: "100px",
//                                 textAlign: "center",
//                                 zIndex: "1",
//                                 background: "#ffffff",
//                               }}
//                               component={"p"}
//                             >
//                               Feedback
//                             </Typography>
//                             <Box
//                               component={"p"}
//                               sx={{
//                                 position: "absolute",
//                                 top: "-1px",
//                                 right: "0",
//                                 width: "100%",
//                                 borderBottom: "1px solid #F1F1F5",
//                               }}
//                             ></Box>
//                           </Box>
//                           <CustomInput
//                             placeHolder={"Feedback"}
//                             type="text"
//                             value={feedback}
//                             onChange={(e) => setFeedback(e.target.value)}
//                             required={true}
//                             Icon={<RateReviewOutlinedIcon />}
//                             endElement={
//                               <Button
//                                 variant="contained"
//                                 onClick={handleFeedback}
//                                 sx={{
//                                   borderRadius: "12px",
//                                   textTransform: "none",
//                                 }}
//                               >
//                                 Submit
//                               </Button>
//                             }
//                             InputStyles={{
//                               background: "#F6F6F6",
//                               borderRadius: "12px",
//                               marginTop: { sm: "28px", xs: "18px" },
//                             }}
//                           />
//                         </Box>
//                         {/* Feedback Section */}
//                       </Box>
//                     )}
//                   </Box>
//                 ) : (
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       mt: "30px",
//                     }}
//                   >
//                     <Typography
//                       sx={{
//                         color: "#0062FF",
//                         fontStyle: "normal",
//                         fontWeight: "600",
//                         fontSize: { md: "24px", sm: "20px", xs: "18px" },
//                         lineHeight: "36px",
//                         letterSpacing: "0.15px",
//                       }}
//                       component={"p"}
//                     >
//                       Login Page
//                     </Typography>
//                     <Box
//                       sx={{
//                         marginTop: "20px",
//                       }}
//                       component={"div"}
//                     >
//                       <CircularProgress />
//                     </Box>
//                   </Box>
//                 )}
//               </Box>

//               <br />
//               <br />
//               <br />
//             </Box>
//           </Box>
//         </Box>
//       ) : (
//         <Box
//           component={motion.div}
//           sx={{
//             backgroundImage: `url(${bannerImage})`,
//             backgroundPosition: "center",
//             backgroundSize: "cover",
//             backgroundRepeat: "no-repeat",
//             width: "100%",
//             minHeight: "100vh",
//             position: "relative",
//             // height: "100vh",
//             // x, opacity
//             // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.7)'
//           }}
//         >
//           <Box
//             sx={{
//               backgroundColor: "rgba(21, 33, 74, 0.7);",
//               position: "absolute",
//               left: "0",
//               top: "0",
//               bottom: "0",
//               width: "100%",
//               minHeight: "100vh",
//               zIndex: "2",
//             }}
//           ></Box>
//           <motion.div variants={container} initial="hidden" animate="show">
//             <Box
//               component={motion.div}
//               variants={item}
//               sx={{
//                 paddingTop: "180px",
//                 zIndex: "3",
//                 position: "relative",
//                 paddingBottom: "25px",
//               }}
//             >
//               <Box
//                 className="login__mob-heading"
//                 sx={{ paddingX: "45px", marginBottom: "37px" }}
//               >
//                 <Typography
//                   variant="h1"
//                   sx={{
//                     color: "white",
//                     fontWeight: "700",
//                     fontSize: "24px",
//                     lineHeight: "36px",
//                     textAlign: "center",
//                   }}
//                 >
//                   Welcome to the Professional Community
//                 </Typography>
//               </Box>
//               <Box sx={{ paddingX: "16px" }}>
//                 <Card
//                   sx={{
//                     padding: "24px 24px 20px 24px",
//                     borderRadius: "16px",
//                     marginBottom: "10px",
//                   }}
//                 >
//                   <Typography
//                     variant="h2"
//                     sx={{
//                       color: "#121212",
//                       fontWeight: "700",
//                       fontSize: "24px",
//                       lineHeight: "32px",
//                       textAlign: "center",
//                       marginBottom: "24px",
//                     }}
//                   >
//                     Easy steps to organize your project
//                   </Typography>
//                   <Button
//                     onClick={() => signInAnonymous()}
//                     variant="contained"
//                     fullWidth
//                     sx={{
//                       backgroundColor: "#171725",
//                       fontWeight: "600",
//                       fontSize: "16px",
//                       lineHeight: "24px",
//                       paddingY: "16px",
//                       marginBottom: "16px",
//                       borderRadius: "16px",
//                       textTransform: "none",
//                       "&:hover": {
//                         backgroundColor: "#3e3b3b",
//                       },
//                     }}
//                   >
//                     Continue as anonymous
//                   </Button>
//                   <Button
//                     variant="contained"
//                     onClick={() => navigate("/signup")}
//                     fullWidth
//                     sx={{
//                       backgroundColor: "#3865F3",
//                       fontWeight: "600",
//                       fontSize: "16px",
//                       lineHeight: "24px",
//                       paddingY: "16px",
//                       marginBottom: "16px",
//                       borderRadius: "16px",
//                       textTransform: "none",
//                       "&:hover": {
//                         backgroundColor: "#294ec4",
//                       },
//                     }}
//                   >
//                     Sign Up
//                   </Button>

//                   <Button
//                     variant="text"
//                     fullWidth
//                     onClick={() => setOpenModal(true)}
//                     sx={{
//                       fontWeight: "600",
//                       fontSize: "16px",
//                       lineHeight: "24px",
//                       paddingY: "16px",
//                       marginBottom: "16px",
//                       borderRadius: "16px",
//                       border: "none",
//                       backgroundColor: "#F5F6FF",
//                       textTransform: "none",
//                     }}
//                   >
//                     Login
//                   </Button>
//                 </Card>

//                 <Card
//                   sx={{
//                     paddingX: "24px",
//                     paddingY: "12px",
//                     borderRadius: "16px",
//                   }}
//                 >
//                   <CustomInput
//                     placeHolder={"Feedback"}
//                     type="text"
//                     value={feedback}
//                     onChange={(e) => setFeedback(e.target.value)}
//                     required={true}
//                     Icon={<RateReviewOutlinedIcon />}
//                     endElement={
//                       <Button
//                         variant="contained"
//                         sx={{ borderRadius: "12px", textTransform: "none" }}
//                       >
//                         Submit
//                       </Button>
//                     }
//                     InputStyles={{
//                       background: "#F6F6F6",
//                       borderRadius: "12px",
//                     }}
//                   />
//                 </Card>
//               </Box>
//             </Box>
//           </motion.div>

//           <LoginModal
//             openModal={openModal}
//             setOpenModal={setOpenModal}
//             // Props for handling social login
//             handleLoginWithGoogle={handleLoginWithGoogle}
//             handleLoginWithFacebook={handleLoginWithFacebook}
//             handleLoginWithTwitter={handleLoginWithTwitter}
//             // Props for handling login with email and password
//             handleLoginWithEmail={handleLoginWithEmail}
//             email={email}
//             setEmail={setEmail}
//             password={password}
//             setPassword={setPassword}
//             //
//           />
//         </Box>
//       )}
//     </>
//   );
// };
// export default Login;
const Admin = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
    </div>
  );
};
export default Admin;
