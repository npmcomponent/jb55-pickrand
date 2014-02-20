*This repository is a mirror of the [component](http://component.io) module [jb55/pickrand](http://github.com/jb55/pickrand). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/jb55-pickrand`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# pickrand

  Pick a random element from an array

## Installation

### Component

    $ component install jb55/pickrand

### Node

    $ npm install pickrand

## API

```javascript
var pickrand = require('pickrand') 
var x = pickrand(["bill", "john", "jake"]);

// x can be "bill", "john", or "jake"

var x = pickrand([])

// x is null
```

## License

  MIT
