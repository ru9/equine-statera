<template>
  <div class="home">
    <v-container fill-height align-start>
      <v-row>
        <h1>Equine Statera</h1>
      </v-row>
      <v-row>
        <v-row style="width: 100%">
          <v-spacer />
          <v-col cols="6">
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum
              distinctio quia maiores nam placeat ea facere voluptates
              temporibus quibusdam. Sint quos, modi cupiditate sequi debitis
              reprehenderit doloremque fugit beatae!
            </p>
          </v-col>
          <v-spacer />
        </v-row>
        <v-row style="width: 100%">
          <v-spacer />
          <v-col cols="5">
            <v-text-field
              align-content-end
              label="Your E-mail address"
              filled
              rounded
              dense
            >
            </v-text-field>
          </v-col>
          <v-col cols="1">
            <v-btn x-large rounded depressed> Subscribe </v-btn>
          </v-col>
          <v-spacer />
        </v-row>
        <v-row style="width: 100%">
          <v-spacer />
          <v-btn
            color="blue lighten-3"
            x-large
            rounded
            depressed
            to="/horseexercises"
          >
            Horse Exercises
          </v-btn>
          <v-spacer />
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  height: 100%;
  widows: 100%;
}
</style>