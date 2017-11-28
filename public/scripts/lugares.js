function SelectCheck(){
      OptionValue = document.getElementsByTagName("option").value;
      console.log(OptionValue);
}

function initMap() {
  var location = {lat: 19.417268, lng: -99.156820};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

/*if(OptionValue == nameSelect.value){
        document.getElementById("Title").innerHTML = "titulo Prueba";
        document.getElementById("Informacion").innerHTML = "Información prueba";
      
      else{
        document.getElementById("selectedCheck").style.display = "none";
      }
    }
    else{
      document.getElementById("selectedCheck").style.display = "none";
    }*/