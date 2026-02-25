<script setup lang="ts">
defineProps<{
    modelValue: boolean;
    label?: string;
    id?: string;
}>();
defineEmits(['update:modelValue']);
</script>

<template>
    <div class="flex items-center">
        <div class="relative flex h-5 w-5 items-center justify-center">
            <input
                :id="id"
                type="checkbox"
                :checked="modelValue"
                @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
                class="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 bg-white transition-all checked:border-[#218838] checked:bg-[#218838] focus:ring-2 focus:ring-blue-100 focus:outline-none"
            />

            <svg
                v-if="modelValue"
                class="pointer-events-none absolute h-3.5 w-3.5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>

        <label v-if="label" :for="id" class="ml-2 cursor-pointer text-sm font-medium text-slate-600 select-none">
            {{ label }}
        </label>
    </div>
</template>
