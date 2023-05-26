


function displayImage() {
                         const option1 = option1Select.value;
                         const option2 = option2Select.value;
                         if (option1 === option2) {
                                                   errorMessageElement.style.display = "block";
                                                   imageElement.style.display = "none";
                                                  } else {
                                                          errorMessageElement.style.display = "none";
                                                          imageElement.style.display = "block";
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
                      }
const target = document.getElementsById('To');
const base = document.getElementsById('From');
const btn1 = document.getElementsByClassName("Convert");
const imageElement = document.getElementById("image");
const errorMessageElement = document.getElementById("errorMessage");
target.addEventListener("change", displayImage);
base.addEventListener("change", displayImage);
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
                                          const selection1 = target.value;
                                          const selection2 = base.value;
                                          if (selection1 === selection2) {
                                                                          errorMessageElement.style.display = "block";
                                                                          imageElement.style.display = "none";
                                                                         } else {
                                                                                 errorMessageElement.style.display = "none";
                                                                                 imageElement.style.display = "block";
                                                                                }
                                        })
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
