player = new Player();

$(document).ready(function() {
    var request;

    request = $.ajax({
        url: "arquivos.php",
        method: "get",
        datatype: "json"
    });

    //Requisição ao servidor para pegar a listagem de músicas no mesmo
    request = $.ajax({
        url: "arquivos.php",
        method: "get",
        datatype: "json"
    });

    request.done(function(data) {
        data = JSON.parse(data);
        
        //Inserindo os arquivos na listagem de músicas no front-end.
        jQuery.each(data, function(i, val) {
            //Inserindo todos os arquivos na fila
            player.fila.inserir(val);

            $('#listaDeMusicas').append(
                '<tr>' +
                    '<th scope="row" class="numero">' + (i - 1) + '</th>' +
                    '<td>' + player.fila.verFim() + '</td>' +
                    '<td><button class="btn tocarButton text-white p-0" data-name="' + player.fila.verFim() + '">Tocar</button></td>' + 
                    '<td><button class="btn filaButton text-white p-0" data-name="' + player.fila.verFim() + '">Adicionar à fila</button></td>' +
                '</tr>'
            );

            
        });

        player.atual = player.fila.remover();
        player.musica = new Musica(player.atual, player);

        player.atualizaProximo();
        player.atualizaTocandoAgora();
    });
});

$('#playButton').click(function(){
    player.mostraPause();
    player.tocar();

    player.atualizaTocandoAgora();
    player.atualizaProximo();
    player.atualizaAnterior();
});

$('#pauseButton').click(function(){
    player.mostraPlay();
    player.pausar();
});

$('#forwardButton').click(function(){
    player.passarMusica();
});

$('#backwardButton').click(function(){
    player.voltarMusica();
});

$(document).on('click', '.tocarButton',function() {
    var nome = $(this).attr('data-name');
    if(player.atual != nome) {
        player.pilha.inserir(player.atual);
    }

    //Caso o elemento já esteja em uma das duas estruturas, será removido e adicionado ao início da fila
    player.pilha.removerItem(nome);
    player.fila.removerItem(nome);

    player.setAtual(nome);

    player.tocar();
    player.mostraPause();

});

$(document).on('click', '.filaButton',function() {
    var nome = $(this).attr('data-name');
    //Caso o elemento já esteja em uma das duas estruturas, será removido e adicionado ao fim da fila
    
    player.fila.removerItem(nome);
    player.fila.inserir(nome);
    
    if(player.getAtual() == nome) {
        player.passarMusica();
    }

    player.pilha.removerItem(nome);

    player.atualizaProximo();
    player.atualizaAnterior();
});