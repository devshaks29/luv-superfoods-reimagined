import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight, Minus, Plus, Heart, Share2, Truck, Shield, RotateCcw, ChevronLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StarRating } from "@/components/StarRating";
import { ReviewCard } from "@/components/ReviewCard";
import { ProductCard, Product } from "@/components/ProductCard";
import { ShippingProgressBar } from "@/components/PromoBanner";

import productTruffle1 from "@/assets/product-truffle-1.jpg";
import productTruffle2 from "@/assets/product-truffle-2.jpg";
import productTruffle3 from "@/assets/product-truffle-3.jpg";
import giftBox from "@/assets/gift-box.jpg";

const product = {
  id: "1",
  name: "Almond Goji Bliss Truffle",
  price: 24.99,
  originalPrice: 29.99,
  images: [productTruffle1, productTruffle2, productTruffle3],
  rating: 4.9,
  reviewCount: 127,
  description: "Indulge in the perfect harmony of raw dark chocolate, crunchy almonds, and antioxidant-rich goji berries. Each truffle is handcrafted with organic ingredients and sweetened with raw honey for a guilt-free treat that nourishes your body and soul.",
  benefits: [
    "Rich in antioxidants from raw cacao",
    "Natural energy from adaptogens",
    "Immune support from goji berries",
    "Brain-boosting omega-3s from almonds",
  ],
  ingredients: "Organic Raw Cacao, Raw Honey, Organic Almonds, Organic Goji Berries, Organic Coconut Oil, Himalayan Pink Salt, Reishi Mushroom Extract",
  nutrition: {
    servingSize: "1 truffle (30g)",
    calories: 120,
    fat: "8g",
    carbs: "12g",
    sugar: "8g",
    protein: "2g",
  },
  badges: ["Best Seller", "Organic", "Gluten-Free"],
};

const relatedProducts: Product[] = [
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
    content: "Bought these as a gift for my wife and she loved them! The packaging is beautiful and the taste is incredible.",
    verified: true,
  },
  {
    author: "Emma L.",
    rating: 4,
    date: "Nov 28, 2024",
    content: "Really impressed with the quality. You can taste the difference with the organic ingredients.",
    verified: true,
  },
];

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "ingredients" | "reviews">("description");

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          {/* Product Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden shadow-soft">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? "border-secondary shadow-soft" : "border-border hover:border-muted-foreground"
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              {/* Badges */}
              <div className="flex gap-2 mb-4">
                {product.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent-foreground"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <StarRating rating={product.rating} size="md" showValue />
                <span className="text-muted-foreground text-sm">({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-foreground">${product.price.toFixed(2)}</span>
                <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                <span className="px-2 py-1 bg-goji text-primary-foreground text-sm font-bold rounded">
                  Save {discount}%
                </span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Button variant="hero" size="lg" className="flex-1">
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </Button>
                <Button variant="outline" size="lg" className="px-4">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              {/* Shipping Progress */}
              <ShippingProgressBar
                currentAmount={product.price * quantity}
                freeShippingThreshold={125}
                className="mb-6"
              />

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-xl">
                <div className="text-center">
                  <Truck className="w-5 h-5 mx-auto mb-2 text-secondary" />
                  <p className="text-xs font-medium text-foreground">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">Over $125</p>
                </div>
                <div className="text-center">
                  <Shield className="w-5 h-5 mx-auto mb-2 text-secondary" />
                  <p className="text-xs font-medium text-foreground">Secure</p>
                  <p className="text-xs text-muted-foreground">Payment</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-5 h-5 mx-auto mb-2 text-secondary" />
                  <p className="text-xs font-medium text-foreground">30 Day</p>
                  <p className="text-xs text-muted-foreground">Returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-border mb-8">
            <div className="flex gap-8">
              {(["description", "ingredients", "reviews"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-medium capitalize transition-colors relative ${
                    activeTab === tab ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                  {tab === "reviews" && ` (${product.reviewCount})`}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="mb-16">
            {activeTab === "description" && (
              <div className="max-w-3xl">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Product Description</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                <h4 className="font-semibold text-foreground mb-3">Nutritional Information</h4>
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-2">Serving Size: {product.nutrition.servingSize}</p>
                  <div className="grid grid-cols-5 gap-4 text-center">
                    <div>
                      <p className="font-semibold text-foreground">{product.nutrition.calories}</p>
                      <p className="text-xs text-muted-foreground">Calories</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{product.nutrition.fat}</p>
                      <p className="text-xs text-muted-foreground">Fat</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{product.nutrition.carbs}</p>
                      <p className="text-xs text-muted-foreground">Carbs</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{product.nutrition.sugar}</p>
                      <p className="text-xs text-muted-foreground">Sugar</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{product.nutrition.protein}</p>
                      <p className="text-xs text-muted-foreground">Protein</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "ingredients" && (
              <div className="max-w-3xl">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Ingredients</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{product.ingredients}</p>
                <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                  <h4 className="font-semibold text-foreground mb-2">🌿 Our Promise</h4>
                  <p className="text-sm text-muted-foreground">
                    All our ingredients are 100% organic, ethically sourced, and free from artificial 
                    preservatives, dairy, soy, and gluten. We believe in transparency and quality above all.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">Customer Reviews</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <StarRating rating={product.rating} size="md" />
                      <span className="text-lg font-medium">{product.rating} out of 5</span>
                      <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
                    </div>
                  </div>
                  <Button variant="chocolate">Write a Review</Button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {reviews.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Related Products */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">You May Also Like</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
