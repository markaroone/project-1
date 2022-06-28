const getCurrentPageName = (link) => {
  const location = link.slice(1).split('/');

  if (!location[0]) return 'Dashboard';

  let pageName = location.length > 1 ? location[1] : location[0];

  return (pageName = pageName
    .replace('-', ' ')
    .split(' ')
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(' '));
};

export default getCurrentPageName;
