const fetch = require ('node-fetch');
const chalk = require ('chalk');
fetch('https://api.github.com/users/gunturkh/followers')
    .then(res => res.json())
    .then(json => {
	    json.forEach(item => { console.log(item.login)
            })
    })


