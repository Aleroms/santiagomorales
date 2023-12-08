//not a composable but idk where to put it

export const filterForm = (form) => {
  let filteredForm = form

  for (let key in filteredForm) {
    if (filteredForm[key] === undefined) {
      delete filteredForm[key]
    } else if (Array.isArray(filteredForm[key])) {
      // Check if the array contains files

      if (filteredForm[key][0].file instanceof File) {
        console.log(`${key} contains file(s)`)
        delete filteredForm[key]
      }
    }
  }
  console.log('filtered form', filteredForm)

  return filteredForm
}
