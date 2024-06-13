<script setup>
import { ref } from 'vue';

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Loader2 } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { assert } from '@vueuse/core';
import axios from 'axios';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const age = ref('');
const sex = ref('');
let isSubmitting = ref(false);

const { addUsertoList } = defineProps(['addUsertoList']);

const clearForm = () => {
	firstName.value = '';
	lastName.value = '';
	email.value = '';
	age.value = '';
	sex.value = '';
};

const getNacionality = async fullName => {
	assert(fullName != undefined && fullName.length > 0, 'fullName is required');

	isSubmitting.value = true;

	const BASE_URL = 'https://api.nationalize.io';
	const {
		data: { country },
	} = await axios.get(`${BASE_URL}?name=${fullName}`);

	assert(country, 'country is required');

	const { countryId } = Object.entries(country).reduce(
		(acc, [_, { country_id, probability }]) => {
			return probability > acc.maxPercent
				? { countryId: country_id, maxPercent: probability }
				: acc;
		},
		{ countryId: '', maxPercent: 0 },
	);

	const countryName = await getNation(countryId);
	isSubmitting.value = false;

	return await countryName;
};

const getNation = async countryId => {
	assert(countryId, 'countryId is required');
	const url = `https://restcountries.com/v3.1/alpha/${countryId}`;
	const { data } = await axios.get(url);
	const { common } = data[0].name;
	return common;
};

const submit = async () => {
	const user = {
		firstName: firstName.value,
		lastName: lastName.value,
		email: email.value,
		age: age.value,
		sex: sex.value,
		nacionality: await getNacionality(`${firstName.value} ${lastName.value}`),
	};

	addUsertoList(user);
	clearForm();
};
</script>

<template>
	<form @submit.prevent="submit" class="max-w-xl flex flex-col gap-4">
		<FormField name="firstName">
			<FormItem>
				<FormLabel>First Name</FormLabel>
				<FormControl>
					<Input
						required
						type="text"
						placeholder="First name"
						v-model="firstName"
					/>
				</FormControl>
			</FormItem>
		</FormField>

		<FormField name="lastName">
			<FormItem class="hidden md:block">
				<FormLabel>Last Name</FormLabel>
				<FormControl>
					<Input
						required
						type="text"
						placeholder="Last name"
						v-model="lastName"
					/>
				</FormControl>
			</FormItem>
		</FormField>

		<FormField name="email">
			<FormItem>
				<FormLabel>Email</FormLabel>
				<FormControl>
					<Input required type="email" placeholder="Email" v-model="email" />
				</FormControl>
			</FormItem>
		</FormField>

		<FormField name="age">
			<FormItem class="hidden md:block">
				<FormLabel>Age</FormLabel>
				<FormControl>
					<Input required type="number" placeholder="Age" v-model="age" />
				</FormControl>
			</FormItem>
		</FormField>

		<Select v-model="sex" required>
			<SelectTrigger>
				<SelectValue placeholder="Sex" />
			</SelectTrigger>

			<SelectContent>
				<SelectGroup>
					<SelectItem value="Male">Male</SelectItem>
				</SelectGroup>

				<SelectGroup>
					<SelectItem value="Female">Female</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>

		<Button type="submit">
			<Loader2 v-if="isSubmitting" class="size-4 mr-2 animate-spin" />
			Submit
		</Button>
	</form>
</template>
