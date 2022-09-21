<template>
  <div>
    <h1>Create an event</h1>
    <form>
      <label>Category</label>
      <input
        v-model="event.category"
        type="text"
        placeholder="Category"
        class="field"
      />
      <h3>Name & describe your event</h3>

      <label>Title</label>
      <input
        v-model="event.title"
        type="text"
        placeholder="Title"
        class="field"
      />
      <br />
      <label>Description</label>
      <input
        v-model="event.description"
        type="text"
        placeholder="Description"
        class="field"
      />
      <h3>Where is your event?</h3>
      <label>Location</label>
      <input
        v-model="event.location"
        type="text"
        placeholder="Location"
        class="field"
      />
      <button type="subnit">Submit</button>
    </form>
    <pre>{{ event }} </pre>
  </div>
</template>
<script>
export default {
  data() {
    return {
      event: {
        category: '',
        title: '',
        description: '',
        location: ''
      }
    }
  }
}
</script>
<style scoped>
h3 {
  font-weight: bold;
}
input {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
}
label {
  font-size: 20px;
  margin-bottom: 5px;
  text-align: left;
  font-weight: bold;
}
form {
  display: flex;
  flex-direction: column;
  width: 420px;
  padding: 20px;
  margin: auto;
  margin-top: 40px;
  border: 2px solid #d8d8d8;
  border-radius: 10px;
  background: #7faf58;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}
button {
  display: block;
  margin: auto;
  margin-top: 25px;
  background: #ffffff;
  border: 2px solid #d8d8d8;
  border-radius: 5px;
  width: 40%;
}
@media only screen and (max-width: 600px) {
  .comment-form {
    width: 90%;
  }
}
</style>
