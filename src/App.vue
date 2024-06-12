<script>
import Form from './components/Form.vue';
import Table from './components/Table.vue';
import List from './components/List.vue';

export default {
	components: { Form, List, Table },
	data: () => ({
		users: [],
	}),
	methods: {
		addUsertoList(user) {
			this.users.push(user);
		},
	},
};
</script>

<template>
	<main class="bg-red-500">
		<Form :addUsertoList="addUsertoList"></Form>
		<div>
			<Table :users="users"></Table>
			<List :users="users"></List>
		</div>
	</main>
</template>

<style scoped></style>
