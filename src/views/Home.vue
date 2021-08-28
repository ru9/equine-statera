<template>
  <v-container fill-height align-start>
    <h1>Equine Statera</h1>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" :sm="11" :md="10" :lg="7" :xl="5">
          <p class="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum
            distinctio quia maiores nam placeat ea facere voluptates temporibus
            quibusdam. Sint quos, modi cupiditate sequi debitis reprehenderit
            doloremque fugit beatae!
          </p>
        </v-col>
      </v-row>

      <v-row class="mb-10" justify="center">
        <v-col cols="10" :sm="8" :md="8" :lg="6" :xl="4">
          <v-text-field label="Your E-mail address" filled rounded dense>
          </v-text-field>
        </v-col>

        <v-btn
          class="mt-3 d-flex d-sm-none"
          x-large
          icon
          color="green"
          outlined
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn class="mt-3 d-none d-sm-flex" x-large rounded depressed
          >Subscribe</v-btn
        >
      </v-row>

      <v-row justify="center">
        <v-btn
          color="blue lighten-3"
          x-large
          rounded
          depressed
          to="/horseexercises"
        >
          Horse Exercises
        </v-btn>
      </v-row>
    </v-container>
  </v-container>
</template>
