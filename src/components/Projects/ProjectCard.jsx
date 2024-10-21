import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Stack,
} from "@mui/material";
import { getImageUrl } from "../../utils"; // Utility function to fetch image URLs

export const ProjectCard = ({
  project: { title, imageSrc, description, demo, source },
}) => {
  return (
    <Card
      sx={{
        maxWidth: 360,
        background: "linear-gradient(180deg, #3a6eb2 0%, #1b2b4b 100%)",
        boxShadow: 5,
        borderRadius: 4,
        transition: "transform 0.3s, box-shadow 0.3s",
        overflow: "hidden", // Ensures content stays within the card
        "&:hover": {
          transform: "translateY(-12px)",
          boxShadow: 10,
        },
      }}
    >
      <CardMedia
        component="img"
        height="210"
        image={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        sx={{
          objectFit: "cover",
          borderRadius: "4px 4px 0 0",
        }}
      />
      <CardContent sx={{ textAlign: "center", paddingBottom: 0 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 700, color: "#f8f8f8" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="#cfd8e3"
          sx={{ textAlign: "justify", lineHeight: 1.6, marginY: 2 }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", padding: "16px" }}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ width: "100%", justifyContent: "space-between" }}
        >
          <Button
            variant="contained"
            href={demo}
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice
            sx={{
              backgroundColor: "#536aa4",
              borderRadius: "25px",
              "&:hover": { backgroundColor: "#ffffff", color: "#536aa4" },
            }}
          >
            Demo
          </Button>
          <Button
            variant="contained"
            href={source}
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice
            sx={{
              backgroundColor: "#536aa4",
              borderRadius: "25px",
              "&:hover": { backgroundColor: "#ffffff", color: "#536aa4" },
            }}
          >
            Source
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};
