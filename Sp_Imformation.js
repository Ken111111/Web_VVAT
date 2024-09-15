// Data: List of products
const products = [
    // ----------------------------------------------------------INVT-----------------------------------------------------------
    {
        "id": "GD20-0R7G-S2-BK",
        "title": "Biến tần INVT GD20-0R7G-S2-BK 0.75kW 1 Pha 220V",
        "image": "Picture_Invt/GD20-0R7G-S2-BK.png",
        "sku": "GD20-0R7G-S2-BK",
        "manufacturer": "INVT",
        "quality": "Mới 100%",
        "warranty": "Chính hãng",
        "manual": "SP_INVT/GD20 Series VFD Manual_V1.9.pdf",
        "price": "Liên hệ (0896 449 884)",
        // "infor_1":"",
        // "infor_2":"",
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
        "price": "Liên hệ (0896 449 884)",
        // "infor_1":"",
        // "infor_2":"",
    },
    // ----------------------------------------------------------PLC S7-1200-----------------------------------------------------------
    {
        "id": "6ES7214-1AG40-0XB0",
        "title": "6ES7214-1AG40-0XB0 – Compact CPU 1214C DC/DC/DC S7-1200",
        "image": "Picture Siemens/S7-1200.png",
        "sku": "G6ES7214-1AG40-0XB0",
        "manufacturer": "Siemens",
        "quality": "Mới 100%",
        "warranty": "Chính hãng",
        "manual": "SP Siemens/Catalogue_PLC_Siemens_S7_1200.pdf",
        "price": "Liên hệ (0896 449 884)",
        "infor_1":"SIMATIC S7-1200, CPU 1214C, COMPACT CPU, DC/DC/DC, ONBOARD I/O: 14 DI 24V DC; 10 DO 24 V DC; 2 AI 0 – 10V DC, POWER SUPPLY: DC 20.4 – 28.8 V DC, PROGRAM/DATA MEMORY: 100 KB.",
        "infor_2":"Tích hợp giao diện điều khiển I/O PROFINET.<br>Mô-đun truyền thông Master/Slave PROFIBUS DP.<br>Mô-đun GPRS để kết nối với mạng di động GSM/G.<br>Mô-đun LTE để liên lạc trong các mạng di động thế hệ thứ 4 (sự phát triển lâu dài).<br>Bộ xử lý truyền thông để kết nối với phần mềm TeleControl Server Basic điều khiển phần mềm trung tâm thông qua Ethernet, cũng như để giao tiếp an toàn qua mạng dựa trên IP.<br>Bộ xử lý truyền thông để kết nối trung tâm điều khiển cho các ứng dụng điều khiển từ xa.<br>RF120C để kết nối với hệ thống nhận dạng SIMATIC.<br>Mô-đun SM1278 để kết nối cảm biến IO-Link và thiết bị truyền động.<br>Kết nối point-to-point thông qua các mô-đun truyền thông hoặc bo mạch truyền thông.",
    },
    {
        "id": "6ES7212-1AE40-0XB0",
        "title": "6ES7212-1AE40-0XB0 – Compact CPU 1212C DC/DC/DC S7-1200",
        "image": "Picture Siemens/S7-1200.png",
        "sku": "6ES7212-1AE40-0XB0",
        "manufacturer": "Siemens",
        "quality": "Mới 100%",
        "warranty": "Chính hãng",
        "manual": "SP Siemens/Catalogue_PLC_Siemens_S7_1200.pdf",
        "price": "Liên hệ (0896 449 884)",
        "infor_1":"SIMATIC S7-1200, CPU 1212C, COMPACT CPU, DC/DC/DC, ONBOARD I/O: 8 DI 24V DC; 6 DO 24 V DC; 2 AI 0 – 10V DC, POWER SUPPLY: DC 20.4 – 28.8 V DC, PROGRAM/DATA MEMORY: 75 KB.",
        "infor_2":"Tích hợp giao diện điều khiển I/O PROFINET.<br>Mô-đun truyền thông Master/Slave PROFIBUS DP.<br>Mô-đun GPRS để kết nối với mạng di động GSM/G.<br>Mô-đun LTE để liên lạc trong các mạng di động thế hệ thứ 4 (sự phát triển lâu dài).<br>Bộ xử lý truyền thông để kết nối với phần mềm TeleControl Server Basic điều khiển phần mềm trung tâm thông qua Ethernet, cũng như để giao tiếp an toàn qua mạng dựa trên IP.<br>Bộ xử lý truyền thông để kết nối trung tâm điều khiển cho các ứng dụng điều khiển từ xa.<br>RF120C để kết nối với hệ thống nhận dạng SIMATIC.<br>Mô-đun SM1278 để kết nối cảm biến IO-Link và thiết bị truyền động.<br>Kết nối point-to-point thông qua các mô-đun truyền thông hoặc bo mạch truyền thông.",
    },
    {
        "id": "6ES7211-1AE40-0XB0",
        "title": "6ES7211-1AE40-0XB0 – Compact CPU 1211C DC/DC/DC S7-1200",
        "image": "Picture Siemens/S7-1200.png",
        "sku": "6ES7211-1AE40-0XB0",
        "manufacturer": "Siemens",
        "quality": "Mới 100%",
        "warranty": "Chính hãng",
        "manual": "SP Siemens/Catalogue_PLC_Siemens_S7_1200.pdf",
        "price": "Liên hệ (0896 449 884)",
        "infor_1":"SIMATIC S7-1200, CPU 1211C, COMPACT CPU, DC/DC/DC, ONBOARD I/O: 6 DI 24V DC; 4 DO 24 V DC; 2 AI 0 – 10V DC, POWER SUPPLY: DC 20.4 – 28.8 V DC, PROGRAM/DATA MEMORY: 50 KB",
        "infor_2":"Tích hợp giao diện điều khiển I/O PROFINET.<br>Mô-đun truyền thông Master/Slave PROFIBUS DP.<br>Mô-đun GPRS để kết nối với mạng di động GSM/G.<br>Mô-đun LTE để liên lạc trong các mạng di động thế hệ thứ 4 (sự phát triển lâu dài).<br>Bộ xử lý truyền thông để kết nối với phần mềm TeleControl Server Basic điều khiển phần mềm trung tâm thông qua Ethernet, cũng như để giao tiếp an toàn qua mạng dựa trên IP.<br>Bộ xử lý truyền thông để kết nối trung tâm điều khiển cho các ứng dụng điều khiển từ xa.<br>RF120C để kết nối với hệ thống nhận dạng SIMATIC.<br>Mô-đun SM1278 để kết nối cảm biến IO-Link và thiết bị truyền động.<br>Kết nối point-to-point thông qua các mô-đun truyền thông hoặc bo mạch truyền thông.",
    },
    {
        "id": "6ES7211-1BE40-0XB0",
        "title": "6ES7211-1BE40-0XB0 – Compact CPU 1211C AC/DC/relay S7-1200",
        "image": "Picture Siemens/S7-1200.png",
        "sku": "6ES7211-1BE40-0XB0 ",
        "manufacturer": "Siemens",
        "quality": "Mới 100%",
        "warranty": "Chính hãng",
        "manual": "SP Siemens/Catalogue_PLC_Siemens_S7_1200.pdf",
        "price": "Liên hệ (0896 449 884)",
        "infor_1":"SIMATIC S7-1200, CPU 1211C, COMPACT CPU, AC/DC/RELAY, ONBOARD I/O: 6 DI 24V DC; 4 DO RELAY 2A; 2 AI 0 – 10V DC, POWER SUPPLY: AC 85 – 264 V AC AT 47 – 63 HZ, PROGRAM/DATA MEMORY: 50 KB",
        "infor_2":"Tích hợp giao diện điều khiển I/O PROFINET.<br>Mô-đun truyền thông Master/Slave PROFIBUS DP.<br>Mô-đun GPRS để kết nối với mạng di động GSM/G.<br>Mô-đun LTE để liên lạc trong các mạng di động thế hệ thứ 4 (sự phát triển lâu dài).<br>Bộ xử lý truyền thông để kết nối với phần mềm TeleControl Server Basic điều khiển phần mềm trung tâm thông qua Ethernet, cũng như để giao tiếp an toàn qua mạng dựa trên IP.<br>Bộ xử lý truyền thông để kết nối trung tâm điều khiển cho các ứng dụng điều khiển từ xa.<br>RF120C để kết nối với hệ thống nhận dạng SIMATIC.<br>Mô-đun SM1278 để kết nối cảm biến IO-Link và thiết bị truyền động.<br>Kết nối point-to-point thông qua các mô-đun truyền thông hoặc bo mạch truyền thông.",
    },

    // Add more products here
];

// Function to load product information based on product ID from URL
function loadProductInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');

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
        document.querySelector(".infor-1").innerHTML = product.infor_1 || 'Thông tin không có sẵn';
        document.querySelector(".infor-2").innerHTML = product.infor_2 || 'Thông tin không có sẵn';

        
    } else {
        console.error('Product not found');
    }
}

// Call the function to load the product info when the page loads
document.addEventListener("DOMContentLoaded", loadProductInfo);
