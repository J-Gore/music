$(function(){
  function n(){
    _ua.PC||i()
  }
  function o(){
    _ua.PC||t()
  }
  function c(){
    C||_ua.PC||e()
  }
  function i(){
    function n(){
      g&&p&&(r.css("background-image",
      "url("+o+")"),
      u.addClass("show"),
      l.addClass("hide"),
      m=setInterval(a,d),
      k=!0)
    }
      var o="http://music.matthewwhitby.co.uk/testsite/css/img/cover_sprite_0131.jpg",
      c=$(new Image);
      c.on("load",
      function(){
        g=!0,n()
      }),
      c.attr("src",o),
      setTimeout(function(){
        p=!0,
        n()},
        3e3)
      }
      function a(){
        var n=274,
        o=350,
        c=420,
        i=13,
        a=v%13*-350,
        t=-420*Math.floor(v/13);
        r.css("background-position",a+"px "+t+"px"),
        ++v>=274&&(v=0)
      }
      function t(){
        clearInterval(m),
        k=!1
      }
      function e(){
        !k&&g&&p&&(m=setInterval(a,d),k=!0)
      }
      var s=$(window),
      l=$("#cover .keyvisual img"),
      u=$("#cover .play"),
      r=$("#cover .slide"),
      f=$("header .menu-btn"),
      d=95,
      v=0,
      m="",
      g=!1,
      p=!1,
      k=!1,
      C=!1;
      n(),
      s.on("scroll",function(){
        s.scrollTop()>100?o():c()
      }),
        u.on("click",function(){
          C=!0,o()
        }),
          $("#modal, #modal .close").on("click",function(){C=!1,c()}),
          f.on("click",function(){
            f.hasClass("close")?(C=!0,o()):(C=!1,c())
          })
        });
