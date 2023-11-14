import {Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({nombre, id, img}) => {


  return (
    <div >
      <Card maxW='sm' m='auto' gap='4' borderRadius='10px'>
        <CardBody>
          <Stack mt='6' spacing='3'>
            <img src={img} alt="Imagenes de los productos" />
            <Heading size='md'>{nombre}</Heading>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              <Link to={`/productos/${id}`}>
              Ver detalle
              </Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

    </div>
  )
}

export default Item