import React, { useEffect, useRef, useState } from "react";
import Router from "next/router";
import { storage } from "@/firebase";
import { Button } from "@mui/material";
import SVGImage from "@/app/SVGs/SVGImage";
import InputFileUpload from "@/app/Components/InputFileUpload";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "@/firebase";
import {
  doc,
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy,
  deleteDoc,
  setDoc,
  Timestamp,
} from "firebase/firestore";

import { onAuthStateChanged } from "firebase/auth";

const AddBlogs = () => {
  // States for status of login users
  const [signedInUserData, setSignedInUserData] = useState<any>(null);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  const inputRef: React.RefObject<HTMLDivElement> = useRef(
    document.createElement("div")
  );

  const [savedSelection, setSavedSelection] = useState<Range | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const [title, setTitle] = useState<string>("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [coverImage, setCoverImage] = useState<string>("");
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  const [imageUploading, setImageUploading] = useState<boolean>(false);

  const storageRef = ref(
    storage,
    `images/blogs/${title}/${selectedFile?.name}`
  );

  // For Loading
  const [user, loading, error] = useAuthState(auth);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleInput = () => {
    if (inputRef.current) {
      // Save the current selection before updating the content
      // saveSelection();

      const editedContent = inputRef.current.innerHTML;
      console.log("Edited content:", editedContent);

      // Update the history
      setHistory((prev) => [...prev, editedContent]);

      // Restore the previous selection
      // restoreSelection();
    }
  };

  const saveSelection = () => {
    const selection = window.getSelection();
    if (selection?.rangeCount) {
      const range = selection.getRangeAt(0);
      setSavedSelection(range.cloneRange());
    }
  };

  const restoreSelection = () => {
    if (savedSelection) {
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(savedSelection);
      }
    }
  };

  // const handleInsertHeader = (headerType: string) => {
  //   saveSelection();

  //   const selection = window.getSelection();
  //   const range = selection?.getRangeAt(0) || document.createRange();

  //   // Get the parent element containing the cursor
  //   let cursorParentElement: HTMLElement | null = null;

  //   if (range.endContainer.nodeType === Node.TEXT_NODE) {
  //     cursorParentElement = range.endContainer.parentElement;
  //   } else if (range.endContainer.nodeType === Node.ELEMENT_NODE) {
  //     cursorParentElement = range.endContainer as HTMLElement;
  //   }

  //   // Check if cursorParentElement is an HTMLElement
  //   if (cursorParentElement) {
  //     // Get the text content of the cursor line
  //     const cursorLineText = cursorParentElement.textContent || "";

  //     // Create a new header element with a class
  //     const header = document.createElement(headerType);
  //     header.className = getHeaderClass(headerType); // Set the class based on your logic

  //     // Set the text content of the header
  //     header.textContent = cursorLineText === "" ? "\u200B" : cursorLineText;

  //     // If there's no text, insert a zero-width space character (\u200B)
  //     // to ensure the cursor stays in the same position
  //     if (cursorLineText === "") {
  //       range.deleteContents();
  //       range.insertNode(document.createTextNode("\u200B"));
  //     } else {
  //       // Replace the cursor line with the new header
  //       cursorParentElement.innerHTML = "";
  //       cursorParentElement.appendChild(header);
  //     }
  //   }

  //   restoreSelection();
  // };

  const handleInsertHeader = (headerType: string) => {
    saveSelection();

    const selection = window.getSelection();
    const range = selection?.getRangeAt(0) || document.createRange();

    // Check if there's a selection
    if (!range.collapsed) {
      // If there's a selection, wrap it in the specified header
      const selectedText = range.toString();
      const header = document.createElement(headerType);
      header.className = getHeaderClass(headerType);
      header.textContent = selectedText;

      range.deleteContents();
      range.insertNode(header);

      // Move the cursor to the end of the header
      // range.setStartAfter(header);
      range.setEndAfter(header);

      selection?.removeAllRanges();

      selection?.addRange(range);

      // Restore the previous selection
      restoreSelection();
    } else {
      // If there's no selection, handle the cursor position

      // Get the parent element containing the cursor
      let cursorParentElement: HTMLElement | null = null;

      if (range.endContainer.nodeType === Node.TEXT_NODE) {
        cursorParentElement = range.endContainer.parentElement;
      } else if (range.endContainer.nodeType === Node.ELEMENT_NODE) {
        cursorParentElement = range.endContainer as HTMLElement;
      }

      // Check if cursorParentElement is an HTMLElement
      if (cursorParentElement) {
        // Get the text content of the cursor line
        const cursorLineText = cursorParentElement.textContent || "";

        // Create a new header element with a class
        const header = document.createElement(headerType);
        header.className = getHeaderClass(headerType); // Set the class based on your logic

        // Set the text content of the header
        header.textContent = cursorLineText === "" ? "\u200B" : cursorLineText;

        // If there's no text, insert a zero-width space character (\u200B)
        // to ensure the cursor stays in the same position
        if (cursorLineText === "") {
          range.deleteContents();
          range.insertNode(document.createTextNode("\u200B"));
        } else {
          // Replace the cursor line with the new header
          cursorParentElement.innerHTML = "";
          cursorParentElement.appendChild(header);
        }
      }
    }

    restoreSelection();
  };

  const handleInsertImageInBlog = (file: File, id: string) => {
    // Create a container div for the image and loader
    const container = document.createElement("div");
    container.style.position = "relative"; // Ensure position is set for absolute positioning of loader

    // Create the loader element
    const loader = document.createElement("div");
    loader.className = "loader"; // Apply a class for styling
    container.appendChild(loader);

    // Create the image element
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.id = id;
    img.className = "w-[99%] mx-auto h-auto blurred-image"; // Apply a class for styling
    img.contentEditable = "false";

    // Append the image to the container
    container.appendChild(img);

    if (inputRef.current) {
      inputRef.current.appendChild(container);
    }
  };

  const handleReplaceImageInBlog = (imageSource: string, id: string) => {
    const img = document.getElementById(id) as HTMLImageElement;
    console.log("Image element:", img);
    img.src = imageSource;
  };

  enum ImageType {
    BLOG = "BLOG",
    COVER = "COVER",
  }

  const handleImageUpload = async (
    file: File,
    type: ImageType.BLOG | ImageType.COVER
  ) => {
    if (!file) return;

    const imageId = Date.now().toString();

    try {
      const uploadTask = uploadBytesResumable(storageRef, file);

      setImageUploading(true);

      handleInsertImageInBlog(file, imageId);

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
      handleReplaceImageInBlog(downloadURL, imageId);
      setImageUploading(false);
    } catch (error) {
      // Handle error if needed
      console.error("Error handling file upload:", error);
      throw error;
    }
  };

  const handleBlogImageChange = async (
    files: FileList | null,
    type: ImageType.BLOG | ImageType.COVER
  ) => {
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = async (e) => {
        if (e.target) {
          console.log("Selected File Name:", file.name);

          try {
            await handleImageUpload(file, type);
          } catch (error) {
            // Handle error if needed
            console.error("Error handling file upload:", error);
            setImageUploading(false);
            return;
          }
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // Check if the Enter key is pressed
    // if (e.key === "Enter") {
    //   e.preventDefault();
    //   handleInsertHeader(""); // Insert a new paragraph
    // }

    // Check if the backspace key is pressed
    if (e.key === "Backspace") {
      // Prevent removing certain elements like headers
      const selection = window.getSelection();
      if (selection?.focusNode && selection.focusNode.parentElement) {
        const parentNode = selection.focusNode.parentElement;
        if (parentNode.tagName === "div") {
          console.log("Prevented removing the element", parentNode.tagName);
          e.preventDefault();
          return;
        }
      }
    }

    // Check if Ctrl + Z is pressed for undo
    // if ((e.ctrlKey || (e.key === "Meta" && e.shiftKey)) && e.key === "z") {
    //   e.preventDefault();
    //   undo();
    // }

    // Check if the space key is pressed
    // if (e.key === " ") {
    //   e.preventDefault();
    //   insertSpace(); // Function to manually move the cursor forward
    // }
  };

  const undo = () => {
    if (inputRef.current && history.length > 1) {
      const previousState = history[history.length - 2];
      setHistory((prev) => prev.slice(0, -1));
      inputRef.current.innerHTML = previousState;
    }
  };

  const insertSpace = () => {
    if (savedSelection) {
      const spaceNode = document.createTextNode("\u00a0"); // Non-breaking space
      savedSelection.insertNode(spaceNode);
      savedSelection.setStartAfter(spaceNode);
      savedSelection.setEndAfter(spaceNode);
    }
  };

  // Helper function to determine the class based on header type
  const getHeaderClass = (headerType: string): string => {
    switch (headerType) {
      case "h1":
        return "text-4xl font-bold";
      case "h2":
        return "text-3xl font-bold";
      case "h3":
        return "text-2xl font-bold";
      case "h4":
        return "text-xl font-bold";
      case "h5":
        return "text-lg font-bold";
      case "h6":
        return "text-base font-bold";
      case "p":
        return "text-base font-normal";
      case "a":
        return "text-base font-normal underline";

      default:
        return "";
    }
  };

  // Save initial state to history on mount
  useEffect(() => {
    handleInput();
  }, []);

  const handleBlogSubmit = async () => {
    if (title.trim() === "") {
      // setErrorTitle("Please enter a title");
    }

    if (selectedFile === null) {
      // setErrorImage("Please select an image");
    }

    if (inputRef.current?.innerHTML === "") {
      // setErrorDescription("Please enter a description");
    }

    if (
      title.trim() === "" &&
      selectedFile === null &&
      inputRef.current?.innerHTML === ""
    ) {
      // setErrorTitle("Please enter a title");
      // setErrorDescription("Please enter a description");
      // setErrorImage("Please select an image");
      alert("All fields are not filled");
      return;
    }

    if (title.trim() !== "" && selectedFile !== null) {
      console.log("All fields are filled");
      alert("All fields are filled");

      if (user && !loading && !error) {
        // Make a random color code in rgba format
        let color_code = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)}, 0.5)`;

        ////////////////////////////// For New Version of Firebase(V9) //////////////////////////////
        // ADD JOB TO FIRESTORE
        const blogData = {
          title: title,
          content: inputRef.current?.innerHTML,
          uid: signedInUserData.uid,
          userEmail: signedInUserData.email,
          createAt: formatDate(new Date()),
          createdBy: signedInUserData.email,
          color_code: color_code,
        };

        // console.log("Blog Data:", blogData);
        addDoc(collection(db, `Blogs`), blogData)
          .then(() => {
            console.log("Blog submitted");
            const { pathname } = Router;
            // if (pathname == "/createProject") {
              alert(
                "Your Blog is submitted successfully."
              );
              // Router.push(`/dashboard/${signedInUserData.email}`);
            // }
          })
          .catch((err) => {
            console.warn(err);
            alert(`Error while submitting blog: ${err.message}`);
          });
        //
        ////////////////////////////// For New Version of Firebase(V9) //////////////////////////////

        //Now sending the data for notifications
      } else {
        alert("Please sign in to save project to cloud.");
      }
    } else {
      // console.log("All fields are not filled");
      alert("All fields are not filled");
      return;
    }
  };

  return (
    <div>
      <div>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => console.log("Hello")}
          className="fixed top-64 z-50 w-9/12"
        >
          Submit Blog
        </Button>
      </div>

      <div className="bg-[#f4f2ee] w-fit mx-auto gap-3 p-2 border border-gray-600 border-solid rounded-md mb-8 flex justify-evenly">
        <Button
          className="bg-teal-600 text-white px-4 py-2 rounded-md"
          variant="contained"
          color="primary"
          onClick={() => handleInsertHeader("h1")}
        >
          h1
        </Button>
        <Button
          className="bg-emerald-500 text-white px-4 py-2 rounded-md"
          variant="contained"
          color="primary"
          onClick={() => handleInsertHeader("h2")}
        >
          h2
        </Button>
        <Button
          className="bg-orange-500 text-white px-4 py-2 rounded-md"
          variant="contained"
          color="primary"
          onClick={() => handleInsertHeader("h3")}
        >
          h3
        </Button>
        <Button
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          variant="contained"
          color="primary"
          onClick={() => handleInsertHeader("h4")}
        >
          h4
        </Button>
        <Button
          className="bg-pink-500 text-white px-4 py-2 rounded-md"
          variant="contained"
          color="primary"
          onClick={() => handleInsertHeader("h5")}
        >
          h5
        </Button>
        <Button
          className="bg-yellow-500 text-white px-4 py-2 rounded-md"
          variant="contained"
          color="primary"
          onClick={() => handleInsertHeader("h6")}
        >
          h6
        </Button>
        <Button
          className="bg-cyan-800 text-white px-4 py-2 rounded-md"
          variant="contained"
          color="primary"
          onClick={() => handleInsertHeader("p")}
        >
          p
        </Button>
        <Button
          className="bg-sky-500 text-white px-4 py-2 rounded-md"
          variant="contained"
          color="primary"
          onClick={() => handleInsertHeader("a")}
        >
          a
        </Button>

        <InputFileUpload
          className="bg-sky-800 text-white px-4 py-2 rounded-md"
          label="Upload Image"
          onChange={(e) =>
            handleBlogImageChange(e.target.files, ImageType.BLOG)
          }
        />
      </div>

      <section className="w-[720px] mx-auto mt-16">
        <div className="bg-[#f4f2ee] rounded-lg w-full h-80 flex flex-col justify-center items-center">
          <SVGImage className="mx-auto block" />
          <h5 className="font-normal text-base text-center font-sans select-none">
            We recommend uploading or dragging in an image that is{" "}
            <b>1920x1080 pixels</b>
          </h5>

          <InputFileUpload
            className="bg-gray-100 hover:bg-gray-200 text-gray-600 border border-gray-600 border-solid px-4 py-2 rounded-md w-72"
            label="Upload Image"
            onChange={(e) =>
              handleBlogImageChange(e.target.files, ImageType.COVER)
            }
          />
        </div>

        <div className="mt-8">
          <input
            className="placeholder:text-blogTitle text-5xl font-semibold border-none focus-within:border-none focus:border-none outline-none"
            contentEditable={true}
            value={title}
            onChange={handleChangeTitle}
            placeholder="Title"
          />
        </div>

        <div className="mt-8">
          <div
            ref={inputRef}
            className="text-xl font-normal border-none focus-within:border-none focus:border-none outline-none text-black"
            contentEditable={true}
            dangerouslySetInnerHTML={{
              __html: `<p>Blog Content</p>`,
            }}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
          />
        </div>
      </section>
    </div>
  );
};
export default AddBlogs;
