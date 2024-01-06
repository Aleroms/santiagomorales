const calculateDuration = (start, end) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
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
  if (totalMonths === 0) {
    return '1 mos'
  } else if (totalMonths <= 11) {
    return `${totalMonths} mos`
  } else if (remainingMonths === 0) {
    return `${years} yr`
  } else {
    return `${years + 1} yr ${remainingMonths} mos`
  }
}

const date_val = (node) => {
  //should be group | start or end
  const form = node.at('$parent').at('$parent')
  const start = form.value.start
  const end = form.value.end
  const startDate = new Date(`${start.month} ${start.year}`)
  const endDate = new Date(`${end.month} ${end.year}`)

  if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
    if (startDate > endDate) {
      console.log("End date can't be earlier than start date")
      return false
    } else if (endDate > new Date()) {
      console.log('end date cannot be in the future')
      return false
    } else {
      console.log('dates are valid')
      return true
    }
  }
  return false
}

export { calculateDuration, date_val }
