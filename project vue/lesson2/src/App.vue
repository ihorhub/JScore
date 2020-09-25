<template>
  <div>
    <h1>
      HTTP Lesson
    </h1>
    <div>
      <label>Username</label>
      <input type="text" v-model="user.userName">
    </div>
    <div>
      <label>UserAge</label>
      <input type="number" v-model="user.userAge">
    </div>
    <div>
      <label>UserCar</label>
      <input type="text" v-model="user.userCar">
    </div>
    <div>
      <label> Email</label>
      <input type="email" v-model="user.email">
    </div>
    <button @click="submitData">Submit</button>
    <button @click="getUsers">GetUsers</button>

    <hr>
    <ul>
      <li v-for="(item , id) in users" :key="id">
        {{item}}
        <button @click="deleteItem(item.id)">remove</button>
      </li>
    </ul>
  </div>
</template>

<script>


  export default {
    name: 'App',
    beforeMount() {
      this.$http.get('https://http-lesson-vue-da16f.firebaseio.com/http-lesson.json')
    },
    data() {
      return {
        user: {
          id: '',
          userName: '',
          userAge: '',
          userCar: '',
          email: '',

        },
        users: []
      }
    },
    methods: {
      submitData() {
        this.$http.post('https://http-lesson-vue-da16f.firebaseio.com/http-lesson.json', this.user)
                .then((res) => {
                  console.log(res)
                })

      },
      getUsers() {
        this.$http.get('https://http-lesson-vue-da16f.firebaseio.com/http-lesson.json')
                .then((res) => {
                  return res.json()
                })
                .then((res) => {

                  for (const item in res) {
                    this.users.push({...res[item], id: item})
                  }
                })
      }
    },

   async  deleteItem(id) {
      try {
        await this.$http.delete(`https://http-lesson-vue-da16f.firebaseio.com/http-lesson/${id}.json`)
                .then((res) => {
                  console.log(res, 'DELETE')
                  this.users.splice(id,1)
                })

      } catch(err)
     {
       console.log(err)
     } finally {
        this.users=[];
        this.get()
      }
    }

  }
</script>

<style>


</style>
