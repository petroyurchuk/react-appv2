import React from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: (index: number) => void;
};

const categories = [
  "Всі",
  "М'ясні",
  "Вегетеріанські",
  "Гриль",
  "Гострі",
  "Закриті",
];

export const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, index) => (
            <li
              key={index}
              onClick={() => onChangeCategory(index)}
              className={value === index ? "active" : ""}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
