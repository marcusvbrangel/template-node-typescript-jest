import http from 'http';

const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.write('function test');
  res.end();
});

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
