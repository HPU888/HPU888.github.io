// build time:Tue Oct 27 2020 23:49:30 GMT+0800 (GMT+08:00)
(function(n,t){var e=n(".ins-search");var r=e.find(".ins-search-input");var a=e.find(".ins-section-wrapper");var i=e.find(".ins-section-container");e.parent().remove(".ins-search");n("body").append(e);function s(t){return n("<section>").addClass("ins-section").append(n("<header>").addClass("ins-section-header").text(t))}function o(e,r,a,i,s){return n("<div>").addClass("ins-selectable").addClass("ins-search-item").append(n("<header>").append(n("<i>").addClass("fa").addClass("fa-"+e)).append(n("<span>").addClass("ins-title").text(r!=null&&r!==""?r:t.TRANSLATION["UNTITLED"])).append(a?n("<span>").addClass("ins-slug").text(a):null)).append(i?n("<p>").addClass("ins-search-preview").text(i):null).attr("data-url",s)}function c(n,e){var r;var a;if(e.length===0)return null;r=t.TRANSLATION[n];switch(n){case"POSTS":case"PAGES":a=e.map(function(n){return o("file",n.title,null,n.text.slice(0,150),n.link)});break;case"CATEGORIES":case"TAGS":a=e.map(function(t){return o(n==="CATEGORIES"?"folder":"tag",t.name,t.slug,null,t.link)});break;default:return null}return s(r).append(a)}function u(n){return n.split(" ").filter(function(n){return!!n}).map(function(n){return n.toUpperCase()})}function l(n,t,e){var r=u(n);var a=r.filter(function(n){var r=e.filter(function(e){if(!t.hasOwnProperty(e))return false;if(t[e].toUpperCase().indexOf(n)>-1)return true});if(r.length>0)return true;return false});return a.length===r.length}function f(n){return{POST:function(t){return l(n,t,["title","text"])},PAGE:function(t){return l(n,t,["title","text"])},CATEGORY:function(t){return l(n,t,["name","slug"])},TAG:function(t){return l(n,t,["name","slug"])}}}function p(n,t,e,r){var a=0;u(n).forEach(function(n){var i=new RegExp(n,"img");e.forEach(function(n,e){if(t.hasOwnProperty(n)){var s=t[n].match(i);a+=s?s.length*r[e]:0}})});return a}function d(n){return{POST:function(t){return p(n,t,["title","text"],[3,1])},PAGE:function(t){return p(n,t,["title","text"],[3,1])},CATEGORY:function(t){return p(n,t,["name","slug"],[1,1])},TAG:function(t){return p(n,t,["name","slug"],[1,1])}}}function h(n,t){var e=d(t);var r=f(t);var a=n.posts;var i=n.pages;var s=n.tags;var o=n.categories;return{posts:a.filter(r.POST).sort(function(n,t){return e.POST(t)-e.POST(n)}).slice(0,5),pages:i.filter(r.PAGE).sort(function(n,t){return e.PAGE(t)-e.PAGE(n)}).slice(0,5),categories:o.filter(r.CATEGORY).sort(function(n,t){return e.CATEGORY(t)-e.CATEGORY(n)}).slice(0,5),tags:s.filter(r.TAG).sort(function(n,t){return e.TAG(t)-e.TAG(n)}).slice(0,5)}}function v(n){i.empty();for(var t in n){i.append(c(t.toUpperCase(),n[t]))}}function T(n){if(n.length===0)return;var t=a[0].clientHeight;var e=n.position().top-a.scrollTop();var r=n[0].clientHeight+n.position().top;if(r>t+a.scrollTop()){a.scrollTop(r-a[0].clientHeight)}if(e<0){a.scrollTop(n.position().top)}}function g(t){var e=n.makeArray(i.find(".ins-selectable"));var r=-1;e.forEach(function(t,e){if(n(t).hasClass("active")){r=e;return}});var a=(e.length+r+t)%e.length;n(e[r]).removeClass("active");n(e[a]).addClass("active");T(n(e[a]))}function C(n){if(n&&n.length){location.href=n.attr("data-url")}}n.getJSON(t.CONTENT_URL,function(t){if(location.hash.trim()==="#ins-search"){e.addClass("show")}r.on("input",function(){var e=n(this).val();v(h(t,e))});r.trigger("input")});var m=false;n(document).on("click focus",".navbar-main .search",function(){e.addClass("show");e.find(".ins-search-input").focus()}).on("click touchend",".ins-search-item",function(t){if(t.type!=="click"&&!m){return}C(n(this));m=false}).on("click touchend",".ins-close",function(t){if(t.type!=="click"&&!m){return}n(".navbar-main").css("pointer-events","none");setTimeout(function(){n(".navbar-main").css("pointer-events","auto")},400);e.removeClass("show");m=false}).on("keydown",function(n){if(!e.hasClass("show"))return;switch(n.keyCode){case 27:e.removeClass("show");break;case 38:g(-1);break;case 40:g(1);break;case 13:C(i.find(".ins-selectable.active").eq(0));break}}).on("touchstart",function(n){m=true}).on("touchmove",function(n){m=false})})(jQuery,window.INSIGHT_CONFIG);
//rebuild by neat 