$(function(){
	$("#selfIntroductionTag").click(function()
	{
		console.log("1");
		$("#professionalSkills , #hobby").css("display","none");				
		$("#selfIntroduction").css("display","block");

	});

	$("#professionalSkillsTag").click(function()
	{
		console.log("1");
		$("#selfIntroduction , #hobby").css("display","none");				
		$("#professionalSkills").css("display","block");

	});	

	$("#hobbyTag").click(function()
	{
		console.log("1");
		$("#professionalSkills , #selfIntroduction").css("display","none");				
		$("#hobby").css("display","block");

	});	

	var nav=$(".nav"); //得到导航对象

	var win=$(window); //得到窗口对象

	var sc=$(document);//得到document文档对象。

	win.scroll(function(){

	  if(sc.scrollTop()>=250){
	  	console.log("1");
	    $("nav").addClass("fixednav"); 	   
	  }else{

	   $("nav").removeClass("fixednav");

	  }
	});
	  
});