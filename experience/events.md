# events

### popover

```html
<div id="wrapper" class="wrapper">
  <button id="clickMe">点我</button>
  <div id="popover" class="popover">
    浮层
  </div>
</div>
```

节约内存，在显示的时候就添加隐藏事件

```javascript
$(clickMe).on("click", function(e) {
  $(popover).show();
  $(document).one("click", function(e) {
    $(popover).hide();
  });
});
$(wrapper).on("click", function(e) {
  e.stopPropagation();
});
```

这样也可以，等冒泡结束

```javascript
$(clickMe).on("click", function(e) {
  $(popover).show();
  setTimeout(() => {
    $(document).one("click", function(e) {
      $(popover).hide();
    });
  }, 0);
});
```
