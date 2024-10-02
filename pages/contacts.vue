<script setup lang="ts">
useSeoMeta({title: 'Контакты'});


const users = [
  {
    "id": "9d0fb49d-5050-45cf-8253-a21b8200fa6c",
    "name": "Лариса Евгеньевна Орехова",
    "password_expired": 0,
    "email": null,
    "username": "krasilnikova.valentin",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:42.000000Z",
    "updated_at": "2024-09-21T08:36:42.000000Z"
  },
  {
    "id": "9d0fb49d-55bd-40a2-a273-47dccbc7c867",
    "name": "Злата Фёдоровна Белова",
    "password_expired": 0,
    "email": null,
    "username": "vitalii.koklova",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:42.000000Z",
    "updated_at": "2024-09-21T08:36:42.000000Z"
  },
  {
    "id": "9d0fb49d-5b44-4f8e-8e8a-42fd20c80ae5",
    "name": "Зоя Сергеевна Петрова",
    "password_expired": 0,
    "email": null,
    "username": "marat.blokina",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:42.000000Z",
    "updated_at": "2024-09-21T08:36:42.000000Z"
  },
  {
    "id": "9d0fb49d-60d2-4253-998f-d11cd8da2c7c",
    "name": "Алла Сергеевна Филиппова",
    "password_expired": 0,
    "email": null,
    "username": "civanova",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:42.000000Z",
    "updated_at": "2024-09-21T08:36:42.000000Z"
  },
  {
    "id": "9d0fb49d-6645-4e4f-9c46-f0574ef76561",
    "name": "Гаврилов Виктор Владимирович",
    "password_expired": 0,
    "email": null,
    "username": "donat64",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:42.000000Z",
    "updated_at": "2024-09-21T08:36:42.000000Z"
  },
  {
    "id": "9d0fb49d-6be5-4256-9dba-d4dc1d3e517c",
    "name": "Фёдор Александрович Авдеев",
    "password_expired": 0,
    "email": null,
    "username": "dpetrova",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:42.000000Z",
    "updated_at": "2024-09-21T08:36:42.000000Z"
  },
  {
    "id": "9d0fb49d-7157-49dc-a726-3f60803be0e8",
    "name": "Петрова Таисия Ивановна",
    "password_expired": 0,
    "email": null,
    "username": "trofim.sukin",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:42.000000Z",
    "updated_at": "2024-09-21T08:36:42.000000Z"
  },
  {
    "id": "9d0fb49d-76bf-497e-9a2b-3be46f721ac9",
    "name": "Галкин Николай Дмитриевич",
    "password_expired": 0,
    "email": null,
    "username": "elvira.kuzmin",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:42.000000Z",
    "updated_at": "2024-09-21T08:36:42.000000Z"
  },
  {
    "id": "9d0fb49d-7c4c-443b-905c-ca6619c6d22d",
    "name": "Беспалова Розалина Сергеевна",
    "password_expired": 0,
    "email": null,
    "username": "stanislav.gureva",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:42.000000Z",
    "updated_at": "2024-09-21T08:36:42.000000Z"
  },
  {
    "id": "9d0fb49d-8215-4add-adc8-804b558e65bb",
    "name": "Лаврентьев Виктор Александрович",
    "password_expired": 0,
    "email": null,
    "username": "tit85",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:42.000000Z",
    "updated_at": "2024-09-21T08:36:42.000000Z"
  },
  {
    "id": "9d0fb49d-8a15-41d1-8520-4a330cc373bc",
    "name": "Фёдор Иванович Елисеев",
    "password_expired": 0,
    "email": null,
    "username": "lavrentii72",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:42.000000Z",
    "updated_at": "2024-09-21T08:36:42.000000Z"
  },
  {
    "id": "9d0fb49d-8fe2-43bf-b12a-a5bb8147b624",
    "name": "Королёва Нина Сергеевна",
    "password_expired": 0,
    "email": null,
    "username": "eva30",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:42.000000Z",
    "updated_at": "2024-09-21T08:36:42.000000Z"
  },
  {
    "id": "9d0fb49d-95e9-4a9e-b118-6571eed135ad",
    "name": "Клавдия Александровна Фомина",
    "password_expired": 0,
    "email": null,
    "username": "izolda.teterin",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:42.000000Z",
    "updated_at": "2024-09-21T08:36:42.000000Z"
  },
  {
    "id": "9d0fb49d-9b9d-4919-9abf-c5ec985db6b2",
    "name": "Ника Максимовна Андреева",
    "password_expired": 0,
    "email": null,
    "username": "dementev.timur",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:42.000000Z",
    "updated_at": "2024-09-21T08:36:42.000000Z"
  },
  {
    "id": "9d0fb49d-a160-41ac-9fdf-46865aba5642",
    "name": "Ананий Борисович Пономарёв",
    "password_expired": 0,
    "email": null,
    "username": "prokor.kondrateva",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:42.000000Z",
    "updated_at": "2024-09-21T08:36:42.000000Z"
  },
  {
    "id": "9d0fb49d-a70c-4fe2-a21a-32ea2d62b794",
    "name": "Ростислав Евгеньевич Корнилов",
    "password_expired": 0,
    "email": null,
    "username": "voronova.illarion",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:43.000000Z",
    "updated_at": "2024-09-21T08:36:43.000000Z"
  },
  {
    "id": "9d0fb49d-ac96-42b5-8801-7ef300d8230a",
    "name": "Семёнова Лидия Львовна",
    "password_expired": 0,
    "email": null,
    "username": "cernova.zanna",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:43.000000Z",
    "updated_at": "2024-09-21T08:36:43.000000Z"
  },
  {
    "id": "9d0fb49d-b234-4023-9b91-9d0cc93eb4df",
    "name": "Марат Александрович Самсонов",
    "password_expired": 0,
    "email": null,
    "username": "eva61",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:43.000000Z",
    "updated_at": "2024-09-21T08:36:43.000000Z"
  },
  {
    "id": "9d0fb49d-b7cf-4870-89a4-413359757dc1",
    "name": "Эдуард Александрович Куликов",
    "password_expired": 0,
    "email": null,
    "username": "rozalina69",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:43.000000Z",
    "updated_at": "2024-09-21T08:36:43.000000Z"
  },
  {
    "id": "9d0fb49d-bd9a-48e2-a823-5537cd0a54f2",
    "name": "Василиса Львовна Дмитриева",
    "password_expired": 0,
    "email": null,
    "username": "arsenii52",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:43.000000Z",
    "updated_at": "2024-09-21T08:36:43.000000Z"
  },
  {
    "id": "9d0fb49d-c314-445e-b5b9-66d9ba5c0d4c",
    "name": "Валентина Фёдоровна Фомичёва",
    "password_expired": 0,
    "email": null,
    "username": "taras38",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:43.000000Z",
    "updated_at": "2024-09-21T08:36:43.000000Z"
  },
  {
    "id": "9d0fb49d-c8d9-44f8-9d4a-662a45a71cb0",
    "name": "Маргарита Александровна Мельникова",
    "password_expired": 0,
    "email": null,
    "username": "likacev.dmitrii",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:43.000000Z",
    "updated_at": "2024-09-21T08:36:43.000000Z"
  },
  {
    "id": "9d0fb49d-ce7f-4c01-bc92-0430cde8f698",
    "name": "Антон Романович Цветков",
    "password_expired": 0,
    "email": null,
    "username": "albina81",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:43.000000Z",
    "updated_at": "2024-09-21T08:36:43.000000Z"
  },
  {
    "id": "9d0fb49d-d44b-4f9e-a024-8838a1a54d88",
    "name": "Геннадий Львович Пахомов",
    "password_expired": 0,
    "email": null,
    "username": "raisa.ignateva",
    "email_verified_at": "2024-09-21T08:36:42.000000Z",
    "created_at": "2024-09-21T08:36:43.000000Z",
    "updated_at": "2024-09-21T08:36:43.000000Z"
  },
]
</script>

<template>
  <div class="max-w-3xl mx-auto bg-white dark:bg-gray-900 px-1">
    <div class="py-2 px-2 flex gap-2">
      <UInput class="w-full" icon="i-ph-magnifying-glass" placeholder="Введите имя или фамилию"/>
      <UButton color="gray" variant="ghost" label="Отменить"/>
    </div>
    <nuxt-link v-for="user in users" :to="'@'+user.username">
      <div class="flex items-center px-2 py-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
        <UAvatar :alt="user.name ?? user.username" size="md"/>
        <div class="flex-1 min-w-0 ml-2">
          <div class="font-semibold truncate">{{ user.name ?? user.username }}</div>
          <div class="text-gray-500 text-xs font-normal truncate">
            {{ user.email || '@' + user.username }}
          </div>
        </div>
      </div>
    </nuxt-link>
    <div class="text-gray-500 text-center text-xs font-bold py-2">
      {{ users.length }} пользователей
    </div>
  </div>
</template>

<style scoped>

</style>
