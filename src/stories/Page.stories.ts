import { expect, userEvent, within } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/vue3";

import MyPage from "./Page.vue";

const meta = {
  title: "Examples/Page",
  component: MyPage,
  render: () => ({
    components: { MyPage },
    template: "<my-page />",
  }),
  parameters: {
    layout: "fullscreen",
  },
  // tags: ["autodocs"],
} satisfies Meta<typeof MyPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole("button", { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};

export const LoggedOut: Story = {};
