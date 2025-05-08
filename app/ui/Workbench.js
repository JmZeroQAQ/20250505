'use client';

import { useState } from "react";
import FileInput from "./FileInput";
import OperateMenu from "./OperateMenu";
import DisplayPDF from "./DispalyPDF";
import rotatePDF from "../lib/rotate-pdf";

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

  async function handleClickDownload() {
    const newFile = await rotatePDF(file, pages);
    const blob = new Blob([newFile], { type: 'application/pdf' });

    // 创建下载链接
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name; // 设置下载文件名

    // 触发下载
    document.body.appendChild(a);
    a.click();

    // 清理
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  }

  function getDownload() {
    return (
      <div className="flex justify-center mt-5">
        <button onClick={handleClickDownload} className="p-2 cursor-pointer font-semibold bg-[#FF612F] text-white rounded">Download</button>
      </div>
    )
  }

  return (
    <div>
      {file ? <OperateMenu setFile={setFile} setPages={setPages} width={width} setWidth={setWidth} /> : getFileInput()}
      {file ? <DisplayPDF file={file} pages={pages} setPages={setPages} width={width} /> : ""}
      {file ? getDownload() : ""}
    </div>
  )
}
