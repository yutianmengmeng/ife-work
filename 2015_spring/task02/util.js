/**
 * Created by Round on 2016/12/20.
 */
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr){
    return Object.prototype.toString.call(arr) === "[object Array]";
}
// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn){
	return typeof fn === "function";
}
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(obj){
	var o=obj.constructor==="Array"? []:{};
	for(var i in obj){
		if(obj.hasOwnProperty(i)){
			o[i]=typeof obj[i] ==="object" ? cloneObject(obj[i]):obj[i];
		}
	}
	return o;
}
// 测试用例：
var srcObj = {
	a: 1,
	b: {
		b1: ["hello", "hi"],
		b2: "JavaScript"
	}
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr){
	var newarr=[];
	for(var i in arr){
		if(newarr.indexOf(arr[i])==-1){
			newarr.push(arr[i]);
		}
	}
	return newarr;
}
// 使用示例
var a = [1, 222, 22, 2, 5, 3,33,4,55,99];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]

// 中级班同学跳过此题l
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
	str.replace(/^\s+|\s+$/g,'');
}

// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
	return str.replace(/^\s+|\s+$/g,'');
}

// 使用示例
var str = '   hi!  ';
str2 = trim(str);
console.log(str2); // 'hi!'

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
	for(var i in arr){
		fn(arr[i],i);
	}
};
// 其中fn函数可以接受两个参数：item和index

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item) {
	console.log(item)
}
each(arr, output);  // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
	console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
	var len=0;
	for(var i in obj){
		len++;
	}
	return len;
}
// 使用示例
var obj = {
	a: 1,
	b: 2,
	c: {
		c1: 3,
		c2: 4
	}
};
console.log(getObjectLength(obj)); // 3

// 判断是否为邮箱地址
function isEmail(emailStr) {
	var reg=/^\w+@([0-9A-Za-z]+ [.])+\w{2,4}$/;
	return reg.test(emailStr)
}

// 判断是否为手机号
function isMobilePhone(phone) {
	// your implement
	var reg=/^1[3|5|8|7]\d{9}$/;
	return reg.test(phone);
}

//3 DOM操作
// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
	var ele_class=element.className;
	var blank=(!ele_class)? ' ':'';
	var added=ele_class+blank+newClassName;
	element.className=added;
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
	var ele_class=' '+element.className+' ';
	ele_class=ele_class.replace(/(\s+)/gi,' ');
	var removed=ele_class.replace(' '+oldClassName+' ',' ');
	removed=removed.replace(/(^\s+)|(\s+$)/g,'');
	element.className=removed;
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
	return siblingNode.parentNode===element.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
 	var offsetx=0;
			offsetx+=element.offsetLeft;
	var offsety=0;
		offsety+=element.offsetTop;
	//若是元素有父级元素
	if(element.offsetParent!=null){
		getPosition(element.offsetParent)
	}
	return {x:offsetx,y:offsety}
}
// 实现一个简单的Query
function $(selector) {
	if (!selector) {
		return null;
	}
	if (selector == document) {
		return document;
	}
	selector = selector.trim();
	if (selector.indexOf(" ") !== -1) { //若存在空格
		var selectorArr = selector.split(/\s+/); //拆成数组
		var rootScope = myQuery(selectorArr[0]); //第一次的查找范围
		var i = null;
		var j = null;
		var result = [];
		//循环选择器中的每一个元素
		for (i = 1; i < selectorArr.length; i++) {
			for (j = 0; j < rootScope.length; j++) {
				result.push(myQuery(selectorArr[i], rootScope[j]));
			}
			// rootScope = result;
			// 目前这个方法还有bug
		}
		return result[0][0];
	} else { //只有一个，直接查询
		return myQuery(selector, document)[0];
	}
}
/**
 * 针对一个内容查找结果 success
 * @param  {String} selector 选择器内容
 * @param  {Element} root    根节点元素
 * @return {NodeList数组}    节点列表，可能是多个节点也可能是一个
 */
