var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ShopSchema = new Schema( {
  id:{type:String},
  name: { type:String,required: true,unique:true},
  address: { type:String, required:true},
  lng: { type:Number,required:true},
  lat: { type:Number ,required:true},
  tags: { type:Array,required:true},
  withdrawn: {type:Boolean ,default:false}
});



module.exports = mongoose.model('Shop',ShopSchema);

var Shop =mongoose.model('Shop',ShopSchema);
//get products

module.exports= {
    async getShops(sort,status) {
      const shops = await Shop.find(status).sort(sort);
      return shops;
    },
    async getShopById(id) {
      const shop = await Shop.findById(id);
      return shop;
    },
    async addShops(shops) {
      const shop = await Shop.create(shops);
      shop.id = String(shop._id);
     const shopout= await Shop.findOneAndUpdate({_id:shop._id},{$set : shop },{new:true});
     return shopout;
    },
     async deleteShop(id){
      const shop= await Shop.deleteOne({_id:id});
      return shop;
    },
    async updateShops(id,shop,options){
      var query={_id: id};
      var withdr = false;
      if (shop.withdrawn!=null) {withdr=shop.withdrawn;}
      var update = {
      name:shop.name,
      address: shop.address,
      lng: shop.lng,
      lat: shop.lat,
      tags :shop.tags,
      withdrawn: withdr
      };
      const shops= await Shop.findOneAndUpdate(query,update,options);
      return shops;
    },
    async updateShopfields(id,shop,options){
      var query={_id: id};
      const shops= await Shop.findOneAndUpdate(query,{$set : shop },options);
      return shops;
    }
}
