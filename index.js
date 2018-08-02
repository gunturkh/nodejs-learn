const fetch = require('node-fetch');
const gitURL = 'https://api.github.com/users/gunturkh/followers'
const swapiURL = 'https://swapi.co/api/people/'
const readline = require('readline');
const log = (data) => { console.log(data) };
const defaultMessage =
  (
    `Hello!>> 
   Menu :
   github-follower
   star-war
   exit
   help
  `)
const helpMessage =
  (
  `Available option are:
  github-follower
  star-war
  exit
  help
  `)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: defaultMessage
});

rl.prompt();

rl.on('line', (line) => {
  const inputLine = line.trim();
  if (inputLine === 'help') { log(helpMessage) }
  else if (inputLine === 'github-follower') {
    fetch(gitURL)
      .then(res => res.json())
      .then(json => json.forEach(item => { log(`Name: ${item.login}, id: ${item.id}`) }))
  }
  else if (inputLine === 'star-war') {
    fetch(swapiURL)
      .then(res => res.json())
      .then(json => json.results.forEach(item => { log(`Character name: ${item.name}, Birth year: ${item.birth_year}`) }))
  }
  else if (inputLine === 'exit') {log('Have a great day!'); process.exit(0)}
  else { log(`Say what? I might have heard '${line.trim()}. Type help for additional information'`);}
})




