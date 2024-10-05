"use client";
import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import FilterHeader from "./components/FilterHeader";

interface props {
  children: ReactNode;
}

const DashboardLayout: React.FC<props> = ({ children }: props) => {
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Header />
      <FilterHeader />
      {children}
    </Box>
  );
};

export default DashboardLayout;
