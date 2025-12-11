import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Grid3X3, LayoutList, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard, Product } from "@/components/ProductCard";
import { PromoBanner } from "@/components/PromoBanner";

import productTruffle1 from "@/assets/product-truffle-1.jpg";
import productTruffle2 from "@/assets/product-truffle-2.jpg";
import productTruffle3 from "@/assets/product-truffle-3.jpg";
import giftBox from "@/assets/gift-box.jpg";

const allProducts: Product[] = [
  {
    id: "1",
    name: "Almond Goji Bliss Truffle",
    price: 24.99,
    originalPrice: 29.99,
    image: productTruffle1,
    rating: 4.9,
    reviewCount: 127,
    badges: ["Best Seller"],
  },
  {
    id: "2",
    name: "Coconut Hemp Superfood",
    price: 22.99,
    image: productTruffle2,
    rating: 4.8,
    reviewCount: 89,
    badges: ["New"],
  },
  {
    id: "3",
    name: "Cacao Honey Drizzle",
    price: 26.99,
    image: productTruffle3,
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: "4",
    name: "Luxury Gift Box - 12pc",
    price: 59.99,
    originalPrice: 74.99,
    image: giftBox,
    rating: 5.0,
    reviewCount: 203,
    badges: ["Best Seller", "Sale"],
  },
  {
    id: "5",
    name: "Reishi Mushroom Truffle",
    price: 28.99,
    image: productTruffle1,
    rating: 4.6,
    reviewCount: 72,
    badges: ["New"],
  },
  {
    id: "6",
    name: "Lion's Mane Focus Blend",
    price: 32.99,
    image: productTruffle2,
    rating: 4.8,
    reviewCount: 94,
  },
  {
    id: "7",
    name: "Ashwagandha Calm Truffle",
    price: 26.99,
    image: productTruffle3,
    rating: 4.7,
    reviewCount: 118,
  },
  {
    id: "8",
    name: "Sampler Box - 6pc",
    price: 34.99,
    image: giftBox,
    rating: 4.9,
    reviewCount: 186,
    badges: ["Best Seller"],
  },
];

const categories = ["All Products", "Truffles", "Gift Boxes", "Bundles", "Adaptogens", "Limited Edition"];
const sortOptions = ["Featured", "Newest", "Price: Low to High", "Price: High to Low", "Best Selling"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-primary to-chocolate-light py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Shop Our Collection
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Discover our range of handcrafted superfood chocolates, each one made with love 
              using organic ingredients and powerful adaptogens.
            </p>
          </div>
        </section>

        {/* Promo Banner */}
        <div className="container mx-auto px-4 -mt-6 relative z-10">
          <PromoBanner
            type="shipping"
            message="FREE SHIPPING on orders over $125"
            subMessage="Use code LUV20 for 20% off your first order"
          />
        </div>

        {/* Shop Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <aside className="lg:w-64 flex-shrink-0">
                <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50 sticky top-24">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === category
                            ? "bg-secondary text-secondary-foreground font-medium"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  <hr className="my-6 border-border" />

                  <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      Under $25
                    </label>
                    <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      $25 - $50
                    </label>
                    <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      $50 - $100
                    </label>
                    <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      Over $100
                    </label>
                  </div>

                  <hr className="my-6 border-border" />

                  <h3 className="font-semibold text-foreground mb-4">Dietary</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded border-border" />
                      Gluten-Free
                    </label>
                    <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded border-border" />
                      Dairy-Free
                    </label>
                    <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded border-border" />
                      Paleo
                    </label>
                    <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded border-border" />
                      Vegan
                    </label>
                  </div>
                </div>
              </aside>

              {/* Product Grid */}
              <div className="flex-1">
                {/* Toolbar */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-muted-foreground text-sm">
                    Showing <span className="font-medium text-foreground">{allProducts.length}</span> products
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setViewMode("grid")}
                        className={`p-2 rounded-lg transition-colors ${
                          viewMode === "grid" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Grid3X3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setViewMode("list")}
                        className={`p-2 rounded-lg transition-colors ${
                          viewMode === "list" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <LayoutList className="w-4 h-4" />
                      </button>
                    </div>
                    <select className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                      {sortOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Products */}
                <div className={`grid gap-6 ${viewMode === "grid" ? "sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
                  {allProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>Previous</Button>
                    <Button variant="chocolate" size="sm">1</Button>
                    <Button variant="outline" size="sm">2</Button>
                    <Button variant="outline" size="sm">3</Button>
                    <Button variant="outline" size="sm">Next</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
