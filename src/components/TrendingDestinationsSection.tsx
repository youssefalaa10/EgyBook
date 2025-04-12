"use client";

import { useRef } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  IconButton,
  Container,
  Badge,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";

import pyramids from "../../public/pyramids.png";
import sharm from "../../public/sharm.png";
import hotel1 from "../../public/hotel1.png";

type TrendingCardProps = {
  id: number;
  image: StaticImageData;
  location: string;
  description: string;
  labelButton: string;
};

const destinationData: TrendingCardProps[] = [
  {
    id: 1,
    image: pyramids,
    location: "Cairo",
    description: "Unveil secrets of ancient wonders.",
    labelButton: "See Hotels",
  },
  {
    id: 2,
    image: hotel1,
    location: "Hurghada",
    description: "Sunshine, beaches, and vibrant reefs.",
    labelButton: "See Hotels",
  },
  {
    id: 3,
    image: sharm,
    location: "Sharm El Sheikh",
    description: "Dive into breathtaking underwater vistas.",
    labelButton: "See Hotels",
  },
];

const getLocationGradient = (location: string) => {
  switch (location) {
    case "Cairo":
      return "linear(to-br, #fc8e50, #f8b640)"; // Cairo gradient
    case "Hurghada":
      return "linear(to-br, #6397c4, #4d75a1)"; // Hurghada gradient
    case "Sharm El Sheikh":
      return "linear(to-br, #873d3d, #9c6f6f)"; // Sharm gradient
    default:
      return "linear(to-br, rgba(0,0,0,0.7) 5%, rgba(0,0,0,0.1) 70%)"; // Default gradient
  }
};

const TrendingDestinationCard = ({
  destination,
}: {
  destination: TrendingCardProps;
}) => {
  const getLocationGradient = (location: string) => {
    switch (location) {
      case "Cairo":
        return "linear(to-r, rgba(252, 142, 80, 0.8), transparent)";
      case "Hurghada":
        return "linear(to-r, rgba(99, 151, 196, 0.8), transparent)";
      case "Sharm El Sheikh":
        return "linear(to-r, rgba(135, 61, 61, 0.8), transparent)";
      default:
        return "linear(to-r, rgba(0,0,0,0.7), transparent)";
    }
  };

  return (
    <Box
      borderRadius="2xl"
      overflow="hidden"
      mx={2}
      w="420px"
      h="350px"
      position="relative"
      flexShrink={0}
      boxShadow="lg"
      transition="transform 0.3s"
      _hover={{ transform: "translateY(-8px)" }}
    >
      <Image
        src={destination.image}
        alt={destination.location}
        fill
        style={{ objectFit: "cover" }}
        placeholder="blur"
      />

      {/* Gradient Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        bottom={0}
        right="50%" // Only half the card width
        bgGradient={getLocationGradient(destination.location)}
        zIndex={1}
      />

      {/* Content Layer */}
      <Box
        position="absolute"
        top={0}
        left={0}
        bottom={0}
        right={0}
        zIndex={2}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        p={6}
      >
        <Box>
          <Text color="white" fontSize="4xl" fontWeight="bold" mb={1}>
            {destination.location}
          </Text>
          <Text color="white" fontSize="2xl">{destination.description}</Text>
        </Box>

        <Badge
          bg="white"
          color="black"
          fontSize="sm"
          py={2}
          px={4}
          borderRadius="full"
          fontWeight="semibold"
          cursor="pointer"
          _hover={{ bg: "gray.200" }}
          w="fit-content"
        >
          {destination.labelButton}
        </Badge>
      </Box>
    </Box>
  );
};


export default function TrendingDestinationsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 460;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box bg="black" py={10} w="full">
      <Container maxW="container.xl">
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color="white"
          mb={6}
        >
          Trending Destinations
        </Heading>

        <Box position="relative">
          <IconButton
            aria-label="Scroll Left"
            icon={<FaChevronLeft />}
            position="absolute"
            left={0}
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            size="md"
            borderRadius="full"
            bg="white"
            color="gray.600"
            _hover={{ bg: "gray.200" }}
            onClick={() => scroll("left")}
          />

          <Flex
            ref={scrollRef}
            overflowX="auto"
            pl={12}
            pr={12}
            css={{
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
            }}
            gap={4}
          >
            {destinationData.map((destination) => (
              <TrendingDestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </Flex>

          <IconButton
            aria-label="Scroll Right"
            icon={<FaChevronRight />}
            position="absolute"
            right={0}
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            size="md"
            borderRadius="full"
            bg="white"
            color="gray.600"
            _hover={{ bg: "gray.200" }}
            onClick={() => scroll("right")}
          />
        </Box>
      </Container>
    </Box>
  );
}
