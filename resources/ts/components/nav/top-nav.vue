<script setup lang="ts">
import Avatar from '../avatar.vue';
import SearchIcon from '../icons/search-icon.vue';
import Logo from '../logo.vue';
import SalesToday from '../sales-today.vue';
</script>

<template>
    <div class="h-16 px-4 lg:px-6">
        <div class="container mx-auto flex h-full items-center gap-6">
            <div class="flex shrink-0 items-center gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
                    <Logo />
                </div>
                <div class="hidden md:block">
                    <h1 class="text-sm leading-none font-bold text-stone-800">Warung Digital</h1>
                    <span class="flex items-center gap-1 text-[10px] font-medium text-green-500">
                        <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500"></span>
                        Sesi Aktif: Kasir 01
                    </span>
                </div>
            </div>

            <div class="relative hidden max-w-md flex-1 sm:block">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400">
                    <SearchIcon />
                </span>
                <input
                    type="text"
                    placeholder="Cari produk atau scan barcode (F1)..."
                    class="w-full rounded-full border-stone-200 bg-stone-100 py-2 pr-4 pl-10 text-sm transition-all outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
            </div>

            <div class="ml-auto flex items-center gap-3">
                <SalesToday />
                <div
                    class="flex cursor-pointer items-center gap-2 rounded-full border border-transparent bg-stone-50 p-1.5 transition-all hover:border-stone-200 hover:bg-stone-100"
                >
                    <Avatar />
                    <span class="hidden px-1 text-xs font-semibold text-stone-700 sm:inline-block">Budi Santoso</span>
                </div>
            </div>
        </div>
    </div>
</template>
