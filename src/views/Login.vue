<template>
  <div class="fullWrap">
    <form class="signUp-form" @submit.prevent="onSubmit">
      <h1>Log In</h1>
	  <div class="input-container">
      	<input type="username" placeholder="Enter username" v-model="username.value"  :ref="username.ref" />
	  </div>
	  <p class="form-error" v-if="username.error">{{ username.error.message }}</p>
	  <div class="input-container confirmPassword">
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
          placeholder="Enter Password"
          id="password"
          v-model="password.value"
		  :ref="password.ref"
        />
      </div>
      <p class="form-error" v-if="password.error">{{ password.error.message }}</p>
      <button type="submit">Log In</button>
    </form>
  </div>
</template>
<script>
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'vue-hooks-form'

export default {


 setup() {
		const { useField, handleSubmit } = useForm({
			defaultValues: {
				username: '',
				password: ''
			}
		})
		const username = useField('username', {
			rule: { required: true },
		})
		const password = useField('password', {
			rule: {
				required: true,
				min: 6,
				max: 10,
			},
		})
		const onSubmit = (data) => console.log(data, username, password)
		return {
			username,
			password,
			onSubmit: handleSubmit(onSubmit),
		}
	},

		data() {
				return {
						showPassword: 'password'
				}
		},
		methods: {
				toggleShowPassword(){
					return this.showPassword = (this.showPassword === "password" ? "text" : "password");
		},
				handleLogin(){
						const data = {
								username: this.username,
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
.form-error {
	color: #cc2626;
    margin-top: unset;
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
.input-container{
	display: flex;
	width: 100%;
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