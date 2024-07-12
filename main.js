$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endercoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style=" display: none;" ></li>');
        $(`<img src="${endercoDaNovaImagem}" />`).appendTo(novoItem);
        $(`<div class="overlery-imagemLink"> 
            <a href="${endercoDaNovaImagem}"  title="Ver imagem tamanho real" target="_blank">
            Ver imagem tamanho real 
            </a>
            </div> `
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000); 
        $('#endereco-imagem-nova').val('')
    })



})

