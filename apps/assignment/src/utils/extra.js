export const calculateAge = ({ dob }) => {
  const currentDate = new Date();
  const isBirthdayToday =
    dob.getDate() === currentDate.getDate() &&
    dob.getMonth() === currentDate.getMonth();
  const age = (currentDate - dob) / (365 * 24 * 60 * 60 * 1000);
  const roundedAge = Math.floor(age);

  return {
    age: roundedAge,
    isBirthdayToday: isBirthdayToday,
  };
};
