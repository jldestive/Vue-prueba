<script setup>
import { computed, onMounted } from 'vue';
import { assert } from '@vueuse/core';

import Button from './ui/button/Button.vue';

const { users } = defineProps(['users']);

onMounted(() => {
	assert(users.length > 0, 'users is required');
});

const averageAge = computed(
	() => users.reduce((acc, user) => acc + user.age, 0) / users.length,
);

const womens = computed(
	() => users.filter(user => user.sex === 'Female').length,
);
const mens = computed(() => users.filter(user => user.sex === 'Male').length);

const minAgePerson = computed(() =>
	users.reduce((acc, user) => Math.min(acc, user.age), Infinity),
);
const maxAgePerson = computed(() =>
	users.reduce((acc, user) => Math.max(acc, user.age), 0),
);
</script>

<template>
	<section class="flex flex-col" v-if="users.length">
		<Button class="w-full"> Average Age: {{ averageAge }} </Button>
		<div class="w-full flex gap-x-2 py-2">
			<Button class="w-full">Womens: {{ womens }}</Button>
			<Button class="w-full">Mens: {{ mens }}</Button>
		</div>
		<div class="flex gap-x-2">
			<Button class="w-full">Min Age: {{ minAgePerson }}</Button>
			<Button class="w-full">Max Age: {{ maxAgePerson }}</Button>
		</div>
	</section>
</template>
