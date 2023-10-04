import logoNav from '../assets/logo_hogar.png';
import { Box, Flex, Menu, MenuButton, MenuList, MenuItem, Spacer } from '@chakra-ui/react';
import CartWidget from './CartWidget';


const NavBar = () => {
  return (
    <>
      <Box as="nav" bg="#07110e">
        <Flex alignItems="center" justifyContent="space-between">
          <Box p="4">
            <a href="./index.html"><img className='logoNavBar' src={logoNav} alt="Logo Navbar" /></a>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <MenuButton color="white" bg="#398378" p="2" pr="5" pl="5" borderRadius="5px">
                Productos
              </MenuButton>
              <MenuList border="1px" borderColor="#07110e">
                <MenuItem>Lamparas</MenuItem>
                <MenuItem>Muebles</MenuItem>
                <MenuItem>Luces</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="10">
            <CartWidget/>
          </Box>
        </Flex>
      </Box>

    </>
  )
}

export default NavBar