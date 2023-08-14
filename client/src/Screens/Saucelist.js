import {
	Spinner,
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { Pencil, Trash } from 'phosphor-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteSauce, getAllSauces } from '../actions/myoPizzaAction';
import AdminScreen from './AdminScreen/AdminScreen';

export default function Sauceslist() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllSauces());
	}, [dispatch]);
	const saucestate = useSelector((state) => state.getAllSauces);

	const { sauces, loading } = saucestate;
	return (
		<>
			<AdminScreen />
			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
				Sauce list
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
			<TableContainer width='75%' margin='auto'>
				<Table variant='striped' colorScheme='gray' borderWidth='2px'>
					<TableCaption>Sauce List</TableCaption>
					<Thead>
						<Tr>
							<Th>Sauce name</Th>
							<Th>Stock</Th>

							<Th>Actions</Th>
						</Tr>
					</Thead>
					<Tbody>
						{sauces.map((sauce) => (
							<Tr key={sauce._id}>
								<Td>{sauce.name}</Td>
								<Td>{sauce.stock}</Td>
								<Td>
									<Trash
										onClick={() => {
											dispatch(
												deleteSauce(sauce._id),
											);
										}}
										size={22}
										color='#bc2037'
									/>
									<Link
										to={`/admin/editsauce/${sauce._id}`}
									>
										<Pencil size={22} color='#19e672' />
									</Link>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
}
