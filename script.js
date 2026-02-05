var facts1=document.getElementById("facts1");
var topic1 = document.getElementById("topic1");
var count = 0;

topic1.addEventListener("click", displayFact);

function displayFact(){
  facts1.innerHTML = factlist1[count];
  count++;
  if (count == factlist1.length){
    count = 0;
  }
}


var factlist2 = [
  "People Have A Harder Time Recovery When They Have Stigma About Their Illness (APA)",
  "3/4 Teens With Depression Look For Others Sharing Their Experience With Mental Health Online (APA) ",
  "In A Global Study 12% Of People Didn't Want To Recieve Help Because They Were Afraid Of Judgement From Their Community (Etactics)",
  "50% Of Workers Do Not Feel Comfortable Talking About Mental Health In Their Workplace"];


var facts2 = document.getElementById("facts2");
var topic2 = document.getElementById("topic2");
var count = 0;

topic2.addEventListener("click", displayFact2);

function displayFact2(){
  facts2.innerHTML = factlist2[count];
  count++;
  if (count == factlist2.length){
    count = 0;
  }
}


