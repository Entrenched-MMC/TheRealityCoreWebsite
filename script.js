function display(id, btn) {
  var dropper = document.getElementById(id);
  var displaySetting = id.style.display;
  var btn = document.getElementById(btn);
  
  if(displaySetting == 'block') {
    var displaySetting = 'none';
    var btn.innerHTML = 'Hide Dropdown';
  }
  else(displaySetting == 'none') {
    var displaySetting = 'block';
    var btn.innerHTML = 'Other Links/Sub-Pages';
  }
}
