let url = "https://zomatoajulypi.herokuapp.com/location"
let restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

async function getCity(){
    let response = await fetch(url)
    let data = await response.json() 
    data.map((item) => {
        let element = document.createElement("option") ///<option></option>
        let text = document.createTextNode(item.state) // delhi
        element.appendChild(text) ///<option>delhi</option>
        element.value = item.state_id  ///<option value="1">delhi</option>
        document.getElementById('city').appendChild(element) //<select><option value="1">delhi</option></select>
    })
}


async function getHotel(){
    let cityId = document.getElementById('city').value;
    let hotels =  document.getElementById('hotels')
    while(hotels.length>0){
        hotels.remove(0)
    }
    let response = await fetch(`${restUrl}${cityId}`)
    let data = await response.json() 
    data.map((item) => {
        let element = document.createElement("option")
        let text = document.createTextNode(`${item.restaurant_name}${item.address}`)
        element.appendChild(text)
        hotels.appendChild(element)
    })
}