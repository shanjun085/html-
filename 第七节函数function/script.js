// 函数 function

//1.1
function hello() {
    document.write("你好");
  }

  hello();
  hello();
document.write("<br/>");

//1.2
function huanyin(name,age){
    document.write("你好" + name + "你今年" + age + "岁")
}
huanyin("小白","82");
document.write("<br/>");
//1.3 简易计算器
function add (num1,num2){
    document.write(num1 + num2);
}

add(3,5);
document.write("<br/>");

//1.4 return回传，回传之后的语句就跳出循环不显示了

function add(num1,num2){
    document.write(num1 + num2);
    document.write("<br/>");
    return 10;
    document.write("你好");
}
    value = add(3,2);
    document.write( value );
