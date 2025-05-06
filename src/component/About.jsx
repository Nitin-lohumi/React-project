import React from "react";
import { Box, Typography, useTheme, Divider } from "@mui/material";
function About() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
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
            textTransform: "capitalize",
            color: theme.palette.text.primary,
            display: "flex",
          }}
        >
          About This App
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textTransform: "capitalize",
            textWrap: "pretty",
            padding: "14px 0",
            color: theme.palette.text.secondary,
          }}
        >
          this is a Loan calulate app , single - page application
          using react js and Matrial UI
        </Typography>
        <Divider
          sx={{
            width: "100%",
            color: theme.palette.text.secondary,
            background: theme.palette.background.default,
          }}
        />
        <Typography
          variant="h5"
          sx={{ padding: "10px 0", color: theme.palette.text.secondary }}
        >
          done ✅
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
