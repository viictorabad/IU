
class Persona{

    constructor(){
        this.dom = new Dom();

        this.validaciones = new Validaciones();
    }

    ADD_dni_validation(){
        if(!this.validaciones.min_size('dni', 9)){
            this.dom.mostrar_error_campo('dni', 'dni_min_size_KO');

            return 'dni_min_size_KO';
        }

        if(!this.validaciones.max_size('dni', 9)){
            this.dom.mostrar_error_campo('dni', 'dni_max_size_KO');

            return 'dni_max_size_KO';
        }

        if(!this.validaciones.format('dni', '[0-9]{8}[A-Z]{1}')){

            this.dom.mostrar_error_campo('dni', 'dni_format_KO');

            return 'dni_format_KO';
        }

        this.dom.mostrar_exito_campo('dni');
        return true;
    }

    ADD_nombre_persona_validation() {

    if (!this.validaciones.min_size('nombre_persona', 3)) {

        this.dom.mostrar_error_campo(
            'nombre_persona',
            'nombre_persona_min_size_KO'
        );

        return 'nombre_persona_min_size_KO';
    }


    if (!this.validaciones.max_size('nombre_persona', 15)) {

        this.dom.mostrar_error_campo(
            'nombre_persona',
            'nombre_persona_max_size_KO'
        );

        return 'nombre_persona_max_size_KO';
    }


    this.dom.mostrar_exito_campo('nombre_persona');

    return true;
}

ADD_submit_persona() {

    // Objeto donde guardaremos el resultado
    let set_result = {};


    // Validamos el DNI
    set_result.dni = this.ADD_dni_validation();


    // Validamos el nombre
    set_result.nombre_persona =
        this.ADD_nombre_persona_validation();


    // Comprobamos si todos los campos son correctos
    let result = (
        set_result.dni === true &&
        set_result.nombre_persona === true
    );


    // Si todo es correcto devolvemos true
    if (result === true) {

        return true;

    } else {

        // Si hay algún error devolvemos el objeto
        return set_result;
    }
}

}