import { Container, Box, VStack, HStack, Text, Image, Button, IconButton, Heading, SimpleGrid } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";

const products = [
  { id: 1, name: "Product 1", price: "Rs. 1000", image: "https://images.unsplash.com/photo-1705096953495-8ea06879b986?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMXxlbnwwfHx8fDE3MTgxNjc1OTl8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Product 2", price: "Rs. 2000", image: "https://images.unsplash.com/photo-1524143878510-e3b8d6312402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMnxlbnwwfHx8fDE3MTgxNjc2MDB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Product 3", price: "Rs. 3000", image: "https://images.unsplash.com/photo-1700853010051-dce31802dafc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwM3xlbnwwfHx8fDE3MTgxNjc2MDB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, name: "Product 4", price: "Rs. 4000", image: "https://images.unsplash.com/photo-1554139844-af2fc8ad3a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwNHxlbnwwfHx8fDE3MTgxNjc3MzB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Header = () => (
  <HStack justifyContent="space-between" p={4} bg="teal.500" color="white">
    <Heading size="lg">Jass Store</Heading>
    <HStack spacing={4}>
      <IconButton aria-label="Search" icon={<FaSearch />} />
      <IconButton aria-label="User" icon={<FaUser />} />
      <IconButton aria-label="Cart" icon={<FaShoppingCart />} />
    </HStack>
  </HStack>
);

const ProductCard = ({ product }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
    <Image src={product.image} alt={product.name} />
    <VStack align="start" mt={4}>
      <Text fontWeight="bold">{product.name}</Text>
      <Text>{product.price}</Text>
      <Button colorScheme="teal">Add to Cart</Button>
    </VStack>
  </Box>
);

const ProductList = () => (
  <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4} p={4}>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </SimpleGrid>
);

const Footer = () => (
  <Box p={4} bg="teal.500" color="white" textAlign="center">
    <Text>&copy; 2023 Jass Store. All rights reserved.</Text>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Header />
      <ProductList />
      <Footer />
    </Container>
  );
};

export default Index;
