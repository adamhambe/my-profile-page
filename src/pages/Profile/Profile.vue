<template>
	<div class="standard-page-layout" id="profile">
		<NavbarComp />
		<div class="standard-page">
			<ul class="grid-container">
				<li class="grid-item">
					<router-link to="/task-manager">Task Manager</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" >
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({


});
</script>
<style scoped src="./style.scss" lang="scss"></style>