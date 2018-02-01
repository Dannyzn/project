const $mainList = $('#mainList');

const data = [
	{
		banner:'http://img.cdn.baca.co.id/event/top10/ahok-rizieq.jpg',
		title : 'Ahok vs Habib Rizieq',
		list : [
			{
				title:'Ahok : Saya Kasihan Dengan Habib Rizieq',
				link:'http://berita.baca.co.id/8390727',
			},
			{
				title:'Kala Habib Rizieq Besaksi di Sidang Ahok',
				link:'http://berita.baca.co.id/8449674',
			},
			{
				title:'Jokowi Kenalkan Ahok ke Raja Salman, #Meme Habib Rizieq Bertebaran!',
				link:'http://berita.baca.co.id/8469021',
			},
			{
				title:'Rizieq vs Ahok, PSI : Tidak Bisa Disamakan',
				link:'http://berita.baca.co.id/10260106',
			},
			{
				title:'Suka atau Tidak Suka, Habib Rizieq Lebih Berpengaruh Saat Ini',
				link:'http://berita.baca.co.id/6601380',
			}
		]
	},
	{
		banner:'http://img.cdn.baca.co.id/event/top10/julia.jpg',
		title : 'Julia Perez',
		list : [
			{
				title:'Julia Perez Meninggal, Ini Pesan Terakhir dan Foto-fotonya',
				link:'http://berita.baca.co.id/10826436'
			},
			{
				title:'Ternyata Seperti Ini Kondisi Makam Julia Perez Sekarang, Tidak Pernah Sepi',
				link:'http://berita.baca.co.id/16226498'
			},
			{
				title:'Akun Instagram Julia Perez Mendadak Update InstaStory, Begini Isinya',
				link:'http://berita.baca.co.id/15782201'
			},
			{
				title:'Kangen, Adik Julia Perez Unggah Pesan Yang Diberikan Kakaknya',
				link:'http://berita.baca.co.id/16162274'
			},
			{
				title:'Ruben Onsu Tulis Sindiran Untuk Seseorang, Tentang Julia Perez',
				link:'http://berita.baca.co.id/16000652'
			},
		]
	},
	{
		banner:'http://img.cdn.baca.co.id/event/top10/salman.jpg',
		title : 'Raja Salman',
		list : [
			{
				title:'Deretan Pangeran Tampan Yang Dibawa Dalam Romongan Raja Salman Ke Indonesia',
				link:'http://berita.baca.co.id/8485350',
			},
			{
				title:'Awas! Raja Salman ke Indonesia, Jangan Sampai Ada yang Bikin Lelucon Ala Jalals Berikut Ini',
				link:'http://berita.baca.co.id/8450883',
			},
			{
				title:'Seperti Ini Lho Gaya Putri Arab Saudi di Abad 21, Kira-kira Ikut Raja Salman ke Indonesia Gak Ya?',
				link:'http://berita.baca.co.id/8451708',
			},
			{
				title:'Bangga Raja Salman ke Indonesia, Sarwendah Kaget Lihat Pangeran Arab Ganteng-Ganteng',
				link:'http://berita.baca.co.id/8476411',
			},
			{
				title:'Awas! Raja Salman ke Indonesia, Jangan Sampai Ada yang Bikin Lelucon Ala Jalals Berikut Ini',
				link:'http://berita.baca.co.id/8450883',
			},
		],
	},

	{
		banner:'http://img.cdn.baca.co.id/event/top10/pilkada.jpg',
		title : 'Pilkada DKI Jakarta',
		list : [
			{
				title:'Seandainya Ahok-Djarot Kalah di Pilkada DKI Jakarta, Ini Kata Lola Amaria',
				link:'http://berita.baca.co.id/8727182',
			},
			{
				title:'6 Tokoh yang Sakit Hati di Pilkada DKI Jakarta',
				link:'http://berita.baca.co.id/8153994',
			},
			{
				title:'Siapa Unggul di Putaran Dua Pilkada DKI Jakarta? Ini Prediksi 2 Lembaga Survei',
				link:'http://berita.baca.co.id/9304449',
			},
			{
				title:'Analisis Pilkada DKI Jakarta Putaran 2',
				link:'http://berita.baca.co.id/8213950',
			},
			{
				title:'Kocak! Ini Cerita Humor dan Meme Menggelitik Seputar Pilkada DKI Jakarta',
				link:'http://berita.baca.co.id/8164670',
			},
		],
	},

	{
		banner:'http://img.cdn.baca.co.id/event/top10/abg-nikah.jpg',
		title : 'ABG Nikahi Nenek Tua',
		list : [
			{
				title:'Alamak…Perdana di Kaltara, Pria 25 Tahun Nikahi Nenek 58 Tahun',
				link:'http://berita.baca.co.id/15884816',
			},
			{
				title:'Awalnya Romantis, Nenek 82 Tahun Yang Nikahi Remaja Ting Ting Berakhir Tragis, Ini Kisahnya',
				link:'http://berita.baca.co.id/15447496',
			},
			{
				title:'5 Pemuda Ganteng Ini Nikahi Nenek-Nenek. Bikin Jomblowati Gigit Jari Nih!',
				link:'http://berita.baca.co.id/15727499',
			},
			{
				title:'Nikahi Nenek Usia 91 Tahun, Kisah Pemuda 23 Tahun Ini Viral',
				link:'http://berita.baca.co.id/15333471',
			},
			{
				title:'Kisah Cinta Nenek Rohaya dan Selamat, Pasangan Beda Usia 55 Tahun ',
				link:'http://berita.baca.co.id/16056421',
			},

		],
	},

	{
		banner:'http://img.cdn.baca.co.id/event/top10/raffi-ayu.jpg',
		title : 'Ayu Ting Ting',
		list : [
			{
				title:'Via Vallen Somasi Perias Ayu Ting Ting',
				link:'http://berita.baca.co.id/16217964',
			},
			{
				title:'Ayu Ting Ting : Diam Bukan Berarti Lemah',
				link:'http://berita.baca.co.id/16114571',
			},
			{
				title:'Kemesraan Raffi Ahmad & Ayu Ting Ting',
				link:'http://berita.baca.co.id/16247751',
			},
			{
				title:'Saksi Mata Benarkan Ayu Ting Ting Mabuk Bareng Raffi Ahmad',
				link:'http://berita.baca.co.id/16300240',
			},
			{
				title:'Ayu Ting Ting Bungkam Soal Pegangan Tangan Dengan Raffi Ahmad!',
				link:'http://berita.baca.co.id/16038617',
			},
		],
	},

	{
		banner:'http://img.cdn.baca.co.id/event/top10/uang.jpg',
		title : 'Uang Kuno',
		list : [
			{
				title:'Wow Fantastis!! Harga Uang Kuno Jika Dijual',
				link:'http://berita.baca.co.id/15995994',
			},
			{
				title:'Dulu Disepelekan, Sekarang 6 Uang Jadul Ini Dihargai Fantastis',
				link:'http://berita.baca.co.id/15935854',
			},
			{
				title:'Cerita Muhammad Ikhsan Telaten Mengkoleksi Uang Kuno',
				link:'http://berita.baca.co.id/15830480',
			},
			{
				title:'Wow! Inilah 5 Mata Uang Kerajaan Kuno di Indonesia, Wujudnya Artistik dan Berharga pada Zamannya!',
				link:'http://berita.baca.co.id/15887450',
			},
			{
				title:'Pameran Uang Kuno Nusantara',
				link:'http://berita.baca.co.id/7337283',
			},
		],
	},

	{
		banner:'http://img.cdn.baca.co.id/event/top10/dp-rumah.jpg',
		title : 'DP 0 Rupiah',
		list : [
			{
				title:'Reklamasi dan Rumah DP 0 Rupiah Dihujat, Pengamat: Tak Mudah Gantikan Ahok',
				link:'http://berita.baca.co.id/11716103',
			},
			{
				title:'Sutiyoso Skakmat DP 0 Rupiah, Bilang Program Anies-Sandi Nggak Mendidik',
				link:'http://berita.baca.co.id/9611275',
			},
			{
				title:'Rumah DP 0 Rupiah, Janji Manis yang Berujung Kel…',
				link:'http://berita.baca.co.id/11629835',
			},
			{
				title:'Sindir DP 0 Rupiah, Ruhut: Makanya Jangan Berikan Janji Palsu saat Kampanye',
				link:'http://berita.baca.co.id/11630758',
			},
			{
				title:'Kisruh Rumah DP 0 Rupiah Muncul karena Program Anies-Sandi Ditanggapi ‘Lebay’ oleh Masyarakat',
				link:'http://berita.baca.co.id/11678247',
			},
		],
	},


	{
		banner:'http://img.cdn.baca.co.id/event/top10/zakir.jpg',
		title : 'Zakir Naik',
		list : [
			{
				title:'Zakir Naik Tiba-Tiba Muncul saat Pilkada, Ruhut: Gak Ada yang Mau Dengar Ceramahnya',
				link:'http://berita.baca.co.id/9257822',
			},
			{
				title:'Ini Kata Zakir Naik Soal Al Maidah 51',
				link:'http://berita.baca.co.id/9164357',
			},
			{
				title:'Tuding Zakir Naik Danai ISIS, Komedian Ernest Prakasa Tuai Kecaman ',
				link:'http://berita.baca.co.id/8586423',
			},
			{
				title:'Zakir Naik Sebut Pemimpin Muslim Lebih Baik, Timses Ahok : Elektabilitas Pertahanan Tak Akan Anjlok',
				link:'http://berita.baca.co.id/9189078',
			},
			{
				title:'Ditanya-tanya Tentang Pemimpin Non-Muslim Yang Bangun Masjid, Dr Zakir Naik Sebut Itu Munafik',
				link:'http://berita.baca.co.id/9205043',
			},

		],
	},

	{
		banner:'http://img.cdn.baca.co.id/event/top10/darah.jpg',
		title : 'Fakta Golongan Darah',
		list : [
			{
				title:'7 Fakta Menarik Golongan Darah B Saat Jatuh Cinta',
				link:'http://berita.baca.co.id/15877041',
			},
			{
				title:'Apakah Kamu Bergolongan Darah O ? "18 Fakta Mengejutkan" Golongan Darah O Yang Banyak Orang Gak Tahu #7 Wah Hargailah Mereka Sebelum Terlambat',
				link:'http://berita.baca.co.id/16009987',
			},
			{
				title:'Golongan Darah Menentukan Kepribadian. Mitos atau Fakta?',
				link:'http://berita.baca.co.id/14539612',
			},
			{
				title:'Ternyata Ada Tips Kecantikan Berdasarkan Golongan Darahmu, Sudah Tahu?',
				link:'http://berita.baca.co.id/4716909',
			},
			{
				title:'Sara, Golongan Darah Paling Langka di Dunia',
				link:'http://berita.baca.co.id/10023653',
			},
		],
	},
];


