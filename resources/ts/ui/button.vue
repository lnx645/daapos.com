<template>
    <button :class="cn(buttonVariants({ variant, size }), props.class)" :disabled="disabled || loading">
        <svg v-if="loading" class="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
            <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>

        <span v-if="$slots.icon && !loading" class="mr-2">
            <slot name="icon" />
        </span>

        <slot />
    </button>
</template>

<script setup>
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils'; // Pastikan path benar

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
    {
        variants: {
            variant: {
                // Hijau Khas GitHub
                primary: 'bg-[#218838] text-white shadow-sm hover:bg-[#1a7f37] border border-[#1b7c32] focus-visible:ring-[#218838]/50',
                // Standar Abu-abu GitHub
                secondary: 'bg-[#f6f8fa] text-[#24292f] border border-[#d0d7de] shadow-sm hover:bg-[#ebeff2] focus-visible:ring-slate-200',
                // Outline / Ghost
                outline: 'border border-slate-200 bg-transparent hover:bg-slate-100 text-slate-700',
                ghost: 'hover:bg-slate-100 text-slate-600',
                danger: 'bg-white text-[#cf222e] border border-[#d0d7de] hover:bg-[#cf222e] hover:text-white focus-visible:ring-red-200',
            },
            size: {
                sm: 'h-8 px-3 text-xs',
                md: 'h-9 px-4 py-2',
                lg: 'h-11 px-8',
            },
        },
        defaultVariants: {
            variant: 'secondary',
            size: 'md',
        },
    },
);

const props = defineProps({
    variant: String,
    size: String,
    disabled: Boolean,
    loading: Boolean,
    class: String, // Biar bisa lempar class tambahan dari luar
});
</script>
