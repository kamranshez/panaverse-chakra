'use client'
import CTA from "@/components/cta/CTA";
import Faq from "@/components/faq/Faq";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Highlights from "@/components/highlights/Highlights";
import Newsletter from "@/components/newsletter/Newsletter";
import TopContainer from "@/components/topcontainer/TopContainer";
import { Box } from "@chakra-ui/react";



export default function Home() {
  return (
    <>
  
    <Header />
    <Box as="main"><TopContainer />
    
    <Features/>
    <CTA />
    <Highlights />
    </Box>
    <Newsletter />
    <Faq />
    <Footer />
   </>
  )
}
