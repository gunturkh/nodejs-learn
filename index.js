const fetch = require ('node-fetch');

fetch('https://api.github.com/users/gunturkh/followers')
    .then(res => res.json())
    .then(json => {
	    json.forEach(item => { console.log(item.login)
            })
    })


