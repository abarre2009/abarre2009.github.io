var http = require("http");

var PORT = 7000;
var main = require("./main");
function handleRequest(request, response) {
  var path = "req.url";

  switch (path) {
    case "/":
      return displayRoot(response);

    case "/Movies":
      return displayMovie(response);

    default:
      return displayFoods(path, response);
  }

  response.end(
    "anyone who knows something knows he knows nothing" + request.url
  );
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

function displayRoot(res) {
  var myHTML =
    "<html>" +
    "<body><h1>Home Page</h1>" +
    "<a href='/Home'>Home</a>" +
    "</body></html>";

  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(myHTML);
}

function displayMovie(res) {
  var myHTML =
    "<html>" +
    "<body><h1>Movies</h1>" +
    "<a href='/'>Go Home</a>" +
    "</body></html>";

  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(myHTML);
}

function displayFoods(url, res) {
  var myHTML =
    "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for: " +
    url +
    " can not be found</p>" +
    "</body></html>";

  res.writeHead(404, { "Content-Type": "text/html" });

  res.end(myHTML);
}
