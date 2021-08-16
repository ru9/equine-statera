<template>
  <v-card
    class="ma-2"
    :to="{ name: 'HorseExerciseCard', params: { id: exerciseId } }"
  >
    <v-card-title>
      {{ exerciseName }}
    </v-card-title>
    <v-card-subtitle>
      <v-chip small outlined label class="mr-1 mb-1 blue" v-if="exerciseRiding"
        >Riding</v-chip
      >
      <v-chip small outlined label class="mr-1 mb-1 green" v-if="exerciseGround"
        >Ground</v-chip
      >
      <v-chip small outlined class="mr-1 mb-1 red" v-if="exerciseConfidence"
        >Confidnece</v-chip
      >
      <v-chip small outlined class="mr-1 mb-1 yellow" v-if="exerciseConnection"
        >Connection</v-chip
      >
    </v-card-subtitle>
    <v-card-text>
      {{ exerciseTeaser }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    exerciseDifficulty: Number,
    exerciseId: String,
    exerciseName: String,
    exerciseTeaser: String,
    exerciseGround: Boolean,
    exerciseRiding: Boolean,
    exerciseConfidence: Boolean,
    exerciseConnection: Boolean,
  },
};
</script>

<style scoped>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>