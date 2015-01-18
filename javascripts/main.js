var images=["pomodoro_timer_00_help.jpg",
  "pomodoro_timer_1_menu.jpg",
  "pomodoro_timer_2_main_options.jpg",
  "pomodoro_timer_3_notify_options.jpg",
  "pomodoro_timer_4_voice_settings.jpg",
  "pomodoro_timer_5_calendar_integration.jpg",
  "pomodoro_timer_6_scripts.jpg",
  "pomodoro_timer_7_global_shortcuts.jpg",
  "pomodoro_timer_8_general_settings.jpg",
  "pomodoro_timer_9_statistics.jpg",
  "pomodoro_timer_10_about.jpg"]
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
