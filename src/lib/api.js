var request = require('superagent');
// const CryptoJS = require('crypto-js');
const token = 'LV0dBae1Cd129cusdZnjW99kaEPJEat0XRvxRfw+hN8Bl2mK7bfLBewMLtZZFrN/mNKGzgvk884=';
var _baseUrl =  'http://idcrawler.vm.newsinpalm.net/magicadapi';

if(window.location.origin.indexOf('localhost') > 0){
  // _baseUrl = 'http://localhost:8360';
}

// _baseUrl = 'http://brcrawler.vm.newsinpalm.net/magicadapi/';

var getData = function(config ,resolve){
  config.method = config.method || 'get';

	var _url = _baseUrl + config.url;
	var param = config.param;
	var req = request;

	if (config.method === 'get') req = req.get(_url);
  else if (config.method === 'post') req = req.post(_url);
  else if (config.method === 'put') req = req.put(_url);
  else if (config.method === 'delete') req = req.delete(_url);

  if(param){
    if (config.method === 'get') {
        req = req.query(param)
    } else {
      	req = req.send(param)
    }
  }
  // req.withCredentials(true);
  req.header['X-Requested-With'] = 'XMLHttpRequest';
  req.end(function (err, res) {
  	if (err || !res) { resolve({ err:err.toString() }) ;return ;}
  	if (res.error || res.err) {resolve({ err:res.text }) ;return ;}

  	res = JSON.parse(res.text || '{}')
  	resolve(res.data || res);
  });
}

module.exports = {

  // verifyPhone : function (str) {
  //   if(!str) return {err:'Maaf, nomor ponsel tidak sesuai, mohon periksa kembali.'};
  //   const res = str.match(/^(\d{10,14})$/);
  //   if(!res || res.length <= 0) return {err:'Maaf, nomor ponsel tidak sesuai, mohon periksa kembali.'};
  //   return str;
  // },
  // getUserInfo : function (resolve) {
  //   getData({url : '/activity/gc/user' ,method:'post' ,param:{t:token}} ,resolve);
  // },

  // sub : function(time ,resolve){
  //   getData({url : '/activity/gc/add' ,method:'post' ,param:{
  //     t : encryptCode({
  //       t : token ,
  //       time : time,
  //       name : $('#form_name').val(),
  //       phone : $('#form_phone').val(),
  //       sex : $('#form_sex').val(),
  //       birth : $('#form_birth').val()
  //     }),
  //   }} ,resolve);
  // }
}