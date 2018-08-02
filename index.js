const fetch = require('node-fetch');
const gitURL = 'https://api.github.com/users/gunturkh/followers'
const swapiURL = 'https://swapi.co/api/people/'
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Hello!>> \n Menu : \n github-follower \n star-war \n exit \n'
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'github-follower':
      fetch(gitURL)
        .then(res => res.json())
        .then(json => json.forEach(item => { console.log(`Name: ${item.login}, id: ${item.id}`) }))
      break;
    case 'star-war':
      fetch(swapiURL)
        .then(res => res.json())
        .then(json => json.results.forEach(item => { console.log(`Character name: ${item.name}, Birth year: ${item.birth_year}`) }))
      break;
    case '-h':
      console.log("Available option are: -github-follower")
      break;
    case 'exit':
      console.log('Have a great day!');
      process.exit(0)
      break;

    default:
      console.log(`Say what? I might have heard '${line.trim()}. Type -h for help'`);
      break;
  }
  rl.prompt();
})




