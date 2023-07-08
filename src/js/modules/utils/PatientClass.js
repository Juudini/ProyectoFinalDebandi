export class Patient {
    constructor(dni, apellido, nombre, email, telefono) {
        this.dni = dni;
        this.apellido = apellido;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
    updateTelefono(newTelefono) {
        this.telefono = newTelefono;
    }
    updateEmail(newEmail) {
        this.email = newEmail;
    }
}
