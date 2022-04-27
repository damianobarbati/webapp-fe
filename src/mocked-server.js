import { createServer, Response } from 'miragejs';
import jwtEncode from 'jwt-encode';
import jwtDecode from 'jwt-decode';

const JWT_FAKE_SECRET = 's3cr3t';

const users = [
  {
    id: 1,
    email: 'bruce.wayne@gmail.com',
    password: 'bruce',
    name: 'Bruce Wayne',
    birth: '2001-01-01 00:00:00Z',
    gender: 'male',
  },
  {
    id: 2,
    email: 'diana.prince@gmail.com',
    password: 'diana',
    name: 'Diana Prince',
    birth: '2001-01-01 00:00:00Z',
    gender: 'female',
  },
];

const UNAUTHORIZED = new Response(401, {}, 'Unauthorized.');

createServer({
  routes() {
    this.urlPrefix = process.env.API_URL;
    this.passthrough(); // pass through all unhandled requests
    this.logging = process.env.NODE_ENV === 'development';

    this.post('/auth/sign-in', (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody);

      const user = users.find((user) => user.email === email && user.password === password);

      if (user) {
        const token = jwtEncode({ id: user.id }, JWT_FAKE_SECRET);
        return { token };
      } else {
        return UNAUTHORIZED;
      }
    });

    this.post('/auth/me', (schema, request) => {
      const { token } = JSON.parse(request.requestBody);

      const { email } = jwtDecode(token);
      const user = users.find((user) => user.email === email);

      if (user) {
        return user;
      } else {
        return UNAUTHORIZED;
      }
    });
  },
});
