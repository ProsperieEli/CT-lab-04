module.exports = rawRequest => {
  const request = rawRequest.split('\r\n');
  const [method, path] = request[0].split(' ');
  const [body] = request[2].split('\r\r');
  return { method, path, body };
};
