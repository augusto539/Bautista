import { ContextoProductos } from '../App'

import { useContext } from 'react';

const Carrito = () => {
    const productos = useContext(ContextoProductos);

    const carrito = productos.filter((producto) => producto.cantidad > 0)

    return (
        <div className='carrito'>
            <h2>carrito</h2>
            <ul>
                {carrito.map(producto => (
                    <li key={producto.id}>
                        <span>{producto.nombre}</span>
                        <span>${producto.precio}</span>
                        <Link to={`/producto/${producto.id}`}>Ver Detalles</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Carrito;
