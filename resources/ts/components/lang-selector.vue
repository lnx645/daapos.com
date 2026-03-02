<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const languages = [
    { code: 'id', name: 'IDN', label: 'Indonesia', flag: 'https://flagcdn.com/w20/id.png' },
    { code: 'en', name: 'ENG', label: 'English', flag: 'https://flagcdn.com/w20/us.png' },
    { code: 'ja', name: 'JPN', label: '日本語 (Japanese)', flag: 'https://flagcdn.com/w20/jp.png' },
    { code: 'hi', name: 'IND', label: 'हिन्दी (Hindi)', flag: 'https://flagcdn.com/w20/in.png' },
    { code: 'zh', name: 'CHN', label: '中文 (Chinese)', flag: 'https://flagcdn.com/w20/cn.png' },
];

// Menggunakan computed agar reaktif saat locale berubah
const currentLang = computed(() => 
    languages.find((l) => l.code === locale.value) || languages[0]
);

const changeLanguage = (code: string) => {
    locale.value = code;
    localStorage.setItem('user-locale', code);
};
</script>

<template>
    <v-menu location="top end" transition="scale-transition">
        <template v-slot:activator="{ props }">
            <v-btn
                variant="outlined"
                color="blue-grey-lighten-4"
                class="text-none rounded-pill bg-white"
                v-bind="props"
            >
                <template v-slot:prepend>
                    <v-img :src="currentLang.flag" width="20" class="rounded-sm" />
                </template>
                
                <span class="text-caption font-weight-bold text-slate-700">
                    {{ currentLang.name }}
                </span>

                <template v-slot:append>
                    <v-icon icon="mdi-chevron-down" size="small"></v-icon>
                </template>
            </v-btn>
        </template>

        <v-list class="mt-2 rounded-xl" elevation="10" min-width="240">
            <v-list-item
                
                v-for="lang in languages"
                :key="lang.code"
                :value="lang.code"
                :active="locale === lang.code"
                active-color="primary"
                @click="changeLanguage(lang.code)"
            >
                <template v-slot:prepend>
                    <v-img :src="lang.flag" width="20" class="mr-3 rounded-sm" />
                </template>

                <v-list-item-title class="text-body-3 font-weight-medium">
                    {{ lang.label }}
                </v-list-item-title>

                <template v-slot:append>
                    <v-icon v-if="locale === lang.code" icon="mdi-check" size="small" color="primary" />
                </template>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<style scoped>
/* Anda bisa menghapus sebagian besar CSS manual karena Vuetify menangani elevasi dan transisi */
</style>