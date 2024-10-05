"use client";
import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      sx={{
        width: open ? 240 : 0, // Shrink width when closed
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? 240 : 0, // Control paper width to match
          transition: "width 0.3s",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "flex-end" : "center", // Center icon when closed
          padding: "8px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <IconButton onClick={toggleDrawer}>
          {open ? <ChevronLeft /> : <ChevronRight />} {/* Toggle icon */}
        </IconButton>
      </Box>
      {open && (
        <Box
          sx={{
            padding: "10px",
            backgroundColor: "#fafafa",
            height: "100%",
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            Filters
          </Typography>
          <List>
            {["Filter 1", "Filter 2", "Filter 3"].map((text, index) => (
              <ListItem
                key={index}
                sx={{
                  padding: "10px 20px",
                  marginBottom: "5px",
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Drawer>
  );
};

export default Sidebar;
