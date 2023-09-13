export const calculateAge = (dateOfBirth: Date): number => {
  const currentDate = new Date()
  const birthYear = dateOfBirth.getFullYear()
  const birthMonth = dateOfBirth.getMonth()
  const birthDay = dateOfBirth.getDate()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const currentDay = currentDate.getDate()

  let age = currentYear - birthYear

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--
  }

  return age
}
