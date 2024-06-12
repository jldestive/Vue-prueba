<script>
export default {
	name: 'Form',
	props: ['addUsertoList'],
	data: () => ({
		firstName: '',
		lastName: '',
		email: '',
		age: 0,
		sex: '',
	}),
	methods: {
		submit() {
			const user = {
				firstName: this.firstName,
				lastName: this.lastName,
				email: this.email,
				age: this.age,
				sex: this.sex,
			};

			this.addUsertoList(user);
			this.clearForm();
		},
		clearForm() {
			this.firstName = '';
			this.lastName = '';
			this.email = '';
			this.age = 0;
			this.sex = '';
		},
	},
};
</script>

<template>
	<form @submit.prevent="submit">
		<div class="container">
			<label for="name">Name:</label>
			<input type="text" name="name" required id="name" v-model="firstName" />
		</div>

		<div class="lastName container">
			<label for="lastName">Last Name:</label>
			<input
				type="text"
				name="lastName"
				required
				id="lastName"
				v-model="lastName"
			/>
		</div>

		<div class="container">
			<label for="email">Email:</label>
			<input type="email" name="email" required id="email" v-model="email" />
		</div>

		<div class="age container">
			<label>Age:</label>
			<input type="number" required name="age" id="age" v-model="age" />
		</div>

		<div class="container">
			<label>Sex:</label>
			<select name="sex" id="sex" v-model="sex" required>
				<option value="male">Male</option>
				<option value="female">Female</option>
			</select>
		</div>

		<div class="button-container">
			<button type="submit">Submit</button>
		</div>
	</form>
</template>

<style scoped>
@media (max-width: 600px) {
	.lastName,
	.age {
		display: none;
	}
}

form {
	display: flex;
	flex-direction: column;
	row-gap: 10px;

	label {
		font-weight: bold;
		font-size: 1.5rem;
	}

	input,
	select {
		padding: 10px 5px;
		max-width: 300px;
		border-radius: 5px;
	}
}

.container {
	display: flex;
	flex-direction: column;
}

.button-container {
	width: 100%;
}
button {
	padding: 10px 24px;
	border-radius: 5px;
}
</style>
