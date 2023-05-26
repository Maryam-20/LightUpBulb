// SWITCHING ON AND OFF A BULB

const button = document.querySelector("#btn");
const parentElement = document.querySelector("#mydiv")
const bulb = document.querySelector("#bulb");


const turnOnBtn = document.createElement("button");
turnOnBtn.innerHTML = "TURN ON";
turnOnBtn.style.color = "red";
turnOnBtn.style.fontWeight = "bold"
turnOnBtn.style.backgroundColor = "white"

const turnOffBtn = document.createElement("button")
turnOffBtn.innerHTML = "TURN OFF";
turnOffBtn.style.color = "red";
turnOffBtn.style.margin = "17px"
turnOffBtn.style.fontWeight = "bold"
turnOffBtn.style.backgroundColor = "white"

parentElement.appendChild(turnOffBtn);
parentElement.appendChild(turnOnBtn);

turnOffBtn.addEventListener("click", turnoff)
turnOnBtn.addEventListener("click", turnOn)

function turnOn() {
    bulb.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkge3YfgGCCnuHlIZ5y4f_7duCom5GJDRixzlWe2FeFSvYf9iqoTcefh5GNpXekrQ17A&usqp=CAU";
}

function turnoff() {
    bulb.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSWoLx6UYL7YiXPT_8nW1N-NmCaZHCcxIpQ&usqp=CAU"
}


// FETCHING DATA FROM AN API 
const clickHandler = async () => {
    try {
        const res = await fetch ("https://reqres.in/api/users");
        const jsonData = await res.json();
        if (!res.ok) {
        console.log(jsonData.description)
    }
    console.log(jsonData.data[3].first_name);
    alert("Data Fetch Successfully")
    }catch (error) {
        console.log(error)
    }
    
} 
button.addEventListener("click", clickHandler)