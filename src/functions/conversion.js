export function boolean(value) {
  if (value === "true") {
    return true;
  } else if (value === "false") {
    return false;
  } else return "";
}

export function secondsToDhms(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);

  var dDisplay = d > 0 ? d : "00";
  var hDisplay = h > 0 ? h : "00";
  var mDisplay = m > 0 ? m : "00";
  var sDisplay = s > 0 ? s : "00";

  var dText = dDisplay == 1 ? "days" : "days";
  var hText = hDisplay == 1 ? "hours" : "hours";
  var mText = mDisplay == 1 ? "minutes" : "minutes";
  var sText = sDisplay == 1 ? "seconds" : "seconds";

  return { dDisplay, hDisplay, mDisplay, sDisplay, dText, hText, mText, sText };
}
