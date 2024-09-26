<script lang="ts" setup>
definePageMeta({layout: 'none'});
useSeoMeta({title: 'Устройства'});

const isOpenDisconnectAll = ref(false);
const isOpenDevice = ref(false);

const current_device = {
  "name": "Android 6.0 \/ Chrome Mobile 129.0",
  "ip": "81.88.148.8",
  "last_used_at": "2024-09-25T17:42:03.000000Z",
  "hash": "eyJpdiI6IjVhVmVtb0tiM1JaL2Y0KzdKWCtTM3c9PSIsInZhbHVlIjoiNEp2Ym9aSTZaUFJhQVdWZTNLU3VaQT09IiwibWFjIjoiYTVkMDY4YjhmNzhjNjY0MmZhZjA3MTYyMmM1MTQ1MzhhZGZkNWVkY2M4NjU5MGQwMDc2OGQyNzJkZTI0YjZiNyIsInRhZyI6IiJ9",
  "is_current": true
};
const devices = [
  {
    "name": "Android 6.0 \/ Chrome Mobile 129.0",
    "ip": "81.88.148.8",
    "last_used_at": "2024-09-25T17:41:52.000000Z",
    "hash": "eyJpdiI6IjVrcjVZQ0dOTElha3NDZ012ZnduNVE9PSIsInZhbHVlIjoiSnpySHpISTJTRXkwQURZYW5NejFqZz09IiwibWFjIjoiNGY0OTgxOWE3ZTk5NDhlNTEzYWQzNTA1NTI2ODJmNDE3MjA4MmNjZTQ2YTJhNGQxODZkY2IwYTdmNzNjNmM2YSIsInRhZyI6IiJ9"
  },
  {
    "name": "Windows 10 \/ Chrome 129.0",
    "ip": "81.88.148.8",
    "last_used_at": "2024-09-25T17:41:27.000000Z",
    "hash": "eyJpdiI6IjBCODdHM1dwT21yQ2M3MytBZEM3QWc9PSIsInZhbHVlIjoicGhBVmJnc2Y3YnVpSHdqWlBoaURCQT09IiwibWFjIjoiMTM5NDNkOTQzNjVjZTQ5NTU0NWIyMDkyYjNjYzAxYjg2MzQ3OGEyOWMxMDU3NmU3YzU3MzdjZTNmYWFlZWVjYiIsInRhZyI6IiJ9"
  },
  {
    "name": "Android 13 \/ Chrome Mobile 129",
    "ip": "81.88.148.8",
    "last_used_at": "2024-09-24T17:21:45.000000Z",
    "hash": "eyJpdiI6IldkTEI4VmM1SHBiTG84Z0tUOXJIL1E9PSIsInZhbHVlIjoiaUI3M0ZNaWVqNVlyeG9tTnhmSGFYUT09IiwibWFjIjoiZWFjYzhhNWNlZjIzZTc2ZGFhZTIzMjcwOTc3YzU5NDIxNTM0MDAyZGJiMTEzMjc3NzI4NmMyNGE5YWI2ZWFmOCIsInRhZyI6IiJ9"
  },
  {
    "name": "Android 14 \/ Yandex Browser 24.7",
    "ip": "176.64.5.183",
    "last_used_at": "2024-09-24T12:49:39.000000Z",
    "hash": "eyJpdiI6IlBneFJ4R1kzWUlsQlpaendLN1NVV2c9PSIsInZhbHVlIjoiVlpuTkY3OFhUVmNoSUkrSThzaUdIZz09IiwibWFjIjoiNzllMjBlYzAxZGM4NjBmZWRmY2ZmODM3NTdmNDE4MDY4MzMzMTQ0NjdlN2U5ZmY1NjAzYzJhYmY0MDYxOTdjMCIsInRhZyI6IiJ9"
  },
  {
    "name": "Android 10 \/ Chrome Mobile 127.0",
    "ip": "176.64.5.183",
    "last_used_at": "2024-09-24T06:06:24.000000Z",
    "hash": "eyJpdiI6IjRqUXNsZmcxMVVQdFhadjFXMCtqaVE9PSIsInZhbHVlIjoieUIrbk9UcDJnOUxQOVZKSG1IQTdUdz09IiwibWFjIjoiYjUzYzZmYzViODI4MDQzYzdmNGMxNTZmNzE5N2FlNGQyYWRiNmFjYTg5MTg0OTBjNzgxZjM3MzNmZDExZWEwYyIsInRhZyI6IiJ9"
  },
]
</script>
<template>
  <ApplicationBar>
    <template #left>
      <UButton size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="$router.back()"/>
      <div class="text-lg font-bold">Устройства</div>
    </template>
    <template #right>
      <UButton size="lg" color="gray" variant="ghost" icon="i-ph-arrow-clockwise-bold"/>
    </template>
  </ApplicationBar>
  <div class="max-w-3xl mx-auto space-y-2 p-1.5">
    <div class="text-gray-500 text-xs font-normal px-4">
      <div>
        Здесь перечислены все устройства, на которых выполнен вход в вашу учётную запись. Вы можете выйти из
        учётной записи на каждом из них по отдельности или на всех сразу.
      </div>
      <br>
      <div>
        Если вы обнаружили в списке незнакомое устройство, немедленно выполните выход на этом устройстве и смените
        пароль от вашей учётной записи.
      </div>
    </div>
    <div class="bg-white dark:bg-gray-900 rounded-md p-1">
      <div class="px-3.5 py-2 font-semibold">Текущее устройство</div>
      <div>
        <div class="flex items-center px-2 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
             @click="isOpenDevice = true">
          <UAvatar icon="i-ph-devices" size="md"/>
          <div class="flex-1 min-w-0 ml-2">
            <div class="text-sm font-semibold truncate">{{ current_device.name }}</div>
            <div class="text-gray-500 text-xs font-normal truncate">
              {{ current_device.ip }}: <span class="text-primary-500">{{ current_device.last_used_at }}</span>
            </div>
          </div>
        </div>
        <UButton icon="i-ph-minus-circle-bold" size="xl" color="red" variant="ghost" label="Завершить все другие сеансы"
                 block class="justify-start" @click="isOpenDisconnectAll = true"/>
      </div>
    </div>
    <div class="text-gray-500 text-xs font-normal px-4">
      <div>
        Выйти на всех устройствах, кроме этого. Вам придётся повторно войти в учётную запись на всех устройствах, где вы
        выполнили выход.
      </div>
    </div>
    <div v-if="devices" class="bg-white dark:bg-gray-900 rounded-md p-1">
      <div class="px-3.5 py-2 font-semibold">Активные сеансы</div>
      <div v-for="device in devices">
        <div class="flex items-center px-2 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
          <UAvatar icon="i-ph-devices" size="md"/>
          <div class="flex-1 min-w-0 ml-2">
            <div class="text-sm font-semibold truncate">{{ device.name }}</div>
            <div class="text-gray-500 text-xs font-normal truncate">
              {{ device.ip }}: <span class="text-primary-500">{{ device.last_used_at }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <UModal v-model="isOpenDisconnectAll">
    <div class="p-5 flow-root space-y-6">
      <div class="space-y-4">
        <div class="text-lg font-bold leading-6">
          Завершить сеансы
        </div>
        <div>Вы точно хотите завершить все сеансы, кроме текущего?</div>
      </div>
      <div class="float-right space-x-4">
        <UButton label="Отмена" color="primary" variant="ghost" @click="isOpenDisconnectAll = false"/>
        <UButton label="Завершить" color="red" variant="ghost" @click="isOpenDisconnectAll = false"/>
      </div>
    </div>
  </UModal>
  <UModal v-model="isOpenDevice">
    <div class="p-0.5">
      <ApplicationBar>
        <template #left>
          <UButton size="lg" color="gray" variant="ghost" icon="i-ph-x-bold" @click="isOpenDevice = false"/>
          <div class="text-lg font-bold leading-6 text-gray-900 dark:text-white">Сеанс</div>
        </template>
        <template #right>
          <UButton size="lg" color="red" variant="ghost" label="Завершить сеанс"
                   @click="isOpenDevice = false"/>
        </template>
      </ApplicationBar>
      <div class="p-2 space-y-6">
        <div class="flex flex-col items-center">
          <UAvatar icon="i-ph-devices" size="xl"/>
          <div class="text-lg font-bold leading-6">
            {{ current_device.name }}
          </div>
          <div class="text-gray-500 text-xs font-normal truncate">
            {{ current_device.ip }}: <span class="text-primary-500">{{ current_device.last_used_at }}</span>
          </div>
        </div>
      </div>
    </div>
  </UModal>
</template>
