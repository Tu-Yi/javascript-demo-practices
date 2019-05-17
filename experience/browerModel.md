# 浏览器模型

### storage
```javascript
    var localData = JSON.parse(localStorage.getItem('data') || 'null');
    if(localData){
        data = localData;
    }
```