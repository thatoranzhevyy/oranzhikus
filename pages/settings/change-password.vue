<script setup lang="ts">
definePageMeta({layout: 'none'});
useSeoMeta({title: 'Сменить пароль'});
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <div class="h-dvh px-4 flex flex-col justify-center space-y-4">
      <div>
        <u-button size="sm" color="gray" variant="solid" label="Назад" @click="$router.back()"/>
      </div>
      <div class="text-4xl xl:text-5xl font-extrabold">
        Изменение пароля
      </div>
      <div>
        Пароль должен содержать не менее 6 символов, включая цифры, буквы и специальные символы (!$@%).
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
