'use client'
import Header from "@/components/header/Header";
import TopContainer from "@/components/topcontainer/TopContainer";
import { Box } from "@chakra-ui/react";



export default function Home() {
  return (
    <>
  
    <Header />
    <Box as="main"><TopContainer /></Box>
    
    
    
   </>
  )
}
