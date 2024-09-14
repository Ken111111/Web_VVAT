// Data: List of products
const products = [
    {
        "id": "GD20-0R7G-S2-BK",
        "title": "Biến tần INVT GD20-0R7G-S2-BK 0.75kW 1 Pha 220V",
        "image": "Picture_Invt/GD20-0R7G-S2-BK.png",
        "sku": "GD20-0R7G-S2-BK",
        "manufacturer": "INVT",
        "quality": "Mới 100%",
        "warranty": "Chính hãng",
        "manual": "SP_INVT/GD20 Series VFD Manual_V1.9.pdf",
        "price": "Liên hệ (0896 449 884)"
    },

    {
        "id": "GD20-1R5G-S2",
        "title": "Biến tần INVT GD20-1R5G-S2 1.5kW 1 Pha 220V",
        "image": "Picture_Invt/GD20-0R7G-S2-BK.png",
        "sku": "GD20-1R5G-S2",
        "manufacturer": "INVT",
        "quality": "Mới 100%",
        "warranty": "Chính hãng",
        "manual": "SP_INVT/GD20 Series VFD Manual_V1.9.pdf",
        "price": "Liên hệ (0896 449 884)"
    },

    // Add more products here
];

// Function to load product information based on product ID
function loadProductInfo(productId) {
    const product = products.find(p => p.id === productId);

    if (product) {
        document.querySelector(".section-title").textContent = product.title;
        document.querySelector(".product-image img").src = product.image;
        document.querySelector(".product-description p:nth-child(1)").textContent = `SKU: ${product.sku}`;
        document.querySelector(".product-description p:nth-child(2)").textContent = `Nhà Sản Xuất: ${product.manufacturer}`;
        document.querySelector(".product-description p:nth-child(3)").textContent = `Chất Lượng: ${product.quality}`;
        document.querySelector(".product-description p:nth-child(4)").textContent = `Bảo Hành: ${product.warranty}`;
        document.querySelector(".product-description a").href = product.manual;
        document.querySelector(".product-description a").textContent = "Download PDF";
        document.querySelector(".product-description p:nth-child(6)").textContent = `Giá: ${product.price}`;
    } else {
        console.error('Product not found');
    }
}

// Call the function to load the product info when the page loads
document.addEventListener("DOMContentLoaded", function() {
    const productId = "GD20-0R7G-S2-BK"; // Example product ID
    loadProductInfo(productId);
});
