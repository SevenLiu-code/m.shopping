$(function(){
// 商品详情页	
	//详情主体切换
	$('ul.switch_inner>li').tap(function(){
		if ($(this).hasClass("current")) { 
					return false;
				}else {
					$(this).parent().find('li.current').removeClass('current');
					$(this).addClass('current');
					$('section.details_main').hide().eq($(this).index()).show();
					 h = $('section.details_main').eq($(this).index()).height();
					$('.car_show_main_box').height(h);
				}
		});
	//数量加减
	$('div.count_r').tap(function(){
		var val = $(this).parent().find('input').val();
		if ( parseInt(val) == 1 )  { 
			return 
		} else { 
			val = parseInt(val) - 1;
			$(this).parent().find('input').val(val);
		}
	});
	$('div.count_add').tap(function(){
		var val = $(this).parent().find('input').val();
			val = parseInt(val) + 1;
			$(this).parent().find('input').val(val);
	});
	$('div.details_count_d>input, div.manage_address>input').focus(function(){
		$(this).blur();
	});
// 确认订单页
	// 修改已有收货信息
    $('div.contact_desc').tap(function(){
    	$('.part_hidde').css({'display': 'none'});
    	$('.manage_contact_head, .manage_contact_info, div.mask').css({'display': 'block'});
    	setTimeout(function(){
    		$('div.mask').hide();
    	}, 350);
    });
    // 修改已有收货信息返回
    $('header.manage_contact_head a.head_return').tap(function(e){
    	$('.manage_contact_head, .manage_contact_info').css({'display': 'none'});
    	$('.part_hidde, div.mask').css({'display': 'block'});	
    	setTimeout(function(){
    		$('div.mask').hide();
    	}, 350);
    });

//选择支付页
	$('ul.pay_mothod_list>li').tap(function(){
		if ( $(this).hasClass('current') ) {
			return false;
		}else {
			$('ul.pay_mothod_list>li').removeClass('current');
			$(this).addClass('current');
		}
	});
//管理收货地址
	$('.manage_contact_info_btn>button').tap(function(){
		var $box = $(this).parents('section.common_section');
		var name = $box.find('li.manage_user>input').val();
		var mobile = $box.find('li.manage_tel>input').val();
		var address = $box.find('li.manage_address>input').val();
		var addr_details = $.trim($box.find('li.manage_address_details>input').val());
		var RE_phone = /^1[34578][\d]{9}$/;
		if ( name == '' || name.length == 0 ) {
			$('div.tip_box>.tip_box_txt').html('请填写收件人姓名');
			$('div.tip_mask, div.tip_box').css({'display':'block'});
		}else if( !RE_phone.test( mobile ) ) {
			if ( mobile == '' || mobile.length == 0 ) {
				$('div.tip_box>.tip_box_txt').html('请填写收件人手机号码');
				$('div.tip_mask, div.tip_box').css({'display':'block'});
			}else{
				$('div.tip_box>.tip_box_txt').html('手机号码填写错误');
				$('div.tip_mask, div.tip_box').css({'display':'block'});
			}	
		}else if( addr_details == '' || addr_details.length < 3){
			$('div.tip_box>.tip_box_txt').html('请填写详细收货地址');
			$('div.tip_mask, div.tip_box').css({'display':'block'});
		}else {
			var complete_addr = address + addr_details;//完整地址
			$('div._order_user').html(name);
			$('div._order_tel').html(mobile);
			$('p._order_address').html(complete_addr);
			$('section.manage_contact_info').css({'display':'none'});
			$('section.part_hidde').css({'display':'block'});
		}
	});
//弹框关闭
	$('a.tip_box_btn.return').tap(function(){
		$('div.tip_mask, div.tip_box').css({'display':'none'});
	})
})