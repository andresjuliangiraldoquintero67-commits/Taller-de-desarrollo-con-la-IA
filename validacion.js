const CATEGORIAS_VALIDAS = ["Frutas y verduras", "Despensa", "Cuidado personal", "Hogar sostenible"];
const CIUDADES_VALIDAS = ["Bucaramanga", "Floridablanca", "Girón", "Bogotá", "Medellín", "Cali", "Tunja", "Cúcuta"];

function validarProductos(lista) {
    let errores = [];
    let idsVistos = new Set();

    if (!Array.isArray(lista)) {
        return [{ id: "General", campo: "dataset", descripcion: "El dataset no es un arreglo válido." }];
    }

    lista.forEach((prod, index) => {
        const idProd = prod.id !== undefined ? prod.id : `Índice ${index}`;

        // 1. Validar ID
        if (typeof prod.id !== 'number' || !Number.isInteger(prod.id) || prod.id <= 0) {
            errores.push({ id: idProd, campo: "id", descripcion: "El ID debe ser un número entero mayor que 0." });
        } else if (idsVistos.has(prod.id)) {
            errores.push({ id: idProd, campo: "id", descripcion: `El ID ${prod.id} está repetido.` });
        } else {
            idsVistos.add(prod.id);
        }

        // 2. Validar Nombre
        if (typeof prod.nombre !== 'string' || prod.nombre.trim().length < 3 || prod.nombre.trim().length > 80) {
            errores.push({ id: idProd, campo: "nombre", descripcion: "El nombre debe tener entre 3 y 80 caracteres." });
        }

        // 3. Validar Categoría
        if (!CATEGORIAS_VALIDAS.includes(prod.categoria)) {
            errores.push({ id: idProd, campo: "categoria", descripcion: `Categoría inválida: '${prod.categoria}'.` });
        }

        // 4. Validar Precio
        if (typeof prod.precio !== 'number' || !Number.isInteger(prod.precio) || prod.precio <= 0) {
            errores.push({ id: idProd, campo: "id", descripcion: "El precio debe ser un número entero positivo en COP." });
        }

        // 5. Validar Stock y Stock Mínimo
        if (typeof prod.stock !== 'number' || !Number.isInteger(prod.stock) || prod.stock < 0) {
            errores.push({ id: idProd, campo: "stock", descripcion: "El stock debe ser un entero mayor o igual a 0." });
        }
        if (typeof prod.stockMinimo !== 'number' || !Number.isInteger(prod.stockMinimo) || prod.stockMinimo < 0) {
            errores.push({ id: idProd, campo: "stockMinimo", descripcion: "El stock mínimo debe ser un entero mayor o igual a 0." });
        }

        // 6. Validar Productor
        if (typeof prod.productor !== 'string' || prod.productor.trim().length < 3 || prod.productor.trim().length > 80) {
            errores.push({ id: idProd, campo: "productor", descripcion: "El productor debe tener entre 3 y 80 caracteres." });
        }

        // 7. Validar Ciudad
        if (!CIUDADES_VALIDAS.includes(prod.ciudad)) {
            errores.push({ id: idProd, campo: "ciudad", descripcion: `Ciudad inválida: '${prod.ciudad}'.` });
        }

        // 8. Validar Booleanos
        if (typeof prod.organico !== 'boolean') {
            errores.push({ id: idProd, campo: "organico", descripcion: "El campo organico debe ser booleano (true/false)." });
        }
        if (typeof prod.activo !== 'boolean') {
            errores.push({ id: idProd, campo: "activo", descripcion: "El campo activo debe ser booleano (true/false)." });
        }

        // 9. Validar Fecha
        const regexFecha = /^\d{4}-\d{2}-\d{2}$/;
        if (typeof prod.fechaRegistro !== 'string' || !regexFecha.test(prod.fechaRegistro)) {
            errores.push({ id: idProd, campo: "fechaRegistro", descripcion: "Formato de fecha inválido (debe ser YYYY-MM-DD)." });
        } else {
            const fecha = new Date(prod.fechaRegistro);
            const inicio = new Date("2026-01-01");
            const fin = new Date("2026-11-03");
            if (fecha < inicio || fecha > fin) {
                errores.push({ id: idProd, campo: "fechaRegistro", descripcion: "La fecha está fuera del rango permitido (2026-01-01 a 2026-11-03)." });
            }
        }
    });

    return errores;
}