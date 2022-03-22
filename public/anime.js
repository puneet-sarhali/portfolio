anime({
    targets: '.shape',
    translateX: 250,
    direction: 'alternate',
    easing: 'easeInOutSine'
  });


const button = document.querySelector('button');


const timeline = anime.timeline({
    easing: 'linear',
});



// show the dashed line
timeline.add({
    targets: '.in-between',
    strokeDashoffset: [0, anime.setDashoffset],
    duration: 2000,
    delay: 2000
})



