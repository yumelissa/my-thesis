function openweb(){
	
	

	url_Ary=new Array;
	url_Ary[0]='http://www.mysurvey.tw/s/2R29FrDp';
	url_Ary[1]='http://www.mysurvey.tw/s/6YxwEmFP';
	url_Ary[2]='http://www.mysurvey.tw/s/aKsCY2wE';
	url_Ary[3]='http://www.mysurvey.tw/s/seXq4kmz';
	url_Ary[4]='http://www.mysurvey.tw/s/9k5Bn6Gm';
	url_Ary[5]='http://www.mysurvey.tw/s/9k5Bn6Gm';

	chooseOne=Math.floor(Math.random()*(url_Ary.length));

	window.open(url_Ary[chooseOne]);

};

function button_effect(i){
	var element=document.getElementById('button');
	var element_b=document.getElementById('border');
	if(i==1){
		//element.style.background='#0792AD';
		//element_b.style.visibility='visible';	
		element_b.style.opacity='1';
		
	}	
	else
		//element.style.background='#00a9ca';	
		//element_b.style.visibility='hidden';
		element_b.style.opacity='0';
	
}

function test(){
	
	a=0;
	b=0;
	c=0;		
	d=0;	
	e=0;
	f=0;
	g=0;

	//window.open('http://www.google.com');
	for(i=0;i<400;i++){
		url_Ary=new Array;
		url_Ary[0]='http://www.google.com';
		url_Ary[1]='http://www.facebook.com';
		url_Ary[2]='http://www.yahoo.com';
		url_Ary[3]='http://www.nccu.edu.tw';
		url_Ary[4]='http://www.plurk.com';
		url_Ary[5]='http://www.youtube.com';

		chooseOne=Math.floor(Math.random()*(url_Ary.length));
		
		One_edited=chooseOne;
		

		switch(One_edited){
			case 6:
				g=g+1;
				break;
			case 0:
				++a;
				break;
			case 1:
				b=b+1;
				break;
			case 2:
				c=c+1;
				break;
			case 3:
				d=d+1;
				break;
			case 4:
				e=e+1;
				break;
			case 5:
				f=f+1;
				break;
			default:
				document.write("chooseOne:"+One_edited+"</br>");
		}

	}
			document.write("1:"+a+String(url_Ary[0])+"</br>");
			document.write("2:"+b+String(url_Ary[1])+"</br>");
			document.write("3:"+c+String(url_Ary[2])+"</br>");
			document.write("4:"+d+String(url_Ary[3])+"</br>");
			document.write("5:"+e+String(url_Ary[4])+"</br>");
			document.write("6:"+f+String(url_Ary[5])+"</br>");
			document.write("7:"+g+"</br>");			
};

