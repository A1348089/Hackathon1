var btn1 = document.getElementById("enter");
btn1.addEventListener("click", dispaly);

/*document.addEventListener("DOMContentLoaded", reset());*/

var row = 1;

function dispaly() {
  var input1 = document.getElementById("name").value;
  var input2 = document.getElementById("gender").value;
  var input3 = document.getElementById("color").value;
  console.log(input2);
  console.log(input3);

  if (
    !input1 ||
    input2 == "disabled selected hidden" ||
    input3 == "disabled selected hidden"
  ) {
    alert("Fill all the details");
    return;
  }

  var dispaly = document.getElementById("displayDetails");

  var newRow = dispaly.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.innerHTML = input1;
  cell2.innerHTML = input2;
  cell3.innerHTML = input3;

  row++;
}
