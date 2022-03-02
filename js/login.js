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




    //로그인
    var fields = $('.member input'); //아이디, 비번 인풋
    var memBtn = $('.login_mem .login_btn'); // 로그인 버튼

    memBtn.click(function () {
        fields.each(function () {
            var value = $(this).val();
            if (value == "") {
                $(this).parent().addClass('error');
                $(this).next('.arror_text').fadeIn(500);
                $(this).attr('placeholder', '');
            } else {
                $(this).parent().removeClass('error');
                $(this).next('.arror_text').fadeOut(500);
            }
        }); 

        var errorCount = $('.member.error').length;
        if (errorCount > 0) {
            memBtn.prop('disabled', true).text('정보를 입력해주세요.');
        }
    });

    fields.click(function () {
        $(this).parent().removeClass('error');
        $(this).next('.arror_text').hide(500);
        memBtn.prop('disabled', false).text('로그인');
    });

    $('.login_form input').click(function () {
        $(this).attr('placeholder', '');
        $(this).parent().addClass('label_top');
    });


    //회원 가입 모달창 열고 답기 
    $('.login_link > a').click(function(){
        $('.signup').slideDown(500);
    })

    $('.signup').click(function(e){
        if (e.target == e.currentTarget){ 
        $('.signup').slideUp(500);
        }
    })



     //회원가입
     $('.signup_form input').click(function () {
        $(this).attr('placeholder', '');
        $(this).parent().addClass('label_top');
        $('.same_ck').css({
            color: '#085a8c'
        });
    });

    //날짜 클릭
    $('.yymmdd div select').click(function () {
        $(this).find('option:first-child').text('');
        $(this).parent().addClass('label_top');
        $('.same_ck').css({
            color: '#085a8c'
        });
    });

    //성별 클릭 
    $('.gender label').click(function () {
        $(this).addClass('click').siblings().removeClass('click');
    });

    $('.marital_status label').click(function () {
        $(this).addClass('click').siblings().removeClass('click');
    });

    var $signupInput = $('.signup_set input');

    $('.signup_btn').click(function () {
        $signupInput.each(function () {
            var value = $(this).val();
            if (value == "") {
                $(this).parent().addClass('error');
                $(this).next('.arror_text').fadeIn(500);
                $(this).attr('placeholder', '');
            } else {
                $(this).parent().removeClass('error');
                $(this).next('.arror_text').fadeOut(500);
            }


        }); //field each

        
        $('input[name="gender"]').each(function () {
            var radioVal = $('input[name="gender"]:checked').val();
            if (radioVal == undefined) {
                $(this).parent().addClass('error');
            } else {
                $(this).parent().removeClass('error');
            }

        });
        $('input[name="mar"]').each(function () {
            var radioVal = $('input[name="mar"]:checked').val();
            if (radioVal == undefined) {
                $(this).parent().addClass('error');
            } else {
                $(this).parent().removeClass('error');
            }
        });
        
        $('.yymmdd .year').each(function(){
            var selectVal = $(this).find('select option:selected').val();

            if (selectVal == '') {
                $(this).find('select').addClass('error');
                $(this).find('label').css({
                    color:'#D50000'
                });
            } else {
                $(this).find('select').removeClass('error');   
                $(this).find('label').css({
                    color:'#000'
                });
            }
            
        });
        
        $('.yymmdd .month').each(function(){
            var selectVal = $(this).find('select option:selected').val();

            if (selectVal == '') {
                $(this).find('select').addClass('error');
                $(this).find('label').css({
                    color:'#D50000'
                });
            } else {
                $(this).find('select').removeClass('error');   
                $(this).find('label').css({
                    color:'#000'
                });
            }
            
        });
        
        $('.yymmdd .day').each(function(){
            var selectVal = $(this).find('select option:selected').val();

            if (selectVal == '') {
                $(this).find('select').addClass('error');
                $(this).find('label').css({
                    color:'#D50000'
                });
            } else {
                $(this).find('select').removeClass('error');   
                $(this).find('label').css({
                    color:'#000'
                });
            }
            
        });
      

        var errorCount = $('.signup_set.error').length;
        if (errorCount > 0) {
            $('.signup_btn').prop('disabled', true).text('회원가입');
        }
    });

    $signupInput.click(function () {
        $(this).parent().removeClass('error');
        $(this).next('.arror_text').hide(500);
        $('.signup_btn').prop('disabled', false).text('회원가입');;
        $('.signup_btn').css({
            backgroundColor: '#000'
        });
        $('.yymmdd .ui-button').removeClass('error');
    });


   

    if(!isMobile){
		
		

    }
    
    else {
    
    
    
        // Tablet
        if(screen.width >= 768){
    
            
    
        }
    
        // Mobile
        else {
    
            
    
    
        }
        
    }
    
    
})