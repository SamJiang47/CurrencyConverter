let base = "";
let target = "";

///////////////////
//!!!!!modify button variable
const btn1 = document.getElementById("convert_btn");
let number1 = document.getElementById("Input");

btn1.addEventListener('click',function(){
    //!!!!!conver from
    var base = 
    //!!!!!convert to
    var target = 
    //!!!!!convert amount
    var amo = number1.value;

    const xhr = new XMLHttpRequest(); //Define XMLhttp object
    xhr.open('GET',`http://localhost:3000/con/${base}/${target}/${amo}`);
    xhr.send(); //Send requent

    xhr.onload = function(){ //Once we get response
        const body = JSON.parse(xhr.responseText)  //Transfer from JSON format
        
        //!!!!!!Display output
        document.getElementById('result').innerHTML = `Temperature:${temp} °F`;
    }
})

//!!!!!modify button variable
const btn2 = document.getElementById("convert_btn");

btn2.addEventListener('click',function(){
    //!!!!!conver to

    //!!!!!convert from

    const xhr = new XMLHttpRequest(); //Define XMLhttp object
    xhr.open('GET',`http://localhost:3000/7day/${base}/${target}`);
    xhr.send(); //Send requent

    xhr.onload = function(){ //Once we get response
        const body = JSON.parse(xhr.responseText)  //Transfer from JSON format
        
        //!!!!!!Generate a chart



        //!!!!!!Display output
        document.getElementById('result').innerHTML = `Temperature:${temp} °F`;
    }
})


//!!!!!modify button variable
const btn3 = document.getElementById("convert_btn");

btn3.addEventListener('click',function(){
    //!!!!!conver to

    //!!!!!convert from

    const xhr = new XMLHttpRequest(); //Define XMLhttp object
    xhr.open('GET',`http://localhost:3000/30day/${base}/${target}`);
    xhr.send(); //Send requent

    xhr.onload = function(){ //Once we get response
        const body = JSON.parse(xhr.responseText)  //Transfer from JSON format
        
        //!!!!!!Generate a chart


        
        //!!!!!!Display output
        document.getElementById('result').innerHTML = `Temperature:${temp} °F`;
    }
})
