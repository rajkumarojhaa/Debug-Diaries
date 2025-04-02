import React from "react";
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
