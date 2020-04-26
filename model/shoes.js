var mongoose = require('mongoose');
var shoes = new mongoose.Schema({ tensp: 'string',bigImage: 'string',productImage1: 'string',productImage2: 'string',productImage3: 'string',productImage4: 'string',productImage5: 'string',productImage6: 'string',trangthai: 'string',mota: 'string',chitietsanpham: 'string',giagoc: 'string',giasale: 'string',duongdanSEO: 'string' },{collection:'sanpham'});

module.exports = mongoose.model('shoes', shoes);
