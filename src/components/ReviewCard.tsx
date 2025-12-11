import { StarRating } from "./StarRating";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  author: string;
  rating: number;
  date: string;
  content: string;
  verified?: boolean;
  image?: string;
  className?: string;
}

export const ReviewCard = ({
  author,
  rating,
  date,
  content,
  verified = false,
  image,
  className,
}: ReviewCardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-xl p-6 shadow-soft border border-border/50 transition-all duration-300 hover:shadow-medium",
        className
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-foreground">{author}</h4>
            {verified && (
              <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full font-medium">
                Verified Buyer
              </span>
            )}
          </div>
          <StarRating rating={rating} size="sm" />
        </div>
        <span className="text-xs text-muted-foreground">{date}</span>
      </div>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
        {content}
      </p>
      
      {image && (
        <img
          src={image}
          alt="Review photo"
          className="w-20 h-20 object-cover rounded-lg border border-border"
        />
      )}
    </div>
  );
};
