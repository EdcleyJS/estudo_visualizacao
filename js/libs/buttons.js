var post_url,request_method,form_data,forms,request_interacao,request_dotmap,request_homs;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function redirect(){
		var f1=request_interacao.responseJSON.n_de_respostas;
	    var f2=request_dotmap.responseJSON.n_de_respostas;
	    var f3=request_homs.responseJSON.n_de_respostas;
	    if(f1<f2&&f1<f3){
	    	//f1 menor
	    	window.location.href = 'https://edcleyjs.github.io/Interacao/';
	    }else if (f2<f1&&f2<f3) {
	    	//f2 menor
	    	window.location.href = 'https://edcleyjs.github.io/MapadePontos/';
	    }else if (f3<f1&&f3<f2) {
	    	//f3 menor
	    	window.location.href = 'https://edcleyjs.github.io/MapasHipoteticos/';
	    }else if (f1==f2&&f2!=f3) {
	    	//f1 ou f2 menor
	    	var rand=getRandomInt(1,2);
	    	if (rand==1) {
	    		window.location.href = 'https://edcleyjs.github.io/Interacao/';
	    	}else{
	    		window.location.href = 'https://edcleyjs.github.io/MapadePontos/';
	    	}
	    }else if (f1!=f2&&f2==f3) {
	    	//f2 ou f3 menor
	    	var rand=getRandomInt(2,3);
	    	if (rand==2) {
	    		window.location.href = 'https://edcleyjs.github.io/MapadePontos/';
	    	}else{
	    		window.location.href = 'https://edcleyjs.github.io/MapasHipoteticos/';
	    	}
	    }else if (f1!=f2&&f1==f3) {
	    	//f1 ou f3 menor
	    	var rand=getRandomInt(2,3);
	    	if (rand==2) {
	    		window.location.href = 'https://edcleyjs.github.io/Interacao/';
	    	}else{
	    		window.location.href = 'https://edcleyjs.github.io/MapasHipoteticos/';
	    	}
	    }else/*if(f1==f2&&f2==f3)*/{
	    	//todas com mesmo n de respostas
	    	var rand=getRandomInt(1,3);
	    	if (rand==1) {
	    		window.location.href = 'https://edcleyjs.github.io/Interacao/';
	    	}else if(rand==2){
	    		window.location.href = 'https://edcleyjs.github.io/MapadePontos/';
	    	}else{
	    		window.location.href = 'https://edcleyjs.github.io/MapasHipoteticos/';
	    	}
	    }
}
$(document).ready(function () {
		request_interacao = jQuery.ajax({
	      	crossDomain: true,
	      	url: "https://script.google.com/macros/s/AKfycby_DzDKpY66Ti9OBL9s22I8u06XgPFP_SyUnuhCbB7bl3rzwRMc/exec",
	      	method: "GET",
	      	dataType: "json"
	    });
		request_dotmap = jQuery.ajax({
	      	crossDomain: true,
	      	url: "https://script.google.com/macros/s/AKfycbxGJMYtzRu_4AgM8vhk38rpdI-bMVK5dGnCGJqiJvMv6ZC7nWNp/exec",
	      	method: "GET",
	      	dataType: "json"
	    });
	   	request_homs = jQuery.ajax({
	      	crossDomain: true,
	      	url: "https://script.google.com/macros/s/AKfycbzLOg-MT8Zic3zc1fQGDCPl6Upu769FP75yT3KPlpb1LYO0NNTh/exec",
	      	method: "GET",
	      	dataType: "json",
	    });
	$('#iniciar').click(function(){
		redirect();
    });
});