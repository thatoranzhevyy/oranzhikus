<script setup lang="ts">
definePageMeta({layout: 'none'});
useSeoMeta({title: 'Авторизация'});

const isOpenHelp = ref(false);
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <div class="h-dvh px-4 flex flex-col justify-center space-y-6">
      <div class="text-4xl xl:text-5xl font-extrabold">
        Добрый день! Введите авторизационные данные для входа
      </div>
      <UForm ref="form" class="space-y-4">
        <UFormGroup name="username" required>
          <UInput type="text" size="xl" trailing placeholder="Логин" autofocus/>
        </UFormGroup>
        <UFormGroup name="password" required>
          <UInput type="password" autocomplete="current-password" size="xl" placeholder="Пароль"/>
        </UFormGroup>
        <UTooltip text="на один месяц" :popper="{ placement: 'right' }">
          <UCheckbox label="Запомнить меня"/>
        </UTooltip>
        <div class="space-y-2">
          <UButton block size="xl" color="primary" class="text-white" variant="solid" label="Авторизоваться"
                   type="submit" to="/"/>
          <UButton block size="xl" variant="soft" label="Забыли пароль?" @click="isOpenHelp = true"/>
        </div>
      </UForm>
    </div>
  </div>

  <UModal v-model="isOpenHelp">
    <div class="max-w-3xl items-center p-0.5">
    <ApplicationBar>
      <template #left>
        <UButton size="lg" color="gray" variant="ghost" icon="i-ph-x-bold" @click="isOpenHelp = false"/>
        <div class="text-lg font-bold leading-6 text-gray-900 dark:text-white">Как получить доступ на сайт</div>
      </template>
    </ApplicationBar>
    <UDivider class="px-2"/>
    <div class="px-4 py-3">
      <ul class="space-y-8">
        <li class="space-y-2">
          <div class="font-bold">Шаг 1. Написать владельцу сайта</div>
          <div class="flex gap-4">
            <div class="p-2 bg-purple-300 size-12 rounded-xl text-2xl">🐦</div>
            <div class="text-sm">
              Просто<a href="#" class="text-primary-500 px-1 rounded-md hover:bg-primary-200/20">напиши владельцу сайта
              в
              Telegram</a>и попроси у него доступ на сайт. Он добрый малый, уверен он поделиться доступом. Не
              забудь с ним поздороваться, не надо забывать о вежливости.
            </div>
          </div>
        </li>
        <li class="space-y-2">
          <div class="font-bold">Шаг 2. Попробовать зайти на сайт</div>
          <div class="flex gap-4">
            <div class="p-2 bg-blue-300 size-12 rounded-xl text-2xl">👍</div>
            <div class="text-sm">
              Если вам повезло и вы получили логин и пароль на сайт, введите данные в приложения и заходите.
            </div>
          </div>
        </li>
        <li class="bg-gray-100 dark:bg-gray-800 p-2 rounded-xl space-y-2">
          <div class="text-sm font-bold">И еще кое-что...</div>
          <div class="text-sm">
            Постарайтесь не ломать сайт. Разработчик старается делать удобный инструмент, но если вы нашли какие
            нибудь недочеты или баги, сообщите, пожалуйста, разработчику.
          </div>
        </li>
      </ul>
    </div>
    </div>
  </UModal>
</template>
