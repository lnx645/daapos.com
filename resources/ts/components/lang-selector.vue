<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const isOpen = ref(false);

const languages = [
    {
        code: 'id',
        name: 'IDN',
        label: 'Indonesia',
        flag: 'https://flagcdn.com/w20/id.png',
    },
    {
        code: 'en',
        name: 'ENG',
        label: 'English',
        flag: 'https://flagcdn.com/w20/us.png',
    },
    {
        code: 'ja',
        name: 'JPN',
        label: '日本語 (Japanese)',
        flag: 'https://flagcdn.com/w20/jp.png',
    },
    {
        code: 'hi',
        name: 'IND',
        label: 'हिन्दी (Hindi)',
        flag: 'https://flagcdn.com/w20/in.png',
    },
    {
        code: 'zh',
        name: 'CHN',
        label: '中文 (Chinese)',
        flag: 'https://flagcdn.com/w20/cn.png',
    },
];

onMounted(() => {
    window.addEventListener('click', (e) => {
        if (!(e.target as Element).closest('.lang-dropdown')) {
            isOpen.value = false;
        }
    });
});

const changeLanguage = (code: string) => {
    locale.value = code;
    localStorage.setItem('user-locale', code);
    isOpen.value = false;
};

const currentLang = ref(languages.find((l) => l.code === locale.value) || languages[0]);
</script>

<template>
    <div class="lang-dropdown relative">
        <button
            @click="isOpen = !isOpen"
            type="button"
            class="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm transition-all hover:bg-slate-50 focus:outline-none"
        >
            <img :src="languages.find((l) => l.code === locale)?.flag" class="h-3 w-5 rounded-sm object-cover" />
            <span class="text-xs font-bold text-slate-700">
                {{ languages.find((l) => l.code === locale)?.name }}
            </span>
            <svg
                class="h-4 w-4 text-slate-400 transition-transform duration-200"
                :class="{ 'rotate-180': isOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>

        <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
            <div
                v-if="isOpen"
                class="absolute right-0 bottom-full z-50 mb-2 w-60 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"
            >
                <div class="py-1">
                    <button
                        v-for="lang in languages"
                        :key="lang.code"
                        @click="changeLanguage(lang.code)"
                        class="flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors hover:bg-slate-50"
                        :class="{ 'bg-blue-50 text-blue-600': locale === lang.code }"
                    >
                        <img :src="lang.flag" class="h-3 w-5 rounded-sm object-cover" />
                        <span class="font-medium">{{ lang.label }}</span>

                        <svg v-if="locale === lang.code" class="ml-auto h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>
