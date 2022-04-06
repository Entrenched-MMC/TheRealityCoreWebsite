function display(id, btn) {
  var dropper = document.getElementById(id);
  var displaySetting = dropper.style.display;
  var dropper-btn = document.getElementById(btn);
  
  if(displaySetting == 'block') {
    var displaySetting = 'none';
    var dropper-btn.innerHTML = 'Hide Dropdown';
  }
  else {
    var displaySetting = 'block';
    var dropper-btn.innerHTML = 'Other Links/Sub-Pages';
  }
}
