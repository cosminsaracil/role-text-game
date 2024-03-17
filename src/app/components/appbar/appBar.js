"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useState } from "react";

const places = [
  {
    name: "town_square",
    buttonText: ["Go to store", "Go to cave", "Fight dragon"],
  },
  {
    name: "store",
    buttonText: [
      "Buy 10 health (10 gold)",
      "Buy weapon (30 gold)",
      "Go to town square",
    ],
  },
  {
    name: "cave",
    buttonText: ["Fight slime", "Fight fanged beast", "Go to town square"],
  },
  { name: "dragon", buttonText: ["Attack", "Dodge", "Run"] },
];

function ResponsiveAppBar() {
  const [location, setLocation] = useState("town_square");
  console.log(location);
  return (
    <AppBar
      position="static"
      sx={{
        display: "inline-block",
        marginTop: "100px",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          width: "50%",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex", gap: "10px" },
            justifyContent: "center",
            backgroundColor: "#496989",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            padding: "10px",
          }}
        >
          <Typography>{"XP: "}</Typography>
          <Typography>{"Health: "}</Typography>
          <Typography>{"Gold: "}</Typography>
        </Box>
        <Divider sx={{ backgroundColor: "black" }} />
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            backgroundColor: "#496989",
          }}
        >
          {location === "town_square" &&
            places.map(
              (place) =>
                place.name === location && (
                  <div key={place.name}>
                    <Button
                      sx={{ my: 2, color: "white", ml: "5px" }}
                      variant="contained"
                      size="small"
                      onClick={() => {
                        setLocation(place.buttonText[0]);
                        if (place.buttonText[0] === "Go to store") {
                          console.log("store");
                        }
                      }}
                    >
                      {place.buttonText[0]}
                    </Button>
                    <Button
                      sx={{ my: 2, color: "white", ml: "10px" }}
                      variant="contained"
                      size="small"
                      onClick={() => setLocation(place.buttonText[1])}
                    >
                      {place.buttonText[1]}
                    </Button>
                    <Button
                      sx={{ my: 2, color: "white", ml: "10px" }}
                      variant="contained"
                      size="small"
                      onClick={() => setLocation(place.buttonText[2])}
                    >
                      {place.buttonText[2]}
                    </Button>
                  </div>
                )
            )}
          {location === "Go to store" &&
            places.map(
              (place) =>
                place.name === location && (
                  <div key={place.name}>
                    <Button
                      sx={{ my: 2, color: "white", ml: "10px" }}
                      variant="contained"
                      onClick={() => setLocation(place.buttonText[0])}
                    >
                      {place.buttonText[0]}
                    </Button>
                    <Button
                      sx={{ my: 2, color: "white", ml: "10px" }}
                      variant="contained"
                      onClick={() => setLocation(place.buttonText[1])}
                    >
                      {place.buttonText[1]}
                    </Button>
                    <Button
                      sx={{ my: 2, color: "white", ml: "10px" }}
                      variant="contained"
                      onClick={() => setLocation(place.buttonText[2])}
                    >
                      {place.buttonText[2]}
                    </Button>
                  </div>
                )
            )}
        </Box>
        <Divider sx={{ backgroundColor: "black" }} />
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            backgroundColor: "#496989",
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            padding: "10px",
          }}
        >
          {places.map((place) => (
            <Typography key={place.name}>{place.name}</Typography>
          ))}
        </Box>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
