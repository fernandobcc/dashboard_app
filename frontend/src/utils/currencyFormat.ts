const formatCurrency = (currency: string): string => {
  const currencyNumber = Number(currency)

  return currencyNumber.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })
}

export default formatCurrency
