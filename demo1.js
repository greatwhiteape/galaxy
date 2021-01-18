var seneca = require('seneca')();

seneca  
  .use('basic')
  .use('entity');

seneca.add({"role":"compose", "cmd":"ping"}, (args, done) =>{
    console.log(args);
    done(null, {result:"Hi there"});
});

seneca.listen({"type":"http", "port":8888});
