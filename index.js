const fetch = require ('node-fetch');
fetch('https://api.github.com/users/gunturkh')
    .then(res => res.json())
    .then(json =>  console.log(json));

