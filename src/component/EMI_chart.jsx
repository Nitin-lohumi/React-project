import React, { useEffect, useState, useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Select,
  Box,
  MenuItem,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { ContextProvider } from "../utility/ContextAPI";
import "../styles/Emichart.css";
function EMI_chart({ emi, data, reset }) {
  const Values = useContext(ContextProvider);
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [schedule, setSchedule] = useState([]);
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(true);
  const { Loan, InterestRate, termYear } = data;
  const { setCurrencyList, currencyList } = Values;
  const theme = useTheme();
  useEffect(() => {
    async function fetchExchangeRate() {
      try {
        const res = await axios.get(
          "https://v6.exchangerate-api.com/v6/439a79377a0eb345b186a9ff/latest/INR"
        );
        const rates = res?.data?.conversion_rates || {};
        setExchangeRates(rates);
        setCurrencyList(Object.keys(rates));
        setLoading(false);
      } catch (error) {
        console.error("Exchange rate fetch error:", error);
        setExchangeRates({ INR: 1 });
        setCurrencyList(["INR"]);
        setLoading(false);
      }
    }
    fetchExchangeRate();
  }, []);

  useEffect(() => {
    if (!exchangeRates[targetCurrency] || !emi) return;
    const r = InterestRate / 12 / 100;
    const n = termYear * 12;
    let balance = Loan;
    const scheduleData = [];
    for (let i = 1; i <= n; i++) {
      const interestPaid = balance * r;
      const principalPaid = emi - interestPaid;
      balance -= principalPaid;
      scheduleData.push({
        month: i,
        principalPaid,
        interestPaid,
        total: emi,
        balance: balance > 0 ? balance : 0,
      });
    }
    setSchedule(scheduleData);
  }, [emi, exchangeRates, targetCurrency, InterestRate, termYear, Loan]);

  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", padding: "10px" }}>
        <CircularProgress color={theme.palette.text.primary} />
      </Box>
    );

  const currencySymbol = targetCurrency === "INR" ? "₹" : "$";
  const rate = exchangeRates[targetCurrency] || 1;
  return (
    <>
      <Box>
        <Typography variant="h5" sx={{ color: theme.palette.text.primary }}>
          Monthly EMI: {currencySymbol}
          {emi}
        </Typography>
      </Box>
      <Box
        sx={{
          mb: 2,
          display: "flex",
          gap: 2,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box className="selectClass">
          <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
            Select Currency:
          </Typography>
          <Select
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
            size="small"
          >
            {currencyList.map((currency) => (
              <MenuItem key={currency} value={currency}>
                {currency}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box className="buttonClass">
          <Button variant="outlined" onClick={reset}>
            Reset
          </Button>
        </Box>
      </Box>

      <TableContainer
        component={Paper}
        sx={{ maxHeight: 400, overflowX: "auto" }}
      >
        <Table stickyHeader sx={{ minWidth: 800 }} className="responsive-table">
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell>Principal ({targetCurrency})</TableCell>
              <TableCell>Interest ({targetCurrency})</TableCell>
              <TableCell>Total Payment ({targetCurrency})</TableCell>
              <TableCell>Remaining Balance ({targetCurrency})</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map((row) => (
              <TableRow key={row.month}>
                <TableCell>{`Month ${row.month}`}</TableCell>
                <TableCell>
                  {" "}
                  {currencySymbol}
                  {row.principalPaid.toFixed(2)}
                </TableCell>
                <TableCell>
                  {" "}
                  {currencySymbol}
                  {row.interestPaid.toFixed(2)}
                </TableCell>
                <TableCell>
                  {" "}
                  {currencySymbol}
                  {Number(row.total).toFixed(2)}
                </TableCell>
                <TableCell>
                  {currencySymbol}
                  {(row.balance * rate).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default EMI_chart;
