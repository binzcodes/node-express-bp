import express from 'express';

const app = express();

app.get('/_health', (req, res) => res.send());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('App listening on port 3000!');
});
