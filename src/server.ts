import express from 'express';

const server = express();

server.get('/_health', (req, res) => res.send());

server.get('/', (req, res) => res.json({ hello: 'world!' }));

export default server;
