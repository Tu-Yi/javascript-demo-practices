# jquery

### 自动轮播
[自动轮播](../jquery/swiper/swiper.js)
### 无缝轮播
[无缝轮播](../jquery/slides/slides.js)

### 技巧

**一组按钮添加事件**
```javascript
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
// $(e.currentTarget).index();  当前元素的index
```

**触发事件**
`allButtons.eq(index) ` dom伪数组元素转为jquery元素
```javascript
allButtons.eq(index).trigger('click')
```

**添加移除css**
```javascript
$button.addClass('red').siblings('.red').removeClass('red')
```

**状态机**
```javascript
setInterval(() => {
    /**图片状态切换 */
    makeLeave(getImage(n)).one('transitionend', (e)=>{
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n+1))
    n+=1;
}, 3000);

function makeCurrent($node){
    return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
    
    return $node.removeClass('enter current').addClass('leave');
}
function makeEnter($node){
    return $node.removeClass('leave current').addClass('enter')
}
```