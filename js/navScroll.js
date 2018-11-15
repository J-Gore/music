;(function($,window,undefined) {

	Common.Page = this;

	/* -------------------------------------------------------
	 初回に一度だけ実行する
	 ------------------------------------------------------- */
	this.setupOnce = function(){
		Common.trace("Page -> setupOnce");

		// トップだけはイントロあるかもなのでフェードイン処理は個別に
		Common.pageFadeIn();

    if(Common.LAYOUT_MODE == "sp"){
      $('.gem__block__inner__box').removeClass('is__single is__singleBd is__singleBtnFix is__btnFlat');
    }

		$("#sidenavList a").on("click", function(e){
			e.preventDefault();
			var _target = $(this).attr('href');
			Common.autoScroll(_target, 1200, 0, -100);
		});

		ScrollEvent.init();
		

		if(Common.LAYOUT_MODE == "pc") return;

		var _isAnimate = false;
		$('.localnav__nav a').on("click", function(e){
			e.preventDefault();
			if(_isAnimate) return;

			_isAnimate = true;
			var _hideClass;
			var _showClass;
			var _target = $(this).attr('href').substr(1);

			if(_target == 'inner__release'){
				_hideClass = '.gem__block__inner__live';
				_showClass = '.gem__block__inner__release';
				$('.localnav__nav .localnav__nav__release').addClass('is__current');
				$('.localnav__nav .localnav__nav__live').removeClass('is__current');
			}
			else if(_target == 'inner__live'){
				_hideClass = '.gem__block__inner__release';
				_showClass = '.gem__block__inner__live';
				$('.localnav__nav .localnav__nav__release').removeClass('is__current');
				$('.localnav__nav .localnav__nav__live').addClass('is__current');
			}

			Common.trace(_hideClass);

			// ページトップに戻る
			Common.autoScroll('#pagetop', 2000, 0, 0);

			TweenMax.to($(_hideClass), .6, { opacity: 0, ease: 'easeInOutQuad',
				onComplete: function(){
					// return;
					$(_hideClass).hide();
					TweenMax.fromTo($(_showClass), .6, { display: 'block', opacity: 0 }, { opacity: 1, ease: 'easeInOutQuad',
						onComplete: function(){
							_isAnimate = false;
						}});
				}});
		});
	};


	/* -----------------------------------------------
	 * 横並びの高さを合わせる
	 * ----------------------------------------------- */
	function setMatchHeight(_target, _c){
		//一行あたりの要素数=列数を変数に格納
	  var columns = _c;
	  //該当するli要素の数を取得
	  var liLen = $(_target).length;
	  //行の数を取得
	  var lineLen = Math.ceil(liLen / columns);
	  //各li要素の高さの配列
	  var liHiArr = [];
	  //行の高さの配列
	  var lineHiArr = [];

	  //liの高さを配列に格納後、それが行の中で一番高い値であれば行の高さとして格納していく繰り返し文
	  for (i = 0; i <= liLen; i++) {
	      liHiArr[i] = $(_target).eq(i).height();
	      if (lineHiArr.length <= Math.floor(i / columns) 
	          || lineHiArr[Math.floor(i / columns)] < liHiArr[i]) 
	      {
	          lineHiArr[Math.floor(i / columns)] = liHiArr[i];
	      }
	  }
	  
	  //.eachでそれぞれのliの高さを変更
	  $(_target).each(function(i){
	      $(this).css('height',lineHiArr[Math.floor(i / columns)] + 'px');
	  });
	}


	// ******************************** スクロールイベント
  var ScrollEvent = {
    $groups: null,
    groups_index: 0,
    groups_max: 0,
    target_group: null,
    target_group_prev: null,
    scroll_top: 0,
    scroll_btm: 0,
    scroll_prev_value: 0,
    is_scroll_down: true,
    scroll_offset_y: 0,
    fade_offset_y: 0,
    fade_offset_duration: 0,
    out_duration: 0,
    is_scene3: false,
    is_scene5: false,
    is_kv: false,
    is_movie: false,
		y2008Y: 0,
		y2009Y: 0,
		y2010Y: 0,
		y2011Y: 0,
		y2012Y: 0,
		y2013Y: 0,
		y2014Y: 0,
		y2015Y: 0,
		y2016Y: 0,
		y2017Y: 0,
		y2018Y: 0,
		scroll_posY: 0,

    /* ===============================================
     * スクロールイベント登録
     * =============================================== */
    init: function(){
    	// 年号の先頭の座標取得
			ScrollEvent.y2008Y = $('#y2008').offset().top;
			ScrollEvent.y2009Y = $('#y2009').offset().top;
			ScrollEvent.y2010Y = $('#y2010').offset().top;
			ScrollEvent.y2011Y = $('#y2011').offset().top;
			ScrollEvent.y2012Y = $('#y2012').offset().top;
			ScrollEvent.y2013Y = $('#y2013').offset().top;
			ScrollEvent.y2014Y = $('#y2014').offset().top;
			ScrollEvent.y2015Y = $('#y2015').offset().top;
			ScrollEvent.y2016Y = $('#y2016').offset().top;
			ScrollEvent.y2017Y = $('#y2017').offset().top;
			ScrollEvent.y2018Y = $('#y2018').offset().top;

    	Common.trace('2008 y: ' + ScrollEvent.y2008Y);
    	Common.trace('2009 y: ' + ScrollEvent.y2009Y);
    	Common.trace('2010 y: ' + ScrollEvent.y2010Y);
    	Common.trace('2011 y: ' + ScrollEvent.y2011Y);
    	Common.trace('2012 y: ' + ScrollEvent.y2012Y);
    	Common.trace('2013 y: ' + ScrollEvent.y2013Y);
    	Common.trace('2014 y: ' + ScrollEvent.y2014Y);
    	Common.trace('2015 y: ' + ScrollEvent.y2015Y);
    	Common.trace('2016 y: ' + ScrollEvent.y2016Y);
    	Common.trace('2017 y: ' + ScrollEvent.y2017Y);
    	Common.trace('2018 y: ' + ScrollEvent.y2018Y);

      /* -----------------------------------------------
       * 画像のスクロールフェードイン
       * ----------------------------------------------- */
      ScrollEvent.$groups = $(".js-slideIn");
      ScrollEvent.groups_index = 0;
      ScrollEvent.groups_max = ScrollEvent.$groups.length;
      ScrollEvent.target_group = $(ScrollEvent.$groups[0]);
      ScrollEvent.scroll_top   = 0;
      ScrollEvent.scroll_btm   = ScrollEvent.scroll_top + Common.Window.height;

      ScrollEvent.fade_offset_y = 0;
      ScrollEvent.scroll_offset_y = 200;
      ScrollEvent.fade_offset_duration = 0.6;
      ScrollEvent.out_duration = 0.4;
      
      ScrollEvent.$groups.each(function(i,ele){
        var $ele = $(ele);
        var _def_alpha = $ele.attr('data-alpha');
        $ele.addClass("entry-index"+String(i));
        if($ele.offset().top >= ScrollEvent.scroll_btm - 200){
          if(Common.LAYOUT_MODE == "pc"){
          	$ele.css({opacity: _def_alpha});
	          // $ele.css({opacity: 0});
          }
        }
        else{
          ScrollEvent.groups_index++;
        };
      });

      if(ScrollEvent.groups_index < ScrollEvent.groups_max){
        ScrollEvent.target_group = $(ScrollEvent.$groups[ScrollEvent.groups_index]);
        Common.Window.$window.on('scroll', ScrollEvent.onScroll).trigger("scroll");
      };

      Common.trace('scroll total index: ' + ScrollEvent.groups_max);
    },

    /* -----------------------------------------------
     * スクロールイベント
     * ----------------------------------------------- */
    onScroll: function (e) {
    	// 直前のスクロール値を保持（スクロール方向確認用）
    	ScrollEvent.scroll_prev_value = ScrollEvent.scroll_top;
    	// 今のスクロール値を取得
      ScrollEvent.scroll_top = document.body.scrollTop || document.documentElement.scrollTop;
      ScrollEvent.scroll_btm = ScrollEvent.scroll_top + Common.Window.height;
      // スクロールの方向確認
			if(ScrollEvent.scroll_prev_value <= ScrollEvent.scroll_top) ScrollEvent.is_scroll_down = true;
			else ScrollEvent.is_scroll_down = false;

      // Common.trace('prev: ' + ScrollEvent.scroll_prev_value + ' / now: ' + ScrollEvent.scroll_top + ' / isDown? : ' + ScrollEvent.is_scroll_down);
      // Common.trace(ScrollEvent.groups_index);

      scroll_posY = ScrollEvent.scroll_top + 110;

      // Common.trace(ScrollEvent.scroll_top);
      if(scroll_posY < ScrollEvent.y2008Y){
      	$('#sidenavList li').removeClass('is__current');
      }
      else if(scroll_posY >= ScrollEvent.y2008Y && scroll_posY < ScrollEvent.y2009Y){
      	$('#sidenavList li').removeClass('is__current');
      	$('#sidenavList .sidenav__list__2008').addClass('is__current');
      }
      else if(scroll_posY >= ScrollEvent.y2009Y && scroll_posY < ScrollEvent.y2010Y){
      	$('#sidenavList li').removeClass('is__current');
      	$('#sidenavList .sidenav__list__2009').addClass('is__current');
      }
      else if(scroll_posY >= ScrollEvent.y2010Y && scroll_posY < ScrollEvent.y2011Y){
      	$('#sidenavList li').removeClass('is__current');
      	$('#sidenavList .sidenav__list__2010').addClass('is__current');
      }
      else if(scroll_posY >= ScrollEvent.y2011Y && scroll_posY < ScrollEvent.y2012Y){
      	$('#sidenavList li').removeClass('is__current');
      	$('#sidenavList .sidenav__list__2011').addClass('is__current');
      }
      else if(scroll_posY >= ScrollEvent.y2012Y && scroll_posY < ScrollEvent.y2013Y){
      	$('#sidenavList li').removeClass('is__current');
      	$('#sidenavList .sidenav__list__2012').addClass('is__current');
      }
      else if(scroll_posY >= ScrollEvent.y2013Y && scroll_posY < ScrollEvent.y2014Y){
      	$('#sidenavList li').removeClass('is__current');
      	$('#sidenavList .sidenav__list__2013').addClass('is__current');
      }
      else if(scroll_posY >= ScrollEvent.y2014Y && scroll_posY < ScrollEvent.y2015Y){
      	$('#sidenavList li').removeClass('is__current');
      	$('#sidenavList .sidenav__list__2014').addClass('is__current');
      }
      else if(scroll_posY >= ScrollEvent.y2015Y && scroll_posY < ScrollEvent.y2016Y){
      	$('#sidenavList li').removeClass('is__current');
      	$('#sidenavList .sidenav__list__2015').addClass('is__current');
      }
      else if(scroll_posY >= ScrollEvent.y2016Y && scroll_posY < ScrollEvent.y2017Y){
      	$('#sidenavList li').removeClass('is__current');
      	$('#sidenavList .sidenav__list__2016').addClass('is__current');
      }
      else if(scroll_posY >= ScrollEvent.y2017Y && scroll_posY < ScrollEvent.y2018Y){
      	$('#sidenavList li').removeClass('is__current');
      	$('#sidenavList .sidenav__list__2017').addClass('is__current');
      }
      else if(scroll_posY >= ScrollEvent.y2018Y){
      	$('#sidenavList li').removeClass('is__current');
      	$('#sidenavList .sidenav__list__2018').addClass('is__current');
      }

      if(Common.LAYOUT_MODE == "sp") return;

      // 上 → 下
      if(ScrollEvent.is_scroll_down){
      	if(ScrollEvent.groups_index >= ScrollEvent.groups_max-1) return;
	      if(ScrollEvent.scroll_btm - Common.Window.height * 0.5 > ScrollEvent.target_group.offset().top){
	      	Common.trace('index: ' + ScrollEvent.groups_index + ' / top: ' + ScrollEvent.scroll_top + ' / btm: ' + ScrollEvent.scroll_btm + ' / isDown?: ' + ScrollEvent.is_scroll_down);

	      	// var _effect_type = ScrollEvent.target_group[0].attributes[0].nodeValue;
	      	var _effect_type = $(ScrollEvent.target_group).attr('data-eff');
	      	// console.dir(ScrollEvent.target_group);
	      	// Common.trace('type -> ' + _effect_type);

	      	if(_effect_type == 'fade'){
	      		ScrollEvent.fadeIn( ScrollEvent.target_group );
	      	}
	        
	        if(ScrollEvent.groups_index < ScrollEvent.groups_max){
		        ScrollEvent.groups_index++;
	          ScrollEvent.target_group = $(ScrollEvent.$groups[ScrollEvent.groups_index]);
	          ScrollEvent.target_group_prev = $(ScrollEvent.$groups[ScrollEvent.groups_index-1]);
	          // ScrollEvent.onScroll(e);
	          // Common.trace('+');
	        }
	        else{
	          // Common.Window.$window.off('scroll', ScrollEvent.onScroll)
	          // Common.trace('end');
	        };
	        ScrollEvent.onScroll(e);
	      };
      }
    },
    // ***** 表示/非表示時エフェクト
    fadeIn: function( opt_target ){
        TweenLite.fromTo(opt_target, 1.0, { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: Power3.easeOut,
            onComplete: function(){
                // $(opt_target).removeAttr("style");
                opt_target = null;
            }
        })
    },
    fadeInMargin: function( opt_target ){
        TweenLite.fromTo(opt_target, 1.0, { opacity: 0, marginTop: 100 }, { opacity: 1, marginTop: 0, ease: Power3.easeOut,
            onComplete: function(){
                // $(opt_target).removeAttr("style");
                opt_target = null;
            }
        })
    },
    fadeOut: function( opt_target ){
        TweenLite.fromTo(opt_target, 1.0, { opacity: 1, y: 100 }, { opacity: 0, y: 0, ease: Power3.easeOut,
            onComplete: function(){
                // $(opt_target).removeAttr("style");
                opt_target = null;
            }
        })
    }
  }


})(jQuery,window);


window.onload = function() {
	$(function(){
		$(window, document, "html,body").scrollTop(0);
		$('html,body').animate({ scrollTop: 0 }, '1');
	});
}
