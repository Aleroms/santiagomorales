//not a composable but idk where to put it

export const filterForm = (form) => {
  for (let key in form) {
    if (form[key] === undefined) {
      delete form[key]
    }
  }
  console.log('filtered form', form)

  return form
}
