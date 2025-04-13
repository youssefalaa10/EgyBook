"use client";

import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Text,
  HStack,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FaSearch,
  FaGlobe,
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
export default function Navbar() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [activeLink, setActiveLink] = useState("EgyBook");

  const links = ["GOE", "EgyBook", "EgyExplore", "EgyTales", "EgyTreasure"];

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <Box bg="background" py={3} px={4} w="full">
      <Container maxW="7xl">
        <Flex justify="space-between" align="center" flexWrap="wrap">
          {/* Logo */}
          <Flex align="center" gap={1} cursor="pointer">
          <Image
                src={logo}
                alt='LOGO'
                width={80}
                height={50}
                style={{ objectFit: "cover" }}
                placeholder="blur"
              />
          </Flex>

          {/* Navigation Links */}
          {!isMobile && (
            <HStack spacing={6}>
              <HStack
                spacing={1}
                border="1px solid"
                background={"gray.900"}
                rounded="full"
                px={1}
                py={1}
                cursor="pointer"
              >
                <IconButton
                  aria-label="Search"
                  icon={<FaSearch />}
                  variant="ghost"
                  color="brand.500"
                  _hover={{ bg: "gray.800" }}
                  size="sm"
                />
              </HStack>
              {links.map((link) => (
                <Link key={link} href="#">
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    color={activeLink === link ? "white" : "gray.400"}
                    _hover={{ color: "brand.500" }}
                    transition="color 0.3s"
                    onClick={() => handleLinkClick(link)}
                  >
                    {link.startsWith("Egy") ? (
                      <>
                        <Text as="span" color="brand.500">
                          Egy
                        </Text>
                        {link.replace("Egy", "")}
                      </>
                    ) : (
                      link
                    )}
                  </Text>
                </Link>
              ))}
            </HStack>
          )}

          {/* Icons */}
          <HStack spacing={4}>
            {/* Language */}

            <FaGlobe size={12} color="#e2e8f0" />
            <Text color="gray.300" fontSize="sm">
              EN
            </Text>

            <Text color="gray.300" fontSize="sm">
              |
            </Text>
            {/* Other Icons */}
            <IconButton
              aria-label="Favorites"
              icon={<FaHeart />}
              variant="ghost"
              color="gray.300"
              _hover={{ bg: "gray.800" }}
              size="sm"
            />
            <IconButton
              aria-label="Cart"
              icon={<FaShoppingCart />}
              variant="ghost"
              color="gray.300"
              _hover={{ bg: "gray.800" }}
              size="sm"
            />
            <Box cursor="pointer">
              <FaUserCircle size={28} color="#f5e8d7" />
            </Box>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
