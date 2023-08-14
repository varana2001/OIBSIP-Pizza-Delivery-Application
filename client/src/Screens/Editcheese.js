import {
	Alert,
	AlertIcon,
	Button,
	FormControl,
	FormLabel,
	Input,
	Spinner,
	Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCheeseById, updateCheese } from '../actions/myoPizzaAction';
import AdminScreen from './AdminScreen/AdminScreen';

import axios from 'axios';
	const url = 'http://localhost:8080/api/addcheese/myopizza';



export default function Editcheese() {
	const {cheeseid } = useParams();
	const dispatch = useDispatch();
	const getcheesebyidstate = useSelector((state) => state.getCheeseById);
	const { cheese, error, loading } = getcheesebyidstate;

	const updatecheesestate = useSelector((state) => state.updateCheese);
	const { updatesuccess, updateloading, updateerror } = updatecheesestate;
	const [cheeseName, setCheeseName] = useState('');
	const [cheeseStock, setCheeseStock] = useState();

	useEffect(() => {
		if (cheese) {
			if (cheese._id === cheeseid) {
				setCheeseName(cheese.name);
				setCheeseStock(cheese.stock);
			} else {
				dispatch(getCheeseById(cheeseid));
			}
		} else {
			dispatch(getCheeseById(cheeseid));
		}
	}, [dispatch, cheese, cheeseid]);

	async function formHandler(e)  {
		e.preventDefault();
		const updatedCheese=  {
			_id: cheeseid,
			name: cheeseName,
			stock: Number(cheeseStock)
		};
		await axios.post(url,{"cheese" : updateCheese}).then(res=>{
			console.log("res" + res);
		});

		dispatch(updateCheese(updatedCheese));
	}

	return (
		<>
			<AdminScreen />
			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
				Edit Cheese
			</Text>
			{loading && (
				<Spinner
					thickness='4px'
					speed='0.65s'
					emptyColor='gray.200'
					color='blue.500'
					size='xl'
				/>
			)}

			{updateloading && (
				<Spinner
					thickness='4px'
					speed='0.65s'
					emptyColor='gray.200'
					color='blue.500'
					size='xl'
				/>
			)}

			{error && (
				<Alert status='error'>
					<AlertIcon />
					Something went wrong ! Try again
				</Alert>
			)}

			{updateerror && (
				<Alert status='error'>
					<AlertIcon />
					Something went wrong ! Try again
				</Alert>
			)}

			{updatesuccess && (
				<Alert
					width='50%'
					margin='auto'
					alignItems='center'
					justifyContent='center'
					status='success'
				>
					<AlertIcon />
					Cheese details edited successfully
				</Alert>
			)}
			<FormControl width='50%' margin='auto' marginBottom={3} isRequired>
				<FormLabel mt={2} htmlFor='name'>
					Cheese Type
				</FormLabel>
				<Input
					value={cheeseName}
					onChange={(e) => {
						setCheeseName(e.target.value);
					}}
					placeholder='Cheese Type'
				/>
				<FormLabel mt={2} htmlFor='price'>
					Cheese Stock
				</FormLabel>
				<Input
					value={cheeseStock}
					onChange={(e) => {
						setCheeseStock(e.target.value);
					}}
					placeholder='CheeseStock'
				/>
				<Button
					margin={2}
					backgroundColor='#008080'
					width='200px'
					type='submit'
					color='white'
					onClick={formHandler}
				>
					{' '}
					EDIT CHEESE{' '}
				</Button>
			</FormControl>
		</>
	);
}
