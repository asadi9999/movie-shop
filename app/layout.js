import "./globals.css";
import Footer from "../components/footer";
import Header from "../components/header";
import ClientMovies from "@/components/clientMovies";


export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="">
      {/* <title>ایران فیلم
      </title> */}
      
      <body className="">
          <Header/>
        {children}
        {/* <ClientMovies/> */}
          <Footer/>
      </body>
    </html>
  );
}
