<script setup lang="ts">
import type { ButtonProps } from "@/components/ui/button/types";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button/variants";
import { Primitive } from "reka-ui";

const props = withDefaults(defineProps<ButtonProps>(), {
  as: "button",
});
</script>

<template>
  <Primitive
    data-slot="button"
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size, rounded }), props.class)"
  >
    <slot />
  </Primitive>
</template>
