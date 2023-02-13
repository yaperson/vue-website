<template>
    <nav class="navBar">
        <router-link class="navBar__link" to="/">Home</router-link>
        <router-link class="navBar__link" to="/about">about</router-link>
        <router-link class="navBar__link" to="/products">Product
            list</router-link>
        <router-link class="navBar__link" to="/azerty">Broken link</router-link>
    </nav>
</template>

<style>
.navBar {
    z-index: 999;
    top: 0;
    left: 0;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    backdrop-filter: blur(10px);
    background: #f2f2f293;
    box-shadow: 0 3px 6px 0 #0000000e;
}

.navBar__link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 6%;
    margin: 5px;
    height: 20px;
    box-shadow: 0 0 0 2px black;
    border-radius: 15px;
    color: black;
    text-decoration: none;
    transition: 0.5s;
}

.navBar__link:hover {
    transition: 0.5s;
    box-shadow: 0 0 0 2px #CCCCCC, inset 130px 0 0 0px #75c4e4;
}

.router-link-exact-active {
    box-shadow: 0 0 0 2px #30b4f1;
}
</style>