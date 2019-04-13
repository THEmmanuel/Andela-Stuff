var no = 0;

for (var rows = 0; rows < 6; rows++) {
  for (var cols = 0; cols < 6; cols++) {
    no ++;
    var seat = document.createElement("input");
    seat.setAttribute("type", "number");
    seat.setAttribute("id", no);
    seat.setAttribute("size", "4");
    document.getElementsByClassName("sub_container")[0].appendChild(seat);
       }
  var paragraph = document.createElement("p");
  document.getElementsByClassName("sub_container")[0].appendChild(paragraph);
  };

var checkButton = document.getElementById("checkButton");

function frontStage(arr){
  console.log(arr)
  var resultString = "result is true";
  for(var i = 0; i < 6; i++){
    var arr1 = [];
    arr1.push(arr[i]);
    console.log(arr[1]);
      for(var j = i + 6; j < arr.length; j++){
        if ((arr[j]) > (arr1[arr1.length - 1])){
            arr1.push((arr[j]));
            document.getElementById(j + 1).style.backgroundColor = "#00FF00";

        }
        else{
          document.getElementById(j + 1).style.backgroundColor = "#FF0000";
          resultString = "result is false";
        }
        j += 5;
      }
  }
  document.getElementById("result").innerHTML = resultString;
}



function Check(){
  var inputArray = [];

  for(var i = 1; i <= 36; i++){
    if(i < 7){
      document.getElementById(i).style.background = "#00FF00";
    }
    if(document.getElementById(i).value == ""){
      inputArray.push(0);
    }
    else{
      inputArray.push(document.getElementById(i).value);
    };

  };
  frontStage(inputArray);
};


checkButton.addEventListener("click", Check)