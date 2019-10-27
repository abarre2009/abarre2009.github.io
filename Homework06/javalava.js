console.log("test");

var searchbutton = $("#cityname").val().trim()
var key = "0d8116c0f30e53d8c4fe80c830b71edf"



function weatherResults(cityname){
    var searchURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid="+key//0d8116c0f30e53d8c4fe80c830b71edf"
    console.log(searchURL)

    $.ajax({
        url: searchURL,
        method: "GET"
      }).then(function(response) {
  
       
        console.log(response);
        let cityid= response.id
        
  
        $(".city").text(response.name);
        $(".temp").text(((response.main.temp - 273.15) * 1.80 + 32).toFixed(0) + "Fahrenheit");
        $(".humidity").text(response.main.humidity);
        $(".wind").text(response.wind.speed);
  
        $.ajax({url:`http://api.openweathermap.org/data/2.5/forecast?q=${cityname}&mode=json&appid=${key}`}).then(function(forecastResult){
          console.log(forecastResult)
          console.log(forecastResult.list[3])
          console.log(forecastResult.list[11])
          console.log(forecastResult.list[19])
          console.log(forecastResult.list[27])
          console.log(forecastResult.list[35])
          postForecast(forecastResult.list[3])
          postForecast(forecastResult.list[11])
          postForecast(forecastResult.list[19])
          postForecast(forecastResult.list[27])
          postForecast(forecastResult.list[35])

        })

        
  
      });



    }

    $("#searchbutton").on("click", function (event) {
        event.preventDefault()
        var value = $("#cityname").val().trim();
        console.log(value)
        weatherResults(value)
        //TODO push value into local storage
      })

      function postForecast(forecastObject){
        let future= $(".future")
        var newDiv=$('<div>')
        newDiv.text(forecastObject.dt_txt)//TODO uses moment to format the date
        let humidity=$("<p>").text(`Humidity :${forecastObject.main.humidity}`)
        newDiv.append(humidity)
        let temp=$("<p>").text(`Temperature is: ${((forecastObject.main.temp - 273.15) * 1.80 + 32).toFixed(0)}`)
        newDiv.append(temp)
        let weather=$("<p>").text(`Weather:${forecastObject.weather[1]}`)
        newDiv.append(weather)
        future.append(newDiv)

      }
      for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];
    
        var li = document.createElement("li");
        li.textContent = todo;
        li.setAttribute("data-index", i);
    
        var button = document.createElement("button");
        button.textContent = "Complete";
    
        li.appendChild(button);
        todoList.appendChild(li);
      }
      
     
