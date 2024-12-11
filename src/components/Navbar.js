import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Flex, Link } from '@chakra-ui/react'


const Navbar = () => {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/services', label: 'Services' },
  ]

  return (
    <Flex
      as='nav'
      bg='gray.100'
      p='4'
      justify={{ base: 'center', md: 'space-between' }}
      align='center'
      wrap='wrap'
      direction={{ base: 'column', md: 'row' }}
    >
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'blue' : 'black',
            fontWeight: isActive ? 'bold' : 'normal',
            margin: '0 10px',
          })}
        >
          <Box
            as={Link}
            _hover={{ color: 'blue.500' }}
            px={2}
            py={1}
            borderRadius='md'
          >
            {link.label}
          </Box>
        </NavLink>
      ))}
    </Flex>
  )
}

export default Navbar
