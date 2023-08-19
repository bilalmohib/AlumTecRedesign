import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";

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

  // First Name
  const [firstName, setFirstName] = useState("");

  // First Name Error
  const [firstNameError, setFirstNameError] = useState(false);

  // Last Name
  const [lastName, setLastName] = useState("");

  // Last Name Error
  const [lastNameError, setLastNameError] = useState(false);

  // Country Id
  const [countryId, setCountryId] = useState<any>(null);

  // Country Id Error
  const [countryIdError, setCountryIdError] = useState(false);

  // For Country autocomplete component
  const [countryList, setCountryList] = useState<any>([]);

  // For autocomplete component
  const countryDefaultProps = {
    options: countryList,
    getOptionLabel: (option: any) => option.countryName,
  };
  // For Country autocomplete component

  // Use Effect for Country autocomplete component

  useEffect(() => {
    // Fetch Country List
    let countryList = [
      { countryId: 1, countryName: "India" },
      { countryId: 2, countryName: "USA" },
      { countryId: 3, countryName: "UK" },
      { countryId: 4, countryName: "Canada" },
      { countryId: 5, countryName: "Australia" },
    ];
    setCountryList(countryList);
  }, []);

  return (
    <div className="w-full rounded-lg bg-white shadow-md pl-20 pr-20 pt-12">
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
            helperText={firstNameError ? "Please fill out the Name field" : ""}
            error={firstNameError}
            margin="normal"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value); // set the value of the input
              if (firstNameError) {
                setFirstNameError(false);
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
            helperText={lastNameError ? "Please fill out the Email field" : ""}
            error={lastNameError}
            margin="normal"
            fullWidth
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value); // set the value of the input
              if (lastNameError) {
                setLastNameError(false);
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
            helperText={firstNameError ? "Please Enter your company name" : ""}
            error={firstNameError}
            margin="normal"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value); // set the value of the input
              if (firstNameError) {
                setFirstNameError(false);
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
            {...countryDefaultProps}
            id="countryAutoComplete"
            className="w-full mt-3"
            autoHighlight
            value={countryId}
            onChange={(event, newValue: string) => {
              setCountryId(newValue);
              if (countryIdError) {
                setCountryIdError(false);
              }
            }}
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
            helperText={
              firstNameError ? "Please fill out the Message field" : ""
            }
            error={firstNameError}
            margin="normal"
            rows={5}
            className="mt-0"
            multiline
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value); // set the value of the input
              if (firstNameError) {
                setFirstNameError(false);
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
        className="mt-8 mb-8 bg-[#123E95] hover:bg-[#1e325c] font-[lato] text-white uppercase text-[16px]"
      >
        Contact sales
      </Button>
    </div>
  );
};
export default ContactForm;