function myQuery(selector, root) {
	var signal = selector[0]; //
	var allChildren = null;
	var content = selector.substr(1);
	var currAttr = null;
	var result = [];
	root = root || document; //若没有给root，赋值document
	switch (signal) {
		case "#":
			result.push(document.getElementById(content));
			break;
		case ".":
			allChildren = root.getElementsByTagName("*");
			// var pattern0 = new RegExp("\\b" + content + "\\b");
			for (i = 0; i < allChildren.length; i++) {
				currAttr = allChildren[i].getAttribute("class");
				if (currAttr !== null) {
					var currAttrsArr = currAttr.split(/\s+/);
					console.log(currAttr);
					for (j = 0; j < currAttrsArr.length; j++) {
						if (content === currAttrsArr[j]) {
							result.push(allChildren[i]);
							console.log(result);
						}
					}
				}
			}
			break;
		case "[": //属性选择
			if (content.search("=") == -1) { //只有属性，没有值
				allChildren = root.getElementsByTagName("*");
				for (i = 0; i < allChildren.length; i++) {
					if (allChildren[i].getAttribute(selector.slice(1, -1)) !== null) {
						result.push(allChildren[i]);
					}
				}
			} else { //既有属性，又有值
				allChildren = root.getElementsByTagName("*");
				var pattern = /\[(\w+)\s*\=\s*(\w+)\]/; //为了分离等号前后的内容
				var cut = selector.match(pattern); //分离后的结果，为数组
				var key = cut[1]; //键
				var value = cut[2]; //值
				for (i = 0; i < allChildren.length; i++) {
					if (allChildren[i].getAttribute(key) == value) {
						result.push(allChildren[i]);
					}
				}
			}
			break;
		default: //tag
			result = root.getElementsByTagName(selector);
			break;
	}
	return result;
}

// 可以通过id获取DOM对象，通过#标示，例如
$("#adom"); // 返回id为adom的DOM对象

// 可以通过tagName获取DOM对象，例如
$("a"); // 返回第一个<a>对象

// 可以通过样式名称获取DOM对象，例如
$(".classa"); // 返回第一个样式定义包含classa的对象

// 可以通过attribute匹配获取DOM对象，例如
$("[data-log]"); // 返回第一个包含属性data-log的对象

$("[data-time=2015]"); // 返回第一个包含属性data-time且值为2015的对象

// 可以通过简单的组合提高查询便利性，例如
$("#adom .classa"); // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象

//4.事件
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
	// your implement
	if(element.addEventListener){
		element.addEventListener(event,listener);
	}
	else if(element.attachEvent){
		element.attachEvent("on"+event,listener);
	}
}


// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
	if(element.removeEventListener){
		element.removeEventListener(event,listener);
	}else if(event.detachEvent){
		element.detachEvent("on"+event,listener);
	}
}

//IE8+支持addEventListener(),IE8-使用attachEvent()

// 实现对click事件的绑定
function addClickEvent(element, listener) {
	addEvent(element,"click",listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
	addEvent(element,"keydown",function(event){
		if(event.keyCode==13){
			listener();
		}
	})
}


//事件代理机制
function delegateEvent(element,tag,eventName,listener){
	addEvent(elemen,eventName,function(event){
		var target=event.target || event.srcElement;
		if(target.tagName.toLowerCase()==tag.toLowerCase()){
			listener.call(target,event);
		}
	})
}

//BOM操作
// 判断是否为IE浏览器
function isIE() {
	if(!!window.ActiveXObject || "ActiveXObject" in window){
		return true;
	}else{
		return false;
	}
}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
	var cookie=cookieName+"="+encodeURIComponent(cookieValue);
	if(typeof expiredays === "number"){
		cookie += ";max-age="+(expiredays*60*60*24);
	}
	document.cookie=cookie;
}
// 获取cookie值
function getCookie(cookieName) {
	var cookie={};
	var all=document.cookie;
	if(all===' '){
		return cookie;
	}
	var list=all.split(";");
	for(var i=0;i<list.length;i++){
		var p=list[i].indexOf("=");
		var name=list[i].substr(0,p);
		var value=list[i].substr(p+1);
		value=decodeURIComponent(value);
		cookie[name]=value;
	}
	return cookie;
}