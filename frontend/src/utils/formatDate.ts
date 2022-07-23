const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString()
}

const checkDateString = (year: string, month: string, currentDate: string): boolean => {
  const monthSelected = Number(month).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })
  return currentDate.includes(`${year}-${monthSelected}`)
}

export { formatDate, checkDateString }
