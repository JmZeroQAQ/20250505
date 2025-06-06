'use client';

import { pdfjs, Document, Page } from 'react-pdf';
import rotatePDF from '../lib/rotate-pdf';
import Loading from './Loading';
import OperateMenu from './OperateMenu.js';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

export default function DisplayPDF({ file, setFile, width, setWidth, pages, setPages }) {
  function onDocumentLoadSuccess({ numPages }) {
    setPages(Array(numPages).fill(0));
  }

  function handleClick(idx) {
    const newPages = [...pages];
    newPages[idx] += 90;
    newPages[idx] %= 360;
    setPages(newPages);
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

  const pageList = pages.map((rotate, idx) => {
    return (
      <div className='m-3 relative flex-none cursor-pointer select-none' onClick={() => handleClick(idx)} key={`page_${idx + 1}`}>
        <div className='overflow-hidden transition-transform'>
          <div style={{ width: width, height: width * 1.44 }} className='flex flex-col justify-between items-center shadow-md p-3 bg-white hover:bg-gray-50'>
            <Page
              className={`diy-rotate-${rotate} transition duration-150 ease-in-out`}
              pageNumber={idx + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading={""}
            />
            <div className='text-center shrink-0 text-xs italic overflow-hidden text-ellipsis whitespace-nowrap'>{idx + 1}</div>
          </div>
        </div>
        <div className="absolute z-10 top-1 right-1 rounded-full p-1 hover:scale-105 hover:fill-white bg-[#ff612f] fill-white"><svg className="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"></path></svg></div>
      </div >
    );
  })

  return (
    <div className="mt-5">
      <Document file={file} width={500} onLoadSuccess={onDocumentLoadSuccess} options={options} loading={<Loading />} >
        <OperateMenu setFile={setFile} setPages={setPages} width={width} setWidth={setWidth} />
        <div className='flex flex-wrap justify-center'>
          {pageList}
        </div>

        <div className="flex justify-center mt-5">
          <button onClick={handleClickDownload} className="p-2 cursor-pointer font-semibold bg-[#FF612F] text-white rounded">Download</button>
        </div>
      </Document>
    </div>
  );
}
