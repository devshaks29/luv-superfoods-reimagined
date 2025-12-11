import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Minus, Plus, ArrowRight, Tag, Truck, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShippingProgressBar } from "@/components/PromoBanner";

import productTruffle1 from "@/assets/product-truffle-1.jpg";
import productTruffle2 from "@/assets/product-truffle-2.jpg";
import giftBox from "@/assets/gift-box.jpg";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const initialCart: CartItem[] = [
  { id: "1", name: "Almond Goji Bliss Truffle", price: 24.99, quantity: 2, image: productTruffle1 },
  { id: "2", name: "Coconut Hemp Superfood", price: 22.99, quantity: 1, image: productTruffle2 },
  { id: "4", name: "Luxury Gift Box - 12pc", price: 59.99, quantity: 1, image: giftBox },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = appliedPromo === "LUV20" ? subtotal * 0.2 : 0;
  const shipping = subtotal >= 125 ? 0 : 9.99;
  const total = subtotal - discount + shipping;

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === "LUV20") {
      setAppliedPromo("LUV20");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            Your Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-6">Your cart is empty</p>
              <Button variant="hero" asChild>
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {/* Shipping Progress */}
                <ShippingProgressBar
                  currentAmount={subtotal}
                  freeShippingThreshold={125}
                  className="mb-6"
                />

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 bg-card rounded-xl p-4 shadow-soft border border-border/50"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <Link
                          to={`/product/${item.id}`}
                          className="font-semibold text-foreground hover:text-secondary transition-colors"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-secondary font-medium mt-1">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-border rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-4 text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-semibold text-foreground">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50 sticky top-24">
                  <h2 className="font-serif text-xl font-bold text-foreground mb-6">
                    Order Summary
                  </h2>

                  {/* Promo Code */}
                  <div className="mb-6">
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Promo Code
                    </label>
                    <div className="flex gap-2">
                      <div className="flex-1 relative">
                        <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="text"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder="Enter code"
                          className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <Button variant="outline" onClick={handleApplyPromo}>
                        Apply
                      </Button>
                    </div>
                    {appliedPromo && (
                      <p className="text-sm text-accent mt-2 flex items-center gap-1">
                        ✓ Code "{appliedPromo}" applied - 20% off!
                      </p>
                    )}
                    {!appliedPromo && (
                      <p className="text-xs text-muted-foreground mt-2">
                        Try "LUV20" for 20% off your first order
                      </p>
                    )}
                  </div>

                  <hr className="border-border mb-6" />

                  {/* Totals */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">${subtotal.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-accent">Discount (20%)</span>
                        <span className="text-accent">-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Truck className="w-4 h-4" />
                        Shipping
                      </span>
                      <span className="text-foreground">
                        {shipping === 0 ? (
                          <span className="text-accent font-medium">FREE</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    <hr className="border-border" />
                    <div className="flex justify-between">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="text-xl font-bold text-foreground">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button variant="hero" size="lg" className="w-full mb-4" asChild>
                    <Link to="/checkout">
                      Proceed to Checkout
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>

                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/shop">Continue Shopping</Link>
                  </Button>

                  {/* Trust badges */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Truck className="w-4 h-4" /> Free shipping $125+
                      </span>
                      <span className="flex items-center gap-1">
                        <Gift className="w-4 h-4" /> Gift wrapping
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
