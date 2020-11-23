/**
 * client code
 *
 * let sse = new EventSource("http://localhost:3000/stream")
 * sse.onmessage = console.log
 */


var app = require('express')();

app.get("/", (req, res) => res.send('hello'))

// endpoint to receive server sent event
app.get('/stream', (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  sendGeneratedNumber(res);
})

let num = 0

// write the number value to the response object
function sendGeneratedNumber(res) {
  res.write("data: " + `New number is ${num++}\n\n`)

  // call the function every second
  setTimeout(() => {
    sendGeneratedNumber(res)
  }, 1000);
};

app.listen(3000);
