var express = require('express');
var app = express();
var morgan = require('morgan');
var portHttps = 8765;
var portHttp = 8764;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var async = require('async');
var cors = require('cors');
const args = process.argv;
var fs = require('fs');
var https = require('https');


if (args[2] == "prod") { args[2] =  'mongodb://user:user1234@ds149682.mlab.com:49682/softeng' }
else { args[2] = 'mongodb://user:user1234@ds155845.mlab.com:55845/testsofteng' }


mongoose.set('useFindAndModify', false);
//https://stackoverflow.com/questions/30216583/how-to-enable-cors-in-mean-stack-web-app
app.use(cors());
app.use(morgan('dev'));
var AuthController = require('./Controllers/AuthController');
app.use('/observatory/api', AuthController);
var UserController = require('./Controllers/UserController');
app.use('/observatory/api/user', UserController);
var VerifyToken = require('./Controllers/VerifyToken');



app.use(bodyParser.json());
Product = require('./models/products');
Shop = require('./models/shops');
Price = require('./models/prices');
const { getProducts, getProductsById, addProducts, deleteProducts, updateProducts, updateProductfields } = require('./models/products');
const { getShops, getShopById, addShops, deleteShop, updateShops, updateShopfields } = require('./models/shops');
const { getPrices, addPrices, deletePrice, updatePricefields} = require('./models/prices');
const { getMessages, getMessageById, addMessages, deleteMessage } = require('./models/messages');


//@ds155845.mlab.com:55845/testsofteng
//@ds149682.mlab.com:49682/softeng
mongoose.connect(args[2], { useNewUrlParser: true }, function (err) {
//mongoose.connect('mongodb://user:user1234@ds149682.mlab.com:49682/softeng', { useNewUrlParser: true }, function (err) {
	if (err) {
		console.log('Not connected to the database: ' + err);
	} else {
		console.log('Succesfully connected to MongoDB ' + args[2]);
	}
});
mongoose.set('useCreateIndex', true);


var key = fs.readFileSync('../ObservatoryApi/Certificates/key.pem');
//var key = fs.readFileSync('ObservatoryApi/Certificates/key.pem');
var cert = fs.readFileSync( '../ObservatoryApi/Certificates/cert.pem' );
var options = {
	key: key,
	cert: cert
	};


function handleError(res, reason, message, code) {
	console.log("ERROR: " + reason + message);
	var errorc = reason.split(" ");
	errorc = errorc[0];
	console.log(errorc);
	if (errorc == "E11000") {
		code = 406;
	}
	res.status(code || 500).send("Error " + code + " : " + message);
}

function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1 / 180;
		var radlat2 = Math.PI * lat2 / 180;
		var theta = lon1 - lon2;
		var radtheta = Math.PI * theta / 180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180 / Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit == "K") { dist = dist * 1.609344 }
		if (unit == "M") { dist = dist * 0.8684 }
		return dist;
	}
}

function isValidDate(dateString) {
	// First check for the pattern
	// Parse the date parts to integers
	var parts = dateString.split("-");
	var day = parseInt(parts[2], 10);
	var month = parseInt(parts[1], 10);
	var year = parseInt(parts[0], 10);
	// Check the ranges of month and year
	if (year < 1000 || year > 3000 || month == 0 || month > 12) {
		return false;
	}

	var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	// Adjust for leap years
	if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
		monthLength[1] = 29;
	}

	// Check the range of the day
	return day > 0 && day <= monthLength[month - 1];
};

function getToday() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0!
	var yyyy = today.getFullYear();

	if (dd < 10) {
		dd = '0' + dd
	}

	if (mm < 10) {
		mm = '0' + mm
	}
	today = yyyy + "-" + mm + "-" + dd;
	return today;
}

// GET Products
app.get('/observatory/api/products', function (req, res) {
	let count = parseInt(req.query.count, 10) || 20;
	let start = parseInt(req.query.start, 10) || 0;
	let status = req.query.status;
	if (status === "ALL") {
		status = JSON.parse('{}');
	} else if (status === "WITHDRAWN") {
		status = JSON.parse('{"withdrawn":"true"}');
	} else {
		status = JSON.parse('{"withdrawn":"false"}');
	}
	let sort = req.query.sort;
	if (sort === "id|ASC") {
		sort = JSON.parse('{"_id":"1"}');
	} else if (sort === "name|ASC") {
		sort = JSON.parse('{"name":"1"}')
	} else if (sort === "name|DESC") {
		sort = JSON.parse('{"name":"-1"}')
	} else {
		sort = JSON.parse('{"_id":"-1"}')
	}
	async function getPr() {
		try {
			var products = await getProducts(sort, status);
			if (Object.keys(products).length === 0) {
				res.status(404).send("Error 404 : Not Found");
			}
			else if (req.query.format == "json" || req.query.format == null) {

				//let total = Object.keys(products).length;
				products = products.slice(start, start + count);
				let total = Object.keys(products).length;
				res.status(200).json({ start: start, count: count, total: total, products });
			} else {
				res.status(400).send("Error 400 : Bad Request");
			}
		} catch (error) {
			handleError(res, error.message, "Failed to get Product");
		}

	}
	getPr();
	//res.send('Hello browser');
});

