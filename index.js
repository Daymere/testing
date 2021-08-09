!function(){"use strict";var e,r={915:function(e,r,t){var n=t(638),s=t.n(n);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}t(504);var l=window.innerWidth<769;function u(e,r){var t=s()(e).parent()[0];s()(t).toggleClass("active"),s()(document).on("click",(function(e){e.target.closest(".concept__block")!==t&&s()(t).removeClass("active")})),s()(document).on("scroll",(function(){s()(".concept__block").each((function(e,r){s()(r).removeClass("active")}))}))}function p(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s()(e).slick(o({arrows:!1,slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:0,autoplay:!0,focusOnSelect:!0,autoplaySpeed:5e3,responsive:[{breakpoint:769,settings:{autoplay:!1}}]},r))}s()(document).ready((function(){p(".news__list"),p(".feature__list"),s()("[data-cut]").each((function(e,r){var t,n,i=(t=r.dataset.cut.split(";"),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,r){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var n,s,i=[],o=!0,a=!1;try{for(t=t.call(e);!(o=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);o=!0);}catch(e){a=!0,s=e}finally{try{o||null==t.return||t.return()}finally{if(a)throw s}}return i}}(t,n)||function(e,r){if(e){if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,r):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[0],a=i[1];(a=Number(a||768))>window.innerWidth&&s()("[data-replace='".concat(o,"']")).replaceWith(r)})),function(){if(window.innerWidth>768)return null;s()(".concept__btn-text").each((function(e,r){s()(r).on("click",u.bind(null,r))}))}(),s()("[data-key='lid']").append(l?'\n    <picture>\n        <source srcset="assets/images/hero/lid@small.webp" type="image/webp">\n        <img src="assets/images/hero/lid@small.png" alt="img" class="hero__lid" />\n    </picture>\n':'\n    <picture>\n        <source srcset="assets/images/hero/lid.webp" type="image/webp">\n        <img src="assets/images/hero/lid.png" alt="lid" class="hero__lid">\n    </picture>\n    <div class="hero__linesway">\n        <picture>\n            <source srcset="assets/images/hero/linegdr.webp" type="image/webp">\n            <img src="assets/images/hero/linegdr.png" alt="linegdr" class="hero__linegdr hero__linegdr_hide">\n        </picture>\n        <picture>\n            <source srcset="assets/images/hero/linegdr.webp" type="image/webp">\n            <img src="assets/images/hero/linegdr.png" alt="linegdr" class="hero__linegdr hero__linegdr_show"> \n        </picture>        \n                                       \n    </div>\n    <img src="assets/images/hero/hero_circles.png" alt="circles" class="hero__circles">\n    <div class="droplet hero__picture-droplet hero__picture-droplet_small"></div>\n    <div class="droplet hero__picture-droplet hero__picture-droplet_medium"></div>\n    <div class="white-round hero__ball-white"></div>\n    <img src="assets/images/ball.svg" alt="ball" class="hero__ball-dark">\n'),s()("[data-key='rocket']").append(l?'\n    <picture>\n        <source srcset="assets/images/trading/rocket-small.webp" type="image/webp">\n        <img src="assets/images/trading/rocket-small.png" alt="img" class="trading-rocket__full" />\n    </picture>\n':'\n    <picture>\n        <source srcset="assets/images/trading/rocket.webp" type="image/webp">\n        <img src="assets/images/trading/rocket.png" alt="rocket" class="trading-rocket__rocket">\n    </picture> \n    <picture>\n        <source srcset="assets/images/trading/gradient.webp" type="image/webp">\n        <img src="assets/images/trading/gradient.png" alt="gradient" class="trading-rocket__gradient">\n    </picture> \n    <picture>\n        <source srcset="assets/images/trading/round_contours.webp" type="image/webp">\n        <img src="assets/images/trading/round_contours.png" alt="countours" class="trading-rocket__countours"> \n    </picture> \n    <picture>\n        <source srcset="assets/images/trading/rocket_floor.webp" type="image/webp">\n        <img src="assets/images/trading/rocket_floor.png" alt="floor" class="trading-rocket__floor">\n    </picture>    \n')}))}},t={};function n(e){var s=t[e];if(void 0!==s)return s.exports;var i=t[e]={exports:{}};return r[e].call(i.exports,i,i.exports,n),i.exports}n.m=r,e=[],n.O=function(r,t,s,i){if(!t){var o=1/0;for(l=0;l<e.length;l++){t=e[l][0],s=e[l][1],i=e[l][2];for(var a=!0,c=0;c<t.length;c++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](t[c])}))?t.splice(c--,1):(a=!1,i<o&&(o=i));a&&(e.splice(l--,1),r=s())}return r}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[t,s,i]},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,{a:r}),r},n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e={826:0};n.O.j=function(r){return 0===e[r]};var r=function(r,t){var s,i,o=t[0],a=t[1],c=t[2],l=0;for(s in a)n.o(a,s)&&(n.m[s]=a[s]);for(c&&c(n),r&&r(t);l<o.length;l++)i=o[l],n.o(e,i)&&e[i]&&e[i][0](),e[o[l]]=0;n.O()},t=self.webpackChunk=self.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var s=n.O(void 0,[504],(function(){return n(915)}));s=n.O(s)}();