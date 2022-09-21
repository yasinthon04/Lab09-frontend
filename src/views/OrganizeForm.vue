<template>
  <div>
    <h1>Create an organizer</h1>
    <form @submit.prevent="saveOrganizer">
      <label>Name of organizer</label>
      <input
        v-model="organizer.organizerName"
        type="text"
        placeholder="Name"
        class="field"
      />

      <label>Address</label>
      <input
        v-model="organizer.address"
        type="textarea"
        placeholder="Address"
        class="field"
      />
      <button type="subnit">Submit</button>
    </form>
    <pre>{{ organizer }} </pre>
  </div>
</template>

<script>
import OrganizeService from '@/services/OrganizerService.js'
export default {
  inject: ['GStore'],
  data() {
    return {
      organizer: {
        organizerName: '',
        address: ''
      }
    }
  },
  methods: {
    saveOrganizer() {
      OrganizeService.saveOrganizer(this.organizer)
        .then((response) => {
          console.log(response)
          this.$router.push({
            name: 'OrgainzerList'
          })
          this.GStore.flashMessage =
            'You are successfully add a new event for' +
            ' ' +
            response.data.organizerName
          setTimeout(() => {
            this.GStore.flashMessage = ''
          }, 3000)
        })
        .catch(() => {
          this.$router.push({ name: 'NetworkError' })
        })
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
