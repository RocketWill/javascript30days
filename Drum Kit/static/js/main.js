window.addEventListener('keydown', function(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //要用 ${ ... }
    if (!audio || !key) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add("press");
});

const keys = document.querySelectorAll(".key");
//keys.addEventListener("transitionend", removeTransition);
function removeTransition(e){
    //this.removeClass('press');
    if (e.propertyName != "transform") return
    this.classList.remove('press');
}

keys.forEach(key => key.addEventListener("transitionend", removeTransition));