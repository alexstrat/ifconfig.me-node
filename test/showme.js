ifconfig = require('./../lib/index'); 
console.log('');

ifconfig.get(function(json){
  console.log('### require(\'ifconfig.me\').get ###');
  console.log('');
  console.log(json);
  console.log('');
  
}, function(error){
  console.log('### require(\'ifconfig.me\').get ###');
  console.log('Fail > Reason :')
  console.log(error);
  console.log('');
  
});

ifconfig.getIP(function(ip){
  console.log('### require(\'ifconfig.me\').getIP ###');
  console.log('');
  console.log(ip);
  console.log('');
  
}, function(error){
  console.log('### require(\'ifconfig.me\').getIP ###');
  console.log('Fail > Reason :')
  console.log(error);
  console.log('');
});

ifconfig.getRemoteHost(function(rh){
  console.log('### require(\'ifconfig.me\').getRemoteHost ###');
  console.log('');
  console.log(rh);
  console.log('');
  
}, function(error){
  console.log('### require(\'ifconfig.me\').getRemoteHost ###');
  console.log('Fail > Reason :')
  console.log(error);
  console.log('');
});