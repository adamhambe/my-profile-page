<template>
	<section class="standard-page-layout secondary-bg-color primary-text-color" id="about">

		<div class="about-content">
			<figure class="about-image-container"> <img class="about-image" :src="laptop" alt="..." title="">
			</figure>
			<div class="about-text">
				<h4>About Me</h4>
				<h3>Full stack developer with a motivation to build clean,
					minimal and inviting websites that removes the clutter and puts the
					product in focus.
				</h3>
				<p>
					Hey! I'm a junior to mid level full-stack developer from Gothenburg, Sweden. I
					studied backend programming
					for about two years and since then I have mainly worked as a frontend developer. My backend programming
					consisted of
					mostly Java but through my job I have been exposed to some node. What I've mostly worked with is
					Javascript,especially the Vue framework.
				</p>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const laptop = ref('../../../images/laptop6.png')
</script>

<style lang="scss" src="./style.scss"></style>