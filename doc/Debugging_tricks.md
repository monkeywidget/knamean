# Debugging Tricks

### print an entire object to the log

for `foo`

    const util = require('util')
    console.log(util.inspect(foo, {showHidden: false, depth: null}))

