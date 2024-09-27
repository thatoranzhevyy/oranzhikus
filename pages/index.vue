<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <ApplicationBar>
    <template #left>
      <UAvatar size="md" icon="i-ph-user-bold" class="bg-gray-100"/>
      <div class="text-lg font-bold">Главная</div>
    </template>
    <template #right>
      <UButton size="lg" color="gray" variant="ghost" icon="i-ph-list-bold" to="settings"/>
    </template>
  </ApplicationBar>
  <div class="max-w-3xl mx-auto space-y-2 p-1.5">
    <div class="bg-white dark:bg-gray-900 rounded-md p-2 space-y-2">
      <div class="flex items-center">
        <UAvatar alt="ЕЫ" size="md"/>
        <div class="flex-1 min-w-0 ml-2">
          <div class="text-sm font-semibold truncate">Test</div>
          <div class="text-gray-500 text-xs font-normal truncate">sdkfm;lk</div>
        </div>
        <UButton size="lg" color="gray" variant="ghost" icon="i-ph-dots-three-vertical-bold"/>
      </div>
      <div class="text-sm whitespace-pre-wrap">
        <span class="select-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150</span>
        <div @click="isOpen = true" class="inline-block text-primary-500 px-1 rounded-md hover:bg-primary-200/20">
          Показать еще
        </div>
      </div>
      <div class="max-w-full whitespace-nowrap overflow-x-auto flex space-x-2">
        <img class="rounded max-w-full"
             src="https://workman.buhe.su/storage/posts/9d0a77dd-2d2b-48d3-b71d-fa7d0a74b037/QcGydStHmtVMH9TApSP39SBujv9MKhRfr78dpuAk.jpg">
      </div>
      <div>
        <u-button size="xs" color="primary" variant="ghost" icon="i-ph-heart-bold" label="233"/>
        <u-button size="xs" color="gray" variant="ghost" icon="i-ph-chat-circle-bold" label="233" @click="isOpen = true"/>
        <u-button size="xs" color="gray" variant="ghost" icon="i-ph-share-fat-bold" label="1"/>
      </div>
    </div>
  </div>

  <USlideover v-model="isOpen">
    <ApplicationBar>
      <template #left>
        <UButton size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="isOpen = false"/>
        <div class="text-lg font-bold">Запись на стене</div>
      </template>
      <template #right>
        <UButton size="lg" color="gray" variant="ghost" icon="i-ph-dots-three-vertical-bold"/>
      </template>
    </ApplicationBar>

    <hr class="border-gray-200 dark:border-gray-800 mx-2">
    <div class="max-w-3xl mx-auto space-y-2 overflow-y-auto">
      <div class="bg-white dark:bg-gray-900 rounded-md p-2 space-y-2">
        <div class="flex items-center">
          <UAvatar alt="ЕЫ" size="md"/>
          <div class="flex-1 min-w-0 ml-2">
            <div class="text-sm font-semibold truncate">Test</div>
            <div class="text-gray-500 text-xs font-normal truncate">sdkfm;lk</div>
          </div>
        </div>
        <div class="text-sm whitespace-pre-wrap">
          <div class="select-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
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
          <u-button size="xs" color="primary" variant="ghost" icon="i-ph-heart-bold" label="233"/>
          <u-button size="xs" color="gray" variant="ghost" icon="i-ph-share-fat-bold" label="1"/>
        </div>
        <hr class="border-gray-200 dark:border-gray-800 mx-2">
        <div>233 Комментариев</div>
      </div>
    </div>
  </USlideover>
</template>
