const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('gets a color from the path', async() => {
    const res = await request(app).get('/');

    expect(res.text).toEqual(
      'hi'
    );
  });

  it('gets a color from the path', async() => {
    const res = await request(app).get('/red');

    expect(res.text).toEqual(`<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Dog!</title>
        </head>
        <body>
          <h1>red</h1>
        </body>
        </html>`
    );
  });

  it('gets a color from the path', async() => {
    const res = await request(app).get('/green');

    expect(res.text).toEqual(`<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Dog!</title>
        </head>
        <body>
          <h1>green</h1>
        </body>
        </html>`
    );
  });
  it('gets a color from the path', async() => {
    const res = await request(app).get('/blue');

    expect(res.text).toEqual(`<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Dog!</title>
        </head>
        <body>
          <h1>blue</h1>
        </body>
        </html>`
    );
  });
  it('gets a color from the path', async() => {
    const res = await request(app).post('/echo');

    expect(res.text).toEqual(
      ''
    );
  });

  it('returns a 404 for any non-existent routes', async() => {
    const res = await request(app).get('/not-found');

    expect(res.text).toEqual('Not found');
  });
});
