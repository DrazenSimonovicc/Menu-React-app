import React from "react";

export default function Menu({ items }) {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="article">
            <div className="img-box">
              <img src={img} alt={title} className="img" />
            </div>
            <div className="item-info">
              <header className="header-box">
                <h4 className="title">{title}</h4>
                <span className="price">$ {price}</span>
              </header>
              <p className="description">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
