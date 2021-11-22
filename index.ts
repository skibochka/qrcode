import * as express from 'express';
import * as path from 'path';

(async () => {
  const app: express.Application = express();

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
  })

  app.use( '/image', express.static(path.join(__dirname, './qrcode.png')));

  app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:${3000}`)
  })
})();

