import React from "react";
import Box from "@mui/material/Box";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Checkbox,
  Typography,
} from "@mui/material";

const drawerWidth = 240;

type SidebarProps = {
  isOpen: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <Box
      component="nav"
      sx={{
        width: isOpen ? drawerWidth : 0,
        flexShrink: 0,
        transition: "width 0.3s ease",
        backgroundColor: "#ffffff",
        boxShadow: isOpen ? "2px 0 5px rgba(0, 0, 0, 0.1)" : "none",
        height: "100vh",
        overflow: "hidden",
        position: "fixed",
        zIndex: 1000,
      }}
    >
      {isOpen && (
        <Box sx={{ width: drawerWidth, marginTop: "60px", padding: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
            Filter By
          </Typography>
          <List sx={{ width: "100%" }}>
            <Divider sx={{ marginBottom: 2 }} />
            {[
              { label: "Full-Time" },
              { label: "Part-Time" },
              { label: "Remote" },
              { label: "On-site" },
            ].map((filter, index) => (
              <ListItem key={index} sx={{ paddingLeft: 0 }}>
                <Checkbox size="small" sx={{ padding: 0, marginRight: 1 }} />
                <ListItemText primary={filter.label} />
              </ListItem>
            ))}
            <Divider sx={{ margin: "16px 0" }} />
            {[
              { label: "Junior Level" },
              { label: "Mid Level" },
              { label: "Senior Level" },
            ].map((filter, index) => (
              <ListItem key={index} sx={{ paddingLeft: 0 }}>
                <Checkbox size="small" sx={{ padding: 0, marginRight: 1 }} />
                <ListItemText primary={filter.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default Sidebar;
