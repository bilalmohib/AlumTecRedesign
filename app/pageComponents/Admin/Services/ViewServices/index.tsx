import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from "react-firebase-hooks/firestore";

import { TextField } from "@mui/material";

const ViewServices = () => {
  return (
    <div>
      <h1 className="adminHeadingText">View / Edit Services</h1>
      <p className="adminTaglineStyles">You can view and edit services here.</p>

      <section className="mb-6">
        <TextField
          id="standard-helperText"
          label="Banner Title"
          defaultValue="OUR SERVICES"
          helperText={false ? "Title of the service page" : ""}
          variant="standard"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
          className="mt-5"
        />

        <TextField
          id="standard-helperText"
          label="Banner Description"
          multiline={true}
          rows={4}
          defaultValue="Alumtec Glazing Solution Inc. offers comprehensive engineering services, from initial designs that ensure cost-effective solutions, to meticulous shop drawings, production drawings, and as-built drawings—all meeting or exceeding building codes.
          "
          helperText={false ? "Description of the services page" : ""}
          variant="standard"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
          className="mt-5"
        />
      </section>
      <p className="my-2 text-center underline font-bold">THE END</p>
    </div>
  );
};
export default ViewServices;
