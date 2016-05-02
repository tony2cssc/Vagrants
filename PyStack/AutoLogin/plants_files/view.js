//读取cookie：  
function  readCookie(name)  
{  
   var  cookieValue  =  "";  
   var  search  =  name  +  "=";  
   if(document.cookie.length  >  0)  
   {    
       offset  =  document.cookie.indexOf(search);  
       if  (offset  !=  -1)  
       {    
           offset  +=  search.length;  
           end  =  document.cookie.indexOf(";",  offset);  
           if  (end  ==  -1)  end  =  document.cookie.length;  
           cookieValue  =  unescape(document.cookie.substring(offset,  end))  
       }  
   }  
   return  cookieValue;  
}
	function ChechLogin(varForm){
		if(varForm.UserName.value==""){
			alert(JS_TEXT_INC_HEADER_MSG_InputUserName);
			varForm.UserName.focus();
			return false;
		}
		if(varForm.Password.value==""){
			alert(JS_TEXT_INC_HEADER_MSG_InputPassword);
			varForm.Password.focus();
			return false;
		}
		return true;
	}
	  
  	function view(id){
		var url
		url="show.asp?id=" + id;
	    //window.open(url);
		//showModelessDialog(url,"product","dialogWidth:1200px;dialogHeight:800px;menubar=no;status:no;help:no;resizable=no;scrollbar:no;");
		var Wtop=(screen.width-670)/3;
		var Wleft=(screen.height-450)/3;
		window.open(url,"product","width=700,height=360,location=no, status=no,menubar=no,resizable=no,scrollbar=no,left=" + Wleft + ",top=" + Wtop);
		//showModelessDialog(url,"product" +id,"dialogWidth:767px;dialogHeight:480px;menubar=no;status:no;help:no;resizable=no;scrollbar=no;dialogLeft:" + Wleft + "px;dialogTop:" + Wtop+"px");
		return false;
	}
	
  	function ShowJobWindow(){
		var url="ShowJob.asp";				
		var Wtop=(screen.width-670)/3;
		var Wleft=(screen.height-450)/3;
		window.open(url,"Job","statusbar=no,width=615,height=445,menubar=no,resizable=yes,scrollbar=yes,left=" + Wleft + ",top=" + Wtop);
		return false;
	}

	function MarqueeScroll(){
		if(demo2.offsetWidth-demo.scrollLeft<=0)
			demo.scrollLeft-=demo1.offsetWidth
		else{
			demo.scrollLeft++
		}
	}
	
	function ShowBigPic(obj,imgsrc,gd,gf,zd){

	divShowImage.style.pixelTop=document.body.scrollTop;//iOffset-event.clientY+event.offsetY+2;
	//divShowImage.style.pixelTop=document.documentElement.scrollTop;
	//如果顶部申明 
    //<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
   //document.body.scrollTop 要改成 document.documentElement.scrollTop 


		if(event.clientX>(document.body.clientWidth/2)){
			divShowImage.style.pixelLeft=0;
		}else{
			divShowImage.style.pixelLeft=document.body.clientWidth-divShowImage.style.pixelWidth;
		}
		
		ifrmImage.imgShowImage.src=obj.src;
		if(imgsrc.substr(imgsrc.length-3).toUpperCase()=="JPG"){
			ifrmImage.imgShowImage.src=imgsrc;
		}
		ifrmImage.zb1.value=gd;
		ifrmImage.zb2.value=gf;
		ifrmImage.zb3.value=zd;
		divShowImage.style.visibility='visible';		
	}
	
	function HideBigPic(obj){
	    ifrmImage.imgShowImage.src='';
		divShowImage.style.visibility='hidden';
	}
	//首页中显示最新样品部分
