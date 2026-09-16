class Validaciones{
    min_size(id, minsize){
        let elemento = document.getElementById(id);

        if(elemento == null){
            return false;
        }

        let valor = elemento.value;

        if(valor.length < minsize){
            return false;
        }

        return true;
    }

    max_size(id, maxsize){
        let elemento = document.getElementById(id);

        if(elemento == null){
            return false;
        }

        let valor = elemento.value;

        if (valor.length > maxsize) {
            return false;
        }

        return true;
    }

    format(id, expresion){
        let elemento = document.getElementById(id);

        if (elemento == null){
            return false;
        }

        let valor = elemento.value;

        let expresionRegular = new RegExp('^' + expresion + '$');

        return expresionRegular.test(valor);
    }

}