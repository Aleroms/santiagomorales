//options for forms

const employment_type = [
  'Full-time',
  'Part-time',
  'Self-employed',
  'Freelance',
  'Contract',
  'Internship',
  'Apprenticeship',
  'Seasonal'
]

const location_type = ['On-site', 'Hybrid', 'Remote']

const months = [
  'Please select',
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
//revice this file. Do you need workExpDefault??
const workExpDefault = {
  company: 'company',
  current_job: false,
  emp_type: 'Please select',
  end: {
    month: 'January',
    year: 2023
  },
  id: 'unique id',
  loc_type: 'On-site',
  location: 'Irvine, California',
  start: {
    month: 'January',
    year: 2023
  },
  title: 'Job Title'
}

const educationOptions = ['Associate degree', 'B.A', 'B.S', 'M.S', 'Doctoral degree']

export { employment_type, location_type, months, workExpDefault, educationOptions }
