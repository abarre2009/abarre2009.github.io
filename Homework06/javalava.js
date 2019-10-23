var searchbutton = $("#searchbar").val().trim()
var key = "bf3bbf0ea22e7e35ceaa37777ebf0b82"



function weatherResults(searchValue){
    var searchURL = "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=bf3bbf0ea22e7e35ceaa37777ebf0b82&units=imperial"
    console.log(searchURL)
$.ajax({

    url:searchURL, 
    type: "GET"
}).then (function(response){ 
    console.log(response)


} )
    

}

$("#searchbutton").on("click", function (event) {
    event.preventDefault()
    var value = $("#searchbar").val().trim();
    console.log(value)
    weatherResults(value)
  })




