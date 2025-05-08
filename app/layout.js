import "./globals.css";

export const metadata = {
  title: "Rotate PDF",
  description: "Rotate PDF and download modified PDF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
