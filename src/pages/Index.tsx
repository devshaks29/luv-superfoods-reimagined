import { Link } from "react-router-dom";
import { ArrowRight, Truck, Gift, Shield, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard, Product } from "@/components/ProductCard";
import { ReviewCard } from "@/components/ReviewCard";
import { TrustBadgeStrip } from "@/components/TrustBadge";
import { PromoBanner } from "@/components/PromoBanner";
import { StarRating } from "@/components/StarRating";

import heroChocolate from "@/assets/hero-chocolate.jpg";
import chocolateCollection from "@/assets/chocolate-collection.jpg";
import productTruffle1 from "@/assets/product-truffle-1.jpg";
import productTruffle2 from "@/assets/product-truffle-2.jpg";
import productTruffle3 from "@/assets/product-truffle-3.jpg";
import giftBox from "@/assets/gift-box.jpg";

const products: Product[] = [
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
];

const reviews = [
  {
    author: "Sarah M.",
    rating: 5,
    date: "Dec 5, 2024",
    content: "These chocolates are absolutely divine! The raw cacao and honey combination is perfection. I've never tasted anything like this before. Will definitely be ordering again!",
    verified: true,
  },
  {
    author: "Michael R.",
    rating: 5,
    date: "Dec 1, 2024",
    content: "Bought these as a gift for my wife and she loved them! The packaging is beautiful and the taste is incredible. Perfect for anyone who loves healthy treats.",
    verified: true,
  },
  {
    author: "Emma L.",
    rating: 4,
    date: "Nov 28, 2024",
    content: "Really impressed with the quality. You can taste the difference with the organic ingredients. The adaptogens give a nice energy boost without any jitters.",
    verified: true,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-background to-cream-dark" />
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="text-center lg:text-left animate-fade-up">
                <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent-foreground text-sm font-medium rounded-full mb-6 border border-accent/20">
                  ✨ Handcrafted with Love
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
                  Send <span className="text-gradient-gold">Luv</span>
                  <br />
                  <span className="italic">Superfood Chocolates</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0">
                  Raw dark chocolate infused with adaptogens, raw honey, and superfoods. 
                  <span className="text-secondary font-medium"> Indulge. Nourish. Energize.</span>
                </p>
                <p className="text-sm text-muted-foreground mb-8">
                  🌿 Organic • Dairy-Free • Soy-Free • Gluten-Free • Non-GMO • Paleo
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/shop">
                      Shop Now
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="xl" asChild>
                    <Link to="/bundles">
                      Build a Box
                      <Gift className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
                  <div className="flex items-center gap-2">
                    <StarRating rating={4.9} size="md" />
                    <span className="text-sm font-medium text-foreground">4.9/5</span>
                  </div>
                  <span className="text-muted-foreground text-sm">500+ Reviews</span>
                  <span className="text-muted-foreground text-sm">|</span>
                  <span className="text-muted-foreground text-sm flex items-center gap-1">
                    <Truck className="w-4 h-4" /> Free Shipping $125+
                  </span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative animate-fade-up delay-200">
                <div className="relative aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full blur-3xl animate-pulse-soft" />
                  <img
                    src={heroChocolate}
                    alt="Luv Superfoods Chocolate Truffle"
                    className="relative z-10 w-full h-full object-cover rounded-3xl shadow-large animate-float"
                  />
                  {/* Floating badges */}
                  <div className="absolute -left-4 top-1/4 bg-card rounded-xl px-4 py-3 shadow-medium animate-float delay-300">
                    <span className="text-2xl">🍯</span>
                    <p className="text-xs font-medium mt-1">Raw Honey</p>
                  </div>
                  <div className="absolute -right-4 top-1/3 bg-card rounded-xl px-4 py-3 shadow-medium animate-float delay-500">
                    <span className="text-2xl">🌿</span>
                    <p className="text-xs font-medium mt-1">Adaptogens</p>
                  </div>
                  <div className="absolute left-1/4 -bottom-4 bg-card rounded-xl px-4 py-3 shadow-medium animate-float delay-700">
                    <span className="text-2xl">🍫</span>
                    <p className="text-xs font-medium mt-1">Raw Cacao</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <TrustBadgeStrip />
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-secondary uppercase tracking-wider">
                Our Collection
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Best Selling Chocolates
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our most loved superfood chocolates, handcrafted with organic ingredients 
                and infused with adaptogens for natural energy and wellness.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Button variant="outline" size="lg" asChild>
                <Link to="/shop">
                  View All Products
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={chocolateCollection}
                  alt="Chocolate Collection"
                  className="w-full rounded-3xl shadow-large"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-2xl shadow-gold hidden md:block">
                  <p className="font-serif text-2xl font-bold">100%</p>
                  <p className="text-sm">Organic</p>
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-secondary uppercase tracking-wider">
                  Our Story
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Raw Dark Chocolate Meets Ancient Superfoods
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  At Luv Superfoods, we believe that indulgence and nourishment should go hand in hand. 
                  Our journey began with a simple mission: create the most delicious, health-conscious 
                  chocolates using only the finest organic ingredients.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Each truffle is lovingly handcrafted with raw cacao, raw honey, and powerful adaptogens 
                  like reishi, ashwagandha, and lion's mane. No dairy, no soy, no gluten – just pure 
                  superfood goodness.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-foreground">Raw Cacao</span>
                  <span className="px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-foreground">Raw Honey</span>
                  <span className="px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-foreground">Adaptogens</span>
                  <span className="px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-foreground">Superfoods</span>
                </div>
                <Button variant="chocolate" size="lg" asChild>
                  <Link to="/about">
                    Learn Our Story
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Promo Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 text-primary-foreground">
                <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Free Shipping</h4>
                  <p className="text-sm text-primary-foreground/70">On orders over $125</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-primary-foreground">
                <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Gift className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Gift Wrapping</h4>
                  <p className="text-sm text-primary-foreground/70">Available on all orders</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-primary-foreground">
                <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Satisfaction Guaranteed</h4>
                  <p className="text-sm text-primary-foreground/70">30-day money back</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-secondary uppercase tracking-wider">
                Customer Love
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                What Our Customers Say
              </h2>
              <div className="flex items-center justify-center gap-3">
                <StarRating rating={4.9} size="lg" />
                <span className="text-lg font-medium text-foreground">4.9 out of 5</span>
                <span className="text-muted-foreground">based on 500+ reviews</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Button variant="outline" asChild>
                <Link to="/reviews">
                  Read All Reviews
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-chocolate-light to-chocolate relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-accent blur-3xl" />
            <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-honey blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Experience the <span className="text-accent">Luv</span>?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Join thousands of chocolate lovers who have discovered the perfect blend 
              of indulgence and nourishment. Order now and taste the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/shop">
                  Shop Collection
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="xl" 
                className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/20"
                asChild
              >
                <Link to="/bundles">
                  Build Custom Box
                  <Gift className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
