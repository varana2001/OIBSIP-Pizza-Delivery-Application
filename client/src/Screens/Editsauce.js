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
import { getSauceById, updateSauce } from '../actions/myoPizzaAction';
import AdminScreen from './AdminScreen/AdminScreen';

export default function Editsauce() {
	const {sauceid } = useParams();
	const dispatch = useDispatch();
	const getsaucebyidstate = useSelector((state) => state.getSauceById);
	const { sauce, error, loading } = getsaucebyidstate;

	const updatesaucestate = useSelector((state) => state.updateSauce);
	const { updatesuccess, updateloading, updateerror } = updatesaucestate;
	const [sauceName, setSauceName] = useState('');
	const [sauceStock, setSauceStock] = useState();

	useEffect(() => {
		if (sauce) {
			if (sauce._id === sauceid) {
				setSauceName(sauce.name);
				setSauceStock(sauce.stock);
			} else {
				dispatch(getSauceById(sauceid));
			}
		} else {
			dispatch(getSauceById(sauceid));
		}
	}, [dispatch, sauce, sauceid]);

	function formHandler(e) {
		e.preventDefault();
		const updatedSauce = {
			_id: sauceid,
			name: sauceName,
			stock: Number(sauceStock),
		};
		dispatch(updateSauce(updatedSauce));
	}

	return (
		<>
			<AdminScreen />
			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
				Edit Sauce
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
					Sauce details edited successfully
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
					placeholder='SauceStock'
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
					EDIT SAUCE{' '}
				</Button>
			</FormControl>
		</>
	);
}
