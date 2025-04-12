"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Button,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from "react-icons/fa";
import Image from "next/image";
import heroImg from "../../public/HeroBG.png";

export default function Hero() {
  return (
    <Box
      position="relative"
      height={{ base: "100vh", md: "600px" }}
      width="full"
      overflow="hidden"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
      >
        <Image
          src={heroImg}
          alt="Luxury Egyptian hotel room with pyramids view"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        {/* Overlay */}
        <Box
          bg="blackAlpha.700"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
      </Box>

      {/* Foreground Content */}
      <Container
        maxW="container.xl"
        height="full"
        zIndex={2}
        position="relative"
      >
        <Flex direction="column" justify="center" height="full" py={10}>
          {/* Location */}
          <HStack spacing={2} mb={3}>
            <Icon as={FaMapMarkerAlt} color="white" />
            <Text color="white" fontWeight="medium">
              Egypt
            </Text>
          </HStack>

          {/* Headings */}
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            color="white"
            mb={2}
          >
            Hey, Bishoy!
          </Heading>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="semibold"
            color="white"
            mb={4}
          >
            Tell us where you want to stay
          </Heading>
          <Text color="white" fontSize="lg" mb={8}>
            Book 450+ Curated Egyptian Hotels
          </Text>

          {/* Search Bar */}
          <Flex
            bg="whiteAlpha.100"
            backdropFilter="blur(20px)"
            borderRadius="full"
            overflow="hidden"
            border="1px solid"
            borderColor="whiteAlpha.300"
            direction={{ base: "column", md: "row" }}
            align="center"
            py={1}
          >
            {/* Location */}
            <Flex
              px={5}
              py={4}
              align="center"
              flex="1.5"
              borderRight={{ md: "1px solid" }}
              borderColor="whiteAlpha.300"
            >
              <Icon as={FaMapMarkerAlt} color="brand.500" mr={2} />
              <Text color="white">Cairo, Egypt</Text>
            </Flex>

            {/* Dates */}
            <Flex
              px={5}
              py={4}
              align="center"
              flex="2"
              borderRight={{ md: "1px solid" }}
              borderTop={{ base: "1px solid", md: "none" }}
              borderColor="whiteAlpha.300"
            >
              <Icon as={FaCalendarAlt} color="brand.500" mr={2} />
              <Text color="white">19 March 2025 - 27 March 2025</Text>
            </Flex>

            {/* Guests */}
            <Flex
              px={5}
              py={4}
              align="center"
              flex="1.5"
              borderRight={{ md: "1px solid" }}
              borderTop={{ base: "1px solid", md: "none" }}
              borderColor="whiteAlpha.300"
            >
              <Icon as={FaUsers} color="brand.500" mr={2} />
              <Text color="white">2 Adults, 1 Child, 1 Infant</Text>
            </Flex>

            {/* Button */}
            <Box
              py={{ base: 4, md: 0 }}
              px={4}
              textAlign="center"
              flexShrink={0}
            >
              <Button
                bg="#346d52"
                color="white"
                size="lg"
                borderRadius="full"
                _hover={{ bg: "teal.500" }}
              >
                Explore Stays
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
