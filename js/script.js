/*
 * 
 * main function
 * 
 */

/*
 * show or hide pagination
 * 
 * @param null
 * @return null
 */
function opPagination() {
  // get viewing index
  var viewingIndex = $("body")[0].className.replace(/\s*wrapper\s*viewing-page-/, '');
  var isPaginationShow = ($(".onepage-pagination")[0].className.indexOf("active") === -1) ? false : true;
  var speed = 800;
  // if viewing first section, hide pagination, or show pagination
  if (viewingIndex === "1"){
    if (isPaginationShow){
      $(".onepage-pagination").animate({'opacity': '0'}, speed).removeClass("active");
      $(".header").animate({'opacity': '0'}, speed).removeClass("active");
    }
  }
  else {
    $(".onepage-pagination").animate({'opacity': '1'}, speed).addClass("active");
    $(".header").animate({'opacity': '1'}, speed).addClass("active");
  }
}

/*
 * change container's style (mobile)
 * 
 * @param <function>
 * @return null
 */
function change2Mobi() {
  $(".page").css("height", "auto");
  $(".section-title-img").css("margin-top", "30px");
  $(".section-chart-title-img").css("margin-top", "30px");
}
/*
 * change container's style (desk)
 * 
 * @param <function>
 * @return null
 */
function change2Desk() {
  $(".page").css("height", "100%");
  $(".section-title-img").css("margin-top", "0");
  $(".section-chart-title-img").css("margin-top", "0");
}

$(document).ready(function() {
  /*---------------------------------------------------------------*/
  /*                             init                              */
  /*---------------------------------------------------------------*/
  /*
   * init one page scroll
   * 
   * @param <Object>
   * @return null
   */
  $(".main").onepage_scroll({
    sectionContainer: ".section",    // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease-in",               // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true,                  // You can activate the keyboard controls
    responsiveFallback: 768,         // You can fallback to normal page scroll by defining the width of the browser in which
                                     // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                     // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
  });
  /*
   * init other components
   */
  (function() {
    // init pagination
    $(".onepage-pagination").animate({'opacity': '0'}, 0);
  }());

  /*---------------------------------------------------------------*/
  /*                            running                            */
  /*---------------------------------------------------------------*/
  $("body").on({
    'scroll': function(e) { 
    }
});

});