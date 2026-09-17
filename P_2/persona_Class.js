
class Persona extends Validaciones{

    constructor(){
        
        super();
        this.dom = new Dom();
    }

    ADD_dni_validation(){
        if(!this.min_size('dni', 9)){
            this.dom.mostrar_error_campo('dni', 'dni_min_size_KO');

            return 'dni_min_size_KO';
        }

        if(!this.max_size('dni', 9)){
            this.dom.mostrar_error_campo('dni', 'dni_max_size_KO');

            return 'dni_max_size_KO';
        }

        if(!this.format('dni', '[0-9]{8}[A-Z]{1}')){

            this.dom.mostrar_error_campo('dni', 'dni_format_KO');

            return 'dni_format_KO';
        }

        this.dom.mostrar_exito_campo('dni');
        return true;
    }

    ADD_nombre_persona_validation() {

    if (!this.min_size('nombre_persona', 3)) {

        this.dom.mostrar_error_campo(
            'nombre_persona',
            'nombre_persona_min_size_KO'
        );

        return 'nombre_persona_min_size_KO';
    }


    if (!this.max_size('nombre_persona', 15)) {

        this.dom.mostrar_error_campo(
            'nombre_persona',
            'nombre_persona_max_size_KO'
        );

        return 'nombre_persona_max_size_KO';
    }

    if (!this.format('nombre_persona', '[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+')) {

    this.dom.mostrar_error_campo(
        'nombre_persona',
        'nombre_persona_format_KO'
    );

    return 'nombre_persona_format_KO';
}


    this.dom.mostrar_exito_campo('nombre_persona');

    return true;
}

    ADD_apellidos_persona_validation() {

        if (!this.min_size('apellidos_persona', 3)) {

            this.dom.mostrar_error_campo(
                'apellidos_persona',
                'apellidos_persona_min_size_KO'
            );

            return 'apellidos_persona_min_size_KO';
        }

        if (!this.max_size('apellidos_persona', 30)) {

            this.dom.mostrar_error_campo(
                'apellidos_persona',
                'apellidos_persona_max_size_KO'
            );

            return 'apellidos_persona_max_size_KO';
        }

        if (!this.format('apellidos_persona', '[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+')) {

            this.dom.mostrar_error_campo(
                'apellidos_persona',
                'apellidos_persona_format_KO'
            );

            return 'apellidos_persona_format_KO';
        }

        this.dom.mostrar_exito_campo('apellidos_persona');

        return true;
}

ADD_fechaNacimiento_persona_validation() {

    if (!this.format('fechaNacimiento_persona', '[0-9]{2}/[0-9]{2}/[0-9]{4}')) {

        this.dom.mostrar_error_campo(
            'fechaNacimiento_persona',
            'fechaNacimiento_persona_format_KO'
        );

        return 'fechaNacimiento_persona_format_KO';
    }

    this.dom.mostrar_exito_campo('fechaNacimiento_persona');

    return true;
}

ADD_direccion_persona_validation() {

    if (!this.min_size('direccion_persona', 5)) {

        this.dom.mostrar_error_campo(
            'direccion_persona',
            'direccion_persona_min_size_KO'
        );

        return 'direccion_persona_min_size_KO';
    }

    if (!this.max_size('direccion_persona', 100)) {

        this.dom.mostrar_error_campo(
            'direccion_persona',
            'direccion_persona_max_size_KO'
        );

        return 'direccion_persona_max_size_KO';
    }

    this.dom.mostrar_exito_campo('direccion_persona');

    return true;
}

ADD_telefono_persona_validation() {

    if (!this.format('telefono_persona', '[0-9]{9}')) {

        this.dom.mostrar_error_campo(
            'telefono_persona',
            'telefono_persona_format_KO'
        );

        return 'telefono_persona_format_KO';
    }

    this.dom.mostrar_exito_campo('telefono_persona');

    return true;
}

ADD_email_persona_validation() {

    if (!this.format(
        'email_persona',
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'
    )) {

        this.dom.mostrar_error_campo(
            'email_persona',
            'email_persona_format_KO'
        );

        return 'email_persona_format_KO';
    }

    this.dom.mostrar_exito_campo('email_persona');

    return true;
}

ADD_nuevo_foto_persona_validation() {

    if (!this.exist_file('nuevo_foto_persona')) {

        this.dom.mostrar_error_campo(
            'nuevo_foto_persona',
            'nuevo_foto_persona_exist_file_KO'
        );

        return 'nuevo_foto_persona_exist_file_KO';
    }

    if (!this.type_file(
        'nuevo_foto_persona',
        ['image/jpeg', 'image/png', 'image/gif']
    )) {

        this.dom.mostrar_error_campo(
            'nuevo_foto_persona',
            'nuevo_foto_persona_type_file_KO'
        );

        return 'nuevo_foto_persona_type_file_KO';
    }

    if (!this.max_size_file('nuevo_foto_persona', 2 * 1024 * 1024)) {

        this.dom.mostrar_error_campo(
            'nuevo_foto_persona',
            'nuevo_foto_persona_max_size_file_KO'
        );

        return 'nuevo_foto_persona_max_size_file_KO';
    }

    this.dom.mostrar_exito_campo('nuevo_foto_persona');

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

    set_result.apellidos_persona =
        this.ADD_apellidos_persona_validation();

    set_result.fechaNacimiento_persona =
        this.ADD_fechaNacimiento_persona_validation();

    set_result.direccion_persona = 
        this.ADD_direccion_persona_validation();

    set_result.telefono_persona = 
        this.ADD_telefono_persona_validation();

    set_result.email_persona =
        this.ADD_email_persona_validation();

    set_result.nuevo_foto_persona =
        this.ADD_nuevo_foto_persona_validation();

    // Comprobamos si todos los campos son correctos
    let result = (
        set_result.dni === true &&
        set_result.nombre_persona === true &&
        set_result.apellidos_persona === true &&
        set_result.fechaNacimiento_persona === true &&
        set_result.direccion_persona === true &&
        set_result.telefono_persona === true &&
        set_result.email_persona === true &&
        set_result.nuevo_foto_persona === true
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