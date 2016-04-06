/**
 * @doc 公共js
 * @author fanggang
 * @time 2016-02-22 20:23:35 周一
 */


/**
 * @doc iframe自适应高度
 * @param fm_name 框架名称
 * @param fm_id 框架id
 * @author fanggang
 * @time 2016-02-22 20:24:11 周一
 */
function frameAutoHeight(fm_name, fm_id){
    var frm = document.getElementById(fm_id);
    var subWeb = document.frames ? document.frames[fm_name].document : frm.contentDocument;
    if(frm != null && subWeb != null){
        frm.style.height = subWeb.documentElement.scrollHeight + "px";
        //如需自适应宽高，去除下行的“//”注释即可
        frm.style.width = subWeb.documentElement.scrollWidth + "px";
    }
}