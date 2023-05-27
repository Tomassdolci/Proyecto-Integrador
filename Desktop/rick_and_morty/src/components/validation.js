export default (data) => {
    let errors = {};

    if (!data.email.includes("@")) {
        errors.e1 = "Email inválido"
    }
    if (!data.email) {
        errors.e2 = "Ingrese Email"
    }
    if (!data.email.length > 35) {
        errors.e3 = "Menos de 35 caracteres"
    }
    if (!/\d/.test(data.password)) {
        errors.p1 = "Al menos debe tener un numero"
    }
    if (data.password.length < 6) {
        errors.p2 = "Al menos debe tener 6 caracteres"
    }
    if (data.password.length > 10) {
        errors.p3 = "Debe tener 10 o menos caracteres"
    }
    return errors
}
