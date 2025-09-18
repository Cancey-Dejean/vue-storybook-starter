import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { fn } from "storybook/test";
import Button from "@/components/ui/button/Button.vue";
import {
  buttonRoundedOptions,
  buttonSizeOptions,
  buttonVariantOptions,
} from "./constants";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: { control: "select", options: buttonVariantOptions },
    size: { control: "select", options: buttonSizeOptions },
    rounded: { control: "select", options: buttonRoundedOptions },
    class: { control: false },
    as: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    default: "Button",
    variant: "default",
    size: "default",
    rounded: "md",
    class: "",
    // onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    rounded: "pill",
  },
  argTypes: {
    rounded: {
      control: "select",
      options: buttonRoundedOptions.filter((option) => option === "pill"),
    },
    size: {
      control: "select",
      options: buttonSizeOptions.filter((option) => option === "icon"),
    },
    default: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">+</Button>',
  }),
};
