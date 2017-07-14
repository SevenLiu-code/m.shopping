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
	$('div.details_count_d>input').focus(function(){
		$(this).blur();
	});
// 确认订单页
	// 修改已有收货信息
    $('div.contact_desc').tap(function(){
    	$('.part_hidde').css({'display': 'none'});
    	$('.manage_contact_head, .manage_contact_info').css({'display': 'block'});
    });
    // 修改已有收货信息返回
    $('header.manage_contact_head a.head_return').tap(function(){
    	$('.manage_contact_head, .manage_contact_info').css({'display': 'none'});
    	$('.part_hidde').css({'display': 'block'});	
    });
})