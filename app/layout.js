import Navbar from "@/components/Navbar";
import "./globals.css";
import ReduxProvider from "@/redux/ReduxProvider";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
          <Toaster position="top-right" />
        </ReduxProvider>
      </body>
    </html>
  );
}
