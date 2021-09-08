<template>
  <div class="fullWrap">
    <form class="signUp-form" @submit.prevent="handleLogin">
      <h1>Log In</h1>
      <input type="email" placeholder="Enter Email" v-model="email" />
      <div class="confirmPassword">
        <font-awesome-icon
          v-if="showPassword === 'text'"
          v-on:click="toggleShowPassword"
          class="password-check-icon"
          icon="eye"
        />
        <font-awesome-icon
          v-else
          v-on:click="toggleShowPassword"
          class="password-check-icon"
          icon="eye-slash"
        />
        <input
          :type="showPassword"
          class="input"
          minlength="8"
          placeholder="Enter Password"
          id="password"
          v-model="password"
          required
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  </div>
</template>
<script>
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons'
export default {
    data() {
        return {
            email: '',
            password: '',
            showPassword: 'password'
        }
    },
    methods: {
        toggleShowPassword(){
			// console.log(this.showPassword, '%%%%%', (this.showPassword === "password" ? "text" : "password"));
			return this.showPassword = (this.showPassword === "password" ? "text" : "password");
		},
        handleLogin(){
            const data = {
                email: this.email,
                password: this.password
            }
            console.log('Login', data)
        }
    },
}
</script>
<style lang="css" scoped>
.fullWrap {
  justify-content: center;
}
form {
  width: 100%;
  margin: 0 auto;
  max-width: 500px;
}
input {
  width: 100%;
  margin: 10px auto;
  padding: 10px 10px;
  border-radius: 10px;
  border: none;
  background: aliceblue;
}
input:focus {
  border-radius: 10px;
  border: none;
  outline: none;
  background: aliceblue;
  color: black;
}
button {
  border: none;
  border-radius: 10px;
  background: darkcyan;
  padding: 10px 20px;
  color: white;
}
.confirmPassword {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-end;
}
.password-check-icon {
  position: absolute;
  right: 10px;
  cursor: pointer;
}
</style>