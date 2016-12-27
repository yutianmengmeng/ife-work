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