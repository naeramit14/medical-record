import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function index() {
  const [value, setValue] = useState("");
  const toolbarOptions = [
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ size: ["small", false, "large",] }],
    [
      { color: ["black", "gray", "white", "red", "green", "blue", "yellow"] },
      {
        background: [
          "black",
          "gray",
          "white",
          "red",
          "green",
          "blue",
          "yellow",
        ],
      },
    ],
    [{ align: [] }],
    ["clean"],
  ];
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      modules={{
        toolbar: toolbarOptions,
      }}
    />
  );
}

export default index;
