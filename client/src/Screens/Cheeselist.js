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
import { deleteCheese, getAllCheese } from '../actions/myoPizzaAction';
import AdminScreen from './AdminScreen/AdminScreen';

export default function Cheeselist() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllCheese());
	}, [dispatch]);
	const cheesestate = useSelector((state) => state.getAllCheese);

	const { cheeses, loading } = cheesestate;
	return (
		<>
			<AdminScreen />
			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
				Cheese Type
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
					<TableCaption>Cheese Type</TableCaption>
					<Thead>
						<Tr>
							<Th>Cheese Type</Th>
							<Th>Stock</Th>

							<Th>Actions</Th>
						</Tr>
					</Thead>
					<Tbody>
						{cheeses.map((cheese) => (
							<Tr key={cheese._id}>
								<Td>{cheese.name}</Td>
								<Td>{cheese.stock}</Td>
								<Td>
									<Trash
										onClick={() => {
											dispatch(
												deleteCheese(cheese._id),
											);
										}}
										size={22}
										color='#bc2037'
									/>
									<Link
										to={`/admin/editcheese/${cheese._id}`}
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
