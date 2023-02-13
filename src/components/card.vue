<template>
    <div class="productCard">
        <slot></slot>    
    </div>
</template>

<style>
    .productCard {
        position: absolute;
        padding: 20px;
        width: 40vh;
        height: 30vh;
        background: rgba(245, 245, 245, 0.39);
        backdrop-filter: blur(20px);
        border-radius: 15px;
        box-shadow: 0 0 6px 3px #00000021;
    }
    .productCard .icon {
        max-width: 25px;
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px;
        cursor: pointer;
    }
</style>