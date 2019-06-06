function isLearYear(year){
    var condition1 = year % 4 == 0;
    var condition2 = year % 100 !=0;
    var condition3 = year % 400 ==0;
    return condition1 && condition2 || condition3;
}
function getMonthDay(year){
    var _arr=[31,31,30,31,30,31,31,30,31,30,31];
    if(isLearYear(year)){
        //闰年    
        _arr.splice(1,0,29);
        return _arr; 
    }else{
        //平年
        _arr.splice(1,0,28);
        return _arr;
    }
},
function calendar(){
	var date = new Date();
	var nowYY = date.getFullYear();
	var monthArr = getMonthDay(nowYY);
	var nowMonth = date.getMonth();
	var monthDays = monthArr[nowMonth];
	var firstDay = new Date(nowYY,nowMonth,1).getDay();
	var idx,date_str;
	var showData = [[],[],[],[],[],[]];
	for(var i = 0;i<6;i++){
		for(var k = 0;k<7;k++){
			idx=i*7+k; //单元格自然序列号
　　　　	date_str=idx-firstDay+1; //计算日期
			var obj = {};
			if(date_str>0 && date_str<=monthDays){
				obj.day = date_str;
				showData[i].push(obj)
			}else{
				obj.day = "";
				showData[i].push(obj);
			}
		}
	}
	return showData;
}