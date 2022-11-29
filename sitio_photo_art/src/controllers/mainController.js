const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const visited = products.filter(function(product){
	return product.category == 'visited'
})
const inSale = products.filter(function(product){
	return product.category == 'in-sale'
})
const controller = {
	home: (req, res) => {
		res.render('/', {
			visited,
			inSale,
			toThousand
		});
	},
	register: (req, res) => {
		res.render('register', {
		});
	},
    login: (req, res) => {
		res.render('login', {
		});
	},
    Carrito: (req, res) => {
		res.render('Carrito', {
		});
	},
   
};

module.exports = controller;