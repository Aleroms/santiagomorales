const calculateDuration = (start, end) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  // Convert month names to numerical values
  const startMonth = months.indexOf(start.month)
  const endMonth = months.indexOf(end.month)

  // Calculate the total number of months
  const totalMonths = (end.year - start.year) * 12 + (endMonth - startMonth)

  // Calculate years and remaining months
  const years = Math.floor(totalMonths / 12)
  const remainingMonths = totalMonths % 12

  // Format the output
  if (totalMonths <= 11) {
    return '1 mos'
  } else if (remainingMonths === 0) {
    return `${years} yr`
  } else {
    return `${years + 1} yr ${remainingMonths} mos`
  }
}

export { calculateDuration }
