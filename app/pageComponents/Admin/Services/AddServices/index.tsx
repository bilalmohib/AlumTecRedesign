import { useState } from "react";
import { storage } from "@/firebase";
import ClearIcon from "@mui/icons-material/Clear";
import { TextField, Button, ButtonBase } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InputFileUpload from "@/app/Components/InputFileUpload";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CircularProgressWithLabel from "@/app/Components/CircularProgressWithLabel";

const AddServices = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  const [imageUploading, setImageUploading] = useState<boolean>(false);

  const [serviceTitle, setServiceTitle] = useState<string>("");
  const [serviceDescription, setServiceDescription] = useState<string>("");
  const [serviceImage, setServiceImage] = useState<string>("");

  const [errorTitle, setErrorTitle] = useState<string>("");
  const [errorDescription, setErrorDescription] = useState<string>("");
  const [errorImage, setErrorImage] = useState<string>("");

  const storageRef = ref(storage, `images/${selectedFile?.name}`);

  const handleUpload = async (file: File) => {
    if (!file) return;

    try {
      const uploadTask = uploadBytesResumable(storageRef, file);

      setImageUploading(true);

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

      setSelectedFile(file);
      setServiceImage(downloadURL);
      setImageUploading(false);
    } catch (error) {
      // Handle error if needed
      console.error("Error handling file upload:", error);
      throw error;
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // if (errorImage.trim() !== "") setErrorImage("");

    const fileInput = e.target as HTMLInputElement;
    const files = fileInput.files;

    if (files && files.length > 0) {
      const file = files[0];
      console.log("Selected File Name:", file.name);

      try {
        await handleUpload(file);
      } catch (error) {
        // Handle error if needed
        console.error("Error handling file upload:", error);
        setImageUploading(false);
        return;
      }
    } else {
      setSelectedFile(null);
      setImageUploading(false);
      setUploadProgress(null);
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

  const onRemoveSelectedImage = () => {
    setSelectedFile(null);
    setServiceImage("");
    setUploadProgress(null);
    setImageUploading(false);
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
          className="mt-4 w-full sm:w-6/12 block"
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
          className="mt-4 w-full sm:w-6/12"
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
          className="mt-8 w-full sm:w-6/12"
          icon={!selectedFile ? <CloudUploadIcon /> : <ChangeCircleIcon />}
          error={errorImage.trim() !== ""}
        />

        <div className="w-64 h-auto sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[431px] lg:h-[476px] mt-8">
          {selectedFile && (
            <ButtonBase
              onClick={onRemoveSelectedImage}
              className="absolute left-64 sm:left-72 md:left-80 lg:left-[695px] rounded-full bg-white border-black border border-solid"
            >
              <ClearIcon className="cursor-pointer text-black text-2xl" />
            </ButtonBase>
          )}

          {imageUploading ? (
            <div className="flex flex-col justify-center items-center w-64 h-auto sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[431px] lg:h-[476px] border border-gray-500 border-solid inset-5 bg-gray-200">
              <CircularProgressWithLabel
                aria-label="upload-progress"
                value={uploadProgress ? uploadProgress : 0}
                labelClass="text-4xl font-light font-sans"
                sx={{
                  width: "200px",
                  height: "200px",
                }}
              />
            </div>
          ) : (
            <img
              src={
                selectedFile ? serviceImage : "https://via.placeholder.com/200"
              }
              className="rounded-md w-64 h-auto sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[431px] lg:h-[476px]"
              alt={selectedFile ? selectedFile?.name : "Placeholder Image"}
              title={selectedFile ? selectedFile?.name : "Placeholder Image"}
              width="300"
              height="400"
            />
          )}
        </div>

        <Button
          variant="contained"
          className="mt-10 block"
          onClick={handleAddService}
          disabled={imageUploading}
          title={
            imageUploading
              ? "Image is uploading please wait"
              : "Please fill all the fields"
          }
        >
          Add Service
        </Button>
      </section>
    </div>
  );
};
export default AddServices;
