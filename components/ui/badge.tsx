import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center border font-medium w-fit whitespace-nowrap shrink-0 gap-1 tracking-[-0.02em] [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "bg-background text-foreground border-border [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        purple:
          "border-transparent bg-tag-bg-purple text-tag-text-purple [a&]:hover:bg-tag-bg-purple/90",
        gray:
          "border-transparent bg-tag-bg-gray text-tag-text-gray [a&]:hover:bg-tag-bg-gray/90",
        red:
          "border-transparent bg-tag-bg-red text-tag-text-red [a&]:hover:bg-tag-bg-red/90",
        green:
          "border-transparent bg-tag-bg-green text-tag-text-green [a&]:hover:bg-tag-bg-green/90",
        orange:
          "border-transparent bg-tag-bg-orange text-tag-text-orange [a&]:hover:bg-tag-bg-orange/90",
        "outline-purple":
          "bg-background border-border text-tag-text-purple [a&]:hover:bg-tag-bg-purple",
        "outline-gray":
          "bg-background border-border text-tag-text-gray [a&]:hover:bg-tag-bg-gray",
        "outline-red":
          "bg-background border-border text-tag-text-red [a&]:hover:bg-tag-bg-red",
        "outline-green":
          "bg-background border-border text-tag-text-green [a&]:hover:bg-tag-bg-green",
        "outline-orange":
          "bg-background border-border text-tag-text-orange [a&]:hover:bg-tag-bg-orange",
      },
      type: {
        tag: "rounded-[4px]",
        pill: "rounded-full",
      },
      size: {
        default: "px-2 py-1 text-xs [&>svg]:size-4",
        sm: "px-2 py-1 text-[10px] leading-none [&>svg]:size-3",
      },
    },
    defaultVariants: {
      variant: "default",
      type: "pill",
      size: "default",
    },
  }
)

function Badge({
  className,
  variant,
  type,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, type, size }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
