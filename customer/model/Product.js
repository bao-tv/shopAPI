function Product(id, itemName, price, screen, backCamera, frontCamera, img, des, type) {
    this.id = id;
    this.itemName = itemName;
    this.price = price;
    this.screen = screen;
    this.backCamera = backCamera;
    this.frontCamera = frontCamera;
    this.img = img;
    this.des = des;
    this.type = type;
}

function CartItem (id, itemName, price, img, type, quality) {
    this.id = id;
    this.itemName = itemName;
    this.price = price;
    this.img = img;
    this.type = type;
    this.quality = quality;
}