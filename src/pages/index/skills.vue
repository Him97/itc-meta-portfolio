<template>
    <view class="skills" id="skills">
        <view class="skills-box">
            <text class="title">Skills</text>
            <text class="paragraph">
                Lorem Ipsum has been the industry's standard dummy text.
            </text>
            <swiper indicator-dots autoplay circular class="skill-slider">
                <swiper-item class="item">
                    <image src="../../assets/img/meter1.svg" alt="Image" />
                    <text class="skill">Web Development</text>
                </swiper-item>
                <swiper-item class="item">
                    <image src="../../assets/img/meter1.svg" alt="Image" />
                    <text class="skill">Web Development</text>
                </swiper-item>
                <swiper-item class="item">
                    <image src="../../assets/img/meter1.svg" alt="Image" />
                    <text class="skill">Web Development</text>
                </swiper-item>
                <swiper-item class="item">
                    <image src="../../assets/img/meter1.svg" alt="Image" />
                    <text class="skill">Web Development</text>
                </swiper-item>
            </swiper>
        </view>
        <image class="background-image-left" src="../../assets/img/color-sharp.png" alt="Image" />
    </view>
</template>

<style lang="less">
.skills {
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;

    .skills-box {
        display: flex;
        flex-direction: column;
        width: fit-content;
        background: #151515;
        border-radius: 64px;
        text-align: center;
        padding: 60px 50px;
        margin-top: -60px;
    }

    .title {
        color: #B8B8B8;
        font-size: 45px;
        font-weight: 700;
    }

    .paragraph {
        color: #B8B8B8;
        font-size: 18px;
        letter-spacing: 0.8px;
        line-height: 1.5em;
        margin: 14px 0 75px 0;
    }

    .skill-slider {
        width: 80%;
        margin: 0 auto;
        position: relative;

        .skill {
            color: white;
        }

        image {
            width: 50%;
            margin: 0 auto 15px auto;
        }
    }

    .background-image-left {
        top: 28%;
        position: absolute;
        bottom: 0;
        width: 40%;
    }
}
</style>

<script setup lang="ts">
</script>