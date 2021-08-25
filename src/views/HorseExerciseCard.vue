<template>
  <div>
    <v-container>
      <v-progress-circular
        class="d-flex justify-center"
        :size="70"
        :width="10"
        color="purple"
        indeterminate
        v-if="exerciseDetails.name == null"
      ></v-progress-circular>

      <v-img
        v-if="exerciseDetails.pictureId"
        v-bind:src="
          'https://firebasestorage.googleapis.com/v0/b/equine-statera.appspot.com/o/horse-exercises%2F' +
          exerciseDetails.pictureId +
          '.jpg?alt=media'
        "
      ></v-img>

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

      <div class="mt-5">
        <v-tabs
          v-model="tab"
          grow
          v-if="exerciseDetails.introduction || exerciseDetails.howTo"
        >
          <v-tab> Introduction </v-tab>
          <v-tab> How To </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card>
              <v-card-text> {{ exerciseDetails.introduction }} </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card>
              <v-card-text> {{ exerciseDetails.howTo }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exerciseDetails: {},
      tab: null,
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