<template>
    <view class="footer">
        <view class="newsletter-box wow slideInUp">
            <view>
                <text class="h3">Subscribe to our Newsletter\n& Never miss latest updates</text>
            </view>
            <view>
                <form onSubmit={handleSubmit}>
                    <input type="email" v-model="email" placeholder="Email Address" placeholder-class="input-placeholder"
                        @input="" />
                    <button type="submit" hover-class="button-hover" @click="">
                        Subscribe
                    </button>
                </form>
            </view>
        </view>
        <view>
            <image src="../../assets/img/logo.svg" alt="Logo" />
        </view>
        <view>
            <view class="social-icon">
                <a href="#">
                    <image src="../../assets/img/nav-icon1.svg" alt="Icon" />
                </a>
                <a href="#">
                    <image src="../../assets/img/nav-icon2.svg" alt="Icon" />
                </a>
                <a href="#">
                    <image src="../../assets/img/nav-icon3.svg" alt="Icon" />
                </a>
            </view>
            <text>Copyright 2022. All Rights Reserved</text>
        </view>
    </view>
</template>

<style lang="less">
.footer {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 0 0 50px 0;
    background-image: url('../../assets/img/footer-bg.png');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

    .newsletter-box {
        display: flex;
        align-items: center;
        background: #FFFFFF;
        border-radius: 55px;
        color: #121212;
        padding: 85px 125px;
        margin-bottom: 80px;
        margin-top: -122px;
    }

    form {
        display: flex;
        background: #fff;
        padding: 5px;
        border-radius: 20px;
        position: relative;
        z-index: 0;
    }

    form::before {
        content: "";
        background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
        border-radius: 20px;
        position: absolute;
        z-index: -1;
        top: -1px;
        left: -1px;
        bottom: -1px;
        right: -1px;
    }

    form::after {
        content: "";
        background: #fff;
        border-radius: 20px;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    input {
        width: 100%;
        color: #121212;
        font-weight: 500;
        background: transparent;
        border: 0;
        padding: 0 15px;
    }

    button {
        background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
        padding: 20px 65px;
        color: #fff;
        font-weight: 500;
        letter-spacing: 0.5px;
        border-radius: 18px;
    }

    image {
        width: 26%;
    }
}
</style>

<script setup lang="ts">
</script>