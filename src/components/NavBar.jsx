import logoNav from '../assets/logo_hogar.png';
import { Box, Flex, Menu, MenuButton, MenuList, MenuItem, Spacer } from '@chakra-ui/react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
      <Box as="nav" bg="#07110e">
        <Flex alignItems="center" justifyContent="space-between">
          <Box p="4">
            <Link to={"/"}>
            <img className='logoNavBar' src={logoNav} alt="Logo Navbar" />
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <MenuButton color="white" bg="#398378" p="2" pr="5" pl="5" borderRadius="5px">
                Productos
              </MenuButton>
              <MenuList border="1px" borderColor="#07110e">
                <Link to={`/categorias/${"iluminación"}`}>
                <MenuItem>Iluminación</MenuItem>
                </Link>
                <Link to={`/categorias/${"muebles"}`}>
                <MenuItem>Muebles</MenuItem>
                </Link>
                <Link to={`/categorias/${"plantas"}`}>
                <MenuItem>Plantas</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="10">
            <Link to={"/cart"}>
            <CartWidget/>
            </Link>
          </Box>
        </Flex>
      </Box>

    </>
  )
}

export default NavBar