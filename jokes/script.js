// GET https://icanhazdadjoke.com/
const jokes =document.querySelector('#joke');
const jokebtn =document.querySelector('#jokebtn');
const generatejokes=async()=>{
const setheader={
    headers: {
        accept:"application/json"    
    }
}
const res=await fetch('https://icanhazdadjoke.com', setheader);
const data=await res.json();
jokes.innerHTML=data.joke;
}
jokebtn.addEventListener('click',generatejokes);
generatejokes(); 