import React, { useState } from "react";
import {
  TextField,
  Box,
  Autocomplete,
  AppBar,
  FormControlLabel,
  Checkbox,
  Typography,
  Chip,
} from "@mui/material";

// Define your filter options
const filterOptions = {
  type: ["Full Time", "Part Time", "Contract", "Internship"],
  location: ["On Site", "Hybrid", "Remote"],
  skills: [
    "Java",
    "Spring Boot",
    "React JS",
    "Next JS",
    "MERN",
    "Database",
    "Backend",
    "Frontend",
    "Full Stack",
  ],
};

const FilterHeader: React.FC = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Function to handle removal of chips
  const handleRemove = (value, type) => {
    if (type === "type") {
      setSelectedTypes((prev) => prev.filter((v) => v !== value));
    } else if (type === "location") {
      setSelectedLocations((prev) => prev.filter((v) => v !== value));
    } else if (type === "skills") {
      setSelectedSkills((prev) => prev.filter((v) => v !== value));
    }
  };

  // Function to get the filtered options excluding selected values
  const getFilteredOptions = (options, selected) => {
    return options.filter((option) => !selected.includes(option));
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        width: "100%",
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            verticalAlign: "middle",
            lineHeight: 4,
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Job Type Autocomplete */}
          <Autocomplete
            multiple
            options={getFilteredOptions(filterOptions.type, selectedTypes)} // Exclude selected values
            disableCloseOnSelect
            value={selectedTypes}
            onChange={(event, newValue) => {
              setSelectedTypes(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Job Type"
                sx={{ width: { xs: "90%", sm: "250px", md: "300px" } }} // Responsive width
              />
            )}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <FormControlLabel
                  control={<Checkbox checked={selected} />}
                  label={option}
                />
              </li>
            )}
          />

          {/* Location Autocomplete */}
          <Autocomplete
            multiple
            options={getFilteredOptions(
              filterOptions.location,
              selectedLocations
            )} // Exclude selected values
            disableCloseOnSelect
            value={selectedLocations}
            onChange={(event, newValue) => {
              setSelectedLocations(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Location"
                sx={{ width: { xs: "90%", sm: "250px", md: "300px" } }} // Responsive width
              />
            )}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <FormControlLabel
                  control={<Checkbox checked={selected} />}
                  label={option}
                />
              </li>
            )}
          />

          {/* Skills Autocomplete */}
          <Autocomplete
            multiple
            options={getFilteredOptions(filterOptions.skills, selectedSkills)} // Exclude selected values
            disableCloseOnSelect
            value={selectedSkills}
            onChange={(event, newValue) => {
              setSelectedSkills(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Skills"
                sx={{ width: { xs: "90%", sm: "250px", md: "300px" } }} // Responsive width
              />
            )}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <FormControlLabel
                  control={<Checkbox checked={selected} />}
                  label={option}
                />
              </li>
            )}
          />
        </Box>

        {/* Display Selected Values as Chips */}
        <Box sx={{ marginTop: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
          {[...selectedTypes, ...selectedLocations, ...selectedSkills].map(
            (value) => (
              <Chip
                key={value}
                label={value}
                onDelete={() =>
                  handleRemove(
                    value,
                    selectedTypes.includes(value)
                      ? "type"
                      : selectedLocations.includes(value)
                        ? "location"
                        : "skills"
                  )
                }
              />
            )
          )}
        </Box>
      </Box>
    </AppBar>
  );
};

export default FilterHeader;
