<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import styles from './SelectInput.module.scss';

interface Options {
  id: number;
  value: string;
}

const props = defineProps<{
  options: Options[];
  modelValue: string;
}>();

const selectedValue = ref(props.modelValue);
const onToggleValue = ref(false);

const toggleChange = () => {
  onToggleValue.value = !onToggleValue.value;
};

const onChangeValue = (value: string) => {
  selectedValue.value = value;
  onToggleValue.value = false;
};

const handleWindowClick = () => {
  onToggleValue.value = false;
};

onMounted(() => {
  window.addEventListener('click', handleWindowClick);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', handleWindowClick);
});
</script>

<template>
  <div>
    <button @click.stop="toggleChange" :class="styles.selectButton" type="button">
      {{ selectedValue }}
      <img
        :class="[styles.selectButtonIcon, onToggleValue ? styles.active : '']"
        src="/public/icons/ic-arrow.svg"
        alt="arrow"
      />
    </button>
    <ul :class="styles.selectList" v-if="onToggleValue">
      <li
        :class="styles.selectItem"
        @click="onChangeValue(option.value)"
        v-for="option in props.options"
        :key="option.id"
      >
        {{ option.value }}
      </li>
    </ul>
  </div>
</template>
