'use client'
import CTA from "@/components/cta/CTA";
import Features from "@/components/features/Features";
import Header from "@/components/header/Header";
import Highlights from "@/components/highlights/Highlights";
import TopContainer from "@/components/topcontainer/TopContainer";
import { Box } from "@chakra-ui/react";



export default function Home() {
  return (
    <>
  
    <Header />
    <Box as="main"><TopContainer /></Box>
    
    <Features/>
    <CTA />
    <Highlights />
   </>
  )
}
