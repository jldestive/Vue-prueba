<script>
import {
	Table,
	TableCell,
	TableCaption,
	TableHeader,
	TableBody,
	TableHead,
	TableFooter,
} from '@/components/ui/table';
import axios from 'axios';

export default {
	components: { Table, TableHeader, TableBody },
	props: ['users'],
	updated: () => {
		const BASE_URL = 'https://api.nationalize.io';

		const countriesByPersons = this.users.map(async user => {
			const { firstName, lastName } = user;
			const url = `${BASE_URL}?name=${firstName} ${lastName}`;
		});
	},
};
</script>

<template>
	<Table>
		<TableCaption>A list of recents added users</TableCaption>

		<TableHeader>
			<TableRow>
				<TableHead>First Name</TableHead>
				<TableHead>Last Name</TableHead>
				<TableHead>Email</TableHead>
				<TableHead>Age</TableHead>
				<TableHead>Sex</TableHead>
			</TableRow>
		</TableHeader>

		<TableBody>
			<TableRow v-for="user in users" :key="user.id">
				<TableCell>{{ user.firstName }}</TableCell>
				<TableCell>{{ user.lastName }}</TableCell>
				<TableCell>{{ user.email }}</TableCell>
				<TableCell>{{ user.age }}</TableCell>
				<TableCell>{{ user.sex }}</TableCell>
			</TableRow>
		</TableBody>
	</Table>
</template>
