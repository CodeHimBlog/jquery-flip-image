/*  Plugin: imgFlip (Toggle View Flip/Mirror Image)
 *   Frameworks: jQuery 3.3.1
 *   Author: Asif Mughal
 *   GitHub: https://github.com/CodeHimBlog
 *   URL: https://www.codehim.com
 *   License: MIT License
 *   Copyright (c) 2018 - Asif Mughal
 */
/* File: jquery.imgflip.js */
(function($){
      $.fn.imgFlip = function(options) {
      var setting = $.extend({
    		        flipVertical: true, //false to turn it off
                 flipHorizontal : true, //false to turn it off
                 showStatus: true, //false to turn it off
                 hStatus: "You are Viewing Horizontally Mirror Image", //text that will show in status bar when flipped horizontally
                vStatus: "You are Viewing Vertically Flipped Scene", // status when flipped vertically
  		   }, options);
  
     return this.each(function(){
  var target = $(this);
  var objectFlip = $(target).find("img");
  var $flipHorizontal,
    $flipVertical,
    $flipOff,
    flipStatus,
    flipHbtn,
    flipVbtn,
    btnBar;

/* Creating Some UI Elements */
   flipHbtn = document.createElement("button");
   flipVbtn = 
document.createElement("button");
   flipStatus = document.createElement("span");
   btnBar = document.createElement("div");
  
/* Adding classes for later customization with css and applying settings */

  if (setting.showStatus == true){
    $(flipStatus).addClass("flip-status").prependTo(target);
   }

  if (setting.flipHorizontal == true){
    $(flipHbtn).addClass("btn-flip-h").appendTo(btnBar);
  }

  if (setting.flipVertical == true){
    $(flipVbtn).addClass("btn-flip-v").appendTo(btnBar);
  }
 $(btnBar).addClass("button-board").appendTo(target);

//properties to flip image horizontally
  $flipHorizontal = {
  "filter" : "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)",
  "\-webkit\-transform" : "scale(-1\, 1)",
  "\-ms\-transform" : "scale(-1\, 1)",
  "transform" : "scale(-1\, 1)",
};
//properties to flip image vertically
  $flipVertical = {
  "filter" : "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)",
  "\-webkit\-transform" : "scale(1\, -1)",
  "\-ms\-transform" : "scale(1\, -1)",
  "transform" : "scale(1\, -1)",
};
// default properties to set image as normal
  $flipOff = {
"filter" : '', //default
  "\-webkit\-transform" : '', //default
  "\-ms\-transform" : '', //default
  "transform" : '', //default
};

$(flipHbtn).click(function(){
   var on = "active";
    $(this).toggleClass(on);
    $(flipVbtn).removeClass(on);
  if ($(this).hasClass(on)){
    $(objectFlip).css($flipHorizontal);
   $(flipStatus).html(setting.hStatus).fadeIn("slow");
}
   else{
     flipOff();
   }

});
$(flipVbtn).click(function(){
   var on = "active";
  $(this).toggleClass(on);
  $(flipHbtn).removeClass(on);
     if ($(this).hasClass(on)){
        $(objectFlip).css($flipVertical);
        $(flipStatus).html(setting.vStatus).fadeIn("slow");
}
  else{
    flipOff();
  }

});

function flipOff(){
   $(objectFlip).css($flipOff);
   $(flipStatus).html("Normal View").fadeOut(3000);
  }

  });
      };   
 })(jQuery);

/*   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */