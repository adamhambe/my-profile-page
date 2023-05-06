<template>
	<header class="standard-page-layout">
		<div id="portrait">
			<h1>{{ name }}</h1>
			<h2>{{ jobTitle }}</h2>
			<div>
				<img :src="avatarUrl" alt="..." width="250" height="250" />
			</div>
		</div>
		<a class="scroll-down" href="#profile" v-smooth-scroll>
			<span>
				<i class="fas fa-chevron-down"> </i>
			</span>
		</a>
	</header>
</template>
  
<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
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