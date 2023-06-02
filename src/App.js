import React from "react";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = React.useState(items);
  console.log(menuItems);
  const [categories, setCategories] = React.useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="App">
      <div className="header-title">
        <h1 className="heading-primary">Our Menu</h1>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
