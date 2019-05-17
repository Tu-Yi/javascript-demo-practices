# dom

## 页面元素
### 根据属性查找元素
```javascript
    let specialTags = document.querySelectorAll('[data-x]')
    for(let i =0;i<specialTags.length; i++){
        specialTags[i].classList.add('offset')
    }
```

### 获取最近的元素
```javascript
    let sTags = document.querySelectorAll('[data-x]')
    let minIndex = 0;
    for(let i=1;i<sTags.length;i++){
        if(Math.abs(sTags[i].offsetTop - window.scrollY) < Math.abs(sTags[minIndex].offsetTop - window.scrollY)){
            minIndex = i;
        }
    }
```

### 创建页面元素
```javascript
    function createTag(name,attr,parent){
        var element = document.createElement(name);
        for(var key in attr){
            element[key] = attr[key];
        }
        parent.appendChild(element);
        return element;
    }
```


## 事件

### 鼠标滚动事件
```javascript
    window.onscroll=function(){
        window.scrollY>0 ? header.classList.add('sticky') : header.classList.remove('sticky');
        init();
    }
```

### 鼠标移入移出显示div事件
```javascript
    let Tags = document.getElementsByClassName('menuTrigger');
    for(let i=0;i<Tags.length;i++){
        Tags[i].onmouseenter=function(e){
            e.currentTarget.classList.add('active')
        }
        Tags[i].onmouseleave=function(e){
            e.currentTarget.classList.remove('active')
        }
    }
```

## 样式状态

### 缓动
```javascript
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
```

### 改变状态
```javascript
    portfolioAll.onclick=function(){
        progress.className = 'progress state-1';
    }
    portfolioWeb.onclick=function(){
        progress.className = 'progress state-2';
    }
    portfolioApp.onclick=function(){
        progress.className = 'progress state-3';
    }
```

### 键盘事件
```javascript
    document.onkeypress=function(e){
        var website;
        var index=0;
        while(index<list.length){
            Object.keys(list[index]).forEach(function(key){
                if(key.toLowerCase()===e.key){
                    website = list[index][key];
                    return false;
                }
            })
            index++;
        }
        window.open(website, '_blank');
    }
```

### 图片报错事件
```javascript
    ico.onerror=function(err){
        createTag('img',{'src': "default.png"},parent);
    }
```

### range改变事件
```javascript
    function rangeChange(){
        console.log(document.getElementById('range'))
        var value = document.getElementById('range').value ;
        lineWidth = value;
        document.getElementById('rangeValue').innerHTML = value;
    }
```

### 页面大小改变事件
```javascript
    function AutoResize(canvas) {
        setSize();
        window.onresize = function () {
            setSize();
        }

        function setSize() {
            var pageWidth = document.documentElement.clientWidth
            var pageHeight = document.documentElement.clientHeight
            canvas.width = pageWidth;
            canvas.height = pageHeight;
            color.height = pageHeight;
        }
    }
```

### 判断PC，手机
```javascript
    if(document.body.ontouchstart===null){
        ListenTouch();
    }else{
        LitsenMouse();
    }
```

### mouse touch
```javascript
    canvas.onmousedown = function (e) {
        var x = e.clientX;
        var y = e.clientY;
        paint = true;
        if (isEraser) {
        ctx.clearRect(x, y, 10, 10);
        } else {
        lastPoint = {
            x: x,
            y: y
        }
        }
    }
    canvas.ontouchstart=function(e){
    console.log(1)
    var x = e.touches[0].clientX;
    var y = e.touches[0].clientY;
    paint = true;
    if (isEraser) {
      ctx.clearRect(x, y, 10, 10);
    } else {
      lastPoint = {
        x: x,
        y: y
      }
    }
  }
```

