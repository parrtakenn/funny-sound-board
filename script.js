function play_sound(clicked_id) {
    var audio = new Audio('./sounds/' + clicked_id + '.m4a');
    audio.play();
}