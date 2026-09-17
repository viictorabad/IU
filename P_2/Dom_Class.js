class Dom{

    constructor(){

    }

    show_element(id){
        document.getElementById(id).style.display='block';
    }

    hide_element(id){
        document.getElementById(id).style.display='none';
    }
    
    mostrar_error_campo(id, codigoerror){
        document.getElementById('span_error_' + id).style.display = 'inline';

        document.getElementById('error_' + id).innerHTML = codigoerror;

        document.getElementById(id).style.borderBlockColor = 'red';

        document.getElementById('submit_button').focus();

    }

    mostrar_exito_campo(id){
        document.getElementById('span_error_' + id).style.display = 'none';

        document.getElementById('error_' + id).innerHTML = '';

        document.getElementById(id).style.borderBlockColor = 'green';
    }

    
}