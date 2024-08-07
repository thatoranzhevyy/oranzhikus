<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default {
  name: 'SimpleGallery',
  props: {
    galleryID: String,
    images: Array,
  },
  setup(props) {
    return {
      imagesData: props.images,
    };
  },
  mounted() {
    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        gallery: '#' + this.$props.galleryID,
        children: 'a',
        zoom: false,
        loop: false,
        bgOpacity: 1,
        pswpModule: () => import('photoswipe'),
      });
      this.lightbox.init();
    }
  },
  unmounted() {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },
  methods: {},
};
</script>

<template>
  <div :id="galleryID" class="max-w-xl whitespace-nowrap overflow-x-auto flex space-x-2">
    <a v-for="(image, key) in imagesData"
       :key="key"
       :href="image.image_url"
       :data-pswp-width="image.width"
       :data-pswp-height="image.height"
       target="_blank"
       rel="noreferrer">
      <img class="rounded h-44 max-w-7xl" :src="image.image_url" :alt="image.asset_id">
    </a>
  </div>
</template>
