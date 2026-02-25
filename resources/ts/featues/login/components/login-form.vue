<script setup lang="ts">
import EmailIcon from '@/components/icons/email-icon.vue';
import GoogleIcon from '@/components/icons/google-icon.vue';
import PasswordIcon from '@/components/icons/password-icon.vue';
import LangSelector from '@/components/lang-selector.vue';
import Button from '@/ui/button.vue';
import Input from '@/ui/input.vue';
import { useI18n } from 'vue-i18n';
import { useAuth } from '../composables/useAuth';
import Checkbox from '@/ui/checkbox.vue';

let { t, locale } = useI18n();

let { data, submit } = useAuth();
</script>

<template>
    <div class="flex h-screen w-full overflow-hidden bg-white font-sans text-slate-900">
        <div class="relative hidden w-[60%] flex-col justify-between bg-[#F0F5FF] p-12 lg:flex">
            <div class="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-blue-100 opacity-70 mix-blend-multiply blur-3xl filter"></div>
            <div class="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-100 opacity-70 mix-blend-multiply blur-3xl filter"></div>

            <div class="relative z-10">
                <div class="flex items-center gap-3">
                    <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0969da] shadow-lg shadow-blue-200">
                        <span class="text-xl font-bold text-white">I</span>
                    </div>
                    <span class="text-2xl font-bold tracking-tight text-slate-800">Invitnesia <span class="text-[#0969da]">POS</span></span>
                </div>
            </div>

            <div class="relative z-10 max-w-lg">
                <h1 class="text-5xl leading-[1.1] font-extrabold text-slate-800">
                    {{ t('auth.description.text_1') }} <span class="text-[#0969da]">{{ t('auth.description.text_2') }}</span>
                </h1>
                <p class="mt-6 text-lg leading-relaxed text-slate-600">
                    {{ t('auth.description.text_3') }}
                </p>
            </div>

            <div class="relative z-10 flex gap-8 border-t border-slate-200 pt-8">
                <div>
                    <p class="text-2xl font-bold text-slate-800">{{ t('features.support_title') }}</p>
                    <p class="text-sm font-medium text-slate-500">{{ t('features.support_desc') }}</p>
                </div>
                <div>
                    <p class="text-2xl font-bold text-slate-800">{{ t('features.uptime_title') }}</p>
                    <p class="text-sm font-medium text-slate-500">{{ t('features.uptime_desc') }}</p>
                </div>
                <div>
                    <p class="text-2xl font-bold text-slate-800">{{ t('features.secure_title') }}</p>
                    <p class="text-sm font-medium text-slate-500">{{ t('features.secure_desc') }}</p>
                </div>
            </div>
        </div>

        <div class="flex w-full flex-col overflow-y-auto bg-white px-8 py-10 sm:px-16 lg:w-[40%] lg:px-20">
            <div class="mx-auto my-auto w-full max-w-100 py-10">
                <div class="mb-6 text-center lg:text-left">
                    <h2 class="text-3xl font-bold text-slate-900">
                        {{ t('auth.login') }}
                    </h2>
                    <p class="mt-2 font-medium text-slate-500">
                        {{ t('auth.subtitle') }}
                    </p>
                </div>

                <form @submit.prevent="submit" class="space-y-4">
                    <Input
                        v-model="data.email"
                        input-size="lg"
                        :label="t('auth.email_label')"
                        :placeholder="t('auth.email_placeholder')"
                        class="w-full"
                    >
                        <template #icon>
                            <EmailIcon class="h-5 w-5 text-slate-400" />
                        </template>
                    </Input>

                    <div class="space-y-1">
                        <Input
                            v-model="data.password"
                            input-size="lg"
                            :label="t('auth.password_label')"
                            type="password"
                            :placeholder="t('auth.password_placeholder')"
                            class="w-full"
                        >
                            <template #icon>
                                <PasswordIcon class="h-5 w-5 text-slate-400" />
                            </template>
                        </Input>
                        <div class="flex justify-end">
                            <a href="#" class="text-sm font-semibold text-[#0969da] transition-colors hover:text-blue-700">
                                {{ t('auth.forgot_password') }}
                            </a>
                        </div>
                    </div>
                    <Checkbox v-model="data.remember_me" :label="t('auth.remember_me')" id="remember_me" />
                    <div class="pt-2">
                        <Button variant="primary" class="w-full rounded-lg py-5 text-base font-bold shadow-md shadow-blue-100">
                            {{ t('auth.submit_btn') }}
                        </Button>
                    </div>

                    <div class="relative flex items-center">
                        <div class="grow border-t border-slate-100"></div>
                        <span class="mx-4 shrink text-xs font-bold tracking-widest text-slate-400 uppercase">
                            {{ t('auth.or') }}
                        </span>
                        <div class="grow border-t border-slate-100"></div>
                    </div>

                    <Button variant="secondary" class="w-full border-slate-200 py-4 font-semibold text-slate-700">
                        <template #icon>
                            <GoogleIcon class="h-5 w-5" />
                        </template>
                        {{ t('auth.google_login') }}
                    </Button>
                </form>

                <p class="mt-5 text-center text-sm text-slate-400">
                    {{ t('auth.dont_have_an_account_yet') }} <a href="#" class="font-bold text-[#0969da]">{{ t('auth.register_link') }}</a>
                </p>

                <div class="mt-4 flex flex-col items-center border-t border-slate-100 pt-8 pb-10">
                    <div class="mb-4 flex items-center gap-4 text-sm font-medium text-slate-600">
                        <span>{{ t('common.change_language') }}</span>
                        <LangSelector />
                    </div>

                    <div class="mb-2 flex gap-6 text-[13px] font-medium text-slate-500">
                        <a href="#" class="transition-colors hover:text-slate-800">{{ t('common.privacy_policy') }}</a>
                        <a href="#" class="transition-colors hover:text-slate-800">{{ t('common.terms_condition') }}</a>
                    </div>

                    <p class="text-center text-[13px] font-medium text-slate-400">{{ t('common.copyright') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Menghilangkan scrollbar agar terlihat lebih clean (opsional) */
.overflow-y-auto::-webkit-scrollbar {
    width: 4px;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
    background-color: #e2e8f0;
    border-radius: 10px;
}
</style>
