<template>
  <div>
    <v-btn v-on:click="consoleLog">Console log</v-btn>
    <h2>This is: {{ this.$route.params.id }}</h2>
    <v-container>
      <v-progress-circular
        :size="70"
        :width="10"
        color="purple"
        indeterminate
        v-if="exerciseDetails.name == null"
      ></v-progress-circular>

      <h1>{{ exerciseDetails.name }}</h1>

      <div>
        <v-chip
          small
          outlined
          label
          class="mr-1 mb-1 blue"
          v-if="exerciseDetails.riding"
          >Riding</v-chip
        >
        <v-chip
          small
          outlined
          label
          class="mr-1 mb-1 green"
          v-if="exerciseDetails.ground"
          >Ground</v-chip
        >
        <v-chip
          small
          outlined
          class="mr-1 mb-1 red"
          v-if="exerciseDetails.confidence"
          >Confidnece</v-chip
        >
        <v-chip
          small
          outlined
          class="mr-1 mb-1 yellow"
          v-if="exerciseDetails.connection"
          >Connection</v-chip
        >
      </div>

      <div v-if="exerciseDetails.introduction">
        <h3>Introduction</h3>
        <p>{{ exerciseDetails.introduction }}</p>
      </div>

      <div v-if="exerciseDetails.howTo">
        <h3>How To</h3>
        <p>
          {{ exerciseDetails.howTo }}
        </p>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exerciseDetails: {},
    };
  },

  async mounted() {
    const db = this.$firebase.firestore();
    const result = await db
      .collection("Horse Exercises")
      .doc(this.$route.params.id)
      .get();
    // .then((doc) => {
    this.exerciseDetails = result.data();
    // });
  },
  methods: {
    consoleLog() {
      console.log(this.exerciseDetails);
    },
  },
};
</script>