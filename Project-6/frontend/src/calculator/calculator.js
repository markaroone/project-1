const caloriesBurnedCalculator = (weight, height, sex, age, hoursSlept) => {
  // Basal Metabolic Rate (BMR)
  // For Male: 66.5 + (13.8 x weight in kg) + (5 x height in cm) – (6.8 x age in years)
  //   For Female: 655 + (9.6 x weight in kg) + (1.8 x height in cm) – (4.7 x age in years)
  //   The result gives you your basal metabolic rate while awake over a 24-hour-period. To calculate approximately how many calories you burn per hour of sleep, divide the number by 24 to get the hourly rate, then multiply by 0.85 to account for the lower metabolic rate during sleep.

  const male = ['m', 'male'];
  const female = ['f', 'female'];

  let bmr;

  if (male.includes(sex.trim().toLowerCase())) {
    bmr = 66.5 + 13.8 * weight + 5 * height - 6.8 * age;
  } else if (female.includes(sex.trim().toLowerCase())) {
    bmr = 665 + 9.6 * weight + 1.8 * height - 4.7 * age;
  }

  return (bmr / 24) * 0.85 * hoursSlept;
};

module.exports = { caloriesBurnedCalculator };
