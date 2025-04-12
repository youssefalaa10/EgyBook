// app/page.tsx
"use client";

import Hero from "@/components/Hero";
import RelevantHotelsSection from "@/components/RelevantHotelsSection";
import Navbar from "@/components/Navbar";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import DiscoverPlacesSection from "@/components/DiscoverPlacesSection";
import TrendingDestinationsSection from "@/components/TrendingDestinationsSection";
import WhyChooseEgyBook from "@/components/WhyChooseEgyBook";

export default function HomePage() {
  return (
    <Box bg="background" minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Hero />
      <RelevantHotelsSection />
      <DiscoverPlacesSection />
      <WhyChooseEgyBook />
      <TrendingDestinationsSection />
    </Box>
  );
}
