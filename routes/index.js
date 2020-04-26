var express = require('express');
var router = express.Router();

var contactModel = require('../model/shoes.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  contactModel.find({}, function(err, dulieu){
    res.render('index', { title: '' , data:dulieu });
  })
  
});


/* GET chi-tiet-san-pham page. */
router.get('/chi-tiet-san-pham/*.:idsanpham', function(req, res, next) {
  var id = req.params.idsanpham ;
  contactModel.find({_id : id}, function(err, dulieu){
    res.render( 'chi-tiet-san-pham.ejs' ,{idsanpham:req.params.idsanpham,data:dulieu });
  });
});

/* GET  san pham page. */
router.get('/san-pham', function(req, res, next) {
  res.render('san-pham.ejs', { title: '' });
});

/* GET  gio hang. */
router.get('/giohang', function(req, res, next) {
  res.render('cart.ejs', { title: '' });
});

/* GET  account */
router.get('/dang-ky-dang-nhap', function(req, res, next) {
  res.render('account.ejs', { title: '' });
});

//================================================================================================
            /* Them sua xoa bang mongoose */

/*xem du lieu. */
router.get('/xem', function(req, res, next) {
  contactModel.find({}, function(err, dulieu){
    res.render('xem.ejs', { title: 'xem du lieu' , data:dulieu });
  })
  
});

/*xoa du lieu. */
router.get('/xoa/:idcanxoa', function(req, res, next) {
  var id = req.params.idcanxoa ;
  contactModel.findByIdAndRemove(id).exec();
  res.redirect('/xem');
  
});

/* sua du lieu. */
router.get('/sua/:idcansua', function(req, res, next) {
  var id2 = req.params.idcansua ;
  contactModel.find({_id : id2}, function(err, dulieu){
    res.render( 'sua' ,{ title:" sua du lieu", data:dulieu });
  });
});

router.post('/sua/:idcansua', function(req, res, next) {
  var id2 = req.params.idcansua ;
  contactModel.findById(id2, function(err, dulieu){
    if(err) return handleError(err);
    dulieu.tensp = req.body.tensp;
    dulieu.bigImage = req.body.bigImage;
    dulieu.productImage1 = req.body.productImage1;
    dulieu.productImage2 = req.body.productImage2;
    dulieu.productImage3 = req.body.productImage3;
    dulieu.productImage4 = req.body.productImage4;
    dulieu.productImage5 = req.body.productImage5;
    dulieu.productImage6 = req.body.productImage6;
    dulieu.trangthai = req.body.trangthai;
    dulieu.mota = req.body.mota;
    dulieu.chitietsanpham = req.body.chitietsanpham;
    dulieu.giagoc = req.body.giagoc;
    dulieu.giasale = req.body.giasale;
    dulieu.duongdanSEO = req.body.duongdanSEO;
    dulieu.save();
    res.redirect('/xem');
  });
});

/* them du lieu. */
router.get('/them', function(req, res, next) {
  res.render( 'them' ,{ title:" them du lieu"});
});

router.post('/them', function(req, res, next) {
  var phantu = {
    'tensp' : req.body.tensp,
    'bigImage' : req.body.bigImage,
    'productImage1' : req.body.productImage1,
    'productImage2' : req.body.productImage2,
    'productImage3' : req.body.productImage3,
    'productImage4' : req.body.productImage4,
    'productImage5' : req.body.productImage5,
    'productImage6' : req.body.productImage6,
    'trangthai' : req.body.trangthai,
    'mota' : req.body.mota,
    'chitietsanpham' : req.body.chitietsanpham,
    'giagoc' : req.body.giagoc,
    'giasale' : req.body.giasale,
    'duongdanSEO' : req.body.duongdanSEO
  }
  var dulieu = new contactModel(phantu);
  dulieu.save();
  res.redirect('/xem');
});





module.exports = router;
