(function ($){
"use strict";
$(window).on("load", function (){
$(".preloader").fadeOut();
});
$(window).on('resize', function (){
$(".slick-slider").slick("refresh");
});
if($('.nice-select').length){
$('.nice-select').niceSelect();
}
if($(".preloader").length > 0){
$(".preloaderCls").each(function (){
$(this).on("click", function (e){
e.preventDefault();
$(".preloader").css("display", "none");
});
});
}
$.fn.asmobilemenu=function (options){
var opt=$.extend({
menuToggleBtn: ".themeholy-menu-toggle",
bodyToggleClass: "themeholy-body-visible",
subMenuClass: "themeholy-submenu",
subMenuParent: "themeholy-item-hthemeholy-children",
subMenuParentToggle: "themeholy-active",
meanExpandClass: "themeholy-mean-expand",
appendElement: '<span class="themeholy-mean-expand"></span>',
subMenuToggleClass: "themeholy-open",
toggleSpeed: 400,
},
options
);
return this.each(function (){
var menu=$(this);
function menuToggle(){
menu.toggleClass(opt.bodyToggleClass);
var subMenu="." + opt.subMenuClass;
$(subMenu).each(function (){
if($(this).hasClass(opt.subMenuToggleClass)){
$(this).removeClass(opt.subMenuToggleClass);
$(this).css("display", "none");
$(this).parent().removeClass(opt.subMenuParentToggle);
}});
}
menu.find("li").each(function (){
var submenu=$(this).find("ul");
submenu.addClass(opt.subMenuClass);
submenu.css("display", "none");
submenu.parent().addClass(opt.subMenuParent);
submenu.prev("a").append(opt.appendElement);
submenu.next("a").append(opt.appendElement);
});
function toggleDropDown($element){
if($($element).next("ul").length > 0){
$($element).parent().toggleClass(opt.subMenuParentToggle);
$($element).next("ul").slideToggle(opt.toggleSpeed);
$($element).next("ul").toggleClass(opt.subMenuToggleClass);
}else if($($element).prev("ul").length > 0){
$($element).parent().toggleClass(opt.subMenuParentToggle);
$($element).prev("ul").slideToggle(opt.toggleSpeed);
$($element).prev("ul").toggleClass(opt.subMenuToggleClass);
}}
var expandToggler="." + opt.meanExpandClass;
$(expandToggler).each(function (){
$(this).on("click", function (e){
e.preventDefault();
toggleDropDown($(this).parent());
});
});
$(opt.menuToggleBtn).each(function (){
$(this).on("click", function (){
menuToggle();
});
});
menu.on("click", function (e){
e.stopPropagation();
menuToggle();
});
menu.find("div").on("click", function (e){
e.stopPropagation();
});
});
};
$(".themeholy-menu-wrapper").asmobilemenu();
$(window).scroll(function (){
var topPos=$(this).scrollTop();
sticky()
if(topPos > 150){
$('.sticky-wrapper').addClass('will-sticky')
sticky()
}else{
$('.sticky-wrapper').removeClass('sticky')
$('.sticky-wrapper').removeClass('will-sticky')
}
function sticky(){
if(topPos > 400){
$('.sticky-wrapper').addClass('sticky')
$('.sticky-wrapper').removeClass('will-sticky')
}}
})
function checkHeight(){
if($('body').height() < $(window).height()){
$('.footer-layout4').addClass('sticky-footer');
}else{
$('.footer-layout4').removeClass('sticky-footer');
}}
$(window).on('load resize', function (){
checkHeight();
});
if($('.scroll-top').length > 0){
var scrollTopbtn=document.querySelector('.scroll-top');
var progressPath=document.querySelector('.scroll-top path');
var pathLength=progressPath.getTotalLength();
progressPath.style.transition=progressPath.style.WebkitTransition='none';
progressPath.style.strokeDasharray=pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset=pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition=progressPath.style.WebkitTransition='stroke-dashoffset 10ms linear';
var updateProgress=function (){
var scroll=$(window).scrollTop();
var height=$(document).height() - $(window).height();
var progress=pathLength - (scroll * pathLength / height);
progressPath.style.strokeDashoffset=progress;
}
updateProgress();
$(window).scroll(updateProgress);
var offset=50;
var duration=750;
jQuery(window).on('scroll', function (){
if(jQuery(this).scrollTop() > offset){
jQuery(scrollTopbtn).addClass('show');
}else{
jQuery(scrollTopbtn).removeClass('show');
}});
jQuery(scrollTopbtn).on('click', function (event){
event.preventDefault();
jQuery('html, body').animate({
scrollTop: 0
}, duration);
return false;
})
}
var slick3d=$('.slick-3d-active');
slick3d.on('init', function (event, slick, currentSlide){
var cur=$(slick.$slides[slick.currentSlide]),
next=cur.next(),
next2=cur.next().next(),
prev=cur.prev(),
prev2=cur.prev().prev();
prev.addClass('slick-3d-prev');
next.addClass('slick-3d-next');
prev2.addClass('slick-3d-prev2');
next2.addClass('slick-3d-next2');
cur.removeClass('slick-3d-next')
.removeClass('slick-3d-prev')
.removeClass('slick-3d-next2')
.removeClass('slick-3d-prev2');
slick.$prev=prev;
slick.$next=next;
}).on('beforeChange', function (event, slick, currentSlide, nextSlide){
var cur=$(slick.$slides[nextSlide]);
slick.$prev.removeClass('slick-3d-prev');
slick.$next.removeClass('slick-3d-next');
slick.$prev.prev().removeClass('slick-3d-prev2');
slick.$next.next().removeClass('slick-3d-next2');
var next=cur.next(),
prev=cur.prev();
prev.addClass('slick-3d-prev');
next.addClass('slick-3d-next');
prev.prev().addClass('slick-3d-prev2');
next.next().addClass('slick-3d-next2');
slick.$prev=prev;
slick.$next=next;
cur.removeClass('slick-next')
.removeClass('slick-3d-prev')
.removeClass('slick-next2')
.removeClass('slick-3d-prev2');
});
slick3d.slick({
speed: 1000,
arrows: false,
dots: false,
focusOnSelect: true,
prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
infinite: true,
centerMode: true,
slidesPerRow: 1,
slidesToShow: 1,
slidesToScroll: 1,
centerPadding: '0',
swipe: true,
customPaging: function (slider, i){
return '';
},
responsive: [{
breakpoint: 1024,
settings: {
arrows: false,
}}]
});
if($(".flip-gallery").length > 0){
$(".flip-gallery").flipster({
style: 'carousel',
spacing: -0.5,
nav: true,
buttons: true,
loop: true,
scrollwheel: false,
});
}
var form=".ajax-contact";
var invalidCls="is-invalid";
var $email='[name="email"]';
var $validation =
'[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]';
var formMessages=$(".form-messages");
function sendContact(){
var formData=$(form).serialize();
var valid;
valid=validateContact();
if(valid){
jQuery
.ajax({
url: $(form).attr("action"),
data: formData,
type: "POST",
})
.done(function (response){
formMessages.removeClass("error");
formMessages.addClass("success");
formMessages.text(response);
$(
form +
' input:not([type="submit"]),' +
form +
" textarea"
).val("");
})
.fail(function (data){
formMessages.removeClass("success");
formMessages.addClass("error");
if(data.responseText!==""){
formMessages.html(data.responseText);
}else{
formMessages.html("Oops! An error occured and your message could not be sent."
);
}});
}}
function validateContact(){
var valid=true;
var formInput;
function unvalid($validation){
$validation=$validation.split(",");
for (var i=0; i < $validation.length; i++){
formInput=form + " " + $validation[i];
if(!$(formInput).val()){
$(formInput).addClass(invalidCls);
valid=false;
}else{
$(formInput).removeClass(invalidCls);
valid=true;
}}
}
unvalid($validation);
if(!$($email).val() ||
!$($email)
.val()
.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
){
$($email).addClass(invalidCls);
valid=false;
}else{
$($email).removeClass(invalidCls);
valid=true;
}
return valid;
}
$(form).on("submit", function (element){
element.preventDefault();
sendContact();
});
function popupSarchBox($searchBox, $searchOpen, $searchCls, $toggleCls){
$($searchOpen).on("click", function (e){
e.preventDefault();
$($searchBox).addClass($toggleCls);
});
$($searchBox).on("click", function (e){
e.stopPropagation();
$($searchBox).removeClass($toggleCls);
});
$($searchBox)
.find("form")
.on("click", function (e){
e.stopPropagation();
$($searchBox).addClass($toggleCls);
});
$($searchCls).on("click", function (e){
e.preventDefault();
e.stopPropagation();
$($searchBox).removeClass($toggleCls);
});
}
popupSarchBox(
".popup-search-box",
".searchBoxToggler",
".searchClose",
"show"
);
function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls){
$($sideMunuOpen).on('click', function (e){
e.preventDefault();
$($sideMenu).addClass($toggleCls);
});
$($sideMenu).on('click', function (e){
e.stopPropagation();
$($sideMenu).removeClass($toggleCls)
});
var sideMenuChild=$sideMenu + ' > div';
$(sideMenuChild).on('click', function (e){
e.stopPropagation();
$($sideMenu).addClass($toggleCls)
});
$($sideMenuCls).on('click', function (e){
e.preventDefault();
e.stopPropagation();
$($sideMenu).removeClass($toggleCls);
});
};
popupSideMenu('.sidemenu-wrapper', '.sideMenuToggler', '.sideMenuCls', 'show');
$(".popup-image").magnificPopup({
type: "image",
gallery: {
enabled: true,
},
});
$(".popup-video").magnificPopup({
type: "iframe",
});
$(".popup-content").magnificPopup({
type: "inline",
midClick: true,
});
$(".popup-content").on("click", function (){
$(".slick-slider").slick("refresh");
});
function convertInteger(str){
return parseInt(str, 10);
}
$.fn.sectionPosition=function (mainAttr, posAttr){
$(this).each(function (){
var section=$(this);
function setPosition(){
var sectionHeight=Math.floor(section.height() / 2),
posData=section.attr(mainAttr),
posFor=section.attr(posAttr),
topMark="top-half",
bottomMark="bottom-half",
parentPT=convertInteger($(posFor).css("padding-top")),
parentPB=convertInteger($(posFor).css("padding-bottom"));
if(posData===topMark){
$(posFor).css("padding-bottom",
parentPB + sectionHeight + "px"
);
section.css("margin-top", "-" + sectionHeight + "px");
}else if(posData===bottomMark){
$(posFor).css("padding-top",
parentPT + sectionHeight + "px"
);
section.css("margin-bottom", "-" + sectionHeight + "px");
}}
setPosition();
});
};
var postionHandler="[data-sec-pos]";
if($(postionHandler).length){
$(postionHandler).imagesLoaded(function (){
$(postionHandler).sectionPosition("data-sec-pos", "data-pos-for");
});
}
$(".filter-active").imagesLoaded(function (){
var $filter=".filter-active",
$filterItem=".filter-item",
$filterMenu=".filter-menu-active";
if($($filter).length > 0){
var $grid=$($filter).isotope({
itemSelector: $filterItem,
filter: "*",
masonry: {
columnWidth: 1,
},
});
$($filterMenu).on("click", "button", function (){
var filterValue=$(this).attr("data-filter");
$grid.isotope({
filter: filterValue,
});
});
$($filterMenu).on("click", "button", function (event){
event.preventDefault();
$(this).addClass("active");
$(this).siblings(".active").removeClass("active");
});
}});
$(".masonary-active").imagesLoaded(function (){
var $filter=".masonary-active",
$filterItem=".filter-item";
if($($filter).length > 0){
$($filter).isotope({
itemSelector: $filterItem,
filter: "*",
masonry: {
columnWidth: 1,
},
});
}});
$(".counter-number").counterUp({
delay: 10,
time: 1000,
});
if($(".product-thumb-tab").length){
$(".product-thumb-tab").asTab({
sliderTab: true,
tabButton: ".tab-btn",
});
}
if($(".tab-menu1").length){
$(".tab-menu1").asTab({
sliderTab: true,
tabButton: ".tab-btn",
});
}
$.fn.countdown=function (){
$(this).each(function (){
var $counter=$(this),
countDownDate=new Date($counter.data("offer-date")).getTime(),
exprireCls="expired";
function s$(element){
return $counter.find(element);
}
var counter=setInterval(function (){
var now=new Date().getTime();
var distance=countDownDate - now;
var days=Math.floor(distance / (1000 * 60 * 60 * 24));
var hours=Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
var minutes=Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)
);
var seconds=Math.floor((distance % (1000 * 60)) / 1000);
days < 10 ? (days="0" + days):null;
hours < 10 ? (hours="0" + hours):null;
minutes < 10 ? (minutes="0" + minutes):null;
seconds < 10 ? (seconds="0" + seconds):null;
if(distance < 0){
clearInterval(counter);
$counter.addClass(exprireCls);
$counter.find(".message").css("display", "block");
}else{
s$(".day").html(days);
s$(".hour").html(hours);
s$(".minute").html(minutes);
s$(".seconds").html(seconds);
}}, 1000);
});
};
if($(".counter-list").length){
$(".counter-list").countdown();
}
$(".price_slider").slider({
range: true,
min: 10,
max: 100,
values: [10, 75],
slide: function (event, ui){
$(".from").text("$" + ui.values[0]);
$(".to").text("$" + ui.values[1]);
}});
$(".from").text("$" + $(".price_slider").slider("values", 0));
$(".to").text("$" + $(".price_slider").slider("values", 1));
function onePageNav(element){
if($(element).length > 0){
$(element).each(function (){
var link=$(this).find('a');
$(this).find(link).each(function (){
$(this).on('click', function (){
var target=$(this.getAttribute('href'));
if(target.length){
event.preventDefault();
$('html, body').stop().animate({
scrollTop: target.offset().top - 10
}, 1000);
};});
});
})
}};
onePageNav('.onepage-nav');
$(window).on('scroll', function (){
if($('.onepage').length > 0){
if($(window).scrollTop() > 0){
$('.themeholy-header .sticky-active').addClass('sticky');
}else{
$('.themeholy-header .sticky-active').removeClass('sticky');
}};});
$.fn.indicator=function (){
var $menu=$(this),
$linkBtn=$menu.find("a"),
$btn=$menu.find("button");
$menu.append('<span class="indicator"></span>');
var $line=$menu.find(".indicator");
if($linkBtn.length){
var $currentBtn=$linkBtn;
}else if($btn.length){
var $currentBtn=$btn;
}
$currentBtn.on("click", function (e){
e.preventDefault();
$(this).addClass("active");
$(this).siblings(".active").removeClass("active");
linePos();
});
function linePos(){
var $btnActive=$menu.find(".active"),
$height=$btnActive.css("height"),
$width=$btnActive.css("width"),
$top=$btnActive.position().top + "px",
$left=$btnActive.position().left + "px";
$(window).on('resize', function (){
$top=$btnActive.position().top + "px",
$left=$btnActive.position().left + "px";
});
$line.get(0).style.setProperty("--height-set", $height);
$line.get(0).style.setProperty("--width-set", $width);
$line.get(0).style.setProperty("--pos-y", $top);
$line.get(0).style.setProperty("--pos-x", $left);
}
linePos();
};
if($(".indicator-active").length){
$(".indicator-active").indicator();
}
$("#ship-to-different-address-checkbox").on("change", function (){
if($(this).is(":checked")){
$("#ship-to-different-address")
.next(".shipping_address")
.slideDown();
}else{
$("#ship-to-different-address").next(".shipping_address").slideUp();
}});
$(".woocommerce-form-login-toggle a").on("click", function (e){
e.preventDefault();
$(".woocommerce-form-login").slideToggle();
});
$(".woocommerce-form-coupon-toggle a").on("click", function (e){
e.preventDefault();
$(".woocommerce-form-coupon").slideToggle();
});
$(".shipping-calculator-button").on("click", function (e){
e.preventDefault();
$(this).next(".shipping-calculator-form").slideToggle();
});
$('.wc_payment_methods input[type="radio"]:checked')
.siblings(".payment_box")
.show();
$('.wc_payment_methods input[type="radio"]').each(function (){
$(this).on("change", function (){
$(".payment_box").slideUp();
$(this).siblings(".payment_box").slideDown();
});
});
$(".rating-select .stars a").each(function (){
$(this).on("click", function (e){
e.preventDefault();
$(this).siblings().removeClass("active");
$(this).parent().parent().addClass("selected");
$(this).addClass("active");
});
});
$(document).on('click', '.quantity-plus, .quantity-minus', function (e){
e.preventDefault();
var qty=$(this).closest('.quantity, .product-quantity').find('.qty-input');
var val=parseFloat(qty.val());
var max=parseFloat(qty.attr('max'));
var min=parseFloat(qty.attr('min'));
var step=parseFloat(qty.attr('step'));
if($(this).is('.quantity-plus')){
if(max&&(max <=val)){
qty.val(max);
}else{
qty.val(val + step);
}}else{
if(min&&(min >=val)){
qty.val(min);
}else if(val > 0){
qty.val(val - step);
}}
$('.cart_table button[name="update_cart"]').prop('disabled', false);
});
$('.themeholy-blog-carousel').slick({
dots: false,
infinite: true,
arrows: true,
autoplay: true,
autoplaySpeed: 6000,
prevArrow: '<button type="button" class="slick-prev"><i class="fa-regular fa-arrow-left"></i></button>',
nextArrow: '<button type="button" class="slick-next"><i class="fa-regular fa-arrow-right"></i></button>',
speed: 1000,
slidesToShow: 1,
slidesToScroll: 1,
responsive: [{
breakpoint: 992,
settings: {
slidesToShow: 1,
arrows: false,
}}]
});
$('.search-active').imagesLoaded(function (){
var $filter='.search-active',
$filterItem='.filter-item';
if($($filter).length > 0){
var $grid=$($filter).isotope({
itemSelector: $filterItem,
filter: '*',
});
};});
$('.product-img-slider').slick({
dots: false,
infinite: true,
arrows: false,
autoplay: true,
autoplaySpeed: 6000,
fade: true,
speed: 1000,
slidesToShow: 1,
slidesToScroll: 1,
});
$('.related-products-carousel').slick({
dots: false,
infinite: true,
arrows: false,
autoplay: true,
autoplaySpeed: 6000,
fade: false,
speed: 1000,
slidesToShow: 4,
slidesToScroll: 1,
responsive: [{
breakpoint: 1500,
settings: {
slidesToShow: 4,
arrows: false,
}},
{
breakpoint: 1200,
settings: {
slidesToShow: 3,
arrows: false,
}},
{
breakpoint: 992,
settings: {
slidesToShow: 2,
arrows: false,
}},
{
breakpoint: 768,
settings: {
slidesToShow: 2,
arrows: false,
}},
{
breakpoint: 576,
settings: {
slidesToShow: 1,
arrows: false,
}}
]
});
})(jQuery);