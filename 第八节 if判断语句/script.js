//if 判断语句

/*
    1.如果 肚子饿
        我就去吃饭
*/

var hungry = true;
if(hungry) {
    document.write("我就去吃饭");
}
document.write("<br/>");

/*
    2.如果 今天下雨
        我就开车去上班
    否则
        我就走路去上班
*/

var rainy = true;
if(rainy){
    document.write("我就开车去上班");
}
else{
    document.write("我就走路去上班");
}
document.write("<br/>");

/*
    3.如果 你考100分
        我就给你1000元
    或是如果 你考80分以上
        我给你500元
    或是如果 你考60分以上
        我给你100元
    否则
        你给你300元
*/

var score = 50;
if(score==100){
    document.write("我给你1000元");
}
else if(score>=80){
    document.write("我给你500元");
}
else if(score>=60){
    document.write("我给你100元");
}
else{
    document.write("你给我300元");
}
document.write("<br/>");

/*
    4.如果 你考100分 且 今天下雨
        我给你1000元
    否则
        你给我100元
*/

var score = 90;
var rainy =false;

if(score==100 && rainy){
    document.write("我给你1000元");
}
else{
    document.write("你给我100元");
}
document.write("<br/>");

/* 
    5.
    如果 你考100分 或 今天下雨
        我给你1000元
    否则
        你给我100元
*/
var score = 90
var rainy = false;

if(score==100 || rainy){
    document.write("我给你1000元");
}
else{
    document.write("你给我100元");
}
document.write("<br/>");

/* 
    6.
    如果 你考100分 或 今天没有下雨
        我给你1000元
    否则
        你给我100元
*/

var score =90;
var rainy =true;

if(score==100 || !rainy){
    document.write("我给你1000元");
}
else{
    document.write("你给我100元");
}
document.write("<br/>");

//综合小练习，做了一个比大小的计算器

function max_num(num1,num2,num3){
    if(num1>=num2 && num1>=num3){
        return num1;
    }
    else if(num2>=nmu1 && num2>=num3){
        return num2;
    }
    else{
        return num3;
    }
}
document.write(max_num(99,1,57))