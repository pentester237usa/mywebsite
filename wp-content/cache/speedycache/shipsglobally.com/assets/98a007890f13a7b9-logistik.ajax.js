;(function($){
"use strict";
var $widgetsubscribeForm=$('form.footer-newsletter');
$widgetsubscribeForm.on('submit',function(e){
let $emailAdd=$(this).find('input[type="email"]').val();
$.ajax({
type: 'POST',
url: logistikajax.action_url,
data:{
sectsubscribe_email: $emailAdd,
security: logistikajax.nonce,
action: 'logistik_subscribe_ajax'
},
success: function(data){
$('form.footer-newsletter input[type="email"]').val('');
$('.footer-newsletter').append(data);
},
error: function(){
$('.footer-newsletter').append('<div class="alert alert-danger mt-2" role="alert">Something Goes Wrong</div>');
}});
e.preventDefault();
});
})(jQuery);