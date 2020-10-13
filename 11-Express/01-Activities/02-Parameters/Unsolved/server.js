// Dependencies
// ===========================================================
const express = require('express');

const app = express();
const PORT = 3001;

// Data
// ===========================================================
const characters = [
  {
    routeName: 'yoda',
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    midichlorians: 2000
  },
  {
    routeName: 'darthmaul',
    name: 'Darth Maul',
    role: 'Sith Lord',
    age: 200,
    midichlorians: 1200
  },
  {
    routeName: 'obiwankenobi',
    name: 'Obi Wan Kenobi',
    role: 'Jedi Knight',
    age: 60,
    midichlorians: 1350
  },
  {
  routeName: 'jarjarbinks',
    name: 'Jar-Jar Binks',
    role: 'Plot Device',
    age: '???',
    midichlorians: '...none...'
  }
];

// Routes
// ===========================================================
app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

// Create a GET route `/api/characters` that returns all of the characters
app.get('/api/characters', (req, res) => {
  return res.json(characters);
});

// Create just one GET route that returns any given specific character
// Iterate through the characters' routeNames to check if it matches `req.params.character`
// If there is no such character, send back a message "No character found"
app.get('/api/characters/:character', (req, res) => {
  const chosen = req.params.character;

  for(let i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }
  return res.send('Character not found... must be dead..')
});


// Listener
// ===========================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
