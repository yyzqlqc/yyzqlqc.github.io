setInterval(() => {
  let create_time = Math.round(new Date('2019-04-17 00:00:00').getTime() / 1000); //在此行修改建站时间
  let timestamp = Math.round((new Date().getTime()) / 1000);
  let second = timestamp - create_time;
  let time = new Array(0, 0, 0, 0, 0);

  var nol = function(h){
    return h>9?h:'0'+h;
  }
  if (second >= 365 * 24 * 3600) {
    time[0] = parseInt(second / (365 * 24 * 3600));
    second %= 365 * 24 * 3600;
  }
  if (second >= 24 * 3600) {
    time[1] = parseInt(second / (24 * 3600));
    second %= 24 * 3600;
  }
  if (second >= 3600) {
    time[2] = nol(parseInt(second / 3600));
    second %= 3600;
  }
  if (second >= 60) {
    time[3] = nol(parseInt(second / 60));
    second %= 60;
  }
  if (second > 0) {
    time[4] = nol(second);
  }
  if ((Number(time[2])<22) && (Number(time[2])>7)){
    currentTimeHtml ="<img class='boardsign' src='https://img.shields.io/badge/魏无羡：“含光君，含光君，快看我新得了什么好东西”。-6adea8?style=social&logo=cakephp' title='蓝忘机心想“不过一条普通的丝带，魏婴因何如此欢喜？”~'><div id='runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
  }
  else{
    currentTimeHtml ="<img class='boardsign' src='https://img.shields.io/badge/三年之约已至-6adea8?style=social&logo=coffeescript' title='三十年河东三十年河西，莫欺少年穷！'><div id='runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
  }
  document.getElementById("workboard").innerHTML = currentTimeHtml;
}, 1000);

