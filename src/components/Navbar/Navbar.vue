<template>
    <nav class="sticky-nav" id="navbar">
        <ul class="flex-container">
            <li class="flex-item">
                <router-link to="/#home">
                    <span class="link-content">Home</span> </router-link>
            </li>
            <li class="flex-item">
                <router-link to="/#about">
                    <span class="link-content">About</span> </router-link>
            </li>
            <li class="flex-item">
                <router-link to="/#projects">
                    <span class="link-content">Projects</span> </router-link>
            </li>
            <li class="flex-item">
                <router-link to="#contact">
                    <span class="link-content">Contact</span> </router-link>
            </li>
        </ul>
    </nav>
</template>
  
<style lang="scss" scoped src="./style.scss"></style>
