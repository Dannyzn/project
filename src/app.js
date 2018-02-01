require('./css/common.less');
require('./css/index.less');
require('./lib/common.js');
require('fabric');
const API = require('./lib/api.js');
const dataHandle = require('./lib/dataHandle.js');
const comments = require('./lib/comment.js');
// const Dialog = require('./lib/dialog.js');

$(function () {

    // API.getUserInfo(function (e) {
    //   if (e.err || e.name) return;
    //   $name.val(e.name);
    //   $sex.val(e.sex);
    //   $birth.val(e.birth);
    //   $phone.val(e.phone);
    // })
    $('#submit').on('click', function(ev){
       // 验证手机号
      //  if(!$name.val()) return window.toast('Masukkan nama pengguna');
      //  var res = API.verifyPhone($phone.val());
      //  if(!res || res.err) return window.toast(res.err,{width:200});
      //  res = $phone.val();
      //  if(!res) return window.toast('Nomor ponsel ini tidak benar');
      //  if(!$birth.val()) return window.toast('Silakan masukkan hari ulang tahunmu');
      //  if(!$sex.val()) return window.toast('Harap masukkan jenis kelamin Anda');


		$('#pageContainer').css('display','none');
		$('#modal_ysgznr').removeClass('hide');
		console.log(1);
		ev.preventDefault();
		
    })
    
    $('#myCanvas').on('touchstart', function(ev) {
        ev.preventDefault();
    })
    $('#myCanvas').on('touchmove', function(ev) {
        
        ev.preventDefault();
        
    })
    $('#myCanvas').on('touchend', function(ev) {
        ev.preventDefault();
        console.log("over");
        // $('#modal_ysgznr').addClass('hide');
        // $('#modal_jiangshi').removeClass('hide');
    
    })

    // $('#Canvas').on('touchstart', function(ev) {
    //   ev.preventDefault();
    // })
    // $('#Canvas').on('touchmove', function(ev) {
    //     ev.preventDefault();
    // })
    // $('#Canvas').on('touchend', function(ev) {
    //     ev.preventDefault();
    //     console.log("over");
        
    //     $('#modal_jiangshi').addClass('hide');
    //     $('#modal_sunjiang').removeClass('hide');
    // })

	  // $('#pageLoading').addClass('hide');   
});

  var canvas = new fabric.Canvas('myCanvas');
  

  var circle = new fabric.Circle({
	radius: 5, fill: '#000', left: 130, top: 160
  });
  // var circle1 = new fabric.Circle({
	// radius: 5, fill: '#000', left: 100, top: 100
  // });
  // var circle2 = new fabric.Circle({
	// radius: 5, fill: '#000', left: 85, top: 220
  // });
  // var circle3 = new fabric.Circle({
	// radius: 5, fill: '#000', left: 200, top: 120
  // });
  // var circle4 = new fabric.Circle({
	// radius: 5, fill: '#000', left: 220, top: 220
  // });

 
  // function makeLine(coords) {
  //   return new fabric.Line(coords, {
  //     fill: '#000',
  //     stroke: '#000',
  //     strokeWidth: 3,
  //     selectable: false
  //   });
  // }

  // var line = makeLine([132, 161, 101, 101]),
  //     line =  makeLine([102, 102, 87, 222]),
  //     line2 =  makeLine([87, 222, 222, 222]),
  //     line3 =  makeLine([222, 222, 203, 123]),
  //     line4 =  makeLine([87, 222, 222, 222]),
  //     line5 =  makeLine([222, 222, 132, 161]),
  //     line6 =  makeLine([101, 101, 222, 222]),
  //     line7 =  makeLine([87, 222, 203, 123]),
  //     line8 =  makeLine([133, 162, 88, 223]),
  //     line9 =  makeLine([133, 162, 204, 124]),
  //     line10 = makeline([204, 124, 101, 101])
  

  // var line = new fabric.Line([132, 161, 101, 101], {
  //   fill: '#000',
  //   stroke: '#000',
  //   strokeWidth: 3,
  // });
  // var line1 = new fabric.Line([102, 102, 87, 222], {
  //   fill: '#000',
  //   stroke: '#000', 
  //   strokeWidth: 3, 
  // });
  // var line2 = new fabric.Line([87, 222, 222, 222], {
  //   fill: '#000',
  //   stroke: '#000',
  //   strokeWidth: 3, 
  // });
  // var line3 = new fabric.Line([222, 222, 203, 123], {
  //   fill: '#000',
  //   stroke: '#000',
  //   strokeWidth: 3, 
  // });
  // var line4 = new fabric.Line([87, 222, 222, 222], {
  //   fill: '#000',
  //   stroke: '#000', 
  //   strokeWidth: 3,
  // });
  // var line5 = new fabric.Line([222, 222, 132, 161], {
  //   fill: '#000',
  //   stroke: '#000', 
  //   strokeWidth: 3,
  // });
  // var line6 = new fabric.Line([101, 101, 222, 222], {
  //   fill: '#000',
  //   stroke: '#000', 
  //   strokeWidth: 3,
  // });
  // var line7 = new fabric.Line([87, 222, 203, 123], {
  //   fill: '#000',
  //   stroke: '#000',
  //   strokeWidth: 3, 
  // });
  // var line8 = new fabric.Line([133, 162, 88, 223], {
  //   fill: '#000',
  //   stroke: '#000', 
  //   strokeWidth: 3,
  // });
  // var line9 = new fabric.Line([133, 162, 204, 124], {
  //   fill: '#000',
  //   stroke: '#000', 
  //   strokeWidth: 3,
  // });
  // var line10 = new fabric.Line([204, 124, 101, 101], {
  //   fill: '#000',
  //   stroke: '#000', 
  //   strokeWidth: 3,
  // });
  
  
  canvas.add(circle);
  // , circle1, circle2, circle3, circle4);
  // canvas.add(line, line1, line2, line3, line4, line5, line6, line7, line8, line9, line10);


  
  // // 将圆点锁定不能操作
  // canvas.item(0).selectable = false;
  // canvas.item(1).selectable = false;
  // canvas.item(2).selectable = false;
  // canvas.item(3).selectable = false;
  // canvas.item(4).selectable = false;
  // canvas.item(5).selectable = false;
  // canvas.item(6).selectable = false;
  // canvas.item(7).selectable = false;
  // canvas.item(8).selectable = false;
  // canvas.item(9).selectable = false;
  // canvas.item(10).selectable = false;
  // canvas.item(11).selectable = false;
  // canvas.item(12).selectable = false;
  // canvas.item(13).selectable = false;
  // canvas.item(14).selectable = false;
  // canvas.item(15).selectable = false;


  



// require('file?name=/1212/img/3.png!./img/3.png');
// require('file?name=/1212/img/4.png!./img/4.png');