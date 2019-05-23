let allButtons = $('.buttons > button')
for(let i=0;i<allButtons.length;i++){
    allButtons.eq(i).on('click', function (e) {
        let index = $(e.currentTarget).index();
        let p = index * -300;
        $(images).css({
            transform: `translateX(${p}px)`
        });
        n=index
        activeButton(allButtons.eq(index))
    });
}

let n=0;
let size = allButtons.length
playSide(n % size)

let timerId = setTimer();

$('.window').on('mouseenter',function(){
    window.clearInterval(timerId);
})
$('.window').on('mouseleave',function(){
    timerId = setTimer();
})


function setTimer(){
    return setInterval(() => {
        n+=1;
        playSide(n % size)
    }, 1000);
}
function playSide(index){
    allButtons.eq(index).trigger('click')
}
function activeButton($button){
    $button.addClass('red').siblings('.red').removeClass('red')
}