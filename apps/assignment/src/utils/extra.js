export const calculateAge = ({ dob }) => {
    console.log(dob)
    const birthDate = dob;
    const currentDate = new Date();
    console.log("dfss",currentDate);
    /**
     * checks if its user's birthday today
     */
    const isBirthdayToday =
      birthDate.getDate() === currentDate.getDate() &&
      birthDate.getMonth() === currentDate.getMonth(); 
          /**
       * Calculate the age in milisecond and convets it back to the year
       */
    const age = (currentDate - birthDate) / (365 * 24 * 60 * 60 * 1000);
    const roundedAge = Math.floor(age);
  
    return {
      age: roundedAge,
      isBirthdayToday:isBirthdayToday,

    };
  };