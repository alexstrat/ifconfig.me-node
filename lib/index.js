var http = require('http');

var options = {
  host: 'ifconfig.me',
  port: 80,
  path: '/all.json'
};

exports.get = function(cb ,eb) {
  http.get(options, function(res) {
    res.setEncoding('utf8');
    
    res.on('data', function(data) {
      var result;
      try {
        var result = JSON.parse(data);
      }catch(e) {
        if(eb) eb.call(this, e);
        return;
      }
      cb.call(this, result);
    });
  }).on('error', function(e){
    if(eb) eb.call(this,e);
  });
};

exports.getIP = function(cb, eb) {
  exports.get(function(json) {
    if(typeof json.ip_addr == 'undefined') {
      if(eb) {
        eb.call(this, 'No IP provided in response.');
      }
    }
    else
      cb.call(this, json.ip_addr);
  }, eb);
};

exports.getRemoteHost = function(cb, eb) {
  exports.get(function(json) {
    if(typeof json.remote_host == 'undefined') {
      if(eb) {
        eb.call(this, 'No remote host provided in response.');
      }
    }
    else
      cb.call(this, json.remote_host);
  }, eb);
};