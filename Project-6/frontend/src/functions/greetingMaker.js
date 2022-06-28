const greetingMaker = (name) => {
  const hours = new Date().getHours();
  let greet = 'Morning';

  if (hours >= 12 && hours < 18) greet = 'Afternoon';
  else if (hours >= 18 && hours < 4) greet = 'Evening';

  return `Good ${greet}, ${name}!`;
};

export default greetingMaker;
