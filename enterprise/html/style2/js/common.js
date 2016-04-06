/**
 * 
 */

// 计算页面的实际高度，iframe自适应会用到
function calcPageHeight(doc) {
	var cHeight = Math.max(doc.body.clientHeight,doc.documentElement.clientHeight);
	var sHeight = Math.max(doc.body.scrollHeight,doc.documentElement.scrollHeight);
	var height = Math.max(cHeight, sHeight);
	return height
}
/**
 * @doc 自动设置iframe高度
 * @author 方刚
 * @time 2015-05-18 15:51:15
 */
function autoHeight(){
	var height = calcPageHeight(document.getElementById('autoHeight').contentWindow.document);
	//console.log(document);
	//console.log(document.getElementById('autoHeight').contentWindow.document);
	parent.document.getElementById('autoHeight').style.height = height + 'px';
}

/**
 * @doc 是否存在指定函数
 * @author 方刚
 * @time 2015-05-18 15:55:29
 */
function isExitsFunction(fname, object) {
	object = !object || typeof object !== 'object' ? window : object;
	return typeof object[fname] === 'function';
}

/**
 * @doc 是否存在指定变量
 * @author 方刚
 * @time 2015-05-18 15:55:46
 */
function isExitsVariable(variableName) {
    try {
        if (typeof(variableName) == "undefined") {
            //alert("value is undefined"); 
            return false;
        } else {
            //alert("value is true"); 
            return true;
        }
    } catch(e) {}
    return false;
}