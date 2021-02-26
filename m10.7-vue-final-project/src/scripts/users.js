import { ref } from 'vue'

export default {
  name: 'Users', 
  setup() {
    const users = ref([])    
    const error = ref(null)

    const getUsers = async () => {
      try {
        let usersData = await fetch('http://jsonplaceholder.typicode.com/users')
        if (!usersData) {
          throw Error('No users data available')
        }
        users.value = await usersData.json()
        users.value = users.value.map(user => user.name.toUpperCase())
      }
      catch (err) {
        error.value = err.message
      }
    }
    getUsers()

    return { users, error }
  }
}