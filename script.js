const express = require('express');
const request = require("request");
const cors = require('cors');
const app = express();
app.use(cors());



app.get('/con/:base/:target/:amo', (req, res) => {
  console.log("welcome to the root!");

  var base = req.params.base;
  var target = req.params.target;
  var amo = req.params.amo;

  var myHeaders = new Headers();
  myHeaders.append("apikey", "7OlEKeJ4zbqZGYvVYOrD4rMlLgWdCU5j");
  
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  var resultBody;
  
  fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${target}&from=${base}&amount=${amo}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      resultBody = result;
      res.send({"result": resultBody.result});
    })
    .catch(error => console.log('error', error));
  
});


app.get('/7day/:base/:target', (req, res) => {
  console.log("welcome to the root!");
    
  //Parameters
  //base: default currency,  target: currency that convert to
  var base = req.params.base;
  var target = req.params.target;

  //Get Today's date
  let date = new Date();
  let today = date.toISOString().split("T")[0];

  //Get the date of 7 days ago
  date.setDate(date.getDate() - 7);
  let day7 = date.toISOString().split("T")[0];

  
  var myHeaders = new Headers();
  myHeaders.append("apikey", "7OlEKeJ4zbqZGYvVYOrD4rMlLgWdCU5j");
    
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  var resultBody;
    
  fetch(`https://api.apilayer.com/exchangerates_data/timeseries?start_date=${day7}&end_date=${today}&symbols=${target}&base=${base}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      resultBody = result;
      res.send({"result": resultBody.rates});
    })
    .catch(error => console.log('error', error));
    
});

app.get('/30day/:base/:target', (req, res) => {
  console.log("welcome to the root!");
      
  //Parameters
  //base: default currency,  target: currency that convert to
  var base = req.params.base;
  var target = req.params.target;
  
  //Get Today's date
  let date = new Date();
  let today = date.toISOString().split("T")[0];
  
  //Get the date of 30 days ago
  date.setDate(date.getDate() - 30);
  let day30 = date.toISOString().split("T")[0];
  
  var myHeaders = new Headers();
  myHeaders.append("apikey", "7OlEKeJ4zbqZGYvVYOrD4rMlLgWdCU5j");
      
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  
  var resultBody;
      
  fetch(`https://api.apilayer.com/exchangerates_data/timeseries?start_date=${day30}&end_date=${today}&symbols=${target}&base=${base}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      resultBody = result;
      res.send({"result": resultBody.rates});
    })
    .catch(error => console.log('error', error));
      
});
  



app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});