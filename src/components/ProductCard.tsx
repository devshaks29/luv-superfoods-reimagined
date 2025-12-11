import { Link } from "react-router-dom";
import { Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarRating } from "./StarRating";
import { cn } from "@/lib/utils";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  badges?: string[];
  description?: string;
}

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className={cn(
        "group bg-card rounded-2xl overflow-hidden shadow-soft border border-border/50 transition-all duration-300 hover:shadow-hover hover:-translate-y-1",
        className
      )}
    >
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        {product.badges && product.badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.badges.map((badge, i) => (
              <span
                key={i}
                className={cn(
                  "px-2.5 py-1 text-xs font-semibold rounded-full",
                  badge === "Best Seller" && "bg-accent text-accent-foreground",
                  badge === "New" && "bg-secondary text-secondary-foreground",
                  badge === "Sale" && "bg-goji text-primary-foreground"
                )}
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Discount Badge */}
        {discount > 0 && (
          <span className="absolute top-3 right-3 bg-goji text-primary-foreground px-2.5 py-1 text-xs font-bold rounded-full">
            -{discount}%
          </span>
        )}

        {/* Quick Actions */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="cream" size="icon" className="rounded-full shadow-medium">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <StarRating rating={product.rating} size="sm" />
          <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>

        {/* Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2 line-clamp-2 hover:text-secondary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-foreground">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button variant="chocolate" size="sm" className="rounded-full">
            <Plus className="w-4 h-4" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};
