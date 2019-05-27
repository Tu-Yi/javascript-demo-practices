/*设置loading 暂时没用注释 */
// setTimeout(function(){
//     wait.classList.remove('active');
// },2000)

/**给内容添加offset状态 */
let specialTags = document.querySelectorAll('[data-x]')
for(let i =0;i<specialTags.length; i++){
  specialTags[i].classList.add('offset')
}
/**初始化内容和导航关联样式 */
setTimeout(() => {
    init();
}, 250);

/**鼠标滚动 header添加样式 内容和导航关联样式 */
window.onscroll=function(){
    window.scrollY>0 ? header.classList.add('sticky') : header.classList.remove('sticky');
    init();
}
/** 内容和导航关联样式*/
function init(){
    let sTags = document.querySelectorAll('[data-x]')
    let minIndex = 0;
    for(let i=1;i<sTags.length;i++){
        if(Math.abs(sTags[i].offsetTop - window.scrollY) < Math.abs(sTags[minIndex].offsetTop - window.scrollY)){
            minIndex = i;
        }
    }
    sTags[minIndex].classList.remove('offset');
    let id = sTags[minIndex].id
    let a = document.querySelector('a[href="'+id+'"]')
    let li = a.parentNode;
    let aTags = document.querySelectorAll('a[data-a]')
    for(let i=0;i<aTags.length;i++){
        aTags[i].classList.remove('active');
    }
    a.classList.add('active')
}
/**添加导航菜单事件 */
let Tags = document.getElementsByClassName('menuTrigger');
for(let i=0;i<Tags.length;i++){
    Tags[i].onmouseenter=function(e){
        e.currentTarget.classList.add('active')
    }
    Tags[i].onmouseleave=function(e){
        e.currentTarget.classList.remove('active')
    }
}
/**tweenjs 缓动 点击菜单跳到内容 */
function animate(time){
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

let aTags = document.querySelectorAll('header > nav > ul > li >a');
for(let i=0;i<aTags.length;i++){
    aTags[i].onclick = function(e){
        e.preventDefault();
        let a = e.currentTarget;
        let href = a.getAttribute('href');
        let element = document.getElementById(href)
        let top = element.offsetTop;

        let currentTop = window.scrollY
        let targetTop = top - 80
        let distance = targetTop - currentTop
        var coords = {y: currentTop}
        var t = Math.abs((distance/100) * 300)
        if(t>500){
            t = 500;
        }
        var tween = new TWEEN.Tween(coords)
        .to({y:targetTop}, t)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(function () {
            window.scrollTo(0,coords.y)
        })
        .start();
    }
}

/**案例菜单状态 */
portfolioAll.onclick=function(){
    progress.className = 'progress state-1';
}
portfolioWeb.onclick=function(){
    progress.className = 'progress state-2';
}
portfolioApp.onclick=function(){
    progress.className = 'progress state-3';
}