var duration = 0;
var weight = 0;
var reps = 0;
var sets = 0;
var distance = 0;

var dataarray = [[]];
$.ajax({
  type: "GET",
  url: "/api/newworkout"
})
  .done(function(data) {
    // if (err) throw err;
    // console.log(err,"ERr");
    console.log(data, "DATA");
    if (data) {
      $("#addtoprevious").attr("data-id", data[0]._id);
      for (let i = 0; i < data[0].exercises.length; i++) {
        $(".previous-workout").append(`<tr><td>${data[0].exercises[i].type}</td>
            <td>${data[0].exercises[i].name}</td><td>${data[0].exercises[i].duration}</td>
            <td>${data[0].exercises[i].weight}</td><td>${data[0].exercises[i].reps}</td>
            td>${data[0].exercises[i].distance}</td><td>${data[0].exercises[i].distance}</td>
            <td>${data[0].exercises[i].sets}</td></tr>`);

        duration += data[0].exercises[i].duration;
        weight += data[0].exercises[i].weight;
        reps += data[0].exercises[i].reps;
        sets += data[0].exercises[i].sets;
        distance += data[0].exercises[i].distance;

        // dataarray.push([
        // `${data[0].exercises[i].duration},${data[0].exercises[i].weight},
        //     ${data[0].exercises[i].reps},${data[0].exercises[i].sets}`
        //]
        //);
      }

      chartflow();
    } else {
      $("#addtoprevious").hide();
    }
  })
  .catch(function(err) {
    console.log(err);
  });

$("#newworkout").on("click", function(event) {
  event.preventDefault();
  let record = {
    type: $("#extype").val(),
    name: $("#exname").val(),
    duration: $("#duration").val(),
    weight: $("#weights").val(),
    reps: $("#reps").val(),
    sets: $("#sets").val(),
    distance: $("#distance").val()
  };
  console.log("Record", record);
  $.ajax({
    method: "POST",
    url: "/api/newworkout",
    data: record
  }).done(function(record) {
    console.log("Create a record", record);
    $("#extype").val(""),
      $("#exname").val(""),
      $("#duration").val(""),
      $("#weights").val(""),
      $("#reps").val(""),
      $("#sets").val(""),
      $("#distance").val("");
    window.location.reload("/");
  });
});

$("#addtoprevious").on("click", function(event) {
  event.preventDefault();
  let record = {
    type: $("#extype").val(),
    name: $("#exname").val(),
    duration: $("#duration").val(),
    weight: $("#weights").val(),
    reps: $("#reps").val(),
    sets: $("#sets").val(),
    distance: $("#distance").val()
  };
  console.log("Record", record);
  var id = $("#addtoprevious").attr("data-id");
  $.ajax({
    method: "PUT",
    url: "/api/newworkout/" + id,
    data: record
  }).done(function(record) {
    console.log("Add to existing", record);
    $("#extype").val(""),
      $("#exname").val(""),
      $("#duration").val(""),
      $("#weights").val(""),
      $("#reps").val(""),
      $("#sets").val(""),
      $("#distance").val("");
    window.location.reload("/");
  });
});

console.log(duration, reps, weight, sets, distance);
function chartflow() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Duration", "Weights", "Reps", "Sets", "Distance"],
      datasets: [
        {
          data: [duration, weight, reps, sets, distance],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",

            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",

            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    }
  });
}
