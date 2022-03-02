// JavaScript Document
$(document).ready(function(){

	$("a[href = '#']").click(function(e){
		e.preventDefault();
		return false;
	});

	

	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|playbook|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
		isMobile = true;
	}


    // 섹션.비쥬얼 섹션.오리지날 슬라이드(자동슬라이드, 페이지내이션 누르면 그 페이지로)

    const $slides = $(".visual .slide");
    const $pn_btns = $(".visual .pagination button.dots");
    
    const slides = $(".info_container .info_wrap");
    const imgs = $(".imgs_wrap .img_wrap");
    const pn_btns = $(".original .pagination button.dots");

    let cnt = 0; // 기본값 0에서 시작하라고...
    let cnt_01 = 0;
    let si_01 = 0; // interval
    let si_02 = 0;

    $pn_btns.on("click", function(){
        const cur_num = $pn_btns.index(this);
        if(cur_num == cnt) return;
        cnt = cur_num;
        fade_img(cnt);
        pagination_change(cnt);    
    })

    pn_btns.on("click", function(){
        const cur_num = pn_btns.index(this);
        if(cur_num == cnt_01) return;
        cnt_01 = cur_num;
        fade_slide(cnt_01);
        fade_imgs(cnt_01);
        page_change(cnt_01);   
    })
      

    function count_plus(){
        cnt = cnt == $slides.length - 1 ? 0 : cnt + 1;
        fade_img(cnt);
        pagination_change(cnt);
    }
        
    
    function count_p(){
        cnt_01 = cnt_01 == slides.length - 1 ? 0 : cnt_01 + 1;
        fade_slide(cnt_01);
        fade_imgs(cnt_01); 
        page_change(cnt_01);  
    }

    function count_pl(){
        cnt_01 = cnt_01 == imgs.length -1 ? 0 : cnt_01 + 1;
        fade_slide(cnt_01);
        fade_imgs(cnt_01); 
        page_change(cnt_01);  
    }

        
    function count_minus(){
        cnt = cnt == 0 ? $slides.length - 1 : cnt - 1;
        fade_img(cnt);
        pagination_change(cnt);
    }
    
    function count_m(){
        cnt = cnt == 0? slides.length -1 : cnt_01 -1;
        fade_slide(cnt_01);
        fade_imgs(cnt_01);
        page_change(cnt_01);  
    }

    function count_ml(){
        cnt = cnt == 0? imgs.length -1 : cnt_01 -1;
        fade_slide(cnt_01);
        fade_imgs(cnt_01);
        page_change(cnt_01); 
    }


    function fade_img(num){
        stop_si();
        $slides.fadeOut(500);
        $slides.eq(num).fadeIn(500, function(){
        start_si();
        });
    }

    function pagination_change(num){
        $pn_btns.removeClass("active");
        $pn_btns.eq(num).addClass("active");
    }

    function fade_slide(num){
        stop_s();
        slides.fadeOut(500);
        slides.eq(num).fadeIn(500, function(){
        start_s();
        });
    }

    function fade_imgs(num){
        stop_s();
        imgs.fadeOut(500);
        imgs.eq(num).fadeIn(500, function(){
        start_s();
        });
    }

    function page_change(num){
        pn_btns.removeClass("active");
        pn_btns.eq(num).addClass("active");
    }

    function start_si(){ // 스타트인터벌 함수, 인터벌 초기값이 0 이 아니면 인터벌 멈추고 다시 세팅
        if(si_01 != 0){
            clearInterval(si_01)
        }
        si_01 = setInterval(count_plus, 3000);
    }

    function start_s(){
        if(si_02 !=0){
            clearInterval(si_02)
        }
        si_02 = setInterval(count_p, 3000);
    }

    function start_ss(){
        if(si_02 !=0){
            clearInterval(si_02)
        }
        si_02 = setInterval(count_pl, 3000);
    }

    function stop_si(){ // 스탑인터벌 함수, 스탑 초기값 0 아니면 인터벌 클리어하고 0으로 세팅
        if(si_01 != 0){
            clearInterval(si_01)
        }
        si_01 = 0;
    }

    function stop_s(){
        if(si_02 !=0){
            clearInterval(si_02)
        }
        si_02 = 0;
    }

    function stop_ss(){
        if(si_02 !=0){
            clearInterval(si_02)
        }
        si_02 = 0;
    }

    start_si();
    start_s();
    start_ss();




    //이동형 슬라이드
    function rolling_slides(_targetWrap){

      const $wrap = _targetWrap; 
   
      const $mask = $($wrap +" div.view_mask");
      let $inner_ul = $($wrap +" div.view_mask > ul");
      let $inner_ul_li = $($wrap +" div.view_mask > ul > li");
      const $btn_prev = $($wrap +' button.prev');
      const $btn_next = $($wrap +" button.next");
   
      const li_width = $inner_ul_li.outerWidth();
      const move_cnt = 1; // 보여지는 li 갯수
      const duration = 400; // 이동속도
      let click_Event = true;
      let si_01 = 0; // undefined
      
      (function init(){
         for(var i = 1; i <= move_cnt; i++){
            $inner_ul_li.last().prependTo($inner_ul);
         }
         $inner_ul.css("margin-left", -(li_width * move_cnt) + "px");
      })();
   
      // 즉시 실행 (요기있는 내용을 즉시 실행해라)();
   
      
   
      function movement(_direction){
         stop_si()
         $inner_ul.animate({ left: _direction * li_width * move_cnt +"px" }, duration, function(){
            for(var i = 1; i <= move_cnt; i++){
               $inner_ul_li = $($wrap + " div.view_mask > ul > li");
               if(_direction == 1){
                  $inner_ul_li.last().prependTo($inner_ul);
               }
               else if(_direction == -1){
                  $inner_ul_li.first().appendTo($inner_ul);
               }
            }
            $inner_ul.css("left", "0px");
            click_Event = true;
            start_si();
         });
      }
   
      $btn_prev.click(function(){
         if(click_Event){
            click_Event = false;
            movement(1);
         }
         else{
            return
         }
      });
   
      $btn_next.click(function(){
         if(click_Event){
            click_Event = false;
            movement(-1);
         }
         else{
            return
         }
      });

   
      function start_si(){
         if(si_01 != 0){
            clearInterval(si_01);
         } 
         si_01 = setInterval(function(){$btn_next.click()}, 4000);
      }
      
      function stop_si(){
         if(si_01 != 0) clearInterval(si_01);
         si_01 = 0;
      }
   
      start_si();
   
   }
   
   let rolling_01 = rolling_slides(".dramas");
   let rolling_02 = rolling_slides(".trailers");




if(!isMobile){
		
		

}

else {



    // Tablet
    if(screen.width >= 768){

      let rolling_03 = rolling_slides(".event");

    }

    // Mobile
    else {

    
      let rolling_03 = rolling_slides(".event");


    }
    
}


});