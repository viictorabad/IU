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

     exist_file(id) {
        let objfile = document.getElementById(id);

        if (objfile == null || objfile.files.length === 0) {
            return false;
        }

        return true;
    }

    max_size_file(id, maxsize) {
        let objfile = document.getElementById(id);

        if (objfile == null || objfile.files.length === 0) {
            return false;
        }

        if (objfile.files[0].size > maxsize) {
            return false;
        }

        return true;
    }

    type_file(id, array_tipos) {
        let objfile = document.getElementById(id);

        if (objfile == null || objfile.files.length === 0) {
            return false;
        }

        if (!array_tipos.includes(objfile.files[0].type)) {
            return false;
        }

        return true;
    }

    format_name_file(id, expresion) {
        let objfile = document.getElementById(id);

        if (objfile == null || objfile.files.length === 0) {
            return false;
        }

        let expresionRegular = new RegExp(expresion);

        let valor = objfile.files[0].name;

        return expresionRegular.test(valor);
    }


}