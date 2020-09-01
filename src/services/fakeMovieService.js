const movies = [
  {
    _id: "101",
    title: 'Forest Gump',
    stock: 6,
    rate: 3.5,
    director: 'Robert Zemeckis',
    genre: 'Comedy',
  },
  {
    _id: "102",
    title: 'Harry Potter',
    stock: 7,
    rate: 3.7,
    director: 'Mike Newell',
    genre: 'Fantasy Fiction',
  },
  {
    _id: "103",
    title: 'Titanic',
    stock: 3,
    rate: 2.5,
    director: 'James Cameron',
    genre: 'Romance',
  },
  {
    _id: "104",
    title: 'Best Worst Movie',
    stock: 4,
    rate: 2.1,
    director: 'Michael Stephen',
    genre: 'Comedy',
  },
  {
    _id: "105",
    title: 'Troll 2',
    stock: 6,
    rate: 4,
    director: 'Shawn Black',
    genre: 'Horror',
  },
];

export function getMovies() {
  return movies
}