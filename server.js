const express = require("express");
const app = express();
app.use(express.json());
const cluster = require('cluster');
const { connectDB } = require('./src/db-connection');
var cors = require('cors');
app.use(cors());


if (cluster.isMaster) {
  console.log('in')
  const cpuCount = require('os').cpus().length;
  // Create a worker for each CPU
  for (let i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }
  // Listen for dying workers
  cluster.on('exit', function (worker) {
    // Replace the dead worker, we're not sentimental
    console.info('Worker %d died :(', worker.id);
    cluster.fork();
  });
} else {
  connectDB();
  require('./src/routes/user.routes')(app);
  require('./src/routes/tag.routes')(app);
  require('./src/routes/post.routes')(app);

  app.listen(4002, () => {
    console.info(`worker ${cluster.worker.id} is listening on port ${4002}...`);
  });
}
