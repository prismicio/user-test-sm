<template>
  <section class="py-10">
    <div class="pb-8">
      <h1 class="text-4xl font-bold mb-4">
        Start here for a quick overview of everything you need to know
      </h1>
      <p class="mb-4">
        This your page builder. Inside this area, you'll find straightforward
        controls for adding slices, modify your content and format it. For now,
        you're probably just wondering what to do first. To help get you going
        as quickly as possible, we've populated your site with starter content
        (like this doc!) covering all the key concepts and features of the
        product.
      </p>
      <a class="text-blue-500 font-bold" href="https://prismic.io"
        >Learn more</a
      >
    </div>
    <slice-zone type="getting-started" queryType="single" />
  </section>
</template>

<script>
import SliceZone from "vue-slicezone";
export default {
  name: "home",
  components: {
    SliceZone
  }
};
</script>
