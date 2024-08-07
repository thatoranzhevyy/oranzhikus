<script setup lang="ts">
const page = ref(1);
const lastPage = ref(1);
const isLoaded = ref(false);
const artworks = ref([]);
const pending = ref(false);

onMounted(() => {
  loadArtworks();
})

const loadMore = () => {
  if (page.value + 1 <= lastPage.value) {
    page.value = page.value + 1;
    loadArtworks();
  }
}

const loadArtworks = () => {
  pending.value = true;
  const url = `https://orng.buhe.su/api/artwork`;
  $fetch(url, {
    method: 'GET',
    params: {
      page: page.value
    }
  }).then(function (artworks) {
    appendArtworks(artworks.data);
    pending.value = false;
    isLoaded.value = true;
    lastPage.value = artworks.last_page;
  });
}

const appendArtworks = (newArtworks) => {
  newArtworks.forEach((artwork) => {
    artworks.value.push(artwork);
  });
}
</script>

<template>
  <div class="p-2 space-y-2 overflow-x-hidden">
    <div v-for="artwork in artworks" class="pb-2">
      <div class="flex items-center space-x-2 mb-2">
        <UAvatar size="xs" :src="artwork.artist.large_avatar_url" :alt="artwork.artist.full_name"/>
        <div class="text-xs text-slate-900 font-semibold dark:text-slate-300">{{ artwork.artist.full_name }}</div>
      </div>
      <chill-items-list :galleryID="`gallery-list-${artwork.id}`" :images="artwork.assets"/>
    </div>
    <u-button block label="Загрузить больше" @click="loadMore()" :loading="pending"/>
  </div>
</template>


<style scoped>

</style>