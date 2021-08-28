<template>
  <v-container fill-height align-start>
    <h1>Equine Statera</h1>
    <v-container>
      <v-row>
        <v-row>
          <v-col>
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum
              distinctio quia maiores nam placeat ea facere voluptates
              temporibus quibusdam. Sint quos, modi cupiditate sequi debitis
              reprehenderit doloremque fugit beatae!
            </p>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12">
            <v-text-field label="Your E-mail address" filled rounded dense>
            </v-text-field>
          </v-col>

          <v-col cols="6">
            <v-btn x-large rounded depressed> Subscribe </v-btn>
          </v-col>
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
      </v-row>
    </v-container>
  </v-container>
</template>
