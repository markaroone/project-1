const projects = [
  {
    name: 'Layag Travel Tours',
    description: 'A travel booking application for everyone.',
    number: 7,
    images: [],
    tech: ['mongoDB', 'express', 'react', 'node'],
  },
  {
    name: 'Uplifted|Health Activity Tracker App',
    description: 'Health and activity tracking application.',
    number: 6,
    images: [],
    tech: ['mongoDB', 'express', 'react', 'node'],
  },
  {
    name: 'La Cucina Restaurant App',
    description: 'We deliver delicious foods at you doorstep.',
    number: 5,
    images: [],
    tech: ['html', 'css', 'javascript', 'react'],
  },
  {
    name: 'To Do List App',
    description: 'Create a to dos and set reminders.',
    number: 4,
    images: [],
    tech: ['html', 'css', 'javascript', 'react'],
  },
  {
    name: 'Pokedex',
    description: 'Search and filter Pokemons and see their stats.',
    number: 3,
    images: [],
    tech: ['html', 'css', 'javascript', 'react'],
  },
  {
    name: 'Guessing Number Game',
    description: 'A number guessing game.',
    number: 2,
    images: [],
    tech: ['html', 'css', 'javascript'],
  },
  {
    name: 'To Do List App',
    description: 'Static photography portfolio website.',
    number: 1,
    images: [],
    tech: ['html', 'css', 'javascript'],
  },
];

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const allProjectImages = Object.values(
  importAll(
    require.context(
      `${__dirname}/../assets/images/projects/all`,
      false,
      /\.(png|jpe?g|svg)$/
    )
  )
);

projects.forEach(
  (project) =>
    (project.images = allProjectImages.filter((img) => {
      if (+img.substr(14, 1) === project.number) return img;
    }))
);

exports.recentProjectsData = projects;
