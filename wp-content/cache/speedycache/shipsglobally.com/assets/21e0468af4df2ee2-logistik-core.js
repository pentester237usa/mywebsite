;(function($){
"use strict";
jQuery(window).on('elementor/frontend/init', function(){
if(typeof elementor!="undefined"&&typeof elementor.settings.page!="undefined"){
elementor.settings.page.addChangeCallback('logistik_header_style', function(newValue){
if(newValue=='prebuilt'){
elementor.saver.update({
onSuccess: function(){
elementor.reloadPreview();
elementor.once('preview:loaded', function(){
elementor.getPanelView().setPage('page_settings').activateTab('settings');
});
}});
}});
elementor.settings.page.addChangeCallback('logistik_header_builder_option', function(newValue){
elementor.saver.update({
onSuccess: function(){
elementor.reloadPreview();
elementor.once('preview:loaded', function(){
elementor.getPanelView().setPage('page_settings').activateTab('settings');
});
}});
});
elementor.settings.page.addChangeCallback('logistik_footer_style', logistikFooterStyle);
function logistikFooterStyle(newValue){
elementor.saver.update({
onSuccess: function(){
elementor.reloadPreview();
elementor.once('preview:loaded', function(){
elementor.getPanelView().setPage('page_settings').activateTab('settings');
});
}});
}
elementor.settings.page.addChangeCallback('logistik_footer_choice', logistikFooterChoice);
function logistikFooterChoice(newValue){
elementor.saver.update({
onSuccess: function(){
elementor.reloadPreview();
elementor.once('preview:loaded', function(){
elementor.getPanelView().setPage('page_settings').activateTab('settings');
});
}});
}}
});
})(jQuery);