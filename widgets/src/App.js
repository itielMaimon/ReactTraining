import React from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";

const items = [
  {
    title: "What's React?",
    content: "React is a front end JS library",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among web devs",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

export default () => {
  return (
    // <div>
    //   <Accordion items={items} />
    // </div>
    <div>
      <Search />
    </div>
  );
};
