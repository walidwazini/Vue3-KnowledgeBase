<template>
  <div>
    <active-user></active-user>
    <user-data></user-data>
  </div>
</template>

<script>
import UserData from './components/UserData.vue';
export default {
  components: { UserData },
  data() {
    return {
      // topics: [
      //   {
      //     id: "basics",
      //     title: "The Basics",
      //     description: "Core Vue basics you have to know",
      //     fullText:
      //       "Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!",
      //   },
      //   {
      //     id: "components",
      //     title: "Components",
      //     description:
      //       "Components are a core concept for building Vue UIs and apps",
      //     fullText:
      //       "With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.",
      //   },
      // ],
      // activeTopic: null,
    };
  },
};
</script>