function js_ShowProducts(proID,proNo,proName,proImg,proBigImg,proPrice,proIndex,bShowCart){
		var ProductHTMLStr='<td valign="middle">';
	//产品图
		ProductHTMLStr+='<table width="100" border="0" cellspacing="0" cellpadding="0">'
		ProductHTMLStr+='  <tr>'
		ProductHTMLStr+='    <td><table width="100%"  border="0" cellspacing="0" cellpadding="0">'
		ProductHTMLStr+='      <tr>'
		ProductHTMLStr+='        <td><img src="images/c_p1.gif" width="134" height="5"></td>'
		ProductHTMLStr+='      </tr>'
		ProductHTMLStr+='      <tr>'
		ProductHTMLStr+='        <td>'
		ProductHTMLStr+='            <table width="100%"  border="0" cellspacing="0" cellpadding="0">'
		ProductHTMLStr+='          <tr>'
		ProductHTMLStr+='            <td><img src="images/c_p3.gif" width="6" height="90"></td>'
		ProductHTMLStr+='            <td><img src="'+proImg+'" width="120" height="90" border="0" onClick="view('+proID+')" style="cursor:hand"'
		if(bShowCart){
		   ProductHTMLStr+='onMouseOver="ShowBigPic(this,\''+proBigImg+'\')" onMouseOut="HideBigPic()"';
		}
		ProductHTMLStr+='></td>'
		ProductHTMLStr+='            <td><img src="images/c_p4.gif" width="8" height="90"></td>'
		ProductHTMLStr+='          </tr>'
		ProductHTMLStr+='        </table></td>'
		ProductHTMLStr+='      </tr>'
		ProductHTMLStr+='      <tr>'
		ProductHTMLStr+='        <td><img src="images/c_p2.gif" width="134" height="8"></td>'
		ProductHTMLStr+='      </tr>'
		ProductHTMLStr+='    </table></td>'
		ProductHTMLStr+='  </tr>'
		ProductHTMLStr+='  <tr>'
		ProductHTMLStr+='    <td height=20><div align="center"><strong>ID:</strong>'+proNo+'</div></td>'
		ProductHTMLStr+='  </tr>'
		ProductHTMLStr+='  <tr>'
		ProductHTMLStr+='    <td height=20><div align="center">'+proName+'</div></td>'
		ProductHTMLStr+='  </tr>'
		if (proPrice>0){
		  ProductHTMLStr+='<tr>'
		  ProductHTMLStr+='<td height="20" align="center">价格: <font color="#FF0000">'+proPrice+" "+readCookie("CurrencyName")+'</font></td>'
		  ProductHTMLStr+='</tr>'
		}
		if (bShowCart){
		  ProductHTMLStr+='<tr>'
		  ProductHTMLStr+='<td height="9" align=center><input type="checkbox" name="ID'+proIndex+'" value="'+proID+'"><a href="Cart.asp?ID1='+proID+'">添加到购物车</a></td>'
		  ProductHTMLStr+='</tr>'
		}
		ProductHTMLStr+='</table>'

//产品图结束								

		ProductHTMLStr+='</td>';									
		document.write(ProductHTMLStr);
	}
	//首页中显示视频产品
	function js_ShowVideoProducts(proID,proNo,proName,proImg){
		var ProductHTMLStr='<td valign="top" width=145>'
ProductHTMLStr+='<table width="100" border="0" cellspacing="0" cellpadding="0">'
ProductHTMLStr+='  <tr>'
ProductHTMLStr+='    <td><table width="100%"  border="0" cellspacing="0" cellpadding="0">'
ProductHTMLStr+='      <tr>'
ProductHTMLStr+='        <td><img src="images/c_p1.gif" width="134" height="5"></td>'
ProductHTMLStr+='      </tr>'
ProductHTMLStr+='      <tr>'
ProductHTMLStr+='        <td>'
ProductHTMLStr+='            <table width="100%"  border="0" cellspacing="0" cellpadding="0">'
ProductHTMLStr+='          <tr>'
ProductHTMLStr+='            <td><img src="images/c_p3.gif" width="6" height="90"></td>'
ProductHTMLStr+='            <td><img src="'+proImg+'" width="120" height="90" onClick="view('+proID+')" style="cursor:hand" ></td>'
ProductHTMLStr+='            <td><img src="images/c_p4.gif" width="8" height="90"></td>'
ProductHTMLStr+='          </tr>'
ProductHTMLStr+='        </table></td>'
ProductHTMLStr+='      </tr>'
ProductHTMLStr+='      <tr>'
ProductHTMLStr+='        <td><img src="images/c_p2.gif" width="134" height="8"></td>'
ProductHTMLStr+='      </tr>'
ProductHTMLStr+='    </table></td>'
ProductHTMLStr+='  </tr>'
ProductHTMLStr+='  <tr>'
ProductHTMLStr+='    <td  height=20><div align="center"><strong>ID:</strong>'+proNo+'</div></td>'
ProductHTMLStr+='  </tr>'
ProductHTMLStr+='  <tr>'
ProductHTMLStr+='    <td align=center><img src="images/c_pvi_bt.gif" width="111" height="23" onClick="view('+proID+')" style="cursor:hand" alt="Click Play"></td>'
ProductHTMLStr+='  </tr>'
ProductHTMLStr+='</table>'
ProductHTMLStr+='</td>'
		
		document.write(ProductHTMLStr);
	}
							
