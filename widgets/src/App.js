import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";

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

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    // <div>
    //   <Accordion items={items} />
    // </div>
    // <div>
    //   <Search />
    // </div>
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};
