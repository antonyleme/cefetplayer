class Musica {
    /** Define o nome da música. */
    setNome(nome) {
        return nome.replace(".mp3", "");
    }

    /** Retorna o nome da música. */
    getNome() {
        return this.nome;
    }
    
    /** Define o caminho da música. */
    setPath() {
        return "/audios/" + this.nome.replace(" ", "%20") + ".mp3";
    }
    
    /** Método para tocar a música. */
    tocar() {
        this.audio.play();
    }
    
    /** Método para pausar a música. */
    pausar() {
        this.audio.pause();
    }

    /**
     * Representa uma música.
     * @param {string} nome - Nome da música. 
     * @param {Player} player 
     */
    constructor(nome, player) {
        this.nome = this.setNome(nome);
        this.path = this.setPath();
        this.audio = new Audio(this.path);
        this.player = player;

        this.audio.addEventListener('ended', function() {
            this.currentTime = 0;
            player.passarMusica();
        }, false);
    }
}
