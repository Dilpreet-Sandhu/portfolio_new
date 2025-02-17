'use client'
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/home/Navbar";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 


  return (
    <html lang="en">
      <Provider store={store}>
      <body
        className={`bg-black w-full min-h-screen`}
      >
        <CustomCursor/>
        <Navbar/>
        {children}
      </body>
      </Provider>
    </html>
  );
}
