<script setup lang="ts">
const dayjs = useDayjs();

definePageMeta({layout: 'none'});

const items = [
  [{
    label: 'Скопировать ссылку'
  }, {
    label: 'Пожаловаться'
  }]
]
</script>

<template>
  <ApplicationBar>
    <template #left>
      <UButton size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="$router.back()"/>
      <div class="text-lg font-bold">Запись на стене</div>
    </template>
    <template #right>
      <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <UButton size="lg" color="gray" variant="ghost" icon="i-ph-dots-three-vertical-bold"/>
      </UDropdown>
    </template>
  </ApplicationBar>
  <div class="max-w-3xl mx-auto space-y-2 overflow-y-auto p-1.5">
    <div class="bg-white dark:bg-gray-900 rounded-md p-2 space-y-2">
      <div class="flex items-center">
        <UAvatar alt="Алла Сергеевна Филиппова" size="md"/>
        <div class="flex-1 min-w-0 ml-2">
          <div class="font-semibold truncate">Алла Сергеевна Филиппова</div>
          <div class="text-gray-500 text-xs font-normal truncate">
            {{ dayjs("2024-09-24T06:06:24.000000Z").utc().format('DD MMM HH:mm') }}
          </div>
        </div>
      </div>
      <div class="text-sm whitespace-pre-wrap">
        <div class="select-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.

          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it look like readable English. Many
          desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
          over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
          Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
          Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
          source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
          during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
          1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
          original form, accompanied by English versions from the 1914 translation by H. Rackham.

          Where can I get some?
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
          middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin
          words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
          The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic
          words etc.
        </div>
      </div>
      <div class="max-w-full whitespace-nowrap overflow-x-auto flex space-x-2">
        <img class="rounded max-w-full"
             src="https://workman.buhe.su/storage/posts/9d0a77dd-2d2b-48d3-b71d-fa7d0a74b037/QcGydStHmtVMH9TApSP39SBujv9MKhRfr78dpuAk.jpg">
      </div>
      <div>
        <u-button size="xs" color="primary" variant="ghost" icon="i-ph-heart-bold" label="2"/>
        <u-button size="xs" color="gray" variant="ghost" icon="i-ph-share-fat-bold" label="1"/>
      </div>

      <UDivider class="px-2"/>
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <div class="text-gray-500 text-sm font-semibold truncate">2 Комментариев</div>
        </div>
        <div class="space-y-2">
          <div class="flex">
            <UAvatar alt="Ника Максимовна Андреева" size="sm"/>
            <div class="flex-1 min-w-0 ml-2">
              <div class="text-sm font-semibold truncate">Ника Максимовна Андреева</div>
              <div class="text-xs font-normal">Very straight-to-point article. Really worth time
                reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the
                design tools are as important as the creation of the design strategy.
              </div>
              <div class="text-gray-400 text-xs font-normal truncate">сегодня в 10:27</div>
            </div>
          </div>
          <div class="flex">
            <UAvatar alt="Фёдор Александрович Авдеев" size="sm"/>
            <div class="flex-1 min-w-0 ml-2">
              <div class="text-sm font-semibold truncate">Фёдор Александрович Авдеев</div>
              <div class="text-xs font-normal">
                Much appreciated! Glad you liked it ☺️
              </div>
              <div class="text-gray-400 text-xs font-normal truncate">сегодня в 6:09</div>
            </div>
          </div>
        </div>
        <div class="sticky bottom-0 py-1 z-[55] bg-white dark:bg-gray-900">
          <div class="flex">
            <UButton color="gray" variant="ghost" icon="i-ph-paperclip"/>
            <UTextarea :rows="1" autoresize :maxrows="3" variant="none" class="w-full" placeholder="Комментрии"/>
            <UButton variant="ghost" icon="i-ph-paper-plane-right"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>