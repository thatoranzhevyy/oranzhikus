import {ref, onBeforeUnmount, onBeforeMount} from "vue";

export const useCurrentTime = () => {

  const currentTime = ref(new Date());
  const updateCurrentTime = () => {
    currentTime.value = new Date();
  };
  onBeforeMount(() => {
    const updateTimeInterval = setInterval(updateCurrentTime, 1000);
  });
  onBeforeUnmount(() => {
    const updateTimeInterval = setInterval(updateCurrentTime, 1000);
    clearInterval(updateTimeInterval);
  });
  return {
    currentTime
  };
};