//Get Product by ID

app.get('/observatory/api/products/:_id', function (req, res) {
	async function getPrById() {
		try {
			const product = await getProductsById(req.params._id);
			if (product == null || Object.keys(product).length === 0) {
				res.status(404).send("Error 404 : Not Found");
			}
			else if (req.query.format == "json" || req.query.format == null) {
				res.status(200).json(product);
			} else {
				res.status(400).send("Error 400 : Bad Request");
			}
		}
		catch (error) {
			handleError(res, error.message, "Failed to get Product,not Valid type of ID", 400);
		}
	}
	getPrById();
});

//post products

app.post('/observatory/api/products', VerifyToken, function (req, res) {
	let productBody = req.body;
	async function postPr() {
		try {
			const product = await addProducts(productBody);
			res.status(200).json(product);
		}
		catch (error) {
			handleError(res, error.message, "Failed to add Products.", 400);
		}
	}
	postPr();
});

// Update products
app.put('/observatory/api/products/:_id', VerifyToken, function (req, res) {
	var id = req.params._id;
	let products = req.body;
	async function updatePr() {
		try {
			const product = await updateProducts(id, products, { new: true });
			if (product == null || Object.keys(product).length === 0) {
				res.status(404).send("Error 404 : Not Found");
			}
			else {
				res.status(200).json(product);
			}
		} catch (err) {
			handleError(res, err.message, "Failed to update Product.");
		}
	}
	updatePr();
});

//Update specific fields in product

app.patch('/observatory/api/products/:_id', VerifyToken, function (req, res) {

	var id = req.params._id;
	let updates = req.body;
	async function updatePrFields() {
		try {
			const product = await updateProductfields(id, updates, { new: true });
			if (product == null || Object.keys(product).length === 0) {
				res.status(404).send("Error 404 : Not Found");
			}
			else {
				res.status(200).json(product);
			}
		} catch (err) {
			handleError(res, err.message, "Failed to update Product.");
		}
	}
	updatePrFields();
});


//Delete product ******EDittt**fixed(kouz)

app.delete('/observatory/api/products/:_id', VerifyToken, function (req, res) {
	let id = req.params._id;
	async function deletePr() {
		try {
			const product = await deleteProducts(id);
			if (product.n == 0) { res.status(404).json({ "Error 404": "Product not found" }); }
			else {
				res.status(200).json({ "message": "OK" });
			}
		} catch (err) {
			handleError(res, err.message, "Failed to delete Product.");
		}
	}
	async function withdrawnPr() {
		try {
			const product = await updateProductfields(id, { withdrawn: true }, { new: true });
			if (product == null || Object.keys(product).length === 0) {
				res.status(404).send("Error 404 : Not Found");
			}
			else {
				res.status(200).json(product);
			}
		} catch (err) {
			handleError(res, err.message, "Failed to withdrawn Product.");
		}
	}
	if (req.user.admin) {
		deletePr();
	} else {
		withdrawnPr();
	}
});



//GET shops

app.get('/observatory/api/shops', function (req, res) {
	let count = parseInt(req.query.count, 10) || 20;
	let start = parseInt(req.query.start, 10) || 0;
	let status = req.query.status;
	if (status === "ALL") {
		status = JSON.parse('{}');
	} else if (status === "WITHDRAWN") {
		status = JSON.parse('{"withdrawn":"true"}');
	} else {
		status = JSON.parse('{"withdrawn":"false"}');
	}
	let sort = req.query.sort;
	if (sort === "id|ASC") {
		sort = JSON.parse('{"_id":"1"}');
	} else if (sort === "name|ASC") {
		sort = JSON.parse('{"name":"1"}')
	} else if (sort === "name|DESC") {
		sort = JSON.parse('{"name":"-1"}')
	} else {
		sort = JSON.parse('{"_id":"-1"}')
	}
	async function getSh() {
		try {
			var shops = await getShops(sort, status);
			if (Object.keys(shops).length === 0) {
				res.status(404).send("Error 404 : Not Found");
			}
			else if (req.query.format == "json" || req.query.format == null) {

				//let total = Object.keys(shops).length;
				shops = shops.slice(start, start + count);
				let total = Object.keys(shops).length;

				res.status(200).json({ start: start, count: count, total: total, shops });
			} else {
				res.status(400).send("Error 400 : Bad Request");
			}
		} catch (error) {
			handleError(res, error.message, "Failed to get Shops");
		}

	}
	getSh();
});

