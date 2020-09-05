var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new Schema( {
  id: {type:String},
  name: { type:String,required: true,unique:true},
  description: { type:String, required:true},
  category: { type:String,required:true},
  tags: { type:Array,required:true},
  withdrawn: {type:Boolean ,default:false}
});



module.exports = mongoose.model('Product',ProductSchema);
var Product =mongoose.model('Product',ProductSchema);
//get products

module.exports= {
    async getProducts(sort,status) {
      const products = await Product.find(status).sort(sort);

      return products;
    },
    async getProductsById(id){
      const products = await Product.findById(id);
      return products;
    },
    async addProducts(products){
     const product = await Product.create(products);
     product.id = String(product._id);
     const productout= await Product.findOneAndUpdate({_id:product._id},{$set : product },{new:true});
     return productout;
    },
    async deleteProducts(id){
      const product= await Product.deleteOne({_id:id});
      return product;
    },
    async updateProducts(id,product,options){
      var query={_id: id};
      var withdr = false;
      if (product.withdrawn!=null) {withdr=product.withdrawn;}
      var update = {
        name:product.name,
        description: product.description,
        category: product.category,
        tags :product.tags,
        withdrawn: withdr
       };
      const products= await Product.findOneAndUpdate(query,update,options);
      return products;
    },
    async updateProductfields(id,product,options){
      var query={_id: id};
      const products= await Product.findOneAndUpdate(query,{$set : product },options);
      return products;
    }
}
