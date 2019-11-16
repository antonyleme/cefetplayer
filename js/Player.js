class Player {
    /** Método para ocultar o botão de play e mostrar o botão de pause. */
    mostraPause(){
        $('#playButton').addClass('d-none');
        $('#pauseButton').removeClass('d-none');
    }

    /** Método para ocultar o botão de pause e mostrar o botão de play. */
    mostraPlay(){
        $('#pauseButton').addClass('d-none');
        $('#playButton').removeClass('d-none');
    }

    /** Método para atualizar a música que está sendo mostrada em "Tocando agora" no player. */
    atualizaTocandoAgora() {
        $('#tocandoAgora').text(this.atual);
    }

    /** Método para atualizar a música que está sendo mostrada em "Próximo" no player. */
    atualizaProximo() {
        $('#proximo').text(this.fila.verInicio());
    }

    /** Método para atualizar a música que está sendo mostrada em "Anterior" no player. */
    atualizaAnterior() {
        $('#anterior').text(this.pilha.verTopo());
    }

    /** Método para tocar a próxima música do player. */
    passarMusica() {
        if(!this.fila.estaVazio()) {
            this.mostraPause();

            this.pilha.inserir(this.atual);
            this.atual = this.fila.remover();
            
            this.tocar();

            this.atualizaAnterior();
            
        }
    }

    /** Método para tocar a música anterior do player. */
    voltarMusica() {
        if(!this.pilha.estaVazio()) {
            this.mostraPause();
            
            this.fila.inserirInicio(this.atual);
            this.atual = this.pilha.remover();
            
            this.tocar(this.atual);

            this.atualizaAnterior();
        }
    }

    /** Método para tocar a próxima música do player. */
    tocar() {
        this.pausar();
        this.musica = new Musica(this.atual, this);
        this.musica.tocar();
        this.atualizaTocandoAgora();
        this.atualizaProximo();
        this.atualizaAnterior();
        $(document).prop('title', this.musica.getNome());
    }

    /** Método para pausar a música do player. */
    pausar() {
        this.musica.pausar();
    }

    /** Método para retornar a música que está sendo tocada no player. */
    getAtual() {
        return this.atual;
    }

    /** 
     * Método para definir a música que está sendo tocada no player. 
     * @param {string} atual - Nome da música que será tocada.
    */
    setAtual(atual) {
        this.atual = atual;
    }

    /** 
     * Representa um player de música. 
     * @constructor
    */
    constructor() {
        this.fila = new Fila();
        this.pilha = new Pilha();
        this.atual = null;
        this.musica = null;
    }
}