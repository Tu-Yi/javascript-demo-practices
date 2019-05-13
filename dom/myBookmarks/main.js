/**导航js*/

// 获取数据
var list = init();
// 生成键盘
generateKeyBoard();



/**下面是工具函数*/
/*生成键盘*/
function generateKeyBoard(){
    var index=0;
    while(index<list.length){
        var divRow = createTag('div',{},document.getElementById("wrapper"));
        Object.keys(list[index]).forEach(function(key){
            if(key!=='length'){
                var eleKbd =  createTag('kbd',{'textContent': key},divRow);
                imgHandle(index,key,eleKbd);
                buttonHandle(key,eleKbd);
            }
        });
        index++;
    }
}
/**处理按钮 */
function buttonHandle(key,parent){
    var button = createTag('button',{'textContent': '编辑','id': key},parent);
    button.onclick=function(e){
        bindButton(e);
    }
}
/**处理图标 */
function imgHandle(index,key,parent){
    var src;
    if(list[index][key]){
        src = list[index][key] + '/favicon.ico';
        
    }else{
        src = "default.png";
    }
    var ico = createTag('img',{'src': src},parent);
    ico.onerror=function(err){
        createTag('img',{'src': "default.png"},parent);
    }
}
/*编辑按钮事件*/
function bindButton(e){
    var newSite = prompt("请输入新的网址");
    var index=0;
    ico = e.target.previousSibling;
    ico.src = "http://"+newSite + "/favicon.ico";
    while(index<list.length){
        Object.keys(list[index]).forEach(function(key){
            if(key===e.target.id){
                list[index][key] = "http://" + newSite;
                localStorage.setItem('data', JSON.stringify(list));
                return false;
            }
        })
        index++;
    }
    console.log(list)
}
/*键盘事件*/
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

/*创建页面元素*/
function createTag(name,attr,parent){
    var element = document.createElement(name);
    for(var key in attr){
        element[key] = attr[key];
    }
    parent.appendChild(element);
    return element;
}
/*初始化数据*/
function init(){
    var data = [
        {
            1: '', 2: '',3: 'https://www.w3.org', 4: '',5: '', 6: '',7: '', 8: '',9: '', 0: '', length: 10
        },
        {
            'Q': 'https://www.qq.com', 'W': 'https://weibo.com', 'E': '', 'R': '', 'T': 'https://www.taobao.com', 'Y': '', 'U': '', 
            'I': 'https://www.iqiyi.com', 'O': '', 'P': '', length: 10
        },
        {
            A: 'https://www.amazon.cn', S: '', D: 'https://www.douban.com', F: '', G: '', H: '', J: 'https://www.jd.com', K: '', L: '', length: 9
        },
        {
            z: '', x: '', c: '', v: '', b: '', n: '', m: 'https://medium.com', length: 7
        }
    ]

    //处理缓存
    var localData = JSON.parse(localStorage.getItem('data') || 'null');
    if(localData){
        data = localData;
    }
    return data;
}