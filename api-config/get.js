import { BASE_URL } from "./consturl";


export async function fetchAllProducts() {
    const res = await fetch(`${BASE_URL}`);
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
  }
  
  export async function fetchProductById(id) {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch product with ID ${id}`);
    return res.json();
  }


  export async function fetchGroupedByCategory() {
   
    const products = await fetchAllProducts();
  
    const grouped = {};
  
    for (const product of products) {
      const category = product.category;
  
      if (!grouped[category]) {
        grouped[category] = [];
      }
  
      grouped[category].push(product);
    }
  
    return grouped;
  }
  

