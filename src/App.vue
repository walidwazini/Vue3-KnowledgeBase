<template>
  <div>
    <active-element
      :topic-title="activeTopic && activeTopic.title"
      :text="activeTopic && activeTopic.fullText"
    ></active-element>
    <knowledge-base :topics="topics" @select-topic="activateTopic"></knowledge-base>
  </div>
  <div>
    <active-user :username="user.name" :userage="user.age"></active-user>
    <user-data @set-data="setUserData"></user-data>
  </div>
</template>

<script>
import UserData from "./components/UserData.vue";
export default {
  components: { UserData },
  data() {
    return {
      user: {
        name: "Sven Muller",
        age: 26,
      },
      topics: [
        {
          id: "basics",
          title: "The Basics",
          description: "Core Vue basics you have to know",
          fullText:
            "Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!",
        },
        {
          id: "components",
          title: "Components",
          description:
            "Components are a core concept for building Vue UIs and apps",
          fullText:
            "With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.",
        },
      ],
      activeTopic: null,
    };
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name: name,
        age: +age,
      };
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


h2 {
  margin: 0.75rem 0;
  text-align: center;
}

button {
  font: inherit;
  border: 1px solid #c70053;
  background-color: #c70053;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #e24d8b;
  border-color: #e24d8b;
}

</style>