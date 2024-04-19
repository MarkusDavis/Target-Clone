import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { CardContent, Card, CardFooter } from "@/components/ui/card";
import { Componentprodu, ProductSection } from "@/components/ProductSection";
import { ProductCard } from "@/components/ProductCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <ProductSection />
      <ProductCard />
    </Layout>
  );
}
