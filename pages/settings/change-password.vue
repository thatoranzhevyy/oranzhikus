<script setup lang="ts">
definePageMeta({layout: 'none'});
useSeoMeta({title: 'Сменить пароль'});
</script>

<template>
  <ApplicationBar>
    <template #left>
      <UButton size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" to="/settings"/>
    </template>
  </ApplicationBar>

  <div class="max-w-2xl mx-auto">
    <div class="h-dvh px-4 flex flex-col justify-center space-y-4">
      <div class="text-4xl xl:text-5xl font-extrabold">
        Изменение пароля
      </div>
      <div class="text-gray-500 text-xs font-normal">
        <div>
          Вы выйдете из всех сеансов, кроме этого, чтобы защитить свою учетную запись, если кто-то попытается получить доступ.
        </div>
        <br>
        <div>
          Ваш пароль должен состоять как минимум из 8 символов и включать комбинацию цифр, букв и специальных символов (!$@%).
        </div>
      </div>
      <UForm ref="form" class="space-y-4">
        <UFormGroup label="Текущий пароль" name="current_password" required>
          <UInput type="password" size="xl" autocomplete="off"/>
        </UFormGroup>

        <UFormGroup
            label="Новый пароль"
            name="password"
            hint="min 8 characters"
            :ui="{ hint: 'text-xs text-gray-500 dark:text-gray-400' }"
            required
        >
          <UInput type="password" size="xl" autocomplete="off"/>
        </UFormGroup>

        <UFormGroup label="Введите новый пароль ещё раз" name="password_confirmation" required>
          <UInput type="password" size="xl" autocomplete="off"/>
        </UFormGroup>

        <div class="pt-2">
          <UButton block size="xl" color="primary" class="text-white" variant="solid" label="Сменить пароль"
                   type="submit"/>
        </div>
      </UForm>
    </div>
  </div>
</template>
