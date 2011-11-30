// Updaterus -- backend.js
var http = require('blaast/simple-http');

var scaling = new (require('blaast/scaling').Scaling)();

app.setResourceHandler(function(request,response){
    app.debug('Client request response-id : ' +request.id);
    
    function sendReply(response, error, imageType, data){
        if(error){
            app.warn('Failed to load image : '+ error );
        response.failed();
        }
        else{
            app.debug('Loaded Image.');
            response.reply(imageType, data);
            
        }
    }
    
    if(request.id === 'B'){
        scaling.scale('http://updaterus.com/images/users/5487/3.jpg',request.display_width, request.display_height,'image/jpeg',function(err, data){
            sendReply(response, err, 'image/jpeg',data);
            
            });
    }
    else if(response.id === 'A'){
        http.get('http://updaterus.com/images/logo.gif', {type : 'binary'}, {
            ok : function(data){
            sendReply(response, null, 'image/jpeg',data);
            },
            error : function(err){
                sendReply(response, err);
            }
            });
    }
    else{
        response.notFound();
    }
    
    
    });
log.info('Hello from backend bootstrap.');
