// Sample data for demonstration
let products = [];

// Index of the product being edited (-1 means no product is being edited)
let editingIndex = -1;

// Function to add or update product
function addOrUpdateProduct() {
  const product_name = document.getElementById("product_name").value;
  const product_brand = document.getElementById("product_brand").value;
  const size_or_quantity = document.getElementById("size_or_quantity").value;
  const taste_or_scent = document.getElementById("taste_or_scent").value;
  const colour = document.getElementById("colour").value;
  const additional_description = document.getElementById("additional_description").value;
  const quantity_in_stock = parseInt(document.getElementById("quantity_in_stock").value);
  const unit_price = parseFloat(document.getElementById("unit_price").value);
  const categorySelect = document.getElementById("categorySelect");
  const categoryId = parseInt(categorySelect.options[categorySelect.selectedIndex].value);
  
  if (!product_name || !product_brand || !size_or_quantity || !taste_or_scent || !colour || !additional_description || isNaN(quantity_in_stock) || isNaN(unit_price) || categoryId === 0) {
    alert("Please fill all fields and select a category.");
    return;
  }

  if (editingIndex === -1) {
    // Add new product to the list
    products.push({
      product_name: product_name,
      product_brand: product_brand,
      size_or_quantity: size_or_quantity,
      taste_or_scent: taste_or_scent,
      colour: colour,
      additional_description: additional_description,
      quantity_in_stock: quantity_in_stock,
      unit_price: unit_price,
      category: getCategoryName(categoryId)
    });
  } else {
    // Update existing product
    products[editingIndex] = {
      product_name: product_name,
      product_brand: product_brand,
      size_or_quantity: size_or_quantity,
      taste_or_scent: taste_or_scent,
      colour: colour,
      additional_description: additional_description,
      quantity_in_stock: quantity_in_stock,
      unit_price: unit_price,
      category: getCategoryName(categoryId)
    };
    
    // Reset editing index
    editingIndex = -1;
  }

  // Clear form fields
  clearForm();

  // Refresh the product table
  displayProducts();
}

// Function to get category name by ID
function getCategoryName(categoryId) {
  // Implement your logic to get category name by ID from the database or elsewhere
  // For demonstration, I'm just returning a placeholder name
  switch (categoryId) {
    case 1:
      return "Groceries";
    case 2:
      return "Toiletries";
    case 3:
      return "Stationery";
    case 4:
      return "Household Cleaning Supplies";
    case 5:
      return "Snacks and Beverages";
    default:
      return "Unknown";
  }
}

// Function to display products in the table
function displayProducts() {
  const tableBody = document.getElementById("productTable");
  // Clear existing rows
  tableBody.innerHTML =
    "<tr><th>Product Name</th><th>Brand</th><th>Size/Quantity</th><th>Taste/Scent</th><th>Colour</th><th>Additional Description</th><th>Quantity in Stock</th><th>Price</th><th>Category</th><th>Action</th></tr>";
  // Add new rows
  products.forEach((product, index) => {
    const row = `<tr><td>${product.product_name}</td><td>${product.product_brand}</td><td>${product.size_or_quantity}</td><td>${product.taste_or_scent}</td><td>${product.colour}</td><td>${product.additional_description}</td><td>${product.quantity_in_stock}</td><td>${product.unit_price}</td><td>${product.category}</td><td><button onclick="editProduct(${index})">${editingIndex === index ? 'Update' : 'Edit'}</button><button onclick="deleteProduct(${index})">Delete</button></td></tr>`;
    tableBody.innerHTML += row;
  });
}

// Function to populate form fields with product details for editing
function editProduct(index) {
  // Set the editing index
  editingIndex = index;
  const product = products[index];
  // Populate form fields with product details
  document.getElementById("product_name").value = product.product_name;
  document.getElementById("product_brand").value = product.product_brand;
  document.getElementById("size_or_quantity").value = product.size_or_quantity;
  document.getElementById("taste_or_scent").value = product.taste_or_scent;
  document.getElementById("colour").value = product.colour;
  document.getElementById("additional_description").value = product.additional_description;
  document.getElementById("quantity_in_stock").value = product.quantity_in_stock;
  document.getElementById("unit_price").value = product.unit_price;
  // Select the category in the dropdown
  const categorySelect = document.getElementById("categorySelect");
  for (let i = 0; i < categorySelect.options.length; i++) {
    if (categorySelect.options[i].text === product.category) {
      categorySelect.selectedIndex = i;
      break;
    }
  }
}

// Function to clear form fields
function clearForm() {
  document.getElementById("product_name").value = "";
  document.getElementById("product_brand").value = "";
  document.getElementById("size_or_quantity").value = "";
  document.getElementById("taste_or_scent").value = "";
  document.getElementById("colour").value = "";
  document.getElementById("additional_description").value = "";
  document.getElementById("quantity_in_stock").value = "";
  document.getElementById("unit_price").value = "";
  document.getElementById("categorySelect").selectedIndex = 0; // Reset category dropdown
}

// Function to delete a product from the list
function deleteProduct(index) {
  products.splice(index, 1);
  displayProducts();
}
