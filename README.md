## What ?
Query the [ifconfig.me](ifconfig.me) server to know your external network configuration (external IP and remote host) inside [Node.js](nodejs.org).

This is not a big deal, but it's done here and useable as NPM package. It makes a GET request to `ifconfig.me/all.json` and parses the response to provide it in a callback.

## Install

For the moment :

```bash
$ npm install https://github.com/alexstrat/ifconfig.me-node/tarball/master
```

## Usage

You've got 3 methods : 

  - `get`           - to get the raw JSON provided by `ifconfig.me`
  - `getIP`         - to get directly your external IP
  - `getRemoteHost` - to get directly your remote host

These methods take 2 arguements :

  - `callback`  - when the erver responds and the response is valid this function is called with the result as argement.
  - `errback`   - _optionnal_ when something goes wrong, this function is called with the error object as argument.
  
```js
ifconfig = require('ifconfig.me');

ifconfig.getIP(function(ip){
  console.log(ip); // your ext. IP
}, function(error){
  console.log(error);
});

ifconfig.getRemoteHost(function(rh){
  console.log(rh); // your remote host
}, function(error){
  console.log(error);
});

ifconfig.get(function(json){
  console.log(json); // your ext. netw conf. as JSON 
}, function(error){
  console.log(error);  
});

```

## Test it

```bash
$ node test/showme.js
```

## LICENCE

The MIT licence.

Copyright (C) <2011> <Alexandre Lacheze>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
  
