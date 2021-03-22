// fetch the current weather data
const submitBtn=document.getElementById("submit-btn");
const cityName=document.getElementById("cityName");
const output=document.getElementById("city_name");

const  temp_real_val=document.getElementById("temp_real_val");
const temp_status=document.getElementById("temp_status");
const datahide=document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();

    let cityVal = cityName.value;

    if(cityVal === ""){
        cityName.innerText = `Plz write the name before search`;
        datahide.classList.add("data_hide");
    }else{
        try{
            const api_key="metric&appid=b14425a6554d189a2d7dc18a8e7d7263";
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=${api_key}`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            output.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;

            //condition to check sunny or cloudy
            if (tempMood == "Clear") temp_status.innerHTML =`<i class='fas  fa-sun' style='color: #eccc68;'></i>`;
            else if (tempMood == "Clouds")  temp_status.innerHTML=`<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>`;
            else if (tempMood == "Rain") temp_status.innerHTML =` <i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>`;
            else temp_status.innerHTML =`<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>`;


            datahide.classList.remove('data_hide');
            cityVal = "";
            
        }catch{
            cityVal = " ";
            datahide.classList.add("data_hide");
            cityName.innerText =  `please enter the proper city name`;
            console.log('please add the proper city name');
        }

    }
}

submitBtn.addEventListener('click', getInfo);

// current time
const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayArr=["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const time=new Date();

let day=time.getDay();
let date=time.getDate();
let month=time.getMonth();
let year=time.getFullYear();
document.getElementById("current_day").innerHTML=`${dayArr[day]}`;
document.getElementById("current_date").innerHTML=`${date} ${monthsArr[month]}. ${year}`;
