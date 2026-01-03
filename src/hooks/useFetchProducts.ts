import { useEffect, useState } from "react";
import type { Data } from "../types";

export function useFetchProducts() {
  const [data, setData] = useState<Data | null>(null);

  // Fetch products once on mount
  useEffect(() => {
    // Controls how many items to fetch, 0 is unlimited
    const LIMIT = 0;
    const categories = ["laptops", "smartphones", "mobile-accessories", "tablets"];
    let ignore = false;

    const fetchData = async () => {
      try {
        const categoryPromises = categories.map(async (category) => {
          const response = await fetch(
            `https://dummyjson.com/products/category/${category}?limit=${LIMIT}&sortBy=title&order=asc`
          );

          if (response.ok === false) {
            throw new Error(`Failed to fetch ${category}`);
          }

          const data = await response.json();
          return data;
        });

        const categoryResults = await Promise.all(categoryPromises);

        if (ignore) return;

        const allProducts = categoryResults
          .flatMap((r) => r.products)
          .sort((a, b) => a.title.localeCompare(b.title));

        setData({ products: allProducts });
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        if (!ignore) {
          console.log("Fetch attempt completed");
        }
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  return { data };
}
