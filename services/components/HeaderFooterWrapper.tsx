"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layouts/Header/Header";
import Footer from "@/components/layouts/Footer/Footer";
import { Pages } from "@/lib/config/constants";

export default function HeaderFooterWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Define paths where Header & Footer should be hidden
  const hideHeaderFooterPaths = [
    Pages.LOGIN,
     Pages.Register,
    // "/forgot-password",
    // "/client-dashboard",
  ];

  // Early return if pathname is not available yet
  if (!pathname) {
    return <>{children}</>; // or a loading state
  }

  // Normalize path (remove trailing slashes)
  const normalizedPath = pathname.replace(/\/+$/, "");

  // Check if current path matches any of the hidden paths
  const shouldHide = hideHeaderFooterPaths.some(
    (path) =>
      normalizedPath === path || // exact match
      normalizedPath.startsWith(`${path}/`) // sub-routes
  );

  return (
    <>
      {!shouldHide && <Header />}
      {children}
      {!shouldHide && <Footer />}
    </>
  );
}