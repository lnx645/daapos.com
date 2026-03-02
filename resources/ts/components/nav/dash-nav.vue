<script setup lang="ts">
import { cn } from '@/lib/utils';
import TopNav from './top-nav.vue';
</script>

<template>
    <header :class="cn('sticky top-0 z-50 w-full border-b border-stone-200 bg-white shadow-sm')">
        <TopNav />
    </header>
</template>
