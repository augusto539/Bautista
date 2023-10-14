import { useParams } from 'react-router-dom';

import {ContextoProductos, actualizarCarrito} from '../App'

import { useContext } from 'react';

const ItemDetailContainer = ({ match }) => {
    let { id } = useParams();
    // Suponiendo que tienes un conjunto de productos con detalles
    const productos = useContext(ContextoProductos);

    const productoId = parseInt(id);
    const producto = productos.find(p => p.id === productoId);

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="detalle-producto">
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>

            <button onClick={actualizarCarrito(producto.id, producto.cantidad + 1)}>
                agregar
            </button>
            {/* Agrega más detalles según sea necesario */}
        </div>
    );
}

export default ItemDetailContainer;