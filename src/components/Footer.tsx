// components/Footer.tsx
import {
    Box,
    Button,
    Container,
    Flex,
    Text,
    Link,
    IconButton
  } from '@chakra-ui/react'
  import { FaInstagram, FaFacebook, FaTiktok, FaTwitter, FaLinkedin } from 'react-icons/fa'
  import NextLink from 'next/link'
  import Image from 'next/image'
  import logo2 from '../../public/LOGO2.png'
import React from 'react'
  
  const Footer = () => {
    const brandColor = "#d2ac71"
    const hoverColor = "#c09a5f"
  
    return (
      <Box as="footer" bg="black" color="white" py={8}>
        <Container maxW="container.xl">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify={{ base: 'center', md: 'space-between' }}
            align="center"
            wrap="wrap"
          >
            {/* Logo and Tagline Section */}
            <Flex direction="column" align={{ base: 'center', md: 'flex-start' }} mb={{ base: 6, md: 0 }}>
              <Box mb={3} position="relative" width="184px" height="60px">
                <Image
                  src={logo2}
                  alt='LOGO'
                  width={184}
                  height={60}
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                />
              </Box>
  
              {/* Tagline */}
              <Text
                fontSize="xl"
                fontWeight="medium"
                mb={4}
                maxW="sm"
                lineHeight="1.6"
                color="white"
                textAlign={{ base: 'center', md: 'left' }}
              >
                Lorem, Ipsum Lorem, Ipsum Lorem, Ipsum or less.
              </Text>
  
              {/* Discover More Button */}
              <Button
                as={NextLink}
                href="/discover"
                borderRadius="full"
                px={8}
                py={5}
                fontSize="sm"
                fontWeight="semibold"
                bg={brandColor}
                color="white"
                _hover={{ bg: hoverColor }}
              >
                Discover More
              </Button>
  
              {/* Navigation Links */}
              <Flex mt={6} flexWrap="wrap" fontSize="sm" fontWeight="medium" justify={{ base: 'center', md: 'flex-start' }}>
                <Link
                  as={NextLink}
                  href="/"
                  mr={4}
                  mb={{ base: 2, md: 0 }}
                  color="white"
                  _hover={{ color: brandColor }}
                >
                  Home
                </Link>
                <Text as={NextLink} href="/egybook" mr={4} mb={{ base: 2, md: 0 }}>
                  <Text as="span" color={brandColor}>Egy</Text>
                  <Text as="span" color="white">Book</Text>
                </Text>
                <Text as={NextLink} href="/egyexplore" mr={4} mb={{ base: 2, md: 0 }}>
                  <Text as="span" color={brandColor}>Egy</Text>
                  <Text as="span" color="white">Explore</Text>
                </Text>
                <Text as={NextLink} href="/egytales" mr={4} mb={{ base: 2, md: 0 }}>
                  <Text as="span" color={brandColor}>Egy</Text>
                  <Text as="span" color="white">Tales</Text>
                </Text>
                <Text as={NextLink} href="/egytreasure" mb={{ base: 2, md: 0 }}>
                  <Text as="span" color={brandColor}>Egy</Text>
                  <Text as="span" color="white">Treasure</Text>
                </Text>
              </Flex>
            </Flex>
  
            {/* Social Media & Copyright */}
            <Flex direction="column" align={{ base: 'center', md: 'flex-end' }}>
              {/* Social Icons */}
              <Flex mb={4}>
                {[
                  { icon: FaInstagram, label: "Instagram" },
                  { icon: FaFacebook, label: "Facebook" },
                  { icon: FaTiktok, label: "TikTok" },
                  { icon: FaTwitter, label: "Twitter" },
                  { icon: FaLinkedin, label: "LinkedIn" }
                ].map(({ icon, label }, idx) => (
                  <IconButton
                    key={idx}
                    aria-label={label}
                    icon={React.createElement(icon)}
                    bg={brandColor}
                    color="white"
                    borderRadius="xl"
                    boxSize="48px"
                    fontSize="20px"
                    mx={1}
                    _hover={{
                      bg: hoverColor,
                      transform: 'scale(1.05)',
                      boxShadow: '0 0 6px #d2ac71'
                    }}
                    transition="all 0.2s"
                  />
                ))}
              </Flex>
  
              {/* Copyright */}
              <Text fontSize="xs" color="white" textAlign={{ base: 'center', md: 'right' }}>
                Copyright Gates of Egypt © 2024
              </Text>
              <Text fontSize="xs" color="white" textAlign={{ base: 'center', md: 'right' }}>
                All rights reserved
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
    )
  }
  
  export default Footer
  