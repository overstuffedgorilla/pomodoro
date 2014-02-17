var images=["0_Timer_personal_time_manager_menu.png",
  "1_Timer_properties.png",
  "2_Timer_calendar_integration.png",
  "3_Timer_applescript_integration.png",
  "8_Timer_statistics.png"]
$(function(){
  var i=0;
  var loopImages = function() {
    i += 1
    if(i>=images.length)
      i=0
    document.getElementById("landing_image").setAttribute("src","images/"+images[i])
  }
  setInterval(loopImages, 3000);
})
