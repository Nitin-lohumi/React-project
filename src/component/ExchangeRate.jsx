import React, { useEffect, useState, useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import { ContextProvider } from "../utility/ContextAPI";
import axios from "axios";
import "../styles/Exchange.css";
const ExchangeRate = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [baseCurrency, setBaseCurrency] = useState("INR");
  const Values = useContext(ContextProvider);
  const { currencyList, setCurrencyList } = Values;

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/439a79377a0eb345b186a9ff/latest/${baseCurrency}`
        );
        const data = response.data;
        if (!currencyList.length) {
          setCurrencyList(Object.keys(data.conversion_rates));
        }
        setRates(data.conversion_rates);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
        setLoading(false);
      }
    };
    fetchRates();
    const interval = setInterval(fetchRates, 300000);
    return () => clearInterval(interval);
  }, [baseCurrency]);

  return (
    <Box>
      {currencyList.length > 0 && (
        <FormControl
          fullWidth
          sx={{
            maxWidth: 1000,
            margin: "20px auto",
            display: "flex",
          }}
          className="selectRegion"
        >
          <InputLabel id="currency-label" className="label">
            Base Currency
          </InputLabel>
          <Select
            labelId="currency-label"
            value={baseCurrency}
            sx={{ width: "130px" }}
            label="Base Currency"
            onChange={(e) => {
              setBaseCurrency(e.target.value);
              setLoading(true);
            }}
          >
            {currencyList.map((currency) => (
              <MenuItem key={currency} value={currency}>
                {currency}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      <Card sx={{ maxWidth: 1000, margin: "auto", mt: 2 }}>
        <CardContent className="content">
          <Typography variant="h6" gutterBottom className="heading">
            Live Exchange Rates (Base: {baseCurrency})
          </Typography>
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          ) : (
            <>
              {rates ? (
                <Box
                  sx={{ maxHeight: "60vh", overflowY: "auto" }}
                  className="liveCurr"
                >
                  {Object.entries(rates).map(([currency, rate]) => (
                    <Typography key={currency} className="currency">
                      1 {"   " + baseCurrency + "  "} = {rate + "  "}{" "}
                      {"  " + currency}
                    </Typography>
                  ))}
                </Box>
              ) : (
                <Typography variant="h6" color="error">
                  Error fatching data
                </Typography>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default ExchangeRate;
