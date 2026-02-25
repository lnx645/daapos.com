<template>
    <div class="flex w-full flex-col gap-1">
        <label v-if="label" :for="id" class="text-[14px] font-medium text-[#1F2328]">
            {{ label }}
        </label>

        <div class="group relative flex items-center">
            <div
                v-if="$slots.icon"
                class="absolute left-3 flex items-center justify-center text-slate-400 transition-colors group-focus-within:text-[#0969da]"
            >
                <slot name="icon" />
            </div>

            <input
                :id="id"
                :type="type"
                :placeholder="placeholder"
                v-model="model"
                :class="[
                    inputClasses({ intent: error ? 'error' : intent, inputSize }),
                    $slots.icon ? 'pl-10' : 'pl-3', // Otomatis tambah padding jika ada icon
                ]"
            />
        </div>

        <p v-if="error" class="mt-1 text-xs text-[#d1242f]">
            {{ error }}
        </p>
    </div>
</template>

<script setup>
import { cva } from 'class-variance-authority';

const inputClasses = cva('w-full border rounded-md transition-all duration-200 outline-none text-[14px] shadow-sm leading-5 pr-3', {
    variants: {
        intent: {
            primary:
                'bg-[#f6f8fa] border-[#d0d7de] focus:bg-white focus:border-[#0969da] focus:ring-[3px] focus:ring-[#0969da]/20 text-[#1F2328] placeholder:text-gray-400',
            error: 'bg-white border-[#d1242f] focus:border-[#d1242f] focus:ring-[3px] focus:ring-[#d1242f]/20 text-[#1F2328]',
        },
        inputSize: {
            sm: 'py-1',
            md: 'py-[5px]',
            lg: 'py-2',
        },
    },
    defaultVariants: {
        intent: 'primary',
        inputSize: 'md',
    },
});

const props = defineProps({
    label: String,
    id: String,
    type: { type: String, default: 'text' },
    placeholder: String,
    error: String,
    intent: { type: String, default: 'primary' },
    inputSize: { type: String, default: 'md' },
});

const model = defineModel();
</script>
