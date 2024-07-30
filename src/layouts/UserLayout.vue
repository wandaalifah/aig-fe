<template>
    <div class="flex justify-between items-center px-14 py-2 bg-gradient-to-r from-black from-10% to-purple-700 to-30%">
        <img src="../assets/logo-small.png" alt="icon-small" width="50px">
         <!-- <p class="text-white">Logo</p> -->
        <p class="text-white font-inter font-bold">Halo, Josua</p>
    </div>
    <div class="main flex">
    <Sidebar />
    <!-- dashboard content -->
    <div class="left-52 max-w-[1460px]">
        <div class="ml-4 min-h-screen">
            <div class="py-5 px-10 w-[1280px] font-inter">
                <slot></slot>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
</script>