<template>
  <div class="card">
    <div class="card1">
      <img src="/assets/gamerCat.png" alt="Avatar" style="width:100%" />
      <div class="container">
        <h4><b>Kuznetsova Valentina</b></h4>
        <p>BSBO-08-19</p>
        <p>Skills</p>
      </div>
    </div>
    <div class="card2">
      <form>
        <label for="fname">First Name</label>
        <input type="text" id="fname" placeholder="Your name.." />

        <label for="lname">Last Name</label>
        <input type="text" id="lname" placeholder="Your last name.." />
        <label for="email">Email address</label>
        <input type="text" id="email" placeholder="Your email address.." />
        <label for="subject">Subject</label>
        <textarea
          id="subject"
          placeholder="Write something.."
          style="height:80px"
        ></textarea>
      </form>
      <input type="submit" value="Submit" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card1 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
}

.card1:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card1 .container {
  padding: 2px 16px;
}

.card1 img {
  border-radius: 5px 5px 0 0;
}

.card1 {
  float: left;
  margin-top: 60px;
  width: 320px;
  margin-right: 10px;
  text-align: center;
  background-color: #f7f7f7;
}

.card2 {
  float: left;
  margin-top: 60px;
  width: 320px;
  margin-right: 10px;
  text-align: center;
  background-color: #f7f7f7; 
}

.card2 input[type="text"],
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

.card2 input[type="submit"] {
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
.card2 input[type="submit"] {
  background-image: linear-gradient(
    to right,
    #fbc2eb 0%,
    #a6c1ee 51%,
    #fbc2eb 100%
  );
}

.card2 input[type="submit"]:hover {
  background-position: right center;
  transform: scale(1.1);   
}

.card2 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
}

.card2:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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
