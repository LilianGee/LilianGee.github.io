///// MENU ON SCROLL /////
$(window).scroll(function (event) {
	var y = $(this).scrollTop(); //setta posição no topo
	if (y >= 300) { // altura em pixels onde a mudança ocorre
		$('.navbar').addClass('scrolled'); // adiciona a classe scrolled no elemento com classe navbar
	} else {
		$('.navbar').removeClass('scrolled'); // remove a classe scrolled no elemento com classe navbar
	}
});


///// HAMBURGUER MENU /////
$("#burger").click(function () { // setta elemento do ID como alvo da função click
	$("#burger, #burgermenu").toggleClass("active"); //seleciona os elementos com ID e acrescenta a classe active se não existir, remove a classe active se ela existir
});


///// BARRA DE BUSCA /////
$(".fa-search").click(function () { // setta elemento da classe como alvo da função click
	$("#buscar").toggleClass("active"); //seleciona o elemento com ID e acrescenta a classe active se não existir, remove a classe active se ela existir
});


///// SETINHA DE SCROLL /////
$("#down").click(function () {
	$('html, body').animate({
        scrollTop: $("#fazemos").offset().top
    }, 1000);
});