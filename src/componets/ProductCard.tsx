import React from "react";

interface ChildItem {
  title: string;
  desc: string;
}

interface ProductItem {
  id: number;
  title: string;
  type: string;
  desc: string;
  child?: ChildItem[];
}

interface ProductCardProps {
  product: ProductItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}
    >
      <h2>{product.title}</h2>
      <p>
        <b>Tip:</b> {product.type}
      </p>
      <p>{product.desc}</p>
      {product.child && (
        <div style={{ marginTop: "1rem" }}>
          {product.child.map((c, i) => (
            <div key={i} style={{ marginBottom: "0.5rem" }}>
              <strong>{c.title}</strong>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
