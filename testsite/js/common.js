$(function(){
  function e(){
    _ua.Mobile[0]?$("head").prepend('<meta name="viewport" content="width=750">'):$("head").prepend('<meta name="viewport" content="width=1260">')
  }
  function t(){
    m=u.scrollTop(),u.scrollTop(g),p.css({position:"fixed",top:-m})
  }
  function i(){
    g=u.scrollTop(),p.attr({style:""}),l.attr({style:""}),h.prop({scrollTop:m})
  }
  function o(e){
    e.data("src")&&(e.attr("src",e.data("src")),e.addClass("loaded"))
  }
  function n(e,t){
    if(t){
      var i=$(t);
      if(void 0!==i.offset()){
        var o=i.offset().top+.5*i.height();
        e.each(function(){
          $(this).offset().top<=o&&$(this).addClass("reverse")
        }
      )}
    }
  }

  function a(e){
    if(e){
      var t=$(e);
      void 0!==t.offset()&&setTimeout(function(){
        u.scrollTop(t.offset().top-.5*(u.height()-t.height()))
      },50)
    }
  }
  function r(e){
    var t=$("#hint-naomi");
    if(t.is(":visible")&&!t.hasClass("show")){
      var i;
      switch(Math.floor(4*Math.random())){
        case 0:i="prim";
        break;
        case 1:i="prim2";
        break;
        case 2:i="sexy";
        break;
        case 3:i="sexy2"}
        var o=0;
        void 0==e?o=.5:"/"==e||"/fits/"==e||"/fitsgumi/"==e?o=3:e.indexOf("product")!=-1?o=3:e.indexOf("diagram")!=-1?o=3.5:e.indexOf("profile")!=-1&&(o=2.5),setTimeout(function(){
          $("#hint-naomi").addClass(i).addClass("show")
        },1e3*o)
      }
    }
    function s(e,t,i){
      var o=window.screenX+(window.innerWidth-t)/2,n=window.screenY+(window.innerHeight-i)/2,a=window.open(e,"sns","width="+t+", height="+i+", left="+o+", top="+n+"  menubar=no, toolbar=no, scrollbars=yes");
      a.focus()
    }
    function d(e,t,i){
      var o=e.getAttribute("id"),n=e.getAttribute("data-client"),a="https://share.sc",r=document.title,d=document.referrer||"",f=e.getAttribute("data-url")||encodeURIComponent(location.href),l=e.getAttribute("data-text")||r,c=e.getAttribute("data-hashtags")||"",h=e.getAttribute("data-referrer")||"";
      "twitter-share-button-cs"==o&&e.setAttribute("data-link",a+"/tweet/?key="+n+"&referrer="+d+"&url="+f+"&text="+l+"&hashtags="+c+"&sns=twitter"),"fb-share-button-cs"==o&&e.setAttribute("data-link",a+"/fb/?key="+n+"&referrer="+d+"&url="+f+"&text="+l+"&hashtags="+c+"&sns=facebook"),s(e.getAttribute("data-link"),t,i)
    }
    var f=$("header .menu-btn"),l=$("header nav"),c=$("header .nav-bg"),h=$("body, html"),u=$(window),p=$("main"),b=$("#modal"),m=0,g=0;e(),n($(".motion-trigger"),location.hash),setTimeout(function(){
      u.scrollTop(u.scrollTop()+1)},100),a(location.hash),"#deletecookie"==location.hash&&b.length>0&&$.removeCookie("firstmodal"),_ua.PC?(0==b.length||$.cookie("firstmodal"))&&r(location.pathname):r(location.pathname),f.on("click",function(){
        f.toggleClass("close"),l.toggleClass("show"),l.fadeToggle(),c.fadeToggle(),f.hasClass("close")?t():i()}),$("img").one("inview",function(){
          o($(this))
        }),
        $(".motion-trigger").one("inview",function(){
          $(this).parent().addClass("inviewed")
        }),
        $("body").on("click",".sns a",function(){
          return $(this).parent().hasClass("tw")?d(this,560,450):s(this.href,560,600),!1
        }),
        $("#modal, #modal .close").on("click",function(){
            r()
          })
        });
        var _ua=function(e){
          var t={
            0:e.indexOf("windows")!=-1&&e.indexOf("phone")!=-1||e.indexOf("iphone")!=-1||e.indexOf("ipod")!=-1||e.indexOf("android")!=-1&&e.indexOf("mobile")!=-1||e.indexOf("firefox")!=-1&&e.indexOf("mobile")!=-1||e.indexOf("blackberry")!=-1,iPhone:e.indexOf("iphone")!=-1,Android:e.indexOf("android")!=-1&&e.indexOf("mobile")!=-1},i=e.indexOf("windows")!=-1&&e.indexOf("touch")!=-1||e.indexOf("ipad")!=-1||e.indexOf("android")!=-1&&e.indexOf("mobile")==-1||e.indexOf("firefox")!=-1&&e.indexOf("tablet")!=-1||e.indexOf("kindle")!=-1||e.indexOf("silk")!=-1||e.indexOf("playbook")!=-1,o=!t[0]&&!i;return{Mobile:t,Tablet:i,PC:o
          }
        }
        (window.navigator.userAgent.toLowerCase());
