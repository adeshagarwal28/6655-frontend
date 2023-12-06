const { createServer } = require('http');
const { MongoClient } = require('mongodb');

const server = createServer();
const port = process.env.PORT || 6835;

const fs = require('fs');
const path = require('path');

const uri =
'mongodb+srv://aagar7:5vBiPJZmeCsyexbi@cluster0.jwixlo5.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

server.on('request', async (req, res) => {
  try {
    if (req.url === '/') { // home page
      fs.readFile(path.join(__dirname, 'portfolio', 'index.html'), 'utf-8',
          (err, content) => {
              if (err) throw err;
              res.writeHead(200, { 'Content-Type': 'text/html' });
              res.end(content);
          });
  }
    else if (req.url=='/api/hotel')
    {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    await client.connect();
    const database = client.db('hotel_management');
    const collection = database.collection('rooms_info');

    const hotelDocument = await collection.findOne({});

    res.end(JSON.stringify(hotelDocument));
    }
  } catch (error) {
    console.error(error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  } finally {
    await client.close();
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});