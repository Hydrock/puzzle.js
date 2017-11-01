const url = require('url');
const fs = require('fs');

const define = function(req, res, postData) {

if (postData === 'action=test') {
  res.writeHead(200, { 'Content-Type': 'text/plain','Trailer': 'Content-MD5' })
  res.write('response from server!');
  res.end();
  return;
}

if(/\.js$/gi.test(req.url)) {
  res.writeHead(200, {
    'Content-Type': 'application/javascript'
  });
  let readStream = fs.createReadStream(prePath+'/../../client/js/app.bundle.js');
  readStream.pipe(res);
  return;
} else {

    const urlParsed = url.parse(req.url, true);
    let path = urlParsed.pathname;
    prePath = __dirname;

    let filePath = prePath+'/../../client/index.html';


    fs.readFile(filePath, 'utf-8', (err, html) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(html);
    })

    /*
    try {
      let dynPath = './dynamic/' + path;
      let routeDestination = require(dynPath);
      res.end('We have API!');
    }
    catch (err) {
      let filePath = prePath+'/static'+path+'/index.html';
        fs.readFile(filePath, 'utf-8', (err, html) => {
          if(err) {
            let nopath = prePath + '/nopage/index.html';
            fs.readFile(nopath, (err , html) => {
              if(!err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end(html);
              }
              else{
                let text = "Something went wrong. Please contact webmaster@forgetable.ru";
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end(text);
              }
            });
          } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
          }
        })
    }
    */
};

}

exports.define = define;