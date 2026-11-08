// --- LÓGICA DE MODAL Y CRUD ---

function abrirModal(id = null) {
    const modal = document.getElementById('product-modal');
    const form = document.getElementById('product-form');
    const title = document.getElementById('modal-title');
    if (!modal) return;

    form.reset();
    document.getElementById('prod-id').value = '';

    if (id !== null) {
        title.textContent = 'Editar Producto';
        const prod = productos.find(p => p.id === id);
        if (prod) {
            document.getElementById('prod-id').value = prod.id;
            document.getElementById('prod-nombre').value = prod.nombre;
            document.getElementById('prod-categoria').value = prod.categoria;
            document.getElementById('prod-precio').value = prod.precio;
            document.getElementById('prod-stock').value = prod.stock;
            document.getElementById('prod-stock-min').value = prod.stockMinimo;
            document.getElementById('prod-productor').value = prod.productor;
            document.getElementById('prod-ciudad').value = prod.ciudad;
        }
    } else {
        title.textContent = 'Agregar Nuevo Producto';
    }

    modal.style.display = 'flex';
}

function cerrarModal() {
    const modal = document.getElementById('product-modal');
    if (modal) modal.style.display = 'none';
}

// Escuchar evento submit del formulario del modal
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('product-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const idInput = document.getElementById('prod-id').value;
            const nombre = document.getElementById('prod-nombre').value.trim();
            const categoria = document.getElementById('prod-categoria').value;
            const precio = parseInt(document.getElementById('prod-precio').value);
            const stock = parseInt(document.getElementById('prod-stock').value);
            const stockMinimo = parseInt(document.getElementById('prod-stock-min').value);
            const productor = document.getElementById('prod-productor').value.trim();
            const ciudad = document.getElementById('prod-ciudad').value;

            if (idInput === "") {
                // CREAR NUEVO
                const nuevoId = productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1;
                const nuevoProducto = {
                    id: nuevoId,
                    nombre,
                    categoria,
                    precio,
                    stock,
                    stockMinimo,
                    productor,
                    ciudad,
                    organico: true,
                    fechaRegistro: new Date().toISOString().split('T')[0],
                    activo: true
                };
                productos.push(nuevoProducto);
            } else {
                // ACTUALIZAR EXISTENTE
                const id = parseInt(idInput);
                const index = productos.findIndex(p => p.id === id);
                if (index !== -1) {
                    productos[index].nombre = nombre;
                    productos[index].categoria = categoria;
                    productos[index].precio = precio;
                    productos[index].stock = stock;
                    productos[index].stockMinimo = stockMinimo;
                    productos[index].productor = productor;
                    productos[index].ciudad = ciudad;
                }
            }

            guardarEnLocalStorage();
            renderizarProductos(productos);
            actualizarKPIs();
            actualizarGrafico();
            cerrarModal();
        });
    }
});