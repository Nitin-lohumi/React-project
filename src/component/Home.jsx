import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

function Home() {
  const theme = useTheme();

  return (
    <Box sx={{ p: 2, backgroundColor: theme.palette.background.default }}>
      <Typography variant="h4" color={theme.palette.text.primary}>
        Welcome to Home Page ({theme.palette.mode} mode)
      </Typography>
    </Box>
  );
}

export default Home;
