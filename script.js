// Đợi cho HTML và CSS tải xong toàn bộ
document.addEventListener("DOMContentLoaded", function() {
    
    // Lấy tất cả các thanh tiến trình kỹ năng
    const progressBars = document.querySelectorAll('.progress');

    // Thêm độ trễ nhỏ để tạo hiệu ứng load trang mượt mà
    setTimeout(() => {
        progressBars.forEach(bar => {
            // Lấy giá trị % từ thuộc tính data-width trong HTML
            const targetWidth = bar.getAttribute('data-width');
            // Cập nhật chiều rộng để kích hoạt hiệu ứng transition trong CSS
            bar.style.width = targetWidth;
        });
    }, 300);

});