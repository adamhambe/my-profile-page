

<script lang="ts" >
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
export default defineComponent({
});
</script>

<template>
	<div class="standard-page-layout" id="profile">
		<div class="standard-page">
			<ul class="flex-container">
				<li class="flex-item">
					<router-link to="/fitness-tracker">Fitness Tracker</router-link>
				</li>
				<li class="flex-item">
					<router-link to="/habit-tracker">Habit Tracker</router-link>
				</li>
				<li class="flex-item">
					<router-link to="/expense-tracker">Expense Tracker</router-link>
				</li>
			</ul>

		</div>
		<router-view />
	</div>
</template>
<style scoped src="./style.scss" lang="scss"></style>