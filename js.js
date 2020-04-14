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
}

let hinhChuNhat1 = new Rectangle(12,20);
//sử dụng phương thức của đối tượng
