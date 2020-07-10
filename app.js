let clickNo = 0;
let clickYes = 0

function changeItemNo() {
  document.getElementById('emoji--no').style.display = "block";
  document.getElementById('emoji--first').style.display = "none";
  document.getElementById('emoji--yes').style.display = "none";
  ++clickNo;
  document.getElementById("value--no").innerHTML = clickNo;
  console.log("clickNo", clickNo);
};
function changeItemYes() {
  document.getElementById('emoji--yes').style.display = "block";
  document.getElementById('emoji--first').style.display = "none";
  document.getElementById('emoji--no').style.display = "none";
  ++clickYes;
  document.getElementById("value--yes").innerHTML = clickYes;
  console.log("clickYes", clickYes);
};
function fire() {
  if (clickNo > clickYes) {
    document.getElementById('fire-pic').style.color = "blue";
  }
    else if (clickNo < clickYes) {
      document.getElementById('fire-pic').style.color = "red";
    }
    else {
      document.getElementById('fire-pic').style.color = "grey";
    }
};
