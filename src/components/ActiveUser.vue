// Outputting Username

<template>
  <section>
    <h2>{{ username }}</h2>
    <h3>{{ userage }} Years Old</h3>
  </section>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
    //   required: true,
    },
    userage: {
      type: Number,
      required: true,
    },
     userage2: {
      type: Number,
      required: true,
    },
  },
//   data() {
//       return
//   },
};
</script>

<style>
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
}
</style>