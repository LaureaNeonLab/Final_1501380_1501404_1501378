// Sets up the audio functions

var html5_audiotypes = {
    "mp3": "audio/mpeg",
    "ogg": "audio/ogg",
    "wav": "audio/wav"
}

function createsoundbite(sound) {
    var html5audio = document.createElement( 'audio' )
    if ( html5audio.canPlayType ) {
        for ( var i = 0; i < arguments.length; i++ ) {
            var sourceel = document.createElement( 'source' )
            sourceel.setAttribute( 'src', arguments[i] )
            if ( arguments[i].match(/\.(\w+)$/i) )
                sourceel.setAttribute( 'type', html5_audiotypes[RegExp.$1] )
                    html5audio.appendChild( sourceel )
        }
        html5audio.load()
        html5audio.playclip = function() {
            html5audio.pause()
            html5audio.currentTime = 0
            html5audio.play()
        }
        return html5audio
    } else {
        return { playclip:function(){ throw new Error("Your browser doesn't support HTML5 audio")}}
    }
}

// Initialize two sound clips with 1 fallback file each:

var mouseoversound = createsoundbite( "/audio/whistle.ogg", "/audio/whistle.mp3" )
var clicksound = createsoundbite( "/audio/click.ogg", "/audio/click.mp3" )