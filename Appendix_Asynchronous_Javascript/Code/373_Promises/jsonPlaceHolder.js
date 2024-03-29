const urls = ['https://jsonplaceholder.typicode.com/users',
              'https://jsonplaceholder.typicode.com/posts',
              'https://jsonplaceholder.typicode.com/albums'
];

//Using promises to grab some json data 
Promise.all(urls.map(url => {
    return fetch(url)
            .then(resp => resp.json())
})).then(results =>{
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
});