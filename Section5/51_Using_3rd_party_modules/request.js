const axios = require('axios');

axios.get('https://ww.google.com')
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })
    .then(() => {
        console.log('All done!');
    });
