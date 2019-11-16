class Fila {
    /**
     * Representa uma fila.
     * @constructor
     */
    constructor() {
        this.fila = [];
    }

    /**
     * Insere um nome no fim da fila.
     * @param {string} valor - Nome a ser inserido.
     */
    inserir(valor) {
        this.fila.push(valor.replace(".mp3", ""));
    }

    /**
     * Insere um nome no início da fila.
     * @param {string} valor - Nome a ser inserido.
     */
    inserirInicio(valor){
        var fila = new Fila();
        fila.inserir(valor);

        while(!this.estaVazio()) {
            fila.inserir(this.remover());
        }

        while(!fila.estaVazio()){
            this.inserir(fila.remover());
        }
    }
    
    /** Remove do início da fila. */
    remover() {
        return this.fila.shift();
    }

    /**
     * Remove um item da fila.
     * @param {string} valor - Nome a ser removido da fila. 
     */
    removerItem(valor) {
        var fila = new Fila();

        while(!this.estaVazio()) {
            var item = this.remover();

            if(item != valor){
                fila.inserir(item);
            }
        }

        while(!fila.estaVazio()) {
            this.inserir(fila.remover());
        }

        return valor;
    }
    
    /** Método para ver o primeiro item da fila. */
    verInicio() {
        if(!this.estaVazio()) {
            return this.fila[0];
        }
    
        return "";
        
    }

    /** Retorna o último item da fila. */
    verFim() {
        return this.fila[this.fila.length - 1];
    }

    /** Retorna a fila inteira. */
    verFila() {
        return this.fila;
    }

    /** Retorna se a fila está vazia ou não. */
    estaVazio() {
        if(this.fila.length == 0) {
            return true;
        } else {
            return false;
        }
    }
}
