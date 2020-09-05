var mongoose = require('mongoose');
var Schema = mongoose.Schema;
Product = require('./products');
Shop = require('./shops');
const {getProducts,getProductsById,addProducts,deleteProducts,updateProducts}= require('./products');
const {getShops,getShopById,addShops,deleteShop,updateShops}= require('./shops');
var PricesSchema = new Schema( {
  id: {type:String},
  price: { type:Number,required: true},
  dateFrom: { type:Date, required:true},
  dateTo: { type:Date, required:true},
  productName: { type:String,required:false},
  productId: { type:String ,required:true},
  productTags: { type:Object,required:false},
  shopId: {type:String ,required:true},
  shopName: {type:String ,required:false},
  shopTags: {type:Object,required:false},
  shopAddress: {type:String , required:false},
  shopDist: {type:Number,required:false},
  withdrawn: {type:Boolean ,default:false}
});

module.exports = mongoose.model('Price',PricesSchema);
var Price =mongoose.model('Price',PricesSchema);

//get prices
module.exports={
  async getPrices(ShopID,productId,tags,sort,status){
  if(ShopID==null){ShopID={$exists:true}};
  if(productId==null){productId={$exists:true}};
  if(tags==null){tags={$exists:true}};
  //mongoose query to find all prices based on the given criteria
  const prices = await Price.find({"shopId":ShopID,"productId":productId,$or:[{"productTags":tags},{"shopTags":tags}],"withdrawn":status}).sort(sort);
  return prices;
  },
  async addPrices(price){
      const product= await getProductsById(price.productId);
      const shop= await getShopById(price.shopId);
      var newPrice = {
      price:price.price,
      shopId: price.shopId,
      productId: price.productId,
      dateFrom: price.dateFrom,
      dateTo:price.dateTo,
      shopName: shop.name,
      shopAddress: shop.address,
      shopTags: shop.tags,
      productName: product.name,
      productTags: product.tags
      };
    const prices = await Price.create(newPrice);
    prices.id = String(prices._id);
     const priceout= await Price.findOneAndUpdate({_id:prices._id},{$set : prices },{new:true});
     return priceout;
  },
  async deletePrice(id){
   const price= await Price.deleteOne({_id:id});
   return price;
 },
  async updatePricefields(id,price,options){
    var query={_id: id};
    const prices= await Price.findOneAndUpdate(query,{$set : price },options);
    return prices;
  }
}
