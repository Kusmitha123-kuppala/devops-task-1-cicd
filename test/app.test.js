const test = require('node:test');
const assert = require('node:assert/strict');
const { getResponse } = require('../app');

test('GET / returns the welcome message', () => {
  const result = getResponse('/');
  assert.equal(result.statusCode, 200);
  assert.equal(result.body.message, 'Hello from Node.js CI/CD Demo!');
});

test('GET /health returns healthy status', () => {
  const result = getResponse('/health');
  assert.equal(result.statusCode, 200);
  assert.equal(result.body.status, 'ok');
});

test('unknown route returns 404', () => {
  const result = getResponse('/missing');
  assert.equal(result.statusCode, 404);
});
