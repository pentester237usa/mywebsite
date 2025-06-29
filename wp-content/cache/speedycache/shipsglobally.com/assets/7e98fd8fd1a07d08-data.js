(function (global, factory){
typeof exports==='object'&&typeof module!=='undefined' ? module.exports=factory() :
typeof define==='function'&&define.amd ? define(factory) :
(global=typeof globalThis!=='undefined' ? globalThis:global||self, global.Data=factory());
})(this, (function (){ 'use strict';
const elementMap=new Map();
const data={
set(element, key, instance){
if(!elementMap.has(element)){
elementMap.set(element, new Map());
}
const instanceMap=elementMap.get(element);
if(!instanceMap.has(key)&&instanceMap.size!==0){
console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
return;
}
instanceMap.set(key, instance);
},
get(element, key){
if(elementMap.has(element)){
return elementMap.get(element).get(key)||null;
}
return null;
},
remove(element, key){
if(!elementMap.has(element)){
return;
}
const instanceMap=elementMap.get(element);
instanceMap.delete(key);
if(instanceMap.size===0){
elementMap.delete(element);
}}
};
return data;
}));