//GET shop by ID

app.get('/observatory/api/shops/:_id', function (req, res) {
	async function getShById() {
		try {
			const shop = await getShopById(req.params._id);
			if (shop == null || Object.keys(shop).length === 0) {
				res.status(404).send("Error 404 : Not Found");
			}
			else if (req.query.format == "json" || req.query.format == null) {
				res.status(200).json(shop);
			} else {
				res.status(400).send("Error 400 : Bad Request");
			}
		}
		catch (error) {
			handleError(res, error.message, "Failed to get Shop,not Valid type of ID", 400);
		}
	}
	getShById();
});

//post shops

app.post('/observatory/api/shops', VerifyToken, function (req, res) {
	let shopBody = req.body;
	async function postSh() {
		try {
			const shop = await addShops(shopBody);
			res.status(200).json(shop);
		}
		catch (error) {
			handleError(res, error.message, "Failed to add Shops.", 400);
		}
	}
	postSh();
});

//Update Shops

app.put('/observatory/api/shops/:_id', VerifyToken, function (req, res) {
	var id = req.params._id;
	let updates = req.body;
	async function updateSh() {
		try {
			const shop = await updateShops(id, updates, { new: true });
			if (shop == null || Object.keys(shop).length === 0) {
				res.status(404).send("Error 404 : Not Found");
			}
			else {
				res.status(200).json(shop);
			}
		} catch (err) {
			handleError(res, err.message, "Failed to update Shop.");
		}
	}
	updateSh();
});

//Update specific fields on shops

app.patch('/observatory/api/shops/:_id', VerifyToken, function (req, res) {

	var id = req.params._id;
	let updates = req.body;
	async function updateShFields() {
		try {
			const shop = await updateShopfields(id, updates, { new: true });
			if (shop == null || Object.keys(shop).length === 0) {
				res.status(404).send("Error 404 : Not Found");
			}
			else {
				res.status(200).json(shop);
			}
		} catch (err) {
			handleError(res, err.message, "Failed to update Shop.");
		}
	}
	updateShFields();
});

app.delete('/observatory/api/shops/:_id', VerifyToken, function (req, res) {
	let id = req.params._id;
	async function deleteSh() {
		try {
			const shop = await deleteShop(id);
			if (shop.n == 0) { res.status(404).json({ "Error 404": "Shop not found" }); }
			else {
				res.status(200).json({ "message": "OK" });
			}
		} catch (err) {
			handleError(res, err.message, "Failed to delete Shop.");
		}
	}
	async function withdrawnSh() {
		try {
			const shop = await updateShopfields(id, { withdrawn: true }, { new: true });
			if (shop == null || Object.keys(shop).length === 0) {
				res.status(404).send("Error 404 : Not Found");
			}
			else {
				res.status(200).json(shop);
			}
		} catch (err) {
			handleError(res, err.message, "Failed to withdrawn Shop.");
		}
	}

	if (req.user.admin) {
		deleteSh();
	} else {
		withdrawnSh();
	}
});

//Get prices
//Example:
//GET {baseURL}/prices?date.from=2018-11-15&date.to=2018-11-30
//					  &geo.dist=5&geo.lng=X&geo.lat=Y
//					  &products=123&shops=321
//					  &tags="Sampouan"&sort=price|ASC

