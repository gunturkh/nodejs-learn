const fetch = require('node-fetch');
const readline = require('readline');

const githubURL = 'https://api.github.com/users/gunturkh/followers'
const swapiURL = 'https://swapi.co/api/people/'

const log = data => console.log(data);

const logSwapi = ({ name, birth_year }) => {
  log(`Character name: ${name}, Birth year: ${birth_year}`)
}

const logGithub = ({ login, id }) => {
  log(`Name: ${login}, id: ${id}`)
}

const fetchGitHub = () => {
  fetch(githubURL)
    .then(res => res.json())
    .then(json => json.forEach(logGithub))
}

const fetchSWAPI = () => {
  fetch(swapiURL)
    .then(res => res.json())
    .then(json => json.results.forEach(logSwapi))
}

const helpMessage = `
Menu:
github-followers
star-wars
exit
help
`

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: helpMessage
});

rl.prompt();

rl.on('line', line => {
  const inputLine = line.trim();
  if (inputLine === 'help') log(helpMessage)
  else if (inputLine === 'github-followers') fetchGitHub()
  else if (inputLine === 'star-wars') fetchSWAPI()
  else if (inputLine === 'exit') log('Have a great day!')
  else {
    log(`Say what? I might have heard '${inputLine}. Type help for additional information`)
    process.exit(0)
  }
})