function Rectangle(w, height) {
    //thuộc tính
    this.width = w;
    this.height = height;

    //phương thức
    this.getArea = function () {
        return this.width*this.height;
    }

    this.getPerimeter = function () {
        return (this.width + this.height)*2;
    }
    this.drawCanvas = function () {
        let elementCanvas = document.getElementById("myCanvas");
        let context = elementCanvas.getContext("2d");
        context.beginPath();
        context.fillStyle = "red";
        context.fillRect(0, 0, this.width, this.height);
        context.stroke();
    }

    this.setWidthAndHeight = function (newWidth, newHeight) {
        this.height = newHeight;
        this.width =  newWidth;
    }
}

let hinhChuNhat1 = new Rectangle(12,20);
//sử dụng phương thức của đối tượng
//tên của đối tượng + . + tên của phương thức
alert("Dien tich hnc1 la "+hinhChuNhat1.getArea());

hinhChuNhat1.drawCanvas();

hinhChuNhat1.setWidthAndHeight(120, 200);

