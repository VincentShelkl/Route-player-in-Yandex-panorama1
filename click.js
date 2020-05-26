var cnt = 0;
var cntStep = 1;
var cntMin = 0;
var cntMax = 9;
var textWarning = "\n";
var posArray = [49.1, 50.23, 48.98, 51.45, 50.55];
var outputText = "";

function onClickBack() {
  cnt -= cntStep;
  if (cnt < cntMin) {
    cnt = cntMin;
    textWarning = textWarning + "Warning!!! Reached the lowet limit: " + cntMin;
  }
  alert("Clicked button: Back" + "\n" + "cnt = " + cnt + textWarning);
  textWarning = "\n";
  return false;
}

function onClickNext() {
  cnt += cntStep;
  if (cnt > cntMax) {
    cnt = cntMax;
    textWarning = textWarning + "Warning!!! Reached the upper limit: " + cntMax;
  }
  alert("Clicked button: Next" + "\n" + "cnt = " + cnt + textWarning);
  textWarning = "\n";
  return false;
}

function onClickReset() {
  cnt = cntMin;
  alert("Clicked button: Back" + "\n" + "cnt = " + cnt);
  return false;
}

function onClickSetMax() {
  cnt = cntMax;
  alert("Clicked button: Back" + "\n" + "cnt = " + cnt);
  return false;
}
function onClickShowItem() {
  outputText = "Clicked button: Show Item" + "\n";
  outputText = outputText + "cnt = " + cnt + "\n";
  outputText = outputText + "posArray[" + cnt + "] = " + posArray[cnt];
  alert(outputText);
  return false;
}