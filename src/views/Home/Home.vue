<template>
	<header class="standard-page-layout" id="home">
		<div id="portrait">
			<h1>{{ name }}</h1>
			<h2>{{ jobTitle }}</h2>
			<div>
				<img :src="avatarUrl" alt="..." width="250" height="250" />
			</div>
		</div>
		<router-link to="/#about" class="scroll-down">
			<span>
				<i class="fas fa-chevron-down"></i>
			</span>
		</router-link>
	</header>
</template>
  
<script lang="ts">
import { ref, defineComponent } from 'vue';
import { RouterLink } from 'vue-router'

export default defineComponent({
	components: { RouterLink },
	setup() {
		const name = ref('ADAM HAMBE');
		const jobTitle = ref('FULL STACK DEVELOPER');
		const avatarUrl = ref('avatar.png');

		return {
			name,
			jobTitle,
			avatarUrl,
		};
	},
});
</script>
  
<style lang="scss" scoped src="./style.scss"></style>