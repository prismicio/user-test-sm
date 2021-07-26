<template>
  <section class="">
    <prismic-rich-text
      :field="slice.primary.title"
      class="text-2xl font-bold"
    />
    <ul id="example-1">
      <li v-for="item in slice.items" :key="item.message">
        <prismic-rich-text :field="item.item" class="text-1xl font-bold" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Summary",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {};
      }
    }
  }
};
</script>
