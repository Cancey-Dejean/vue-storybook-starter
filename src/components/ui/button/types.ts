import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "@/components/ui/button/variants";
import type { HTMLAttributes } from "vue";
import type { PrimitiveProps } from "reka-ui";

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps extends PrimitiveProps {
  variant?: ButtonVariants["variant"];

  size?: ButtonVariants["size"];
  rounded?: ButtonVariants["rounded"];
  class?: HTMLAttributes["class"];
}

// size?: 'small' | 'medium' | 'large';
