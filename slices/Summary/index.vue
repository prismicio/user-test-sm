<template>
  <section class="border-t-2 border-b-2 border-dashed py-8">
    <prismic-rich-text
      :field="slice.primary.title"
      class="text-2xl font-bold mb-3"
    />
    <ul id="example-1" class="list-disc">
      <li
        class="ml-5 text-green-50"
        v-for="item in slice.items"
        :key="item.message"
      >
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
