export class persona {
    idpersona?: number;
    apellidos?:string;
    nombres?:string;
    direccion?:string;
    telefono?: string;
    estado?: boolean;
}

export class alumno {
    idalumno?: number;
    escuela?: string;
    idpersona?: number;
    estado?: boolean;
}

export class curso {
    idcurso?: number;
    idtutor?: number;
    idalumno?: number;
    nombre?: string;
    meses?: string;
    fecha_inicio?: string;
    fecha_fin?: string;
    estado?: boolean;
}

export class tutor {
    idtutor?: number;
    especialidad?: string;
    idpersona?: number;
    estado?: boolean;
}

export class usuarios {
    idusuario?: number;
    username?: string;
    password?: string;
    idpersona?: number;
    idrol?: number;
    estado?: boolean;
}

export class roles {
    idrol?: number;
    nombre?: string;
    estado?: boolean;
}

export class actividades {
    idactividad?: number;
    idcurso?: number;
    nombre?: string;
    descripcion?: string;
    fecha_inicio?: string;
    fecha_fin?: string;
    estado?: boolean;
}

export class documentos {
    iddocumento?: number;
    idactividad?: number;
    nombre?: string;
    comentarios?: string;
    estado?: boolean;
}

export class validarUsuario {
    idpersona?: number;
    idusuario?: number;
    user?: string;
    rol?: string;
    password?: any;
    nombres?: string;
}