const loadItem = function(k){
	const html = [];
	html.push('<div class="trending-item">');
	html.push('	<div class="item-left">');
	html.push('		<div class="left-panel">');
	html.push('			<div class="top-header"><div class="text">'+k.title+'</div></div>');
	html.push('			<div class="content-panel">');
	html.push('				<img lazy-url="'+k.banner+'" class="cover-img"/>');
	html.push('			</div>');
	html.push('			<div class="foot-panel clearfix">');
	html.push('				<div class="btn-shadow">');
	html.push('					<div class="sprite-btn btn-bck-orange sprite-btn-tip">');
	html.push('						<i class="sprite sprite-like"></i>');
	html.push('					</div>');
	html.push('				</div>');
	html.push('				<div class="btn-shadow">');
	html.push('					<div class="sprite-btn sprite-btn-tip">');
	html.push('						<i class="sprite sprite-comment"></i>');
	html.push('					</div>');
	html.push('				</div>');
	html.push('			</div>');
	html.push('		</div>');
	html.push('	</div>');
	html.push('	<div class="item-right">');
	html.push('		<div class="right-panel">');
	html.push('			<div class="btn-panel">');
	html.push('				<div class="sprite-btn btn-text btn-bck-white sprite-btn-tip">');
	html.push('					<i class="sprite sprite-like"></i>');
	html.push('					<span>230.1k</span>');
	html.push('				</div>');
	html.push('				<div class="sprite-btn btn-text sprite-btn-tip">');
	html.push('					<i class="sprite sprite-eye"></i>');
	html.push('					<span>230.1k</span>');
	html.push('				</div>');
	html.push('			</div>');
	html.push('			<div class="my-panel sprite-btn-tip">');
	html.push('				<div>');
	html.push('					<i class="sprite sprite-edit"></i>');
	html.push('				</div>');
	html.push('				<div>');
	html.push('					The comments that have been released here may be selected.The comments that have been released here may be selected.');
	html.push('				</div>');
	html.push('			</div>');
	html.push('		</div>');
	html.push('	</div>');
	html.push('</div>');
	return html.join('');
}

const renderList = function(){
	const html = [];
	for(var i=0,len=data.length;i<len;i++){
		html.push(loadItem(data[i]));
	}
	html.push('<div class="down-image"><img src="http://event.baca.co.id/top10/download.png"/></div>')
	$mainList.html(html.join(''));

	$mainList.find('[lazy-url]').each(function(i){
		const $this = $(this);

		setTimeout(function(){
			$this.attr('src', $this.attr('lazy-url'));
			$this[0].onload = function(){
				// console.log($this.height());
			}
		},100*i);
	})
}





module.exports =  {
	init : function () {
		renderList();
		// console.log('init::');
	}

}
