const errorMessageElement = document.getElementById("errorMessage");
var canvas = document.getElementsByClassName("canvas")[0];
const errorElement1 = document.getElementById("error1");
const errorElement2 = document.getElementById("error2");
const select1 = document.getElementById("From");
const select2 = document.getElementById("To");

function changeFormat(body) {
  const xyValues = [];
  const result = body.result;
  const dates = Object.keys(result);

  for (let date of dates) {
      const y = result[date][Object.keys(result[date])[0]];
      xyValues.push({ x: date, y }); // retain date string as x value
  }
  return xyValues;
}

function checkSelections() { //conditional error display function
  if (select1.value === select2.value ){
  errorElement1.style.display = "block"; 
  errorElement2.style.display = "block";
  document.getElementById('result1').innerHTML = ``;
  document.getElementById('result2').innerHTML = ``;
  canvas.style.display = "none";
  myChart.style.display = "none";
  }
  else if (select1.value === "" || select2.value === "" ){
  errorElement1.style.display = "none"; 
  errorElement2.style.display = "block";
  document.getElementById('result1').innerHTML = ``;
  document.getElementById('result2').innerHTML = ``;
  canvas.style.display = "none";
  myChart.style.display = "none";
  }
  else {
  errorElement1.style.display = "none";
  errorElement2.style.display = "none"; 
  }
} 

function formatNumberInput(event) {
  const input = event.target;
  let value = input.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    if (value.length > 9) {
      value = value.slice(0, 9);// Restrict to 9 digits, including 2 decimal places
    }
    if (value.length > 2) {
    // Add decimal places if necessary
      const integralPart = value.slice(0, -2); 
      const decimalPart = value.slice(-2);
      value = `${integralPart}.${decimalPart}`;
    }
    input.value = value;
}

function isNumberKey(event) {
  const charCode = event.which ? event.which : event.keyCode;
  const charValue = String.fromCharCode(charCode);
  // Allow numeric digits, decimal point, backspace, and delete key  
  if (!/[\d.]/.test(charValue) && charCode !== 8 && charCode !== 46) {      
    event.preventDefault();
    return false;
  }
}

function resetInput() {
  document.getElementById("Amount2").value = ""; //Reset function for type in texts
  document.getElementById("From").value = ""; //Reset function for From
  document.getElementById("To").value = ""; //Reset function for To
  canvas.style.display = "none";
  myChart.style.display = "none";
  document.getElementById('result1').innerHTML = ``;
  document.getElementById('result2').innerHTML = ``;
}

const btn1 = document.getElementsByClassName("Convert");
for (let i = 0; i < btn1.length; i++) {
  btn1[i].addEventListener('click',function(){  
  //convert amount
    if (select1.value === select2.value ){
      return;
    }
    const target = document.getElementById('To').value;
    const base = document.getElementById('From').value;
    const amo = document.getElementById("Amount2");
    const amo1= amo.value;
    const xhr1 = new XMLHttpRequest(); //Define XMLhttp object
    xhr1.open('GET',`http://localhost:3000/con/${base}/${target}/${amo1}`);
    xhr1.send(); 
    xhr1.onload = function(){ //Once we get response
      const body = JSON.parse(xhr1.responseText)  //Transfer from JSON format
      document.getElementById('result1').innerHTML = `${amo1}${base}=${body.result}${target}`;
      document.getElementById('result2').innerHTML = `${base} to ${target}`;
    }
  })
 }

 const btn7 = document.getElementsByClassName("Trends7d");
 for (let i = 0; i < btn7.length; i++) {
     btn7[i].addEventListener('click', function () {
         if (select1.value === select2.value ){
         canvas.style.display = "none";
         myChart.style.display = "none";
         return;
         }
         canvas.style.display = "block";
         myChart.style.display = "block";
         const target = document.getElementById('To').value;
         const base = document.getElementById('From').value;
         console.log(`Base: ${base}`);
         console.log(`Target: ${target}`);
         const xhr2 = new XMLHttpRequest(); //Define XMLhttp object
         xhr2.open('GET', `http://localhost:3000/7day/${base}/${target}`);
         xhr2.send();
         xhr2.onload = function () { //Once we get response
             const body = JSON.parse(xhr2.responseText)  //Transfer from JSON format
             const xyValues = changeFormat(body);
             console.log(xyValues);
             let yValues = xyValues.map(obj => obj.y);
             let minValue = Math.min(...yValues);
             let maxValue = Math.max(...yValues);
             new Chart("myChart", {
                type: "scatter",
                data: {
                    datasets: [{
                    pointRadius: 4,
                    pointBackgroundColor: "rgb(0,0,255)",
                    data: xyValues
                    }]
                },
                options: {
                    legend: {display: false},
                    scales: {
                    xAxes: [{
                        type: 'time',
                        time: {
                        parser: 'YYYY-MM-DD',
                        unit: 'day'
                        },
                    scaleLabel: {
                        display: true,
                        labelString: 'Date'
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                        display: true,
                        labelString: 'Currency Rate (CNY)'
                        },
                    ticks: {
                        suggestedMin: minValue,
                        suggestedMax: maxValue
                        }
                        }]
                    }
                }
            });
        }
    })  // Close 'addEventListener' function here
} 

 const btn3 = document.getElementsByClassName("Trends30d");
 for (let i = 0; i < btn3.length; i++) {
     btn3[i].addEventListener('click', function () {
         if (select1.value === select2.value ){
         canvas.style.display = "none";
         myChart.style.display = "none";
         return;
         }
         canvas.style.display = "block";
         myChart.style.display = "block";
         const target = document.getElementById('To').value;
         const base = document.getElementById('From').value;
         const xhr3 = new XMLHttpRequest(); //Define XMLhttp object
         xhr3.open('GET', `http://localhost:3000/30day/${base}/${target}`);
         xhr3.send();
         xhr3.onload = function () { //Once we get response
             const body = JSON.parse(xhr3.responseText)  //Transfer from JSON format
             const xyValues = changeFormat(body);
             console.log(xyValues);
             let yValues = xyValues.map(obj => obj.y);
             let minValue = Math.min(...yValues);
             let maxValue = Math.max(...yValues);
           
             new Chart("myChart", {
                type: "scatter",
                data: {
                    datasets: [{
                    pointRadius: 4,
                    pointBackgroundColor: "rgb(0,0,255)",
                    data: xyValues
                    }]
                },
                options: {
                    legend: {display: false},
                    scales: {
                    xAxes: [{
                        type: 'time',
                        time: {
                        parser: 'YYYY-MM-DD',
                        unit: 'day'
                        },
                    scaleLabel: {
                        display: true,
                        labelString: 'Date'
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                        display: true,
                        labelString: 'Currency Rate (CNY)'
                        },
                    ticks: {
                        suggestedMin: minValue,
                        suggestedMax: maxValue
                        }
                        }]
                    }
                }
            });
        }
    })  // Close 'addEventListener' function here
} 