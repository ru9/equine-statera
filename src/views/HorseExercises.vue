<template>
  <div class="horseExercises">
    <h1>This is the Horse Exercise page</h1>

    <v-btn v-on:click="consoleLog">Console log</v-btn>

    <div v-if="horseExercises.length == 0" class="d-flex justify-center">
      <v-progress-circular
        :size="70"
        :width="10"
        color="purple"
        indeterminate
      ></v-progress-circular>
    </div>

    <v-container class="d-flex flex-wrap">
      <horse-exercise-teaser
        v-for="exercise in horseExercises"
        :key="exercise.id"
        :exerciseId="exercise.id"
        :exerciseDifficulty="exercise.difficulty"
        :exerciseName="exercise.name"
        :exerciseTeaser="exercise.teaser"
        :exerciseGround="exercise.ground"
        :exerciseRiding="exercise.riding"
        :exerciseConfidence="exercise.confidence"
        :exerciseConnection="exercise.connection"
      />
    </v-container>
  </div>
</template>

<script>
import HorseExerciseTeaser from "../components/HorseExerciseTeaser.vue";

export default {
  components: { HorseExerciseTeaser },

  data() {
    return {
      horseExercises: [],
    };
  },
  mounted() {
    const db = this.$firebase.firestore();
    db.collection("Horse Exercises")
      .get()
      .then((snap) => {
        const horseExercises = [];
        snap.forEach((doc) => {
          horseExercises.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        this.horseExercises = horseExercises;
      });
  },
  methods: {
    consoleLog() {
      console.log(this.horseExercises);
    },
  },
};
</script>

<style>
.horseExercises {
  height: 100%;
  width: 100%;
}
</style>