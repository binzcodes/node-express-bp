import server from './server';

const PORT = 3000;

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `⚡️ [server]: Server is running at https://localhost:${PORT} ⚡️`
  );
});
