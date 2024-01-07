<template>
    <view class="contact" id="connect">
        <view>
            <image src="../../assets/img/contact-img.svg" alt="Contact Us" />
        </view>
        <view>
            <text class="title">Get In Touch</text>
            <form @submit="onSubmit" @reset="onReset">
                <view>
                    <input type="text" v-model="initData.firstname" placeholder="First Name"
                        placeholder-class="input-placeholder" @input="" />
                </view>
                <view>
                    <input type="text" v-model="initData.lastname" placeholder="Last Name"
                        placeholder-class="input-placeholder" @input="" />
                </view>
                <view>
                    <input type="email" v-model="initData.email" placeholder="Email Address"
                        placeholder-class="input-placeholder" @input="" />
                </view>
                <view>
                    <input type="tel" v-model="initData.phone" placeholder="Phone Number"
                        placeholder-class="input-placeholder" @input="" />
                </view>
                <view>
                    <textarea v-model="initData.message" placeholder="Message" placeholder-class="textarea-placeholder"
                        @input="" />
                    <button type="submit">Submit</button>
                </view>
            </form>
        </view>
    </view>
</template>

<style lang="less">
.contact {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
    padding: 60px 0 200px 0;

    .title {
        color: #B8B8B8;
        font-size: 45px;
        font-weight: 700;
        margin-bottom: 30px;
    }

    input,
    textarea {
        width: 100%;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 20px;
        color: #fff;
        margin: 0 0 8px 0;
        padding: 18px 26px;
        font-weight: 500;
        font-size: 18px;
        letter-spacing: 0.8px;
        transition: 0.3s ease-in-out;
    }

    input:focus,
    textarea:focus {
        background: rgba(255, 255, 255, 1);
        color: #121212;
    }

    input-placeholder,
    textarea-placeholder {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        color: teal !important;
    }

    input-placeholder:focus,
    textarea-placeholder:focus {
        color: #121212;
        opacity: 0.8;
    }

    button {
        font-weight: 700;
        color: #000;
        background-color: #fff;
        padding: 14px 48px;
        font-size: 18px;
        margin-top: 25px;
        border-radius: 1;
        position: relative;
        transition: 0.3s ease-in-out;
    }

    button:hover {
        color: #fff;
    }

    button::before {
        content: "";
        background: #121212;
        width: 0;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: 0.3s ease-in-out;
    }

    button:hover::before {
        width: 100%;
    }
}
</style>

<script setup lang="ts">
import { ref } from 'vue'

const initData = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
}
</script>