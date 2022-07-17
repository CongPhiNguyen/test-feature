let capturedInfo = document.querySelector(".captured-key");
document.onkeypress = (e) => {
  let infoObject = {
    "e.code": e.code,
    "e.charCode": e.charCode,
    "e.key": e.key,
    "e.keyCode": e.keyCode,
  };
  let infoString = "";
  Object.keys(infoObject).forEach((val) => {
    infoString = infoString + `<br/>` + val + " : " + infoObject[val];
  });
  capturedInfo.innerHTML = infoString;
  console.log(e);
};
