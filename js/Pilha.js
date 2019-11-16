class Pilha {
    /**
     * Insere um item no topo da pilha.
     * @param {string} valor - Item a ser inserido.
     */
    inserir(valor) {
        this.pilha.push(valor);
    }
    
    /** Remove um item do topo da pilha. */
    remover() {
        return this.pilha.pop();
    }

    /**
     * Remove um item específico da pilha.
     * @param {string} valor - Item a ser removido.
     */
    removerItem(valor) {
        var pilha = new Pilha();

        while(!this.estaVazio()) {
            var item = this.remover();

            if(item != valor){
                pilha.inserir(item);
            }
        }

        while(!pilha.estaVazio()) {
            this.inserir(pilha.remover());
        }

        return valor;
    }
    
    /** Retorna o item no topo da pilha. */
    verTopo() {
        if(!this.estaVazio()){
            let ultimaPosicao = this.pilha.length - 1;
            return this.pilha[ultimaPosicao];
        }

        return "";
    }

    /** Retorna se a pilha está vazia ou não. */
    estaVazio() {
        if(this.pilha.length == 0){
            return true;
        }
    
        return false;
        
    }

    /**
     * Representa uma pilha.
     * @constructor
     */
    constructor() {
        this.pilha = [];
    }
}
