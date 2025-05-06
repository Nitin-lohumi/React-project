export default function calculateEMI(principal, annualRate, termYears) {
  const monthlyRate = annualRate / 12 / 100;
  const numberOfPayments = termYears * 12;
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  return emi.toFixed(2);
}
