// import Sample from "./ui/Sample";
import NavBar from "./ui/NavBar";
import Footer from "./ui/Footer";
// import FileInput from "./ui/FileInput";
import Workbench from "./ui/Workbench";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="bg-[#f7f5ee] py-20">
        <div className="flex flex-col text-center space-y-10 mb-10">
          <h1 className="text-5xl font-serif">Rotate PDF Pages</h1>
          <p className="mt-2 text-gray-600 max-w-lg mx-auto">Simply click on a page to rotate it. You can then downlaod your modified PDF.</p>
        </div>
        <div className="container mx-auto">
          <Workbench />
          {/* <Sample /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
