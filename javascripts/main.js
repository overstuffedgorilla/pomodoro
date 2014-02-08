var images=["pomodoro_screenshot_1_menu.jpg",
  "pomodoro_screenshot_2_main_options.jpg",
  "pomodoro_screenshot_3_notify_options.jpg",
  "pomodoro_screenshot_4_voice_settings.jpg",
  "pomodoro_screenshot_5_calendar_integration.jpg",
  "pomodoro_screenshot_6_scripts.jpg",
  "pomodoro_screenshot_7_global_shortcuts.jpg",
  "pomodoro_screenshot_8_general_settings.jpg"]
$(function(){
  var i=0;
  var loopImages = function() {
    i += 1
    if(i>=images.length)
      i=0
    document.getElementById("landing_image").setAttribute("src","images/"+images[i])
  }
  setInterval(loopImages, 2000);
})
