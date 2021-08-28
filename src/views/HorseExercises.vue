<template>
  <v-container>
    <h1>This is the Horse Exercise page</h1>

    <div v-if="horseExercises.length == 0" class="d-flex justify-center">
      <v-progress-circular
        :size="70"
        :width="10"
        color="purple"
        indeterminate
      ></v-progress-circular>
    </div>

    <v-container>
      <v-row no-gutters>
        <v-col
          class="d-flex"
          :lg="3"
          :md="4"
          :sm="6"
          cols="12"
          v-for="exercise in horseExercises"
          :key="exercise.id"
        >
          <horse-exercise-teaser
            :exerciseId="exercise.id"
            :exerciseDifficulty="exercise.difficulty"
            :exerciseName="exercise.name"
            :exerciseTeaser="exercise.teaser"
            :exerciseGround="exercise.ground"
            :exerciseRiding="exercise.riding"
            :exerciseConfidence="exercise.confidence"
            :exerciseConnection="exercise.connection"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
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
};
</script>