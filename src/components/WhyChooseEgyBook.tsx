"use client";

import { Box, Text, Heading, Flex, VStack, Container, chakra } from "@chakra-ui/react";
import { FaMousePointer, FaPiggyBank } from "react-icons/fa";

const WhyChooseEgyBook = () => {
  return (
    <Box bg="black" py={12} px={6}>
      <Container maxW="container.xl">
        {/* Title */}
        <Heading
          color="white"
          fontSize={{ base: "2xl", md: "3xl" }}
          mb={12}
          fontWeight="bold"
        >
          Why choose{" "}
          <chakra.span color="brand.500" fontWeight="bold">
            Egy
          </chakra.span>
          Book?
        </Heading>

        <Flex
          direction={{ base: "column", md: "row" }}
          gap={10}
          justify="space-between"
          align="flex-start"
          flexWrap="wrap"
        >
          <VStack align="flex-start" spacing={4} maxW="sm">
            <FaMousePointer size={32} color="#286046" />
            <Text fontSize="lg" color="white">
              <chakra.span color="brand.500" fontWeight="semibold">
                Seamless
              </chakra.span>{" "}
              &{" "}
              <chakra.span color="#286046" fontWeight="semibold">
                Smart
              </chakra.span>{" "}
              Booking
            </Text>
            <Text color="gray.400" fontSize="sm">
              Quick, user-friendly platform that simplifies the reservation process
            </Text>
          </VStack>

          <VStack align="flex-start" spacing={4} maxW="sm">
            <Box
              border="2px solid"
              borderColor="#286046"
              px={2}
              py={1}
              borderRadius="md"
              color="#286046"
              fontWeight="bold"
            >
              VR
            </Box>
            <Text fontSize="lg" color="white">
              <chakra.span color="#286046" fontStyle="italic">
                Immersive
              </chakra.span>{" "}
              <chakra.span fontWeight="semibold">VR Previews</chakra.span>
            </Text>
            <Text color="gray.400" fontSize="sm">
              Explore hotels and rooms in 360° before you book—giving you total confidence.
            </Text>
          </VStack>

          <VStack align="flex-start" spacing={4} maxW="sm">
            <FaPiggyBank size={32} color="#286046" />
            <Text fontSize="lg" color="white">
              <chakra.span color="#286046" fontWeight="semibold">
                Exclusive
              </chakra.span>{" "}
              Best-Price Deals
            </Text>
            <Text color="gray.400" fontSize="sm">
              Save more with special offers and real-time price comparisons.
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default WhyChooseEgyBook;
