<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useAuth } from '../composables/useAuth';
import LangSelector from '@/components/lang-selector.vue';

// Icons
import GoogleIcon from '@/components/icons/google-icon.vue';

const { t } = useI18n();
const { data, submit } = useAuth();
</script>

<template>
  <div class="flex h-screen w-full overflow-hidden bg-white font-sans text-slate-900">
    
    <div class="relative hidden w-[60%] flex-col justify-between bg-[#F0F5FF] p-12 lg:flex">
      <div class="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-blue-100 opacity-70 mix-blend-multiply blur-3xl filter"></div>
      <div class="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-100 opacity-70 mix-blend-multiply blur-3xl filter"></div>

      <div class="relative z-10 flex items-center gap-3">
        <v-sheet width="40" height="40" color="#0969da" rounded="xl" class="flex items-center justify-center shadow-lg shadow-blue-200">
          <span class="text-xl font-bold text-white">I</span>
        </v-sheet>
        <span class="text-2xl font-bold tracking-tight text-slate-800">
          Invitnesia <span class="text-[#0969da]">POS</span>
        </span>
      </div>

      <div class="relative z-10 max-w-lg">
        <h1 class="text-5xl font-extrabold leading-[1.1] text-slate-800">
          {{ t('auth.description.text_1') }} 
          <span class="text-[#0969da]">{{ t('auth.description.text_2') }}</span>
        </h1>
        <p class="mt-6 text-lg leading-relaxed text-slate-600">
          {{ t('auth.description.text_3') }}
        </p>
      </div>

      <div class="relative z-10 flex gap-8 border-t border-slate-200 pt-8">
        <div v-for="f in ['support', 'uptime', 'secure']" :key="f">
          <p class="text-2xl font-bold text-slate-800">{{ t(`features.${f}_title`) }}</p>
          <p class="text-sm font-medium text-slate-500">{{ t(`features.${f}_desc`) }}</p>
        </div>
      </div>
    </div>

    <div class="flex w-full flex-col overflow-y-auto bg-white px-8 py-10 sm:px-16 lg:w-[40%] lg:px-20">
      <div class="mx-auto my-auto w-full max-w-100">
        
        <div class="mb-8 text-center lg:text-left">
          <h2 class="text-3xl font-bold text-slate-900">{{ t('auth.login') }}</h2>
          <p class="mt-2 font-medium text-slate-500">{{ t('auth.subtitle') }}</p>
        </div>

        <v-form @submit.prevent="submit" class="space-y-1">
          <v-text-field
            v-model="data.email"
            :label="t('auth.email_label')"
            :placeholder="t('auth.email_placeholder')"
            variant="outlined"
            density="comfortable"
            color="#0969da"
            prepend-inner-icon="mdi-email-outline"
            class="text-slate-600"
          />

          <div class="space-y-1">
            <v-text-field
              v-model="data.password"
              :label="t('auth.password_label')"
              :placeholder="t('auth.password_placeholder')"
              variant="outlined"
              density="comfortable"
              type="password"
              color="#0969da"
              prepend-inner-icon="mdi-lock-outline"
              hide-details
            />
            <div class="flex justify-end">
              <a href="#" class="text-sm font-semibold text-[#0969da] hover:text-blue-700 transition-colors">
                {{ t('auth.forgot_password') }}
              </a>
            </div>
          </div>

          <div class="pt-4">
            <v-btn
              type="submit"
              block
              size="large"
              color="primary"
              class="text-none font-weight-bold elevation-0 rounded-lg"
              style="height: 48px"
            >
              {{ t('auth.submit_btn') }}
            </v-btn>
          </div>

          <div class="relative flex items-center py-6">
            <div class="grow border-t border-slate-100"></div>
            <span class="mx-4 shrink text-xs font-bold tracking-widest text-slate-400 uppercase">
              {{ t('auth.or') }}
            </span>
            <div class="grow border-t border-slate-100"></div>
          </div>

          <v-btn
            variant="outlined"
            block
            size="large"
            class="text-none font-weight-bold border-slate-200 text-slate-700 rounded-lg elevation-0"
            style="height: 48px"
          >
            <template v-slot:prepend>
              <GoogleIcon class="h-5 w-5 mr-1" />
            </template>
            {{ t('auth.google_login') }}
          </v-btn>
        </v-form>

        <p class="mt-8 text-center text-sm text-slate-400">
          {{ t('auth.dont_have_an_account_yet') }} 
          <a href="#" class="font-bold text-[#0969da] ml-1">{{ t('auth.register_link') }}</a>
        </p>

        <div class="mt-10 flex flex-col items-center border-t border-slate-100 pt-8 pb-4">
          <div class="mb-4 flex items-center gap-4 text-sm font-medium text-slate-600">
            <span>{{ t('common.change_language') }}</span>
            <LangSelector />
          </div>

          <div class="mb-2 flex gap-6 text-[13px] font-medium text-slate-500">
            <a href="#" class="hover:text-slate-800 transition-colors">{{ t('common.privacy_policy') }}</a>
            <a href="#" class="hover:text-slate-800 transition-colors">{{ t('common.terms_condition') }}</a>
          </div>

          <p class="text-[13px] font-medium text-slate-400">{{ t('common.copyright') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>