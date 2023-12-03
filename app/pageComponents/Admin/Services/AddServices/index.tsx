import { useState } from "react";

import { TextField, Button, ButtonBase } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import ClearIcon from "@mui/icons-material/Clear";
import InputFileUpload from "@/app/Components/InputFileUpload";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { storage } from "@/firebase";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import CircularProgressWithLabel from "@/app/Components/CircularProgressWithLabel";
import { error } from "console";

const AddServices = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  const [serviceTitle, setServiceTitle] = useState<string>("");
  const [serviceDescription, setServiceDescription] = useState<string>("");
  const [serviceImage, setServiceImage] = useState<string>("");

  const [errorTitle, setErrorTitle] = useState<string>("");
  const [errorDescription, setErrorDescription] = useState<string>("");
  const [errorImage, setErrorImage] = useState<string>("");

  const storageRef = ref(storage, `images/${selectedFile?.name}`);

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      const uploadTask = uploadBytesResumable(storageRef, selectedFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setUploadProgress(progress);
        },
        (error) => {
          console.error("Error uploading file:", error);
          throw error;
        }
      );

      await uploadTask;

      // Upload complete, get download URL
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      console.log("File available at", downloadURL);

      setServiceImage(downloadURL);
    } catch (error) {
      // Handle error if needed
      console.error("Error handling file upload:", error);
      throw error;
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (errorImage.trim() !== "") setErrorImage("");

    const fileInput = e.target as HTMLInputElement;
    const files = fileInput.files;

    if (files && files.length > 0) {
      const file = files[0];
      console.log("Selected File Name:", file.name);

      try {
        await handleUpload();
        setSelectedFile(file);
      } catch (error) {
        // Handle error if needed
        console.error("Error handling file upload:", error);
      }
    } else {
      setSelectedFile(null);
    }
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setServiceTitle(e.target.value);
    if (errorTitle.trim() !== "") setErrorTitle("");
  };

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setServiceDescription(e.target.value);
    if (errorDescription.trim() !== "") setErrorDescription("");
  };

  const handleAddService = async () => {
    if (serviceTitle.trim() === "") {
      setErrorTitle("Please enter a title");
    }

    if (serviceDescription.trim() === "") {
      setErrorDescription("Please enter a description");
    }

    if (selectedFile === null) {
      setErrorImage("Please select an image");
    }

    if (
      serviceTitle.trim() === "" &&
      serviceDescription.trim() === "" &&
      selectedFile === null
    ) {
      setErrorTitle("Please enter a title");
      setErrorDescription("Please enter a description");
      setErrorImage("Please select an image");
      return;
    }

    if (
      serviceTitle.trim() !== "" &&
      serviceDescription.trim() !== "" &&
      selectedFile !== null
    ) {
      console.log("All fields are filled");
      alert("All fields are filled");
    } else {
      // console.log("All fields are not filled");
      alert("All fields are not filled");
      return;
    }
  };

  return (
    <div>
      <h1 className="adminHeadingText">Add Service</h1>

      <p className="adminTaglineStyles">You can add new services here.</p>

      <section className="mb-6">
        <TextField
          id="serviceTitle"
          label="Service Title"
          helperText={
            errorTitle === ""
              ? "Title of the service page"
              : "Please enter a title"
          }
          variant="standard"
          fullWidth
          className="mt-4"
          value={serviceTitle}
          onChange={handleChangeTitle}
          error={errorTitle.trim() !== ""}
        />

        <TextField
          id="serviceDescription"
          label="Service Description"
          multiline={true}
          rows={6}
          helperText={
            errorDescription === ""
              ? "Description of the services page"
              : "Please enter service description"
          }
          variant="standard"
          fullWidth
          className="mt-4"
          value={serviceDescription}
          onChange={handleChangeDescription}
          error={errorDescription.trim() !== ""}
        />

        <InputFileUpload
          label={
            !selectedFile
              ? "Choose Image"
              : `Change Image - ${selectedFile.name}`
          }
          onChange={handleFileChange}
          className="mt-8"
          icon={
            !uploadProgress ? (
              <CloudUploadIcon />
            ) : (
              <CircularProgressWithLabel
                value={uploadProgress ? uploadProgress : 0}
              />
            )
          }
          error={errorImage.trim() !== ""}
        />

        <div className="w-[431px] h-[476px] mt-8">
          {selectedFile && (
            <ButtonBase
              onClick={() => setSelectedFile(null)}
              className="absolute left-[450px] rounded-full bg-white border-black border border-solid"
            >
              <ClearIcon className="cursor-pointer text-black text-2xl" />
            </ButtonBase>
          )}

          <img
            src={
              selectedFile ? serviceImage : "https://via.placeholder.com/200"
            }
            className="rounded-md w-[431px] h-[476px]"
            alt={selectedFile ? selectedFile.name : "Placeholder Image"}
            title={selectedFile ? selectedFile.name : "Placeholder Image"}
            width="300"
            height="400"
          />
        </div>

        <Button
          variant="contained"
          className="mt-10 block"
          onClick={handleAddService}
        >
          Add Service
        </Button>
      </section>
    </div>
  );
};
export default AddServices;
