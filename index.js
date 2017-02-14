var chokidar = require('chokidar')

var watcher = chokidar.watch('tmp')

watcher.close()

// Expected: Node process exits
// Actual: Node process hangs

// Tested on OSX 10.11, Node 6.9.5
