<template>
	<header class="standard-page-layout" id="home">
		<div id="portrait">
			<h1>{{ name }}</h1>
			<h2>{{ jobTitle }}</h2>
			<div>
				<img :src="avatarUrl" alt="..." width="300" height="300" />
			</div>
		</div>
		<div class="tech-stack">
			<h3>Tech Stack</h3>
			<ul class="skills">
				<li class="skill"><img :src="vueLogo" alt="..." title="Vue" hover=" fsdaf" width="45" height="45"></li>
				<li class="skill"><img :src="javaLogo" alt="..." title="Java" width="50" height="50"></li>
				<li class="skill"><img :src="reactLogo" alt="..." title="React" width="55" height="55"></li>
				<li class="skill"><img :src="javascriptLogo" alt="..." title="Javascript" width="43" height="43"></li>
				<li class="skill"><img :src="typecriptLogo" alt="..." title="Typescript" width="55" height="55"></li>
				<li class="skill"><img :src="htmlLogo" alt="..." title="HTML5" width="50" height="50"></li>
				<li class="skill"><img :src="css3Logo" alt="..." title="CSS3" width="50" height="50"></li>
				<li class="skill"><img :src="nodeLogo" alt="..." title="Node.js" width="50" height="50"></li>
				<li class="skill"><img :src="scssLogo" alt="..." title="SCSS" width="50" height="50"></li>
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

const vueLogo = ref('../../../public/icons/vue.png')
const javaLogo = ref('../../../public/icons/java.png')
const reactLogo = ref('../../../public/icons/react.png')
const javascriptLogo = ref('../../../public/icons/javascript.svg')
const typecriptLogo = ref('../../../public/icons/typescript.png')
const htmlLogo = ref('../../../public/icons/html5.svg')
const css3Logo = ref('../../../public/icons/css3.svg')
const scssLogo = ref('../../../public/icons/sass.svg')
const nodeLogo = ref('../../../public/icons/node.png')


</script>
  
<style lang="scss" scoped src="./style.scss"></style>