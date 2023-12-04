import React, { useRef, useState } from "react";
import SVGImage from "@/app/SVGs/SVGImage";
import { Button } from "@mui/material";

const AddBlogs = () => {
  const inputRef: React.RefObject<HTMLDivElement> = useRef(
    document.createElement("div")
  );

  const [savedSelection, setSavedSelection] = useState<Range | null>(null);

  const handleInput = () => {
    // Your existing handleInput logic
    if (inputRef.current) {
      const editedContent = inputRef.current.innerHTML;
      console.log("Edited content:", editedContent);
    }
  };

  const saveSelection = () => {
    const selection = window.getSelection();
    if (selection?.rangeCount) {
      setSavedSelection(selection.getRangeAt(0).cloneRange());
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

  const handleInsertHeader = (headerType: string) => {
    saveSelection();

    const selection = window.getSelection();
    const range = selection?.getRangeAt(0) || document.createRange();

    // Check if there's content after the cursor
    const isContentAfterCursor =
      range.endContainer.nodeType === Node.TEXT_NODE &&
      (range.endContainer.nodeValue?.length ?? 0) > range.endOffset;

    // Get the parent element containing the cursor
    const cursorParentElement: HTMLElement | null =
      range.endContainer.nodeType === Node.TEXT_NODE
        ? range.endContainer.parentElement
        : range.endContainer;

    // Get the text content of the cursor line
    const cursorLineText = cursorParentElement?.textContent || "";

    // Create a new header element with a class
    const header = document.createElement(headerType);
    header.className = getHeaderClass(headerType); // Set the class based on your logic

    // Set the text content of the header
    header.textContent = cursorLineText;

    // Replace the cursor line with the new header
    if (cursorParentElement) {
      cursorParentElement.innerHTML = "";
      cursorParentElement.appendChild(header);
    }

    restoreSelection();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
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

  return (
    <div>
      <div>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => console.log("Hello")}
          className="fixed top-0 z-50 w-11/12"
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
      </div>

      <section className="w-[720px] mx-auto">
        <div className="bg-[#f4f2ee] rounded-lg w-full h-80 flex flex-col justify-center items-center">
          <SVGImage className="mx-auto block" />
          <h5 className="font-normal text-base text-center font-sans">
            We recommend uploading or dragging in an image that is{" "}
            <b>1920x1080 pixels</b>
          </h5>
        </div>

        <div className="mt-8">
          <input
            className="placeholder:text-blogTitle text-5xl font-semibold border-none focus-within:border-none focus:border-none outline-none"
            contentEditable={true}
            placeholder="Title"
          />
        </div>

        <div className="mt-8">
          <div
            ref={inputRef}
            className="text-2xl font-normal border-none focus-within:border-none focus:border-none outline-none text-black"
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
