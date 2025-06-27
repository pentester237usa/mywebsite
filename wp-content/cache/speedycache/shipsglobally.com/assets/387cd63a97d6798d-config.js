(function (global, factory){
typeof exports==='object'&&typeof module!=='undefined' ? module.exports=factory(require('../dom/manipulator.js'), require('./index.js')) :
typeof define==='function'&&define.amd ? define(['../dom/manipulator', './index'], factory) :
(global=typeof globalThis!=='undefined' ? globalThis:global||self, global.Config=factory(global.Manipulator, global.Index));
})(this, (function (Manipulator, index_js){ 'use strict';
class Config {
static get Default(){
return {};}
static get DefaultType(){
return {};}
static get NAME(){
throw new Error('You have to implement the static method "NAME", for each component!');
}
_getConfig(config){
config=this._mergeConfigObj(config);
config=this._configAfterMerge(config);
this._typeCheckConfig(config);
return config;
}
_configAfterMerge(config){
return config;
}
_mergeConfigObj(config, element){
const jsonConfig=index_js.isElement(element) ? Manipulator.getDataAttribute(element, 'config'):{};
return {
...this.constructor.Default,
...(typeof jsonConfig==='object' ? jsonConfig:{}),
...(index_js.isElement(element) ? Manipulator.getDataAttributes(element):{}),
...(typeof config==='object' ? config:{})
};}
_typeCheckConfig(config, configTypes=this.constructor.DefaultType){
for (const [property, expectedTypes] of Object.entries(configTypes)){
const value=config[property];
const valueType=index_js.isElement(value) ? 'element':index_js.toType(value);
if(!new RegExp(expectedTypes).test(valueType)){
throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
}}
}}
return Config;
}));
