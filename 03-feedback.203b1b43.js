function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var n=r("kEUo3");const l=document.querySelector('input[name="email"]'),d=document.querySelector('textarea[name="message"]'),u=document.querySelector(".feedback-form"),i=e(n).throttle((()=>{dataToStore={email:l.value,message:d.value},localStorage.setItem("feedback-form-state",JSON.stringify(dataToStore))}),500),s=()=>{const e=(()=>{const e=localStorage.getItem("feedback-form-state");return e?JSON.parse(e):{}})();l.value=e.email||"",d.value=e.message||""},c=()=>{i()};l.addEventListener("input",c),d.addEventListener("input",c),u.addEventListener("submit",(e=>{e.preventDefault(),console.log("Form submitted with data:",{email:l.value,message:d.value}),l.value="",d.value="",localStorage.removeItem("feedback-form-state")})),document.addEventListener("DOMContentLoaded",(()=>{s()}));
//# sourceMappingURL=03-feedback.203b1b43.js.map
