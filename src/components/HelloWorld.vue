<template>
  <div class="page-content">
    <div class="cards-holder">
      <div class="card">
        <img src="@/assets/gamerCat.jpeg" alt="Avatar" style="width:100%" />
        <div class="container">
          <h4><b>Kuznetsova Valentina</b></h4>
          <p>BSBO-08-19</p>
          <p>Skills</p>
        </div>
      </div>
      <div class="card">
        <form @submit.prevent="onFormSubmit" id="form-field" class="form-field">
          <label for="fname">First Name</label>
          <input
            v-model="myForm.firstName"
            type="text"
            id="fname"
            placeholder="Your name.."
            required
          />
          <label for="lname">Last Name</label>
          <input
            v-model="myForm.lastName"
            type="text"
            id="lname"
            placeholder="Your last name.."
            required
          />
          <label for="email">Email address</label>
          <input
            v-model="myForm.email"
            type="email"
            id="email"
            placeholder="Your email address.."
            required
          />
          <label for="description">Description</label>
          <textarea
            v-model="myForm.description"
            id="description"
            placeholder="Write something.."
            style="height:80px"
          ></textarea>
          <button id="button" type="submit" >Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => ({
    // все переменные, которые будем использовать
    myForm: {
      firstName: "",
      lastName: "",
      email: "",
      description: "",
    },
  }),
  methods: {
    onFormSubmit() {},
  },
  created() {
    //данные
  },
  mounted() {
    // HTML
    // // const submit = document.querySelector('#submit');
    // const form = document.querySelector('#form');
    // // submit.addEventListener('click', ($event) => {
    // //   console.warn($event);
    // // });
    // form.addEventListener('click', ($event) => {
    //   $event.preventDefault();  // убирает перезагрузку страницы
    //   console.warn($event);
    // });
  },
  beforeDestroy() {
    //удалять слушателей
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-content {
  display: flex;
  justify-content: center;
}
.cards-holder {
  margin: 50px;
  display: flex;
}

.card {
  width: 320px;
  margin-top: 30px;
  margin-right: 20px;
  text-align: center;
  background-color: #f7f7f7;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card .container {
  padding: 2px 16px;
}

.card img {
  border-radius: 5px 5px 0 0;
}

.card input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
.card input:focus,
textarea:focus {
  outline: none;
  border: 1px solid rgb(235, 197, 230);
}

.card button {
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin-bottom: 5px;
}
.card button {
  background-image: linear-gradient(
    to right,
    #fbc2eb 0%,
    #a6c1ee 51%,
    #fbc2eb 100%
  );
}

.card button:hover {
  background-position: right center;
  transform: scale(1.1);
}
@media screen and (max-width: 360px) {
  .cards-holder {
    flex-direction: column;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
