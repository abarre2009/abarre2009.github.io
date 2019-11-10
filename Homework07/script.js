$("#thispic").on("click", function (event) {
    event.preventDefault()
    var value = $("#cityname").val().trim();
    console.log(value)
    weatherResults(value)