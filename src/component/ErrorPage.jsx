import React from "react";
import { Typography, Box, Button, useTheme } from "@mui/material";
const ErrorPage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <div>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ color: theme.palette.text.primary }}
        >
          404 - Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
          The page you're looking for doesn't exist.
        </Typography>
        <Button href={"/"} sx={{ m: 5 }} color="error" variant="contained">
          Go To Home
        </Button>
      </div>
    </Box>
  );
};

export default ErrorPage;

