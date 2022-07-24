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