import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Our Work",
};

function Layout({ children }) {
  return children;
}

export default Layout;
