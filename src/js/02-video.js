import Vimeo from "vimeo";
import _ from 'lodash';

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', _.throttle(function(event) {
    const currentTime = event.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));

document.addEventListener('DOMContentLoaded', function() {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    
    if (savedTime !== null) {
        player.setCurrentTime(parseFloat(savedTime));
    } 
});