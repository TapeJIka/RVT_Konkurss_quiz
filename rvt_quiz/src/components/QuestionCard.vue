<template>
  <div class="d-flex" style="width: fit-content">
    <a href="/quiz" class="btn btn-primary stretched-link" style="padding: 20px 50px; font-size: 60px">{{title}}</a>
  </div>
</template>
<script>
export default {
  name: "QuestionCard",
  props: ["title"]
};
</script>

<style scoped>

</style>