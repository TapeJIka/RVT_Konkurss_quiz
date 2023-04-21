<template>
  <div class="d-flex justify-content-center align-items-center" style="width: 100%; margin-top: 8%;">
<!--    <div class="d-flex flex-wrap justify-content-center align-items-center" style="width: 80%;">-->
<!--      <div class="d-flex justify-content-center text-center" style="width: 30% ;margin-bottom: 2%">-->
<!--        <div class="d-flex" style="width: fit-content">-->
<!--          <h1 class="display-6">Pārbaudiet savas zināšanas šadas kategorijās :</h1>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="d-flex justify-content-center align-items-center" style="width: 100%">-->
<!--        -->
<!--      </div>-->
<!--    </div>-->
    <div class="d-flex flex-wrap justify-content-center" style="width: 50%">
      <Card
          title="Grāmatvedības pamati"
      />
      <Card
          title="Dokumentu kontrole"
      />
      <Card
          title="Ilgtermiņa ieguldījumu uzskaite"
      />
      <Card
          title="Krājumu uzskaite"
      />
      <Card
          title="Debitoru uzskaite"
      />

      <Card
          title="Naudas līdzekļu uzskaite"
      />
      <Card
          title="Darba samaksas un atbilstošo nodokļu uzskaite"
      />
    </div>
  </div>
</template>
<script>
import Card from "../components/Card.vue";

export default {
  name: "rvt_quiz",

  components: {
    Card,
  },
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