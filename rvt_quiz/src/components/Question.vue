<template>
  <div class="container">
    <div v-if="showError" class="alert alert-primary d-flex align-items-center" role="alert" id="alertId" >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
      <div>
        Nav iezimeta atbilde!
      </div>
    </div>

    <div class="question" style="padding-top: 7px;" >
      <div v-if="!score" class="h5" style="padding-left: 5px"><b> {{ questions[currentQuestion].title }} </b></div>
      <div id="options" style="padding: 10px 20px">
        <label v-if="!score" v-for="answer in questions[currentQuestion].answers" :key="answer.index" class="options">{{ answer.title }}
          <input :checked="selectedAnswer && selectedAnswer.title === answer.title" @click="selectedAnswer = answer" type="radio" name="radio">
          <span class="checkmark"></span>
        </label>
        <h1 v-if="score">{{score}}</h1>
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
export default {
  name: 'question',
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
              title: 'Jāiegrāmato ne vēlāk kā 15 dienu laikā pēc attiecīgā mēneša beigām',
              correct: false,
              color: null,
            },
            {
              title: 'Jāiegrāmato ne vēlāk kā 17 dienu laikā pēc attiecīgā mēneša beigām',
              correct: false,
              color: null,
            },
            {
              title: 'Jāiegrāmato ne vēlāk kā 20 dienu laikā pēc attiecīgā mēneša beigām',
              correct: true,
              color: 'green',
            },
            {
              title: 'Jāiegrāmato ne vēlāk kā 23 dienu laikā pēc attiecīgā mēneša beigām',
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
      if(!this.selectedAnswer){
        this.showError = true
        return
      } else if(this.selectedAnswer.correct){
        this.correctAnswers++
        this.selectedAnswer = null
      } else {

      }

      if(this.questions.length <= this.currentQuestion + 1){
        this.score = `Pareizo atbilžu skaits: ${this.correctAnswers} / ${this.questions.length}`
        return;
      }
      this.currentQuestion++
    }
  }
}

</script>

<style scoped>

#alertId{
  display: none;
}

.container{
  box-shadow: 0 0 0 2px rgb(255, 255, 255),
  0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  color: #616161;
  border-radius: 10px;
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
  max-width: 700px;
}
.container > p{
  font-size: 32px;
}
.question{
  width: 90%;
}
.options{
  position: relative;
  padding-left: 40px;
}
#options label{
  display: block;
  margin-bottom: 14px;
  font-size: 16px;
  cursor: pointer;
}
.options input{
  opacity: 0;
}
.checkmark {
  position: absolute;
  top: -1px;
  left: 0;
  height: 25px;
  width: 25px;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.options input:checked ~ .checkmark:after {
  display: block;
}
.options .checkmark:after{
  content: "";
  width: 10px;
  height: 10px;
  display: block;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%,-50%) scale(0);
  transition: 300ms ease-in-out 0s;
}
.options input[type="radio"]:checked ~ .checkmark{
  background: #0D6EFD;
  transition: 300ms ease-in-out 0s;
}
.options input[type="radio"]:checked ~ .checkmark:after{
  transform: translate(-50%,-50%) scale(1);
}

.btn-success{
  padding: 5px 25px;
  background-color: #0D6EFD;
}
@media(max-width:576px){
  .question{
    width: 100%;
    word-spacing: 2px;
  }
}

</style>