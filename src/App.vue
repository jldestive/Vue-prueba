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
	<main class="p-8 md:p-16">
		<Form :addUsertoList="addUsertoList"></Form>
		<div
			class="grid lg:grid-rows-1 lg:grid-cols-3 items-center grid-rows-2 grid-cols-1 gap-x-16 gap-y-10"
		>
			<div class="col-span-2">
				<Table :users="users" />
			</div>
			<div class="col-span-1">
				<List :users="users" />
			</div>
		</div>
	</main>
</template>

<style scoped></style>
