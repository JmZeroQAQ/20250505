import Image from "next/image"

export default function NavBar() {
  return (
    <header className=" px-8 py-4">
      <nav className="flex justify-between">
        <div className="flex items-center cursor-pointer">
          <svg viewBox="0 0 64 36" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"><path fill="black" d="M41.3111 0H37.6444C30.3111 0 24.6889 4.15556 21.7556 9.28889C18.8222 3.91111 12.9556 0 5.86667 0H2.2C0.977781 0 0 0.977779 0 2.2V5.86667C0 16.1333 8.31111 24.2 18.3333 24.2H19.8V33C19.8 34.2222 20.7778 35.2 22 35.2C23.2222 35.2 24.2 34.2222 24.2 33V24.2H25.6667C35.6889 24.2 44 16.1333 44 5.86667V2.2C43.5111 0.977779 42.5333 0 41.3111 0ZM19.3111 19.5556H17.8444C10.2667 19.5556 4.15556 13.4444 4.15556 5.86667V4.4H5.62222C13.2 4.4 19.3111 10.5111 19.3111 18.0889V19.5556ZM39.1111 5.86667C39.1111 13.4444 33 19.5556 25.4222 19.5556H23.9556V18.0889C23.9556 10.5111 30.0667 4.4 37.6444 4.4H39.1111V5.86667Z"></path></svg>
          <div className="font-bold text-xl font-serif">PDF.ai</div>
        </div>
        <div className="flex space-x-5 items-center font-semibold text-sm">
          <div className="hover:underline cursor-pointer">Pricing</div>
          <div className="hover:underline cursor-pointer">Chrome extension</div>
          <div className="hover:underline cursor-pointer">User cases</div>
          <div className="hover:underline cursor-pointer">API Hub</div>
          <div className="flex items-center space-x-2 hover:underline cursor-pointer">
            <Image src="https://hatscripts.github.io/circle-flags/flags/us.svg" alt="English" width={24} height={24} className="w-6 h-6 rounded-full" />
            <div>EN</div>
          </div>
          <div className="flex items-center space-x-1 hover:underline cursor-pointer">
            <div>Get started</div>
            <div>
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"></path></svg></div>
          </div>
        </div>
      </nav>
    </header>
  )
}
