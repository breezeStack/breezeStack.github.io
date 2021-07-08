// 跳动的心
$(document).ready(function(e){
    $('.copyright').html('©2020 <i class="fa-fw fas fa-heart card-announcement-animation cc_pointer"></i> shadow');
})
// 添加页脚 网站运行时间
$(document).ready(function(e){
	$('.framework-info').html('本站已运行<SPAN id=span_dt_dt style="color: #fff;"></SPAN>');
})

function show_date_time(){
    window.setTimeout("show_date_time()", 1000);
    BirthDay=new Date("5/2/2020 0:0:0");
    today=new Date();
    timeold=(today.getTime()-BirthDay.getTime());
    sectimeold=timeold/1000
    secondsold=Math.floor(sectimeold);
    msPerDay=24*60*60*1000
    e_daysold=timeold/msPerDay
    daysold=Math.floor(e_daysold);
    e_hrsold=(e_daysold-daysold)*24;
    hrsold=Math.floor(e_hrsold);
    e_minsold=(e_hrsold-hrsold)*60;
    minsold=Math.floor((e_hrsold-hrsold)*60);
    seconds=Math.floor((e_minsold-minsold)*60);
    span_dt_dt.innerHTML=' <font style=color:#2d85f0>'+daysold+'</font> 天 <font style=color:#f4433c>'+hrsold+'</font> 时 <font style=color:#ffbc32>'+minsold+'</font> 分 <font style=color:#0aa858>'+seconds+'</font> 秒';
}
show_date_time();
// 手机侧边栏默认不展开
var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
    "menus_item_child"
);
var menus_expand = mobile_sidebar_menus.getElementsByClassName("menus-expand");
for (var i = 0; i < menus_item_child.length; i++) {
    menus_item_child[i].style.display = "none";
    menus_expand[i].className += " menus-closed";
}