// 制作一个问答式
var question =[
    {
        prompt:"香蕉是什么颜色？\n(a)红色\n(b)绿色\n(c)黄色",
        answer:"c"
    },
    {
        prompt:"草莓是什么颜色？\n(a)红色\n(b)紫色\n(c)黄色",
        answer:"a"
    },
    {
        prompt:"奇异果是什么颜色？\n(a)红色\n(b)紫色\n(c)绿色",
        answer:"c"
    },
    {
        prompt:"一公尺等于几公分？\n(a)1\n(b)10\n(c)100",
        answer:"c"
    }
]
var score = 0;
for(var i=0; i<question.length;i++){
    var input=prompt(question[i].prompt);
    if(input==question[i].answer){
        score++;
        alert("答对了！");
    }
    else {
        alert("答错了！");
    }
}
alert("总共答对了" + score + "题!");
