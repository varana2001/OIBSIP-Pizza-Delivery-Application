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
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCheese } from '../actions/myoPizzaAction';
import AdminScreen from './AdminScreen/AdminScreen';

export default function Addcheese() {
	const dispatch = useDispatch();
	const [cheeseName, setCheeseName] = useState('');
	const [cheeseStock, setCheeseStock] = useState();
	const addCheeseState = useSelector((state) => state.addCheese);
	const { success, error, loading } = addCheeseState;

	function formHandler(e) {
		e.preventDefault();
		const cheese = {
			name:cheeseName,
			stock: cheeseStock,
		};
		
		console.log(cheese);
		dispatch(addCheese(cheese));
	}

	return (
		<>
			<AdminScreen />
			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
				Add Cheese
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

			{error && (
				<Alert status='error'>
					<AlertIcon />
					Something went wrong ! Try again
				</Alert>
			)}

			{success && (
				<Alert
					width='50%'
					margin='auto'
					alignItems='center'
					justifyContent='center'
					status='success'
					textAlign='center'
				>
					<AlertIcon />
					New Cheese added successfully
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
					placeholder='Cheese Stock'
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
					ADD CHEESE{' '}
				</Button>
			</FormControl>
		</>
	);
}
