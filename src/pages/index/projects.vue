<template>
    <view class="projects" id="projects">
        <text class="title">Projects</text>
        <text class="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.</text>

        <image class="background-image-right" src="../../assets/img/color-sharp2.png"></image>
    </view>
</template>

<style lang="less">
.projects {
    display: flex;
    flex-direction: column;
    padding: 80px 0;
    position: relative;
    background-color: black;

    .title {
        color: #B8B8B8;
        font-size: 45px;
        font-weight: 700;
        text-align: center;
    }

    .paragraph {
        color: #B8B8B8;
        font-size: 18px;
        letter-spacing: 0.8px;
        line-height: 1.5em;
        margin: 14px auto 30px auto;
        text-align: center;
        width: 56%;
    }

    .background-image-right {
        top: 20%;
        position: absolute;
        bottom: 0;
        width: 35%;
        right: 0;
        z-index: -4;
    }
}</style>

<script setup lang="ts"></script>