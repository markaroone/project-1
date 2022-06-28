const generateRandomNum = (min, max) =>
  Math.round(Math.random() * (max - min)) + min;

const sleepGenerator = async (date, userId) => {
  const sleepTime =
    new Date(date).getTime() -
    28800000 +
    generateRandomNum(21, 23) * 60 * 60 * 1000 +
    generateRandomNum(0, 59) * 60 * 1000 +
    generateRandomNum(0, 59) * 1000;

  const wakeUpTime =
    sleepTime +
    generateRandomNum(6, 11) * 60 * 60 * 1000 +
    generateRandomNum(0, 59) * 60 * 1000 +
    generateRandomNum(0, 59) * 1000;

  const timeDifference = (wakeUpTime - sleepTime) / 1000 / 60 / 60;

  const hours = Math.trunc(timeDifference);
  const minutesDecimal = (timeDifference - hours) * 60;
  const minutes = Math.round(minutesDecimal);

  const sleepDuration = {
    hours: hours.toString().padStart(2, '0'),
    minutes: minutes.toString().padStart(2, '0'),
  };

  console.log(`Sleep: ${new Date(sleepTime).toString()}`);
  console.log(`Wake: ${new Date(wakeUpTime).toString()}`);
  console.log(`Time difference: ${timeDifference}`);
  console.log(
    `Sleep duration: ${sleepDuration.hours}:${sleepDuration.minutes}`
  );
  console.log(
    `Approximate calories burned: ${caloriesBurnedCalculator(
      73,
      174,
      'm',
      24,
      timeDifference
    ).toFixed()} cal`
  );

  const toSend = {
    userId: userId,
    sleepDate: new Date(sleepTime),
    wakeUpDate: new Date(wakeUpTime),
  };

  return toSend;
};

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

const heartRateRecordGenerator = async (date, userId) => {
  const randomDayTime =
    new Date(date).getTime() -
    28800000 +
    generateRandomNum(0, 23) * 60 * 60 * 1000 +
    generateRandomNum(0, 59) * 60 * 1000 +
    generateRandomNum(0, 59) * 1000;

  return {
    userId: userId,
    date: new Date(randomDayTime),
    result: generateRandomNum(45, 100),
  };
};

const stepsGenerator = (date, userId) => {
  const randomDayTime =
    new Date(date).getTime() -
    28800000 +
    generateRandomNum(0, 23) * 60 * 60 * 1000 +
    generateRandomNum(0, 59) * 60 * 1000 +
    generateRandomNum(0, 59) * 1000;

  const steps = generateRandomNum(5_000, 20_000);

  return {
    userId: userId,
    id: date,
    date: new Date(randomDayTime),
    steps: steps,
  };
};

const stepsRecordUpdate = () => {
  return { steps: generateRandomNum(10_000, 20_000) };
};

const hydrationGenerator = (date, userId) => {
  const randomDayTime =
    new Date(date).getTime() -
    28800000 +
    generateRandomNum(0, 23) * 60 * 60 * 1000 +
    generateRandomNum(0, 59) * 60 * 1000 +
    generateRandomNum(0, 59) * 1000;

  const amount = generateRandomNum(1, 10) * 250; // 250 mL

  return {
    userId,
    id: date,
    date: randomDayTime,
    amount,
  };
};

const hydrationRecordUpdate = () => {
  return { amount: generateRandomNum(5, 10) * 250 };
};

const weightGenerator = (date, weight, userId) => {
  const randomDayTime =
    new Date(date).getTime() -
    28800000 +
    generateRandomNum(0, 23) * 60 * 60 * 1000 +
    generateRandomNum(0, 59) * 60 * 1000 +
    generateRandomNum(0, 59) * 1000;

  return {
    userId,
    date: randomDayTime,
    weight,
  };
};

const weightRecordUpdate = (weight) => {
  return { weight };
};

module.exports = {
  generateRandomNum,
  sleepGenerator,
  heartRateRecordGenerator,
  stepsGenerator,
  stepsRecordUpdate,
  hydrationGenerator,
  hydrationRecordUpdate,
  weightGenerator,
  weightRecordUpdate,
};
