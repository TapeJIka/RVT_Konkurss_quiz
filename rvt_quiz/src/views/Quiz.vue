<template>
  <div class="d-flex justify-content-center align-items-center" style="width: 100%; margin-top: 10%;">
    <div class="d-flex flex-wrap justify-content-center align-items-center" style="width: 100%;">
      <div class="h2"><b> {{ questions[currentQuestion].title }} </b></div>
    </div>
  </div>
  <div class="d-flex justify-content-start align-items-center">
    <div class="question d-flex  flex-column" style="width: 50%; padding-left: 10%;margin-top: 4%;">
      <div class="d-flex flex-column" id="options" style="padding: 10px 20px">
        <label v-for="answer in questions[currentQuestion].answers" :key="answer.index" class="options" style="font-size: 30px">
          {{ answer.title }}
        </label>
      </div>
    </div>
    <div v-if="!score" class="d-flex justify-content-end pt-3">
      <div class="ml-auto">
        <button class="btn btn-success" @click="submit()" >Nakamais</button>
      </div>
    </div>
  </div>

</template>
<script>
import Question from "../components/Question.vue";

export default {
  name: "rvt_quiz",

  data () {
    return {
      currentQuestion: 0,
      correctAnswers: 0,
      selectedAnswer: null,
      score: null,
      showError: false,
      questions: [
        {
          title: 'Kāds ir attaisnojuma dokumentu iegrāmatošanas termiņš, izņemot IK, IU un MUN maksātājus?',
          answers: [
            {
              title: 'a) Jāiegrāmato ne vēlāk kā 15 dienu laikā pēc attiecīgā mēneša beigām',
              correct: false,
              color: null,
            },
            {
              title: 'b) Jāiegrāmato ne vēlāk kā 17 dienu laikā pēc attiecīgā mēneša beigām',
              correct: false,
              color: null,
            },
            {
              title: 'c) Jāiegrāmato ne vēlāk kā 20 dienu laikā pēc attiecīgā mēneša beigām',
              correct: true,
              color: 'green',
            },
            {
              title: 'd) Jāiegrāmato ne vēlāk kā 23 dienu laikā pēc attiecīgā mēneša beigām',
              correct: false,
              color: null,
            },
          ],
        },
        {
          title: 'Kurš uzņēmumā nodrošina grāmatvedības kontroles  sistēmas izstrādāšanu, ieviešanu, uzturēšanu un uzlabošanu uzņēmumā?',
          answers: [
            {
              title:'Finanšu direktors',
              correct: false,
              color: null,
            },
            {
              title: 'Informāciju un komunikāciju tehnoloģiju nodaļas vadītājs',
              correct: false,
              color: null,
            },
            {
              title: 'Galvenais grāmatvedis',
              correct: false,
              color: null,
            },
            {
              title: 'Uzņēmuma vadītājs',
              correct: true,
              color: 'green',
            },
          ]
        },
        {
          title: 'Kurš  normatīvais akts nosaka grāmatvedības kārtošanas pamatprasības?',
          answers: [
            {
              title:'“Grāmatvedības likums”',
              correct: true,
              color: 'green',
            },
            {
              title: 'Likums "Par nodokļiem un nodevām"',
              correct: false,
              color: null,
            },
            {
              title: '“Gada pārskatu un konsolidēto pārskatu likums”',
              correct: false,
              color: null,
            },
          ]
        },
        {
          title: 'Kurš grāmatvedības princips nosaka, ka ar pārskata gadu saistītos ieņēmumus un uzdevumus norāda neatkarīgi no maksājuma vai rēķina saņemšanas datuma?',
          answers: [
            {
              title:'Kases princips',
              correct: false,
              color: null,
            },
            {
              title: 'Piesardzība sprincips',
              correct: false,
              color: null,
            },
            {
              title: 'Uzkrāšanas princips',
              correct: true,
              color: 'green',
            },
            {
              title: 'Bilances princips',
              correct: false,
              color: null,
            },
          ]
        },
        {
          title: 'SIA Gada pārskats kā vienots kopums sastāv no...' ,
          answers: [
            {
              title:'Bilances, Peļņas vai zaudējuma aprēķina, Naudas plūsmas pārskata, Pašu kapitāla izmaiņu pārskata un Vadības ziņojuma',
              correct: false,
              color: null,
            },
            {
              title: 'Bilances, Peļņas vai zaudējuma aprēķina, Naudas plūsmas pārskata un Vadības ziņojuma',
              correct: false,
              color: null,
            },
            {
              title: 'Bilances, Peļņas vai zaudējuma aprēķina un Vadības ziņojuma',
              correct: false,
              color: null,
            },
            {
              title: 'Finanšu pārskata un Vadības ziņojuma',
              correct: true,
              color: 'green',
            },
          ]
        },
      ],
    }
  },

  methods: {
    submit(){
      this.currentQuestion++
    }
  }
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

.d-flex{
  gap: 20px;
}

.btn-success{
  padding: 5px 25px;
  background-color: #0D6EFD;
}
</style>