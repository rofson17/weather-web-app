// fetch the current weather data
const submitBtn=document.getElementById("submit-btn");
const cityName=document.getElementById("cityName");
const output=document.getElementById("city_name");

const temperature=document.getElementById("temp_real_val");
const temperature_status=document.getElementById("temp_status");
const dataHide=document.querySelector('middle_layer');

const getInfo=(event)=>{
  event.preventDefault();
  // using https://openweathermap.org
  const api_key="";
  let cityValue=cityName.value;

  if (cityValue==="" ){
    output.innerHTML=`Please write the name before search`;
    dataHide.classList.add('data_hide');
  }else{
    try{
      let api_url=`api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metrie&appid=${api_key}`;
      const response=await fetch(api_url);
      const data=await response.json();
      const arrData=[data];
      output.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
      temperature.innerText=arrData[0].main.temp'

      let tempMood=arrData[0].weather[0].main;

      if (tempMood=='Clear') temperature_status.innerText=`<i class="fas fa-sun" style="color: #eccc68;"></i>`;
      else if (tempMood=='Clouds') temperature_status.innerText=`<i class="fas fa-cloud" style="color: #1f2f6;"></i>`;
      else if (tempMood=='Rain') temperature_status.innerText=`<i class="fas fa-cloud-rain" style="color: #a4b0be;"></i>`;
      else (tempMood=='sun') temperature_status.innerText=`<i class="fas fa-sun" style="color: #eccc68;"></i>`;
      dataHide.classList.remove('data_hide');
    }catch{
      output.innerText=`Please enter the city name properly`;
      dataHide.classList.add('data_hide');
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
