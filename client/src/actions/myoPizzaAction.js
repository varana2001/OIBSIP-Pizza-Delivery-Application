import axios from 'axios';

export const getAllBases = () => async (dispatch) => {
	dispatch({ type: 'GET_BASES_REQUEST' });

	const response = await axios.get(
		'http://localhost:8080/api/myopizza/getallbases',
	);
	// console.log(response);
	dispatch({ type: 'GET_BASES_SUCCESS', payload: response.data });
};

export const getAllSauces = () => async (dispatch) => {
	dispatch({ type: 'GET_SAUCES_REQUEST' });

	const response = await axios.get(
		'http://localhost:8080/api/myopizza/getallsauces',
	);
	// console.log(response);
	dispatch({ type: 'GET_SAUCES_SUCCESS', payload: response.data });
};

export const getAllToppings = () => async (dispatch) => {
	dispatch({ type: 'GET_TOPPINGS_REQUEST' });

	const response = await axios.get(
		'http://localhost:8080/api/myopizza/getalltoppings',
	);
	// console.log(response);
	dispatch({ type: 'GET_TOPPINGS_SUCCESS', payload: response.data });
};

export const getAllCheese = () => async (dispatch) => {
	dispatch({ type: 'GET_CHEESE_REQUEST' });

	const response = await axios.get(
		'http://localhost:8080/api/myopizza/getallcheese',
	);
	// console.log(response);
	dispatch({ type: 'GET_CHEESE_SUCCESS', payload: response.data });
};

//add base
export const addBase = (base) => async (dispatch) => {
	dispatch({ type: 'ADD_BASE_REQUEST' });
	try {
		const response = await axios.post(
			'http://localhost:8080/api/myopizza/addbase',
			{ base: base },
		);
		console.log(response);
		dispatch({ type: 'ADD_BASE_SUCCESS' });
	} catch (error) {
		dispatch({ type: 'ADD_BASE_FAILED', payload: error });
	}
};
export const getBaseById = (baseid) => async (dispatch) => {
	dispatch({ type: 'GET_BASE_BY_ID_REQUEST' });
	try {
		const response = await axios.post(
			'http://localhost:8080/api/myopizza/getbasebyid',
			{ baseid: baseid },
		);
		console.log(response);
		dispatch({ type: 'GET_BASE_BY_ID_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_BASE_BY_ID_FAILED', payload: error });
	}
};

//update base
export const updateBase = (updatedBase) => async (dispatch) => {
	dispatch({ type: 'UPDATE_BASE_REQUEST' });
	try {
		const response = await axios.post(
			'http://localhost:8080/api/myopizza/updatebase',
			{ updatedBase: updatedBase },
		);
		console.log(response);
		dispatch({ type: 'UPDATE_BASE_SUCCESS' });
		window.location.href = '/admin/baseslist';
	} catch (error) {
		dispatch({ type: 'UPDATE_BASE_FAILED', payload: error });
	}
};

//delete base
export const deleteBase = (baseid) => async (dispatch) => {
	dispatch({ type: 'DELETE_BASE_REQUEST' });
	try {
		const response = await axios.post(
			'http://localhost:8080/api/myopizza/deletebase',
			{ baseid: baseid },
		);
		console.log(response);
		dispatch({ type: 'DELETE_BASE_SUCCESS' });
		window.location.href = '/admin/baseslist';
	} catch (error) {
		dispatch({ type: 'DELETE_BASE_FAILED', payload: error });
	}
};

//add topping
export const addTopping = (topping) => async (dispatch) => {
	dispatch({ type: 'ADD_TOPPING_REQUEST' });
	try {
		const response = await axios.post(
			'http://localhost:8080/api/myopizza/addtopping',
			{ topping: topping },
		);
		console.log(response);
		dispatch({ type: 'ADD_TOPPING_SUCCESS' });
	} catch (error) {
		dispatch({ type: 'ADD_TOPPING_FAILED', payload: error });
	}
};

//get topping by id
export const getToppingById = (toppingid) => async (dispatch) => {
	dispatch({ type: 'GET_TOPPING_BY_ID_REQUEST' });
	try {
		const response = await axios.post(
			'http://localhost:8080/api/myopizza/gettoppingbyid',
			{ toppingid: toppingid },
		);
		console.log(response);
		dispatch({ type: 'GET_TOPPING_BY_ID_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_TOPPING_BY_ID_FAILED', payload: error });
	}
};

