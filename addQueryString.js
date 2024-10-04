// Đặt phiên bản cache, có thể dựa trên ngày tháng hoặc phiên bản bạn muốn
const version = new Date().getTime(); // Hoặc bạn có thể đặt phiên bản cố định ví dụ: '1.0'

window.addEventListener('load', function() {
    // Lấy tất cả các thẻ <link> và <script>
    const links = document.querySelectorAll('link[rel="stylesheet"], script[src]');

    links.forEach((element) => {
        let src = element.href || element.src;

        // Nếu chưa có query string thì thêm vào
        if (!src.includes('v=')) {
            const separator = src.includes('?') ? '&' : '?';
            const newSrc = src + separator + 'v=' + version;

            if (element.tagName.toLowerCase() === 'link') {
                element.href = newSrc; // Cập nhật lại href cho <link>
            } else if (element.tagName.toLowerCase() === 'script') {
                element.src = newSrc; // Cập nhật lại src cho <script>
            }
        }
    });
});
