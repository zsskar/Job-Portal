"use client";
import { ReactNode, useState } from "react";
import dynamic from "next/dynamic";
import { Box, CssBaseline } from "@mui/material";

const Sidebar = dynamic(() => import("./components/Sidebar"), { ssr: false });
const Header = dynamic(() => import("./components/Header"), { ssr: false });

const drawerWidth = 240;

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Header */}
      <Header
        onSidebarToggle={handleSidebarToggle}
        onThemeToggle={handleThemeToggle}
        isDarkMode={isDarkMode}
      />

      <Sidebar isOpen={sidebarOpen} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 3,
          marginTop: "64px",
          marginLeft: sidebarOpen ? `${drawerWidth}px` : "0px", // adjusts layout based on sidebar state
          transition: "margin-left 0.3s ease",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
