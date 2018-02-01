const $commentPanel = $('#bottomCommentPanel');

const avatarList = [
	'http://img.cdn.baca.co.id/event/top10/avatar/1.png',
	'http://img.cdn.baca.co.id/event/top10/avatar/10.png',
	'http://img.cdn.baca.co.id/event/top10/avatar/11.png',
	'http://img.cdn.baca.co.id/event/top10/avatar/12.png',
	'http://img.cdn.baca.co.id/event/top10/avatar/13.png',
	'http://img.cdn.baca.co.id/event/top10/avatar/14.png',
	'http://img.cdn.baca.co.id/event/top10/avatar/15.png',
	'http://img.cdn.baca.co.id/event/top10/avatar/16.png',
	'http://img.cdn.baca.co.id/event/top10/avatar/2.png',
	'http://img.cdn.baca.co.id/event/top10/avatar/3.png',
	'http://img.cdn.baca.co.id/event/top10/avatar/4.png',
	'http://img.cdn.baca.co.id/event/top10/avatar/5.png',
	'http://img.cdn.baca.co.id/event/top10/avatar/6.png',
	'http://img.cdn.baca.co.id/event/top10/avatar/7.png',
	'http://img.cdn.baca.co.id/event/top10/avatar/8.png',
	'http://img.cdn.baca.co.id/event/top10/avatar/9.png',
];

module.exports =  {
	init : function(){
		$('.expand-icon,.comment-lists').on('click' ,function(){
			if($commentPanel.hasClass('expand-all')){
				$commentPanel.removeClass('expand-all');
			}else{
				$commentPanel.addClass('expand-all');
			}
		});
	},
	

}