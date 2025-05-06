import React from "react";
import { useState } from "react";
import { Box, TextField, useTheme, Button } from "@mui/material";
import "../styles/HomeStyle.css";
import calculateEMI from "../utility/CalculateEMI";
import EMI_chart from "./EMI_chart";
function Home() {
  const theme = useTheme();
  const [Emi, setEmI] = useState(0);
  const [loan, setloan] = useState(100000);
  const [InterestRate, setInterestRate] = useState(8.5);
  const [termYear, setTermyear] = useState(5);
  const [data, setData] = useState({
    Loan: 0,
    InterestRate: 0,
    termYear: 0,
  });
  const handleCalculate = () => {
    const updatedData = {
      Loan: parseFloat(loan),
      InterestRate: parseFloat(InterestRate),
      termYear: parseFloat(termYear),
    };
    setData(updatedData);
    const emi = calculateEMI(
      updatedData.Loan,
      updatedData.InterestRate,
      updatedData.termYear
    );
    setEmI(emi);
  };
  function reset() {
    setData(null);
    setloan(10000);
    setInterestRate(8.5);
    setTermyear(5);
    setEmI(0);
  }
  return (
    <Box
      sx={{ p: 2, backgroundColor: theme.palette.background.default }}
      className="HomeBox"
    >
      <div className="Box1">
        <h1
          style={{
            textTransform: "capitalize",
            marginBottom: "15px",
            margin: 0,
            color: theme.palette.text.primary,
          }}
        >
          Loan Calculator Dashboard
        </h1>
        <div className="textFields">
          <TextField
            id="outlined-basic"
            label="Loan"
            variant="outlined"
            size={"medium"}
            name="Loan"
            value={loan}
            onChange={(e) => setloan(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Interest Rate %"
            variant="outlined"
            size={"medium"}
            name="InterestRate"
            value={InterestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Term (years)"
            variant="outlined"
            size={"medium"}
            name="termYear"
            value={termYear}
            onChange={(e) => setTermyear(e.target.value)}
          />
        </div>
        <Button
          size="20"
          variant="contained"
          color="primary"
          className="button"
          style={{ margin: "10px 0" }}
          onClick={handleCalculate}
        >
          Calculate
        </Button>
      </div>
      {Emi != 0 && (
        <>
          <div className="Box2">
            <EMI_chart emi={Emi} data={data} reset={reset} />
          </div>
        </>
      )}
    </Box>
  );
}

export default Home;
