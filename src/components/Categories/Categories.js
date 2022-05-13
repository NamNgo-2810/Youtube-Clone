import React from "react";
import { Chip } from "@material-ui/core";
import "./Categories.css";

const categories = [
  "All",
  "Music",
  "Livestream",
  "Cartoon",
  "Rap",
  "Football",
  "Cooking",
  "Games",
  "News",
];

const Categories = ({ setSearch }) => {
  return (
    <ul className="categories">
      {categories.map((category) => {
        return (
          <div
            className="category_item"
            key={category}
            onClick={() => setSearch(category)}
          >
            <Chip label={category} clickable />
            <br />
          </div>
        );
      })}
    </ul>
  );
};

export default Categories;
