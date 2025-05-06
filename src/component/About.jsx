import React from "react";
import { Box, Typography, useTheme,Divider } from "@mui/material";
function About() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "1120px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.text.primary,
            display: "flex",
          }}
        >
          About This App Page
        </Typography>
        <Typography variant="h6" sx={{ color: theme.palette.text.secondary }}>
          this is a Loan calulate app is a modern , single -page application
          using react js ans Matrial UI 
        </Typography>
        <Divider
          sx={{
            width: "100%",
            color: theme.palette.text.secondary,
            background: theme.palette.background.default
          }}
        />
        <Typography variant="h5" sx={{color:theme.palette.text.secondary}}>
            done  ✅
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
