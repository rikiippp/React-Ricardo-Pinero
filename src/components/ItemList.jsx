import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <>
      {productos.map((p) => {
        return (
          <Item
            key={p.id}
            id={p.id}
            image={p.image}
            categoria={p.categoria}
            nombre={p.nombre}
            descripcion={p.descripcion}
            precio={p.precio}
          />
        );
      })}
    </>
  );
}

export default ItemList