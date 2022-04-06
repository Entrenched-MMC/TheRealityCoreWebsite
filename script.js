function display(id, btn) {
  var dropper = document.getElementById(id);
  var displaySetting = id.style.display;
  var btn = document.getElementById(btn);
  
  if(displaySetting == 'block') {
    var displaySetting = 'none';
  }
  if(displaySetting == 'none') {
    var displaySetting = 'block';
  }
}
