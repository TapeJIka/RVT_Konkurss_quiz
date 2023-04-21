<template>
  <div class="card text-center d-flex justify-content-center align-items-center" style=" width: 280px;">
    <h3 class="card-title">{{ title }}</h3>
    <a class="btn btn-primary" href="/question" role="button">Sākt</a>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["title"]
};
</script>

<style scoped>
.card{
  padding: 15px;
}
.btn{
  padding: 10px 15px;
}
</style>