<script setup>
import { useToast } from '@/stores/toast';

const { toasts, removeToast } = useToast();

const config = {
    success: {
        color: '#4CAF50', // Hijau sesuai gambar
        icon: 'mdi-check',
        iconBg: 'rgba(0, 0, 0, 0.1)', // Lingkaran sedikit lebih gelap
    },
    info: {
        color: '#2196F3',
        icon: 'mdi-information-variant',
        iconBg: 'rgba(0, 0, 0, 0.1)',
    },
    warning: {
        color: '#FB8C00',
        icon: 'mdi-alert-outline',
        iconBg: 'rgba(0, 0, 0, 0.1)',
    },
    error: {
        color: '#FF5252',
        icon: 'mdi-close-thick',
        iconBg: 'rgba(0, 0, 0, 0.1)',
    },
};
</script>

<template>
    <div class="toast-container">
        <v-snackbar
            v-for="(toast, index) in toasts"
            :key="toast.id"
            :model-value="true"
            :color="config[toast.type].color"
            location="top"
            :style="{ marginTop: (index * 70) + 'px' }"
            elevation="4"
            rounded="lg"
            class="toast-item"
            persistent
        >
            <div class="d-flex align-center w-100">
                <div 
                    :style="{ backgroundColor: config[toast.type].iconBg }"
                    class="rounded-circle d-flex align-center justify-center me-4 shadow-inner"
                    style="width: 42px; height: 42px; flex-shrink: 0;"
                >
                    <v-icon color="white" size="24">{{ config[toast.type].icon }}</v-icon>
                </div>

                <div class="text-white">
                    <div class="text-subtitle-1 font-weight-bold mb-n1">{{ toast.title }}</div>
                    <div class="text-body-2 opacity-90">{{ toast.message }}</div>
                </div>

                <v-spacer></v-spacer>

                <v-btn
                    icon="mdi-close"
                    variant="text"
                    color="white"
                    size="small"
                    @click="removeToast(toast.id)"
                ></v-btn>
            </div>
        </v-snackbar>
    </div>
</template>

<style scoped>
.toast-container {
    position: fixed;
    inset: 0;
    z-index: 9999;
    pointer-events: none;
}
.toast-item :deep(.v-snackbar__wrapper) {
    pointer-events: auto !important;
    min-width: 350px !important;
}
/* Efek bayangan halus di dalam lingkaran ikon */
.shadow-inner {
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
}
</style>