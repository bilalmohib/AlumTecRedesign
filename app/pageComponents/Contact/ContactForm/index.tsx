import { countries } from "@/app/data/Common";
import { db } from "@/firebase/index";
import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ContactForm = () => {
  const [windowSize, setWindowSize] = useState([0, 0]);

  useEffect(() => {
    // Function to update window size
    function updateWindowSize() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    // Initial window size
    updateWindowSize();

    // Add event listener for window resize
    window.addEventListener("resize", updateWindowSize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  // States Start
  // @1 First Name
  const [name, setName] = useState("");

  // @2 Email
  const [email, setEmail] = useState("");

  // @3 Company Name
  const [comapnyName, setComapnyName] = useState("");

  // @4 Country Id
  const [countryId, setCountryId] = useState<any>(null);

  // @5 Message
  const [message, setMessage] = useState("");
  // States End

  // Errors Start
  // @1 Name Error
  const [nameError, setNameError] = useState(false);

  // @2 Email Error
  const [emailError, setEmailError] = useState(false);

  // @3 Company Name Error
  const [comapnyNameError, setComapnyNameError] = useState(false);

  // @4 Message Error
  const [messageError, setMessageError] = useState(false);

  // @5 Country Id Error
  const [countryIdError, setCountryIdError] = useState(false);
  // Errors End

  // For autocomplete component
  const countryDefaultProps = {
    options: countries,
    getOptionLabel: (option: any) => option.label,
  };
  // For Country autocomplete component

  // Submit Form
  const submitForm = async (e: Event) => {
    e.preventDefault();

    if (name === "") {
      setNameError(true);
    }
    if (email === "") {
      setEmailError(true);
    }
    if (comapnyName === "") {
      setComapnyNameError(true);
    }
    if (countryId === null) {
      setCountryIdError(true);
    }
    if (message === "") {
      setMessageError(true);
    }

    if (name !== "" && email !== "" && comapnyName !== "" && message !== "") {
      ////////////////////////////To take the current date and time//////////////////////////////////
      let today = new Date();
      let date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      let time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      let dateTime = date + " " + time;
      dateTime = dateTime.toString();
      ////////////////////////////To take the current date and time//////////////////////////////////

      let Data = {
        NAME: name,
        EMAIL: email,
        COMPANY: comapnyName,
        COUNTRY: countryId,
        MESSAGE: message,
        currentTime: dateTime,
      };

      //For storing all ads i.e to show at main page
      // firebase
      //   .database()
      //   .ref(`ContactUs/`)
      //   .push(Data)
      //   .then(() => {
      //     setName("");
      //     setEmail("");
      //     setComapnyName("");
      //     setCountryId(null);
      //     setMessage("");
      //     toast(
      //       "Thank you so much for contacting AlumTec. We will get back to you soon through 📧 email.",
      //       {
      //         theme: "dark",
      //       }
      //     );
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     toast.error("Network Error while submitting the contact form");
      //   });

      //For storing all ads i.e to show at main page
      try {
        await addDoc(collection(db, "ContactUs"), Data).then(() => {
          setName("");
          setEmail("");
          setComapnyName("");
          setCountryId(null);
          setMessage("");
          toast(
            "Thank you so much for contacting AlumTec. We will get back to you soon through 📧 email.",
            {
              theme: "dark",
            }
          );
        });
      } catch (err: any) {
        alert(err);
        toast.error(`Error ${err.message || err || "Unknown Error"}`);
      }
    } else {
      toast.error("Please fill all the required fields");
    }
    return;
  };

  return (
    <div className="w-full rounded-lg bg-white shadow-md px-10 sm:px-20 pt-12">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Grid
        container
        spacing={
          // Categorize according to small, medium, large screen
          windowSize[0] < 576
            ? 0
            : windowSize[0] < 768
            ? 1
            : windowSize[0] < 992
            ? 2
            : 3
        }
      >
        {/* @1 Name  */}
        <Grid
          item
          xs={
            // Categorize according to small, medium, large screen
            windowSize[0] < 600 ? 12 : 6
          }
        >
          <TextField
            id="name"
            label={"Your name*"}
            placeholder={"Please Enter your name"}
            variant="standard"
            helperText={nameError ? "Please fill out the Name field" : ""}
            error={nameError}
            margin="normal"
            value={name}
            onChange={(e) => {
              setName(e.target.value); // set the value of the input
              if (name) {
                setNameError(false);
              }
            }}
            fullWidth
          />
        </Grid>

        {/* @2 Email  */}
        <Grid
          item
          xs={
            // Categorize according to small, medium, large screen
            windowSize[0] < 600 ? 12 : 6
          }
        >
          <TextField
            id="email"
            label={"Contact email *"}
            placeholder={"you@emailid.com"}
            variant="standard"
            helperText={emailError ? "Please fill out the Email field" : ""}
            error={emailError}
            margin="normal"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value); // set the value of the input
              if (emailError) {
                setEmailError(false);
              }
            }}
          />
        </Grid>

        {/* @3 Company Name  */}
        <Grid
          item
          xs={
            // Categorize according to small, medium, large screen
            windowSize[0] < 600 ? 12 : 6
          }
        >
          <TextField
            id="companyName"
            label={"Company name**"}
            placeholder={"Enter your company name"}
            variant="standard"
            helperText={
              comapnyNameError ? "Please Enter your company name" : ""
            }
            error={comapnyNameError}
            margin="normal"
            value={comapnyName}
            onChange={(e) => {
              setComapnyName(e.target.value); // set the value of the input
              if (comapnyNameError) {
                setComapnyNameError(false);
              }
            }}
            fullWidth
          />
        </Grid>

        {/* @4 Country */}
        <Grid
          item
          xs={
            // Categorize according to small, medium, large screen
            windowSize[0] < 600 ? 12 : 6
          }
        >
          <Autocomplete
            id="select-country-dropdown"
            {...countryDefaultProps}
            autoHighlight
            className="w-full mt-4"
            value={countryId}
            onChange={(event, newValue: string) => {
              setCountryId(newValue);
              if (countryIdError) {
                setCountryIdError(false);
              }
            }}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <Image
                  loading="lazy"
                  width="20"
                  height="20"
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  alt=""
                />
                {option.label} ({option.code}) +{option.phone}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label={"Country"}
                variant="standard"
                placeholder="Select Country ..."
                helperText={
                  countryIdError ? "* Please select any Country." : ""
                }
                error={countryIdError}
              />
            )}
          />
        </Grid>

        {/* @5 Message  */}
        <Grid item xs={12}>
          <TextField
            id="message"
            label={"Your message *"}
            placeholder={"Type your message…."}
            variant="standard"
            helperText={messageError ? "Please fill out the Message field" : ""}
            error={messageError}
            margin="normal"
            rows={5}
            className="mt-0"
            multiline
            value={message}
            onChange={(e) => {
              setMessage(e.target.value); // set the value of the input
              if (messageError) {
                setMessageError(false);
              }
            }}
            fullWidth
          />
        </Grid>
      </Grid>

      <p className="mt-[16px] text-[##757575] text-[15px] leading-7">
        By submitting this form you agree to our terms and conditions and our
        Privacy Policy which explains how we may collect, use and disclose your
        personal information including to third parties.
      </p>

      <Button
        variant="contained"
        color="primary"
        className="mt-8 mb-8 w-full sm:w-fit bg-[#123E95] hover:bg-[#1e325c] font-[lato] text-white uppercase text-[16px]"
        onClick={(event: any) => submitForm(event)}
      >
        Contact sales
      </Button>
    </div>
  );
};
export default ContactForm;
