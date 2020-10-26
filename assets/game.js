let localStorage={
9:"",
10:"",
11:"",
12:"",
13:"",
14:"",
15:"",
16:"",
17:"",

}


let buttons=document.getElementsByClassName("submit");
let textAreas=document.querySelectorAll("textarea[data-time]");

for(let button of buttons){

    button.addEventListener("click" , e =>{
        e.preventDefault();
        let text=document.querySelectorAll("textarea[data-time]");
        for(let t of text){
            console.log (t.value);
            localStorage[t.dataset.time]=t.value;
        }
    console.log (localStorage);
    window.localStorage.setItem("planner", JSON.stringify(localStorage));
    })
}

let getLocalStorage=window.localStorage.getItem("planner");

    console.log(JSON.parse(getLocalStorage));
    for(let ta of textAreas){
        ta.value=JSON.parse(getLocalStorage)[ta.dataset.time];
    }


