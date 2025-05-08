"use client";

export default function OperateMenu({ setFile, setPages, width, setWidth }) {

  function handleClickRotate() {
    setPages(pages => {
      return pages.map(e => (e + 90) % 360)
    })
  }

  function handleClickRemove() {
    setFile(null);
  }

  function handleClickAdd() {
    if (width >= 500) return;
    setWidth(w => w + 50)
  }

  function handleClickSub() {
    if (width <= 100) return;
    setWidth(w => w - 50)
  }

  return (
    <div className="flex justify-center items-center space-x-3">
      <button className="p-2 cursor-pointer font-semibold bg-[#FF612F] text-white rounded" onClick={handleClickRotate}>Rotate All</button>
      <button className="p-2 cursor-pointer font-semibold bg-black text-white rounded" onClick={handleClickRemove}>Remove PDF</button>
      <button
        onClick={handleClickAdd}
        disabled={width >= 500}
        className="shadow rounded-full cursor-pointer p-2 flex items-center justify-center hover:scale-105 grow-0 shrink-0 disabled:opacity-50 !bg-white"
        aria-label="Zoom in"
        data-microtip-position="top"
        role="tooltip"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
          />
        </svg>
      </button>
      <button
        onClick={handleClickSub}
        disabled={width <= 100}
        className="shadow rounded-full cursor-pointer p-2 flex items-center justify-center hover:scale-105 grow-0 shrink-0 disabled:opacity-50 !bg-white"
        aria-label="Zoom out"
        data-microtip-position="top"
        role="tooltip"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"
          />
        </svg>
      </button>
    </div>
  )
}
