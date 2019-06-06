import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Nav from "./Nav";
import examples from "./Nav.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Navigation Bar", module);

stories.addDecorator(withKnobs);

stories.add(
  "Nav",
  () => {
    return (
      <Nav>
        <Nav.Item hasSubNav value="Page One" icon="globe">
          <Nav.SubItem value="Sub Item 1" />
          <Nav.SubItem>Sub Item 2</Nav.SubItem>
          <Nav.SubItem icon="globe">Sub Item 3</Nav.SubItem>
        </Nav.Item>
        <Nav.Item to="http://www.example.com">Page Two</Nav.Item>
        <Nav.Item value="Page Three" />
        <Nav.Item active icon="user">
          Page Four
        </Nav.Item>
      </Nav>
    );
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("Items as Objects", () => {
  return (
    <Nav
      itemsObjects={[
        {
          value: "Page One",
          icon: "globe",
          subItems: [
            { value: "Sub Item 1" },
            { value: "Sub Item 2" },
            { value: "Sub Item 3", icon: "globe" },
          ],
        },
        { value: "Page Two", to: "http://www.example.com" },
        { value: "Page Three" },
        { value: "Page Four", icon: "user", active: true },
      ]}
    />
  );
});
