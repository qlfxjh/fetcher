
$(function(){
    //footerAdapt();
    
    var site = getQueryString('d');
    var part = getQueryString('p');
    var id = getQueryString('id');
    var url = 'http://www.'+site+'1985.xyz:8080/get_'+part+'/'+id;
//    $.get(url, function(data){
//        if(data.state=='success'){
//            $('#article_tit').html(data.article.title);
//            $('#article_con').html(data.article.content);
//        }else{
//            $('#article_tit').html(data.article.title);
//            $('#article_con').html(data.article.content);
//        }
//    });
    //var file = $iptFile.val();
    
//    var httpRequest = new XMLHttpRequest();
//    httpRequest.open("GET",url);
//    httpRequest.onreadystatechange = handleFetchResponse;
//    httpRequest.send();
    
    
});
//
//function handleFetchResponse(){
//    if(httpRequest.readyState == 4 && httpRequest.status == 200){
//        var resData = httpRequest.responseText;
//        console.dir(resData);
//        $('#article_tit').html(data.article.title);
//        $('#article_con').html(data.article.content);
//    }
//}



function getCookie(c_name)
{
    if (document.cookie.length>0)
      {
      c_start=document.cookie.indexOf(c_name + "=")
      if (c_start!=-1)
        { 
        c_start=c_start + c_name.length+1 
        c_end=document.cookie.indexOf(";",c_start)
        if (c_end==-1) c_end=document.cookie.length
        return unescape(document.cookie.substring(c_start,c_end))
        } 
      }
    return "";
}
function setCookie(c_name,value,expiredays){
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}


function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}


function reload(){
	window.location.reload();
}

var JW = {};
//生成一个从0-(_limit-1)的随机数;
JW.createRandom = function(_limit){
	var ranNum = Math.floor(Math.random()*_limit);
	return ranNum;
}


