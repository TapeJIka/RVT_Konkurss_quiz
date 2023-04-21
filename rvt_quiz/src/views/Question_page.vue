<template>
  <div class="d-flex justify-content-center align-items-center" style="width: 100%; margin-top: 8%;">
    <div class="d-flex justify-content-center align-items-center" style="width: 100%">
      <div class="d-flex flex-wrap justify-content-center" style="width: 50%; gap:20px;">
        <QuestionCard
            title="1"
        />
        <QuestionCard
            title="112312312312312"
        />
        <QuestionCard
            title="1"
        />
        <QuestionCard
            title="1"
        /><QuestionCard
          title="1"
      /><QuestionCard
          title="1"
      /><QuestionCard
          title="1"
      /><QuestionCard
          title="1"
      /><QuestionCard
          title="1"
      />
      </div>
    </div>
  </div>
</template>
<script>
import QuestionCard from "../components/QuestionCard.vue";

export default {
  name: "question_page",

  components: {
    QuestionCard,
  },
};

</script>
<style>

.navbar{
  padding: 0px;
}

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


</style>