app.get('/observatory/api/prices', function (req, res) {
	let count = parseInt(req.query.count, 10) || 20;
	let start = parseInt(req.query.start, 10) || 0;
	let sort = req.query.sort;
	let counter = 0; //counter to check if all geo values(geo.dist/geo.lat/geo.lng) were given on the query
	let geoLng;
	let geoDist;
	let geoLat;
	let status = req.query.status;

	if (status === "ALL") {
		status = { $exists: true };
	} else if (status === "WITHDRAWN") {
		status = true;
	} else {
		status = false;
	}

	if (req.query.geoLng == null || req.query.geoLng == "") {
		geoLng = 0;
	}
	else {
		geoLng = req.query.geoLng;
		counter = counter + 1;
	}
	if (req.query.geoLat == null || req.query.geoLat == "") {
		geoLat = 0;
	}
	else {
		geoLat = req.query.geoLat;
		counter = counter + 1;
	}
	if (req.query.geoDist == null || req.query.geoDist == "") {
		geoDist = 0;
	}
	else {
		geoDist = req.query.geoDist;
		counter = counter + 1;
	}

	let dateFromReq = req.query.dateFrom;
	let dateToReq = req.query.dateTo;
	let flag = false;
	let ascGeo = false;
	let descGeo = false;

	if (sort == "price|DESC") {
		sort = JSON.parse('{"price":"-1"}');
	}
	else if (sort == "geo.dist|ASC") {
		sort = JSON.parse('{}');
		ascGeo = true;

	}
	else if (sort == "geo.dist|DESC") {
		sort = JSON.parse('{}');
		descGeo = true;
	}
	else if (sort == "date|ASC") {
		sort = JSON.parse('{"dateTo":"1"}')
	}
	else if (sort == "date|DESC") {
		sort = JSON.parse('{"dateTo":"-1"}')
	}
	else {
		sort = JSON.parse('{"price":"1"}')
	}

	//Geo checks
	if (geoDist == 0 && geoLat == 0 && geoLng == 0 && counter == 0) {
		flag = true;
	}
	if (isNaN(geoDist) || isNaN(geoLng) || isNaN(geoLat)) {
		res.status(400).send("Error 400 : Wrong type of value for geo.dist/geo.lat/geo.lng ");
	}
	else if (counter != 3 && !flag) {
		res.status(400).send("Error 400 : Please Provide all values for geo.dist/geo.lat/geo.lng ");
	}
	//Date checks
	else {
		if ((dateFromReq == null) && (dateToReq == null)) {
			dateFromReq = getToday();
			dateToReq = getToday();
		}
		if ((dateFromReq == null) || (dateToReq == null)) {
			res.status(400).send("Error 400 : Please provide both Date.to and Date.from or either one");
		}
		else {
			if (!isValidDate(dateFromReq) || !isValidDate(dateToReq)) {
				res.status(400).send("Error 400 : Please provide accurate Date.to or Date.from(YYYY-MM-DD) ");
			}
			else {
				dateFromReq = new Date(dateFromReq);
				dateToReq = new Date(dateToReq);
				//Main Function to get Prices based on the given query
				async function getPricesFn() {
					try {
						//Calls getPrices from prices.js to find prices
						const prices = await getPrices(req.query.shops, req.query.products, req.query.tags, sort, status);
						//No prices found
						if (prices == null || Object.keys(prices).length === 0) {
							res.status(404).send("Error 404 : Not Found");
						}

						//Prices found. Default response format is json, anything else is bad request/
						else if (req.query.format == "json" || req.query.format == null) {
							let dist = 0.0;
							let pricesByDate = [];
							let dateFrom;
							let dateTo;
							dateFromReq = new Date(dateFromReq);
							var pr;
							for (pr in prices) {
								dateFrom = new Date(prices[pr].dateFrom);
								dateTo = new Date(prices[pr].dateTo)
								if ((dateFrom <= dateToReq) && (dateTo >= dateFromReq)) {
									pricesByDate.push(prices[pr]);
								}
							}
							//Geo parameters were given
							if (!flag) {
								var pricesOut = [];
								for (sh in pricesByDate) {
									var shop = await getShopById(pricesByDate[sh].shopId);
									dist = distance(parseFloat(geoLng), parseFloat(geoLat), parseFloat(shop.lng), parseFloat(shop.lat), "M");
									if (dist <= parseFloat(geoDist)) {
										pricesByDate[sh].shopDist = dist;
										pricesOut.push(pricesByDate[sh]);

									}
								}
								if (pricesOut == null) {
									res.status(404).send("Error 404 : Not Found from query");
								}
								else {
									let total = Object.keys(pricesOut).length;
									pricesOut = pricesOut.slice(start, start + count);

									if (ascGeo) {
										pricesOut.sort(function (a, b) {
											return parseFloat(a.shopDist) - parseFloat(b.shopDist);
										});
									} else{
										if (descGeo){
											pricesOut.sort(function (a, b) {
												return parseFloat(b.shopDist) - parseFloat(a.shopDist);
											});
										}
									}

									res.status(200).json({ start: start, count: count, total: total, pricesOut });
								}
							}
							//Geo parameters not given
							else {
								if (pricesByDate == null) {
									res.status(404).send("Error 404 : Not Found from dates");
								}
								else {
									let total = Object.keys(pricesByDate).length;
									pricesByDate = pricesByDate.slice(start, start + count);

									pricesOut = pricesByDate;
									res.status(200).json({ start: start, count: count, total: total, pricesOut });
								}
							}
						}
						//User requested a non json format
						else {
							res.status(400).send("Error 400 : Bad Request");
						}
					}
					catch (err) {
						handleError(res, err.message, "Failed to find prices .");
					}
				}
				getPricesFn();
			}
		}
	}
})

