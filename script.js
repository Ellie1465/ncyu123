let timer=setInterval("start()",1000);
let cnt=4;
let msg=new Array("就讀國立嘉義大學","2006年生","生日8月4號","身高158","喜歡吃蛋糕");
function start()
{
cnt=cnt%msg.length; document.getElementById("ncyu").innerHTML=msg[cnt];
cnt=cnt+1
}
function stop()
{
  clearInterval(timer)
}