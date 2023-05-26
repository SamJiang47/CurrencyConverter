function validateNumberInput(event) {
                                     const input = event.target;
                                     let value = input.value.replace(/[^0-9.]/g, ''); // Remove non-numeric characters except decimal point
                                     const parts = value.split('.');
                                     if (parts.length > 1) {                
                                                             parts[1] = parts[1].slice(0, 2); // Limit decimal places to 2
                                                           }
                                     value = parts.join('.');
                                     const formattedValue = Number(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                                     input.value = formattedValue;
                                    }
const target = document.getElementsById('To');
const base = document.getElementsById('From');
const btn1 = document.getElementsByClassName("Convert");
btn1.addEventListener('click',function(){  
                                          //!!!!!convert amount 不确定
                                          const amo = document.getElementById("Amount2");
                                          const xhr1 = new XMLHttpRequest(); //Define XMLhttp object
                                          xhr1.open('GET',`http://localhost:3000/con/${base}/${target}/${amo}`);
                                          xhr1.send(); 
                                          xhr1.onload = function(){ //Once we get response
                                                                   const body = JSON.parse(xhr1.responseText)  //Transfer from JSON format
                                                                     //Example output: body = {"result":706};
                                                                     //!!!!!!Display output(Not sure)
                                                                     // Change elementbyID
                                                                     document.getElementById('result').innerHTML = `${amo} ${base} = ${body.result} ${target}`;
                                                                   }
                                        })
//!!!!!modify button variable
const btn7 = document.getElementsByClassName("Trends7d");
btn7.addEventListener('click',function(){
                                         const xhr2 = new XMLHttpRequest(); //Define XMLhttp object
                                         xhr2.open('GET',`http://localhost:3000/7day/${base}/${target}`);
                                         xhr2.send(); //Send requent
                                         xhr2.onload = function(){ //Once we get response
                                                                  const body = JSON.parse(xhr2.responseText)  //Transfer from JSON format
                                                                  //!!!!!!Generate a chart
                                                                  //!!!!!!Display output
                                                                  document.getElementById('result').innerHTML = `Temperature:${temp} °F`;
                                                                }
                                        })
//!!!!!modify button variable
const btn3 = document.getElementsByClassName("Trends30d");
btn3.addEventListener('click',function(){
                                         const xhr3 = new XMLHttpRequest(); //Define XMLhttp object
                                         xhr3.open('GET',`http://localhost:3000/30day/${base}/${target}`);
                                         xhr3.send(); //Send requent
                                         xhr3.onload = function(){ //Once we get response
                                                                  const body = JSON.parse(xhr3.responseText)  //Transfer from JSON format   
                                                                  //!!!!!!Generate a chart 
                                                                  //!!!!!!Display output
                                                                  document.getElementById('result').innerHTML = `Temperature:${temp} °F`;
                                                                 }
                                        })
