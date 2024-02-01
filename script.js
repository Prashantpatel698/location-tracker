if("geolocation" in navigator)
{
    navigator.geolocation.getCurrentPosition(function(position){
        let lat =position.coords.latitude;
        let long =position.coords.longitude;
        console.log(lat+" "+long)

    })
}
else{
   alert("behan ke lavde location chalu karna re")
}
// console.log(navigator)