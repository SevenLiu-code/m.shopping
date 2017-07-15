 function break_url(){
 	if (document.referrer === '') {
 		$('a.link_referrer').attr('href', '');
 	}
 }
 var area1;//定义选择城市变量
 
function select_city(){
		if ( $('#manage_addr').length > 0 ) {
			 area1 = new LArea();
				area1.init({
				'trigger': '#manage_addr', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
				'valueTo': '#value1', //选择完毕后id属性输出到该位置
				'keys': {
					id: 'id',
					name: 'name'
				}, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
				'type': 1, //数据源类型
				'data': LAreaData //数据源
			});
		} else return;
	};
$(function(){
	var details_img_slide = new Swiper( '.swiper-details', {
		  loop: true,
		  autoplay: 5000,
		  pagination: '.swiper-pagination'
	});
	// 管理收货地址

	select_city()
	
})