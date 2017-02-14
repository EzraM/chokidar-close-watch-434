var chokidar = require('chokidar')

var watcher = chokidar.watch('tmp')

setTimeout(function() {
  watcher.close()
}, 15)

// Expected: Node process exits
// Actual: Node process hangs

// Tested on OSX 10.11, Node 6.9.5

// Timeout values:
// <20 - hangs
// e.g 50 - works
