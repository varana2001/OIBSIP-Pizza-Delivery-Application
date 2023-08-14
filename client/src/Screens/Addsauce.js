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
import { addSauce } from '../actions/myoPizzaAction';
import AdminScreen from './AdminScreen/AdminScreen';

export default function Addsauce() {
	const dispatch = useDispatch();
	const [sauceName, setSauceName] = useState('');
	const [sauceStock, setSauceStock] = useState();
	const addSauceState = useSelector((state) => state.addSauce);
	const { success, error, loading } = addSauceState;

	function formHandler(e) {
		e.preventDefault();
		const sauce = {
			name:sauceName,
			stock: sauceStock,
		};
		console.log(sauce);
		dispatch(addSauce(sauce));
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
					New Sauce added successfully
				</Alert>
			)}
			<FormControl width='50%' margin='auto' marginBottom={3} isRequired>
				<FormLabel mt={2} htmlFor='name'>
					Sauce Name
				</FormLabel>
				<Input
					value={sauceName}
					onChange={(e) => {
						setSauceName(e.target.value);
					}}
					placeholder='Sauce Name'
				/>
				<FormLabel mt={2} htmlFor='price'>
					Sauce Stock
				</FormLabel>
				<Input
					value={sauceStock}
					onChange={(e) => {
						setSauceStock(e.target.value);
					}}
					placeholder='Sauce Stock'
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
					ADD SAUCE{' '}
				</Button>
			</FormControl>
		</>
	);
}