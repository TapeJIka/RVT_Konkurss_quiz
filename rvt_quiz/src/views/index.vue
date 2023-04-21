<template>
  <div class="d-flex flex-column justify-content-center align-items-center" style="width: 100%; margin-top: 250px;">
    <div class="d-flex justify-content-center" style="width: 100%">
      <h1 class="display-6">Pārbaudiet savas zināšanas šadas kategorijās</h1>
    </div>
    <div class="d-flex flex-wrap justify-content-center" style="width: 50%">
      <Card
          v-for="quize in quizes"
          :key="quize.index"
          :title="quize.title"
      />
    </div>
  </div>
</template>
<script>
import Card from "../components/Card.vue";
import {quizes} from "~/helper/quizes";

export default {
  components: {
    Card,
  },
  mounted() {
    console.log(quizes)
  }
};
</script>
<style>
.navbar > div{
  text-align: center;
  vertical-align: center;
}
.h1{
  color: #0D6EFD;
  font-family: 'Raleway', sans-serif;
  font-weight: bolder;
  line-height: 60px;
  font-size: 35px;
  letter-spacing: 1px;
  padding-left: 6%;
}

.d-flex{
  gap: 20px;
}

.display-6{
  color: black;
  font-weight: lighter;
  font-family: 'Raleway', sans-serif;
  line-height: 60px;
  letter-spacing: 1px;
}
</style>