import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <GoogleOAuthProvider clientId={"826677420756-fi5gqlscoke2klbki3q2o6e0fft77e9u.apps.googleusercontent.com"}>
      <html lang="en">
        <body className={`antialiased`}>
          {children}
          <ToastContainer />
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}
