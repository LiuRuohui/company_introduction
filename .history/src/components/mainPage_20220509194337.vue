<script setup></script>

<template>
    <div class="max-h-full h-screen w-full flex flex-col bg-white">
        <div class="w-full h-28 flex flex-row bg-gray-100">
            <div class="h-full">
                <img
                    src="/src/assets/logo.png"
                    alt="公司图标"
                    class="h-20 m-4 w-40"
                />
            </div>
            <div class="flex font-sans text-xl ml-8">
                <router-link
                    active-class="active"
                    to="/introduction"
                    class="px-8 pt-10 hover:cursor-pointer hover:bg-blue-300"
                    >公司简介</router-link
                >
                <router-link
                    active-class="active"
                    to="/product"
                    class="px-8 pt-10 hover:cursor-pointer hover:bg-blue-300"
                    >产品介绍</router-link
                >
                <router-link
                    active-class="active"
                    to="/strategy"
                    class="px-8 pt-10 hover:cursor-pointer hover:bg-blue-300"
                    >营销策略</router-link
                >
                <router-link
                    active-class="active"
                    to="/purchase"
                    class="px-8 pt-10 hover:cursor-pointer hover:bg-blue-300"
                    >产品购买</router-link
                >
                <router-link
                    active-class="active"
                    to="/contact"
                    class="px-8 pt-10 hover:cursor-pointer hover:bg-blue-300"
                    >联系我们</router-link
                >
            </div>
            <div class="flex flex-grow flex-row-reverse">
                <img
                    src="/src/assets/more.svg"
                    alt="更多"
                    class="w-16 h-16 opacity-60 mt-6 mr-6 hover:cursor-pointer"
                />
            </div>
        </div>
    </div>
    <div class="w-full flex flex-grow">
        <router-view></router-view>
    </div>
</template>

<style></style>
