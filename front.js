
///!!!!!!
const base = document.getElementsByClassName('From');

//!!!!!!!!
const target = document.getElementsByClassName('To');

//!!!!!!!
const btn1 = document.getElementsByClassName("Convert");

btn1.addEventListener('click',function(){
    
    //!!!!!convert amount 不确定
    const amo = document.getElementById("Amount2");

    const xhr = new XMLHttpRequest(); //Define XMLhttp object
    xhr.open('GET',`http://localhost:3000/con/${base}/${target}/${amo}`);
    xhr.send(); //Send requent

    xhr.onload = function(){ //Once we get response
        const body = JSON.parse(xhr.responseText)  //Transfer from JSON format
        

        //Example output: body = {"result":706};
        //!!!!!!Display output(Not sure)
        // Change elementbyID
        document.getElementById('result').innerHTML = `${amo} ${base} is ${body.result} in ${target}`;
    }
})

//!!!!!modify button variable
const btn7 = document.getElementsByClassName("Trends7d");

btn7.addEventListener('click',function(){


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
const btn3 = document.getElementsByClassName("Trends30d");

btn3.addEventListener('click',function(){
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
