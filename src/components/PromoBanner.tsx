import { cn } from "@/lib/utils";
import { Truck, Gift, Percent, Clock } from "lucide-react";

interface PromoBannerProps {
  type: "shipping" | "discount" | "gift" | "limited";
  message: string;
  subMessage?: string;
  className?: string;
}

const iconMap = {
  shipping: Truck,
  discount: Percent,
  gift: Gift,
  limited: Clock,
};

const styleMap = {
  shipping: "bg-gradient-to-r from-accent/20 to-honey/20 border-accent/30 text-primary",
  discount: "bg-gradient-to-r from-goji/10 to-goji/5 border-goji/30 text-goji",
  gift: "bg-gradient-to-r from-chocolate/10 to-chocolate/5 border-chocolate/30 text-chocolate",
  limited: "bg-gradient-to-r from-secondary/30 to-secondary/10 border-secondary/50 text-primary",
};

export const PromoBanner = ({
  type,
  message,
  subMessage,
  className,
}: PromoBannerProps) => {
  const Icon = iconMap[type];

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 py-3 px-4 border rounded-lg",
        styleMap[type],
        className
      )}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
        <span className="font-semibold text-sm">{message}</span>
        {subMessage && (
          <span className="text-xs opacity-80">{subMessage}</span>
        )}
      </div>
    </div>
  );
};

export const ShippingProgressBar = ({
  currentAmount,
  freeShippingThreshold,
  className,
}: {
  currentAmount: number;
  freeShippingThreshold: number;
  className?: string;
}) => {
  const progress = Math.min((currentAmount / freeShippingThreshold) * 100, 100);
  const remaining = freeShippingThreshold - currentAmount;
  const qualified = remaining <= 0;

  return (
    <div className={cn("bg-card rounded-xl p-4 shadow-soft border border-border/50", className)}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-foreground">
            {qualified ? "You qualify for FREE shipping!" : `Add $${remaining.toFixed(2)} more for FREE shipping`}
          </span>
        </div>
        <span className="text-xs text-muted-foreground">
          ${currentAmount.toFixed(2)} / ${freeShippingThreshold}
        </span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent to-honey rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
