'use client';

export default function FileInput({ setFile }) {

  function onFileChange(event) {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
  }

  return (
    <div className="h-[350px] w-[275px] bg-white">
      <input className="hidden" onChange={onFileChange} id="file-input" type="file" accept="application/pdf" />
      <label className="flex items-center h-full rounded border justify-center border-dashed border-stone-300" htmlFor="file-input">
        <div className="cursor-pointer flex flex-col items-center space-y-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"></path></svg>
          <p className="pointer-events-none font-medium text-sm leading-6 pointer opacity-75">Click to upload or drag and drop</p>
        </div>
      </label>
    </div>
  )
}
