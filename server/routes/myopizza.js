const express = require('express');
const router = express.Router();
const Bases = require('../models/bases');
const Sauces = require('../models/sauces');
const Toppings = require('../models/toppings');
const Cheese = require('../models/cheese');

router.get('/getallbases', async (req, res) => {
	try {
		const bases = await Bases.find({});
		res.send(bases);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

router.get('/getallcheese', async (req, res) => {
	try {
		const cheese = await Cheese.find({});
		res.send(cheese);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

router.get('/getallsauces', async (req, res) => {
	try {
		const sauces = await Sauce.find({});
		res.send(sauces);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});
router.get('/getalltoppings', async (req, res) => {
	try {
		const toppings = await Toppings.find({});
		res.send(toppings);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//add base
router.post('/addbase', async (req, res) => {
	const base = req.body.base;
	try {
		const newBase = new Bases({
			name: base.name,
			stock: base.stock,
			varients: ['small', 'medium', 'large'],
			prices: [base.prices],
		});
		await newBase.save();
		res.send('New Base Added Successfully');
		window.location.reload();
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});
router.post('/getbasebyid', async (req, res) => {
	const baseid = req.body.baseid;
	try {
		const base = await Bases.findById(baseid);
		res.send(base);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

router.post('/updatebase', async (req, res) => {
	const updatedBase = req.body.updatedBase;
	try {
		const base = await Bases.findByIdAndUpdate(
			updatedBase._id,
			updatedBase,
		);
		res.send(base);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//delete base
router.post('/deletebase', async (req, res) => {
	const baseid = req.body.baseid;
	try {
		const base = await Bases.findByIdAndDelete(baseid);
		res.send(base);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//add topping
router.post('/addtopping', async (req, res) => {
	const topping = req.body.topping;
	try {
		const newTopping = new Toppings({
			name: topping.name,
			stock: topping.stock,
		});
		await newTopping.save();
		res.send('New Topping Added Successfully');
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//get topping by id
router.post('/gettoppingbyid', async (req, res) => {
	const toppingid = req.body.toppingid;
	try {
		const topping = await Toppings.findById(toppingid);
		res.send(topping);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//update topping
router.post('/updatetopping', async (req, res) => {
	const updatedTopping = req.body.updatedTopping;
	try {
		const topping = await Toppings.findByIdAndUpdate(
			updatedTopping._id,
			updatedTopping,
		);
		res.send(topping);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//delete topping
router.post('/deletetopping', async (req, res) => {
	const toppingid = req.body.toppingid;
	try {
		const topping = await Toppings.findByIdAndDelete(toppingid);
		res.send(topping);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});
router.post('/addsauce', async (req, res) => {
	const sauce = req.body.sauce;
	try {
		const newSauce = new Sauces({
			name: sauce.name,
			stock: sauce.stock,
		});
		await newSauce.save();
		res.send('New Sauce Added Successfully');
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//get sauce by id
router.post('/getsaucebyid', async (req, res) => {
	const sauceid = req.body.sauceid;
	try {
		const sauce = await Sauces.findById(sauceid);
		res.send(sauce);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//update sauce
router.post('/updatesauce', async (req, res) => {
	const updatedSauce = req.body.updatedSauce;
	try {
		const sauce = await Sauces.findByIdAndUpdate(
			updatedSauce._id,
			updatedSauce,
		);
		res.send(sauce);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//delete sauce
router.post('/deletesauce', async (req, res) => {
	const sauceid = req.body.sauceid;
	try {
		const sauce = await Sauces.findByIdAndDelete(sauceid);
		res.send(sauce);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});
router.post('/addcheese', async (req, res) => {
	const cheese = req.body.cheese;
	try {
		const newCheese = new Cheese({
			name: cheese.name,
			stock: cheese.stock,
		});
		await newCheese.save();
		res.send('New Cheese Added Successfully');
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//get cheese by id
router.post('/getcheesebyid', async (req, res) => {
	const cheeseid = req.body.cheeseid;
	try {
		const cheese = await Cheese.findById(cheeseid);
		res.send(cheese);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//update cheese
router.post('/updatecheese', async (req, res) => {
	const updatedCheese = req.body.updatedCheese;
	try {
		const cheese = await Cheese.findByIdAndUpdate(
			updatedCheese._id,
			updatedCheese,
		);
		res.send(cheese);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//delete cheese
router.post('/deletecheese', async (req, res) => {
	const cheeseid = req.body.cheeseid;
	try {
		const cheese = await Toppings.findByIdAndDelete(cheeseid);
		res.send(cheese);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});
module.exports = router;
