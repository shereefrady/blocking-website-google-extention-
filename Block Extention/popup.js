
$(function(){
  
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    $("#site").text(tabs[0].url);


});

});