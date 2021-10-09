<template>
<div class="card">
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <div class="form-field">
        <label for="name">* Name</label>
        <input type="text" id="name" required />
      </div>
      <input type="submit" value="Submit" />
    </form>
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
.form-field input{
  outline: none;
  padding: 12px 16px;
  border: 2px solid black;
  border-radius: 8px;
}
.form-field input:hover{
  border-color: #42b983;
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
a {
  color: #42b983;
}
</style>
