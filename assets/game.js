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
        console.log (getLocalStorage);
        if(!getLocalStorage){
            console.log (getLocalStorage)
            window.localStorage.setItem("planner", JSON.stringify(localStorage));
            getLocalStorage=window.localStorage.getItem("planner");
        }
        console.log(JSON.parse(getLocalStorage));
        
    let currentHour=new Date().getHours();
        for(let ta of textAreas){
            ta.value=JSON.parse(getLocalStorage)[ta.dataset.time];
            if(parseInt(ta.dataset.time) < currentHour){
                ta.classList.add("grey");
            } else if(parseInt(ta.dataset.time)===currentHour){
                ta.classList.add("red");
    
            } else if(parseInt(ta.dataset.time) > currentHour){
                ta.classList.add("green");
            }
            
        }
    
        let months=["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"];
        let daysOfWeek=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let beginDay=new Date();
        let month=months[beginDay.getMonth()];
        let dayOfWeek=daysOfWeek[beginDay.getDay()];
        let dayOfMonth=beginDay.getDate();
        console.log (dayOfWeek, ", ", month, " ", dayOfMonth);
        document.getElementById("currentDate").innerHTML=moment().format("dddd, MMMM Do");
    
        
    
    