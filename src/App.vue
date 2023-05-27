<script setup lang="ts">
import Home from './views/Home/Home.vue';
import About from './views/About/About.vue';
import Projects from './views/Projects/Projects.vue';
import Contact from './views/Contact/Contact.vue';
import Navbar from './components/Navbar/Navbar.vue';

</script>

<template>
  <Home></Home>
  <Navbar></Navbar>
  <About />
  <Projects />
  <Contact />
</template>


<style lang="scss">
@import './styles/page-layouts.scss';
@import './styles/style.scss';
</style>