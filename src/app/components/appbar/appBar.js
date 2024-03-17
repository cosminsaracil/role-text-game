"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = ["Products", "Pricing", "Blog"];

function ResponsiveAppBar() {
  return (
    <AppBar
      position="static"
      sx={{ display: "inline-block", marginTop: "100px" }}
    >
      <Container maxWidth="xl" sx={{ width: "50%" }}>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex", gap: "10px" },
            justifyContent: "center",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              sx={{
                my: 2,
                color: "white",
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
