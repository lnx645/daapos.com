<script setup lang="ts">
import DashNav from '@/components/nav/dash-nav.vue';
import BaseLayout from './base-layout.vue';
</script>

<template>
    <BaseLayout>
        <DashNav />
        <div class="container mx-auto">
            <slot />
        </div>
    </BaseLayout>
</template>
<style>
@reference "tailwindcss";
body {
    @apply bg-stone-50;
}
</style>
