import { useParams } from "react-router-dom";
import { Card, CardBody, Stack, Heading, Divider, CardFooter, Text } from '@chakra-ui/react'
import ItemCount from "./ItemCount";



const ItemDetail = ({ productos }) => {

  const { id } = useParams()

  const productosFiltrados = productos.filter((producto) => producto.id == id)

  console.log(productosFiltrados)

  return (
    <>
      {
        productosFiltrados.map((p) => {
          return (
            <Card maxW='sm' m='auto' gap='4' key={p.id}>
              <CardBody>
                <Stack mt='6' spacing='3'>
                  <img src={p.img} alt="Imagenes de los productos" />
                  <Heading size='md'>{p.nombre}</Heading>
                </Stack>
                <Text>{p.descripcion}</Text>
                <Text>${p.precio}</Text>
              </CardBody>
              <Divider />
              <CardFooter>
                <ItemCount/>
              </CardFooter>
            </Card>

          )
        })

      }

    </>
  )
}

export default ItemDetail