//POST prices

/*app.post('/observatory/api/prices', VerifyToken, function (req, res) {
	let priceBody = req.body;
	async function postPrices() {
		try {
			const price = await addPrices(priceBody);
			res.status(200).json(price);
		}
		catch (error) {
			handleError(res, error.message, "Failed to add Prices.", 400);
		}
	}
	postPrices();

});*/

app.post('/observatory/api/prices', VerifyToken, function (req, res) {
	let priceBody = req.body;
	async function postPrices() {
		try {
			const price = await addPrices(priceBody);
			//const prices = await getPrices(null,price.productId,null,'{"price":"1"}',{ $exists: true });


			var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
			var firstDate = new Date(price.dateTo);
			var secondDate = new Date(price.dateFrom);

			var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)))+1;


			res.status(200).json({ start: 0, count: 10, total: diffDays, price });
		}
		catch (error) {
			handleError(res, error.message, "Failed to add Prices.", 400);
		}
	}
	postPrices();

});

//delete prices or withdraw them

app.delete('/observatory/api/prices/:_id', VerifyToken, function (req, res) {
	let id = req.params._id;
	async function deletePrices() {
		try {
			const price = await deletePrice(id);
			if (price.n == 0) { res.status(404).json({ "Error 404": "Price not found" }); }
			else {
				res.status(200).json({ "message": "OK" });
			}
		} catch (err) {
			handleError(res, err.message, "Failed to delete Price.");
		}
	}
	async function withdrawnPrice() {
		try {
			const price = await updatePricefields(id, { withdrawn: true }, { new: true });
			if (price == null || Object.keys(price).length === 0) {
				res.status(404).send("Error 404 : Not Found");
			}
			else {
				res.status(200).json(price);
			}
		} catch (err) {
			handleError(res, err.message, "Failed to withdrawn Price.");
		}
	}
	if (req.user.admin) {
		deletePrices();
	} else {
		withdrawnPrice();
	}
});

//endpoint for contact us messages

app.get('/observatory/api/messages', function (req, res) {
	async function getMsg() {
		try {
			var msgs = await getMessages();
			if (Object.keys(msgs).length === 0) {
				res.status(404).send("Error 404 : Not Found");
			}
			else if (req.query.format == "json" || req.query.format == null) {

				res.status(200).json({ msgs });
			} else {
				res.status(400).send("Error 400 : Bad Request");
			}
		} catch (error) {
			handleError(res, error.message, "Failed to get Message");
		}

	}
	getMsg();
});


//Get Message by ID

app.get('/observatory/api/messages/:_id', function (req, res) {
	async function getMessById() {
		try {
			const msg = await getMessageById(req.params._id);
			if (msg == null || Object.keys(msg).length === 0) {
				res.status(404).send("Error 404 : Not Found");
			}
			else if (req.query.format == "json" || req.query.format == null) {
				res.status(200).json(msg);
			} else {
				res.status(400).send("Error 400 : Bad Request");
			}
		}
		catch (error) {
			handleError(res, error.message, "Failed to get Message,not Valid type of ID", 400);
		}
	}
	getMessById();
});


//

app.post('/observatory/api/messages', function (req, res) {
	let messageBody = req.body;
	async function postMsg() {
		try {
			const msg = await addMessages(messageBody);
			res.status(200).json(msg);
		}
		catch (error) {
			handleError(res, error.message, "Failed to add Message.");
		}
	}
	postMsg();
});


app.delete('/observatory/api/messages/:_id', function (req, res) {
	let id = req.params._id;
	async function deleteMsg() {
		try {
			const msg = await deleteMessage(id);
			if (msg.n == 0) { res.status(404).json({ "Error 404": "Message not found" }); }
			else {
				res.status(200).json({ "message": "OK" });
			}
		} catch (err) {
			handleError(res, err.message, "Failed to delete Message.");
		}
	}
	deleteMsg();
});

https.createServer(options, app).listen(portHttps, function(){
	console.log("Running the Https Server on port " + portHttps);
});

module.exports=app.listen(portHttp);
