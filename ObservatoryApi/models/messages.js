var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema( {
  fullname:  { type:String,required: true},
  email:  { type:String,required: true},
  subject:  { type:String,required: true},
  message:  { type:String,required: true}
});

module.exports = mongoose.model('Message',MessageSchema);

var Message =mongoose.model('Message',MessageSchema);

module.exports= {
    async getMessages() {
      const messages = await Message.find({});

      return messages;
    },
    async getMessageById(id){
      const messages = await Message.findById(id);
      return messages;
    },
    async addMessages(message){
     const messages = await Message.create(message);
     return messages;
    },
    async deleteMessage(id){
      const messages = await Message.deleteOne({_id:id});
      return messages;
    }
}