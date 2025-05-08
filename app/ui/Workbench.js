'use client';

import { useState } from "react";
import FileInput from "./FileInput";
import DisplayPDF from "./DispalyPDF";

export default function Workbench() {
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState([]);
  const [width, setWidth] = useState(200);

  function getFileInput() {
    return (
      <div className="flex justify-center">
        <FileInput setFile={setFile} />
      </div>
    );
  }
  return (
    <div>
      {file ? " " : getFileInput()}
      {file ? <DisplayPDF file={file} setFile={setFile} pages={pages} setPages={setPages} width={width} setWidth={setWidth} /> : ""}
    </div>
  )
}
