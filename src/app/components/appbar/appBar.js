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
  const [health, setHealth] = useState(100);
  const [gold, setGold] = useState(50);
  const [xp, setXp] = useState(0);
  const [weapon, setWeapon] = useState(["stick"]);
  // let health = 100;
  // let gold = 50;
  // let xp = 0;
  const [text, setText] = useState(
    "Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above. "
  );
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
            border: "2px solid black",
          }}
        >
          <Typography>{`XP: ${xp} `}</Typography>
          <Typography>{`Health: ${health}`}</Typography>
          <Typography>{`Gold: ${gold}`}</Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            backgroundColor: "#496989",
            borderRight: "2px solid black",
            borderLeft: "2px solid black",
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
                        setLocation("store");
                        setText("You enter the store.");
                      }}
                    >
                      {place.buttonText[0]}
                    </Button>
                    <Button
                      sx={{ my: 2, color: "white", ml: "10px" }}
                      variant="contained"
                      size="small"
                      onClick={() => setLocation("cave")}
                    >
                      {place.buttonText[1]}
                    </Button>
                    <Button
                      sx={{ my: 2, color: "white", ml: "10px" }}
                      variant="contained"
                      size="small"
                      onClick={() => setLocation("dragon")}
                    >
                      {place.buttonText[2]}
                    </Button>
                  </div>
                )
            )}
          {location === "store" &&
            places.map(
              (place) =>
                place.name === location && (
                  <div key={place.name}>
                    <Button
                      sx={{ my: 2, color: "white", ml: "10px" }}
                      variant="contained"
                      size="small"
                      disabled={gold < 10}
                      onClick={() => {
                        setGold(gold - 10);
                        setHealth(health + 10);
                        setXp(xp + 10);
                        setText("You bought 10 health with 10 gold.");
                        if (gold <= 10) {
                          setText("You do not have enough gold.");
                        }
                      }}
                    >
                      {place.buttonText[0]}
                    </Button>
                    <Button
                      sx={{ my: 2, color: "white", ml: "10px" }}
                      variant="contained"
                      size="small"
                      onClick={() => {
                        setGold(gold - 30);
                        setWeapon(["sword"]);
                        setText("You bought a sword for 30 gold.");
                        if (gold <= 30) {
                          setText("You do not have enough gold.");
                        }
                      }}
                    >
                      {place.buttonText[1]}
                    </Button>
                    <Button
                      sx={{ my: 2, color: "white", ml: "10px" }}
                      variant="contained"
                      size="small"
                      onClick={() => {
                        setLocation("town_square");
                        setText(
                          'You are in the town square. You see a sign that says "Store".'
                        );
                      }}
                    >
                      {place.buttonText[2]}
                    </Button>
                  </div>
                )
            )}
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            backgroundColor: "#58A399",
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            border: "2px solid black",

            padding: "10px",
            color: "black",
          }}
        >
          {location === "town_square" && (
            <>
              <Typography>{text}</Typography>
            </>
          )}
          {location === "store" && (
            <>
              <Typography>{text}</Typography>
            </>
          )}
        </Box>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
