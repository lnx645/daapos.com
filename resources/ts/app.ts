import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import "@/lib/fonts";
import { createApp, h } from 'vue';
import '../css/app.css';
import DefaultLayout from '@/layouts/default.vue';
import CashierLayout from '@/layouts/cashier-layout.vue';
import i18n from './i18n';
import BaseLayout from './layouts/base-layout.vue';
import vuetify from './lib/vuetify';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: async (name) => {
        const page = await resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue'));

        if (name.startsWith('dashboard/')) {
            page.default.layout = page.default.layout || DefaultLayout;
        } else if (name.startsWith('cashier/')) {
            page.default.layout = page.default.layout || CashierLayout;
        } else {
            page.default.layout = page.default.layout || BaseLayout;
        }
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(i18n)
            .use(vuetify)
            .mount(el);
    },
    progress: {
        color: '#218838',
    },
});
