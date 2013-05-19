//F***ing hacks
window.URL = window.URL || window.webkitURL;
navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||navigator.mozGetUserMedia || navigator.msGetUserMedia;

var video   = null;
var canvas  = null;
var img     = null;
var ctx     = null;
var lms     = null;

YUI().use(
    'event',
    function(Y) 
    {
        // Loading HTML5 video stream
        Y.on(
            'domready', 
            function()
            {
                video     = document.querySelector('video');
                canvas    = document.querySelector('canvas');
                image     = document.querySelector('img');
                ctx       = canvas.getContext('2d');
                
                navigator.getUserMedia(
                    {video: true},
                    function(stream) 
                    {
                        video.src = window.URL.createObjectURL(stream);
                        localMediaStream = stream;
                    }, 
                    function(e) 
                    {}
                );

                Y.one('video').on(
                    'click',
                    function()
                    {
                        Y.one('canvas').set('width', 700);
                        Y.one('canvas').set('height', 700);
                        
                        ctx.drawImage(
                            video, 
                            0, 
                            0
                        );
                        
                        image.setAttribute(
                            'src',
                            canvas.toDataURL()
                        );
                    }
                );
            }
        );
    }
);
