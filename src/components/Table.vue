<script setup>
import {
	Table,
	TableCell,
	TableCaption,
	TableHeader,
	TableBody,
	TableHead,
	TableRow,
} from '@/components/ui/table';

const { users } = defineProps(['users']);
</script>

<template>
	<Table class="mt-16">
		<TableCaption>A list of recents added users</TableCaption>

		<TableHeader>
			<TableRow>
				<TableHead>First Name</TableHead>
				<TableHead>Last Name</TableHead>
				<TableHead>Email</TableHead>
				<TableHead>Age</TableHead>
				<TableHead>Sex</TableHead>
				<TableHead>Nacionality (max %)</TableHead>
			</TableRow>
		</TableHeader>

		<TableBody>
			<TableRow v-for="user in users" :key="user.email">
				<TableCell>{{ user.firstName }}</TableCell>
				<TableCell>{{ user.lastName }}</TableCell>
				<TableCell>{{ user.email }}</TableCell>
				<TableCell>{{ user.age }}</TableCell>
				<TableCell>{{ user.sex }}</TableCell>
				<TableCell>{{ user.nacionality }}</TableCell>
			</TableRow>
		</TableBody>
	</Table>
</template>
