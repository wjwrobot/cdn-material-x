var customSearch;!function(a){"use strict";const t=70;function o(e,o){o=o||t;const n=e.href?a(e.getAttribute("href")):a(e);a("html, body").animate({scrollTop:n.offset().top-o},400)}a(function(){var n;!function(){if(!window.subData)return;const e=a("header .wrapper"),t=a(".s-comment",e),n=a(".s-toc",e),c=a(".s-top",e);e.find(".nav-sub .logo").text(window.subData.title);let s=document.body.scrollTop;a(document,window).scroll(()=>{const t=a(window).scrollTop(),o=t-s;o>=50&&t>100?(s=t,e.addClass("sub")):o<=-50&&(s=t,e.removeClass("sub"))});const i=a("#comments");i.length?t.click(e=>{e.preventDefault(),e.stopPropagation(),o(i)}):t.remove();const r=a(".toc-wrapper");r.length&&r.children().length?n.click(e=>{e.stopPropagation(),r.toggleClass("active")}):n.remove(),c.click(()=>o(document.body))}(),function(){var e=a("header .menu");e.find("li a.active").removeClass("active");var t,o,n=location.pathname.replace(/\/|%/g,"");0==n.length&&(n="home"),t=a("#"+n,e),(o=t)&&o.length&&o.addClass("active").siblings().removeClass("active")}(),(n=a(".l_header .switcher .s-menu")).click(function(e){e.stopPropagation(),a("body").toggleClass("z_menu-open"),n.toggleClass("active")}),a(document).click(function(e){a("body").removeClass("z_menu-open"),n.removeClass("active")}),function(){var t=a(".l_header .switcher .s-search"),o=a(".l_header"),n=a(".l_header .m_search");0!==t.length&&(t.click(function(e){e.stopPropagation(),o.toggleClass("z_search-open"),n.find("input").focus()}),a(document).click(function(e){o.removeClass("z_search-open")}),n.click(function(e){e.stopPropagation()}),o.ready(function(){o.bind("keydown",function(a){if(9==a.keyCode)return!1;var t,o,n=!!document.all;n?(t=window.event.keyCode,o=window.event):(t=e.which,o=e),9==t&&(n?(o.keyCode=0,o.returnValue=!1):(o.which=0,o.preventDefault()))})}))}(),Waves.attach(".flat-btn",["waves-button"]),Waves.attach(".float-btn",["waves-button","waves-float"]),Waves.attach(".float-btn-light",["waves-button","waves-float","waves-light"]),Waves.attach(".flat-box",["waves-block"]),Waves.attach(".float-box",["waves-block","waves-float"]),Waves.attach(".waves-image"),Waves.init(),0!==a(".reveal").length&&ScrollReveal({distance:0}).reveal(".reveal"),function(){const e=a(".toc-wrapper");if(0===e.length)return;a(document).click(()=>e.removeClass("active")),e.on("click","a",a=>{a.preventDefault(),a.stopPropagation(),"A"===a.target.tagName?o(a.target):"SPAN"===a.target.tagName&&o(a.target.parentElement),e.removeClass("active")});const n=Array.from(e.find("li a")),c=()=>n.map(e=>Math.floor(a(e.getAttribute("href")).offset().top-t));let s=c();const i=()=>{const e=a("html").scrollTop()||a("body").scrollTop();if(!s)return;let t,o=0,c=s.length-1;for(;o<c;)s[t=o+c+1>>1]===e?o=c=t:s[t]<e?o=t:c=t-1;a(n).removeClass("active").eq(o).addClass("active")};a(window).resize(()=>{s=c(),i()}).scroll(()=>{i()}),i()}(),setTimeout(function(){a("#loading-bar-wrapper").fadeOut(500)},300),"google"===SEARCH_SERVICE?customSearch=new GoogleCustomSearch({apiKey:GOOGLE_CUSTOM_SEARCH_API_KEY,engineId:GOOGLE_CUSTOM_SEARCH_ENGINE_ID,imagePath:"/images/"}):"algolia"===SEARCH_SERVICE?customSearch=new AlgoliaSearch({apiKey:ALGOLIA_API_KEY,appId:ALGOLIA_APP_ID,indexName:ALGOLIA_INDEX_NAME,imagePath:"/images/"}):"hexo"===SEARCH_SERVICE?customSearch=new HexoSearch({imagePath:"/images/"}):"azure"===SEARCH_SERVICE?customSearch=new AzureSearch({serviceName:AZURE_SERVICE_NAME,indexName:AZURE_INDEX_NAME,queryKey:AZURE_QUERY_KEY,imagePath:"/images/"}):"baidu"===SEARCH_SERVICE&&(customSearch=new BaiduSearch({apiId:BAIDU_API_ID,imagePath:"/images/"}))})}(jQuery);