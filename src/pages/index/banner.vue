<template>
    <view class="banner" id="home">
        <view>
            <text class="tagline">Welcome to my Portfolio</text>
            <text class="heading">
                Hi! I'm Xin
                <text>{{ text }}</text>
            </text>
            <text class="paragraph">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a
                type specimen book.
            </text>
            <button hover-class="button-hover" @click="() => console.log('connect')">
                Let's Connect
            </button>
        </view>
        <view>
            <image src="../../assets/img/header-img.svg" mode="scaleToFill" />
        </view>
    </view>
</template>

<style lang="less">
.banner {
    display: flex;
    margin-top: 0;
    padding: 260px 0 100px 0;
    background-image: url('../../assets/img/banner-bg.png');
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;

    .tagline {
        font-weight: 700;
        letter-spacing: 0.8px;
        padding: 8px 10px;
        background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
        border: 1px solid rgba(255, 255, 255, 0.5);
        font-size: 20px;
        margin-bottom: 16px;
        display: inline-block;
    }

    .heading {
        color: #B8B8B8;
        font-size: 65px;
        font-weight: 700;
        letter-spacing: 0.8px;
        line-height: 1;
        margin-bottom: 20px;
        display: block;
    }

    .paragraph {
        color: #B8B8B8;
        font-size: 18px;
        letter-spacing: 0.8px;
        line-height: 1.5em;
        width: 96%;
    }

    button {
        color: #fff;
        font-weight: 700;
        font-size: 20px;
        margin-top: 60px;
        letter-spacing: 0.8px;
        display: flex;
        align-items: center;
    }

    image {
        animation: updown 3s linear infinite;
    }
}
</style>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const loopNum = ref(0);
const isDeleting = ref(false);
const text = ref('');
const delta = ref(300 - Math.random() * 100);
const index = ref(1);
const toRotate = ['Web Developer', '全栈开发者', 'UI/UX Designer', '全端工程師'];
const period = 2000;

const tick = () => {
    let i = loopNum.value % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting.value
        ? fullText.substring(0, text.value.length - 1)
        : fullText.substring(0, text.value.length + 1);

    text.value = updatedText;

    if (isDeleting.value) {
        delta.value /= 2;
    }

    if (!isDeleting.value && updatedText === fullText) {
        isDeleting.value = true;
        index.value--;
        delta.value = period;
    } else if (isDeleting.value && updatedText === '') {
        isDeleting.value = false;
        loopNum.value++;
        index.value = 1;
        delta.value = 500;
    } else {
        index.value++;
    }
};

onMounted(() => {
    let ticker = setInterval(tick, delta.value);

    onBeforeUnmount(() => {
        clearInterval(ticker);
    });
});
</script>