//update topping
export const updateTopping = (updatedTopping) => async (dispatch) => {
	dispatch({ type: 'UPDATE_TOPPING_REQUEST' });
	try {
		const response = await axios.post(
			'http://localhost:8080/api/myopizza/updatetopping',
			{ updatedTopping: updatedTopping },
		);
		console.log(response);
		dispatch({ type: 'UPDATE_TOPPING_SUCCESS' });
		window.location.href = '/admin/toppingslist';
	} catch (error) {
		dispatch({ type: 'UPDATE_TOPPING_FAILED', payload: error });
	}
};
//delete topping
export const deleteTopping = (toppingid) => async (dispatch) => {
	dispatch({ type: 'DELETE_TOPPING_REQUEST' });
	try {
		const response = await axios.post(
			'http://localhost:8080/api/myopizza/deletetopping',
			{ toppingid: toppingid },
		);
		console.log(response);
		dispatch({ type: 'DELETE_TOPPING_SUCCESS' });
		window.location.href = '/admin/toppingslist';
	} catch (error) {
		dispatch({ type: 'DELETE_TOPPING_FAILED', payload: error });
	}
};
//add sauce
export const addSauce = (sauce) => async (dispatch) => {
	dispatch({ type: 'ADD_SAUCE_REQUEST' });
	try {
		const response = await axios.post(
			'http://localhost:8080/api/myopizza/addtsauce',
			{ sauce: sauce },
		);
		console.log(response);
		dispatch({ type: 'ADD_SAUCE_SUCCESS' });
	} catch (error) {
		dispatch({ type: 'ADD_SAUCE_FAILED', payload: error });
	}
};

//get sauce by id
export const getSauceById = (sauceid) => async (dispatch) => {
	dispatch({ type: 'GET_SAUCE_BY_ID_REQUEST' });
	try {
		const response = await axios.post(
			'http://localhost:8080/api/myopizza/getsaucebyid',
			{ sauceid: sauceid },
		);
		console.log(response);
		dispatch({ type: 'GET_SAUCE_BY_ID_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_SAUCE_BY_ID_FAILED', payload: error });
	}
};

//update sauce
export const updateSauce = (updatedSauce) => async (dispatch) => {
	dispatch({ type: 'UPDATE_SAUCE_REQUEST' });
	try {
		const response = await axios.post(
			'http://localhost:8080/api/myopizza/updatesauce',
			{ updatedSauce: updatedSauce },
		);
		console.log(response);
		dispatch({ type: 'UPDATE_SAUCE_SUCCESS' });
		window.location.href = '/admin/saucelist';
	} catch (error) {
		dispatch({ type: 'UPDATE_SAUCE_FAILED', payload: error });
	}
};
//delete sauce
export const deleteSauce = (sauceid) => async (dispatch) => {
	dispatch({ type: 'DELETE_SAUCE_REQUEST' });
	try {
		const response = await axios.post(
			'http://localhost:8080/api/myopizza/deletesaucetopping',
			{ sauceid: sauceid },
		);
		console.log(response);
		dispatch({ type: 'DELETE_SAUCE_SUCCESS' });
		window.location.href = '/admin/saucelist';
	} catch (error) {
		dispatch({ type: 'DELETE_SAUCEFAILED', payload: error });
	}
};
//add cheese
export const addCheese = (cheese) => async (dispatch) => {
	dispatch({ type: 'ADD_CHEESE_REQUEST' });
	try {
		const response = await axios.post(
			'http://localhost:8080/api/myopizza/addcheese',
			{ cheese: cheese },
		);
		console.log(response);
		dispatch({ type: 'ADD_CHEESE_SUCCESS' });
	} catch (error) {
		dispatch({ type: 'ADD_CHEESE_FAILED', payload: error });
	}
};

//get cheese by id
export const getCheeseById = (cheeseid) => async (dispatch) => {
	dispatch({ type: 'GET_CHEESE_BY_ID_REQUEST' });
	try {
		const response = await axios.post(
			'http://localhost:8080/api/myopizza/getcheesebyid',
			{ cheeseid: cheeseid },
		);
		console.log(response);
		dispatch({ type: 'GET_CHEESE_BY_ID_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_CHEESE_BY_ID_FAILED', payload: error });
	}
};

//update cheese
export const updateCheese = (updatedCheese) => async (dispatch) => {
	dispatch({ type: 'UPDATE_CHEESE_REQUEST' });
	try {
		const response = await axios.post(
			'http://localhost:8080/api/myopizza/updatecheese',
			{ updatedCheese: updatedCheese },
		);
		console.log(response);
		dispatch({ type: 'UPDATE_CHEESE_SUCCESS' });
		window.location.href = '/admin/cheeselist';
	} catch (error) {
		dispatch({ type: 'UPDATE_CHEESE_FAILED', payload: error });
	}
};
//delete cheese
export const deleteCheese = (cheeseid) => async (dispatch) => {
	dispatch({ type: 'DELETE_CHEESE_REQUEST' });
	try {
		const response = await axios.post(
			'http://localhost:8080/api/myopizza/deletecheese',
			{ cheeseid: cheeseid },
		);
		console.log(response);
		dispatch({ type: 'DELETE_CHEESE_SUCCESS' });
		window.location.href = '/admin/cheeselist';
	} catch (error) {
		dispatch({ type: 'DELETE_CHEESE_FAILED', payload: error });
	}
};