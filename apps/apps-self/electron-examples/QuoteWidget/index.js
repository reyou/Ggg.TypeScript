let request = require('request');
let apiUrl = 'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand';
request(apiUrl, (err, response, body) => {
  let bodyJson = JSON.parse(response.body);
  let quote = bodyJson[0].content.rendered;
  document.getElementById('quote').innerHTML = quote;
});

setInterval(() => {
  let date = new Date();
  document.getElementById('date').innerHTML = date.toISOString();
}, 1000);
