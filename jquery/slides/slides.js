let n;
/*初始化状态 */
init();
let timer = setInterval(() => {
    /**图片状态切换 */
    makeLeave(getImage(n)).one('transitionend', (e) => {
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n + 1))
    n += 1;
}, 2000);
//解决切换出去后settimeout乱执行的问题
document.addEventListener('visibilitychange', function (e) {
    if (document.hidden) {
        window.clearInterval(timer)
    } else {
        timer = setInterval(() => {
            /**图片状态切换 */
            makeLeave(getImage(n)).one('transitionend', (e) => {
                makeEnter($(e.currentTarget))
            })
            makeCurrent(getImage(n + 1))
            n += 1;
        }, 2000);
    }
})




/**封装函数 */

function getImage(n) {
    return $(`.images > img:nth-child(${x(n)})`)
}

function x(n) {
    if (n > 3) {
        n = n % 3;
        if (n === 0) {
            n = 3
        }
    }
    return n;
}

function init() {
    n = 1;
    $(`.images > img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
}

function makeCurrent($node) {
    return $node.removeClass('enter leave').addClass('current')
}

function makeLeave($node) {

    return $node.removeClass('enter current').addClass('leave');
}

function makeEnter($node) {
    return $node.removeClass('leave current').addClass('enter')
}