// Hero.js
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Container, Typography, Button, Grid, Box, Stack } from "@mui/material";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Full Stack Developer", "Problem Solver", "Passionate Learner"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy(); // Clean up
    };
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "50px",
        gap: 6,
        flexDirection: { xs: "column", md: "row" },
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #E0F7FA 30%, #FCE4EC 100%)", // Subtle gradient
        borderRadius: "25px",
        padding: "40px",
        boxShadow: "0 0 50px rgba(0, 0, 0, 0.1)",
        mt:13
      }}
    >
      {/* Left Content Section */}
      <Stack spacing={3} alignItems={{ xs: "center", md: "flex-start" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "48px", md: "72px" },
            fontWeight: 900,
            color: "#333",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Hi, I'm Mizaan ur Rehman
        </Typography>

        <Typography
          ref={typedElement}
          sx={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#1976D2", // Bright blue for emphasis
            textAlign: { xs: "center", md: "left" },
          }}
        ></Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "20px",
            textAlign: { xs: "center", md: "left" },
            color: "text.secondary",
            maxWidth: "500px",
          }}
        >
          I am a fresher eager to pursue full-stack development with React and
          Node.js, specializing in full-stack and DevOps.
        </Typography>

        <Button
          href="mailto:mizaanurrehman2@gmail.com"
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "50px",
            padding: "12px 24px",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          Contact Me
        </Button>
      </Stack>

      {/* Right Avatar Section */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "80%", md: "45%" },
          aspectRatio: "1/1",
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: "0 0 40px rgba(0, 0, 0, 0.15)",
        }}
      >
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero Image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Container>
  );
};
