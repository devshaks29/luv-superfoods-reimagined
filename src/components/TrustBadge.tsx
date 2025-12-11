import { cn } from "@/lib/utils";
import { Leaf, Droplet, Heart, Shield, Sparkles, Sun } from "lucide-react";

interface TrustBadgeProps {
  icon: "organic" | "honey" | "handmade" | "glutenfree" | "adaptogen" | "paleo";
  label: string;
  className?: string;
}

const iconMap = {
  organic: Leaf,
  honey: Droplet,
  handmade: Heart,
  glutenfree: Shield,
  adaptogen: Sparkles,
  paleo: Sun,
};

export const TrustBadge = ({ icon, label, className }: TrustBadgeProps) => {
  const Icon = iconMap[icon];

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border/50 transition-all duration-300 hover:shadow-soft hover:border-accent/30",
        className
      )}
    >
      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <span className="text-sm font-medium text-foreground text-center">{label}</span>
    </div>
  );
};

export const TrustBadgeStrip = ({ className }: { className?: string }) => {
  const badges = [
    { icon: "organic" as const, label: "100% Organic" },
    { icon: "honey" as const, label: "Raw Honey" },
    { icon: "handmade" as const, label: "Handcrafted" },
    { icon: "glutenfree" as const, label: "Gluten-Free" },
    { icon: "adaptogen" as const, label: "Adaptogens" },
    { icon: "paleo" as const, label: "Paleo Friendly" },
  ];

  return (
    <div className={cn("grid grid-cols-3 md:grid-cols-6 gap-3", className)}>
      {badges.map((badge) => (
        <TrustBadge key={badge.icon} {...badge} />
      ))}
    </div>
  );
};
