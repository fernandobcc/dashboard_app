const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString()
}

export default formatDate
