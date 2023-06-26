import React from "react";
import { getProducts } from "./api";
import Pagination from "./Pagination";
import ProductList from "./ProductList";

function ProductPage() {
  return (
    <div>
      <h1 data-testid="product-page-title">Product Page</h1>
      <button data-testid="low-to-high">Sort low to high</button>
      <button data-testid="high-to-low">Sort high to low</button>
      <div>
        <label>Per page</label>
        <select data-testid="limit-select"></select>
      </div>
      <Pagination />
      {/* map products */}
      <ProductList />
    </div>
  );
}

export default ProductPage;
