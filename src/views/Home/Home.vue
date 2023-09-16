<template>
	<header class="standard-page-layout header primary-bg-color" id="home">
		<div id="portrait" class="primary-text-color">
			<h1>{{ name }}</h1>
			<h2>{{ jobTitle }}</h2>
			<div>
				<img :src="avatarUrl" alt="..." width="300" height="300" />
			</div>
		</div>
		<div class="tech-stack">
			<h3>Tech Stack</h3>
			<ul class="skills">
				<li class="skill"><img :src="vueLogo" alt="..." title="Vue" hover="Vue" height="45" width="45"></li>
				<li class="skill"><img :src="javaLogo" alt="..." title="Java" height="50" width="50"></li>
				<li class="skill"><img :src="javascriptLogo" alt="..." title="Javascript" height="45" width="45"></li>
				<li class="skill"><img :src="typecriptLogo" alt="..." title="Typescript" height="57" width="57"></li>
				<li class="skill"><img :src="htmlLogo" alt="..." title="HTML5" height="50" width="50"></li>
				<li class="skill"><img :src="css3Logo" alt="..." title="CSS3" height="50" width="50"></li>
				<li class="skill"><img :src="nodeLogo" alt="..." title="Node.js" height="50" width="50"></li>
				<li class="skill"><img :src="scssLogo" alt="..." title="SCSS" height="50" width="50"></li>
			</ul>
		</div>

		<router-link to="/#about" class="scroll-down">
			<span>
				<i class="fas fa-chevron-down"></i>
			</span>
		</router-link>
	</header>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
const name = ref('ADAM HAMBE');
const jobTitle = ref('FULL STACK DEVELOPER');
const avatarUrl = ref('avatar.png');

const vueLogo = ref('../../../icons/vue.png')
const javaLogo = ref('../../../icons/java.png')
const javascriptLogo = ref('../../../icons/javascript.svg')
const typecriptLogo = ref('../../../icons/typescript.png')
const htmlLogo = ref('../../../icons/html5.svg')
const css3Logo = ref('../../../icons/css3.svg')
const scssLogo = ref('../../../icons/sass.svg')
const nodeLogo = ref('../../../icons/node.png')


</script>
  
<style lang="scss" scoped src="./style.scss"></style>