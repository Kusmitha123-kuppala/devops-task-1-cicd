const http = require('node:http');

function getResponse(pathname) {
  if (pathname === '/health') {
    return {
      statusCode: 200,
      body: { status: 'ok', service: 'nodejs-demo-app' }
    };
  }

  if (pathname === '/') {
    return {
      statusCode: 200,
      body: {
        message: 'Hello from Node.js CI/CD Demo!',
        status: 'running'
      }
    };
  }

  return {
    statusCode: 404,
    body: { error: 'Not found' }
  };
}

function createServer() {
  return http.createServer((req, res) => {
    const result = getResponse(new URL(req.url, 'http://localhost').pathname);
    res.writeHead(result.statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result.body));
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT || 3000);
  createServer().listen(port, '0.0.0.0', () => {
    console.log(`Node.js demo app listening on port ${port}`);
  });
}

module.exports = { createServer, getResponse };
