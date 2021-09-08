<template>
  <div class="fullWrap">
    <form class="signUp-form" @submit.prevent="handleSubmit">
      <h1>Sign Up</h1>
      <!-- name -->
      <input type="text" class="input" placeholder="Enter Name" id="name" v-model="name" required />
      <!-- email -->
      <input
        type="email"
        class="input"
        placeholder="Enter Email"
        id="email"
        v-model="email"
        required
      />

      <div class="confirmPassword">
        <font-awesome-icon
          v-if="showPassword === 'text'"
          v-on:click="toggleShowPassword"
          class="password-show-icon"
          icon="eye"
        />
        <font-awesome-icon
          v-else
          v-on:click="toggleShowPassword"
          class="password-show-icon"
          icon="eye-slash"
        />
        <!-- password -->
        <input
          :type="showPassword"
          class="input"
          placeholder="Enter Password"
          id="password"
          v-model="password"
          required
        />
      </div>
      <template v-if="password">
        <span
          v-if="!has_minimum_lenth && has_lowercase && has_number && has_uppercase"
          :class="has_minimum_lenth ? 'has_required' : ''"
        >Minimum 8 character's,</span>
        <span
          v-if="!has_lowercase"
          :class="has_lowercase ? 'has_required' : ''"
        >one lowercase letter,</span>
        <span
          v-if="!has_uppercase"
          :class="has_uppercase ? 'has_required' : ''"
        >one uppercase letter,</span>
        <span v-if="!has_number" :class="has_number ? 'has_required' : ''">One number,</span>
        <span v-if="!has_special" :class="has_special ? 'has_required' : ''">one special character.</span>
      </template>
      <div class="confirmPassword">
        <font-awesome-icon
          v-if="password && password === rePassword"
          icon="check"
          class="password-check-icon"
        />
        <font-awesome-icon
          v-else-if="password && rePassword && password !== rePassword"
          icon="times"
          class="password-check-icon"
		  @click="()=> rePassword = '' "
        />
        <!-- password show/hide icons -->
        <font-awesome-icon
          v-if="showConfirmPassword === 'text'"
          v-on:click="toggleShowConfirmPassword"
          class="password-show-icon"
          icon="eye"
        />
        <font-awesome-icon
          v-else
          v-on:click="toggleShowConfirmPassword"
          class="password-show-icon"
          icon="eye-slash"
        />
        <!-- confirm password -->
        <input
          :type="showConfirmPassword"
          class="input"
          placeholder="Confirm Password"
          id="rePassword"
          v-model="rePassword"
          required
        />
      </div>
      <div class="additional-field-container">
        <span
          v-if="!showAdditionalField"
          class="additional-text"
          @click="toggleShowAdditionalField"
        >show additional fields's</span>
        <span
          v-else
          class="additional-text"
          @click="toggleShowAdditionalField"
        >hide additional fields's</span>
      </div>
      <template v-if="showAdditionalField">
        <input placeholder="Company Name" class="input" id="company" v-model="company" :required="showAdditionalField" />
        <input placeholder="Enter Company address" class="input" id="address" v-model="address" :required="showAdditionalField" />
      </template>
      <button
        :class="password && rePassword && password != rePassword || !password || !rePassword ? 'form-button-disabled' : 'form-button'"
        :disabled=" password && rePassword && password != rePassword"
      >Sign Up</button>
    </form>
  </div>
</template>
<script>
export default {

	data() {
		return {
			name: '',
			email: '',
			password: '',
			rePassword: '',
			company: '',
			address: '',
			showPassword: "password",
			showConfirmPassword: "password",
			has_minimum_lenth: false,
			has_number: false,
			has_lowercsae: false,
			has_uppercase: false,
			has_special: false,
			showAdditionalField: false,
		}
	},
	watch: {
		password: function (currentPassword, prevPassword) {
			this.has_minimum_lenth = (currentPassword.length >= 8);
			this.has_number    = /\d/.test(currentPassword);
			this.has_lowercase = /[a-z]/.test(currentPassword);
			this.has_uppercase = /[A-Z]/.test(currentPassword);
			this.has_special   = /[!@#$%^&*)(+=._-]/.test(currentPassword);
		}
	},
	computed: {
		
	},
	methods: {
		toggleShowConfirmPassword(){
			return this.showConfirmPassword = (this.showConfirmPassword === "password" ? "text" : "password");
		},
		toggleShowPassword(){
			return this.showPassword = (this.showPassword === "password" ? "text" : "password");
		},
		toggleAnyProperty(propertyName){
			console.log(propertyName, this.propertyName);
			return this.propertyName = !this.propertyName;
		},
		toggleShowAdditionalField(){
			return this.showAdditionalField = !this.showAdditionalField;
		},
		handleSubmit(event){
			let formData = {
				name: this.name,
				email: this.email,
				password: this.password,
				rePassword: this.rePassword
			}
			if(this.showAdditionalField){
				formData.company = this.company;
				formData.address = this.address;
			}
			event.target.reset();
			console.log('%%%%%', event.target.value)
			console.log('Welcome ',formData );
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
.input {
  width: 100%;
  margin: 10px auto;
  /* padding: 10px 10px; */
  border-radius: 10px;
  border: none;
  background: aliceblue;
  height: 40px;
  text-indent: 15px;
}
.input:focus {
  border-radius: 10px;
  border: none;
  outline: none;
  background: aliceblue;
  color: black;
}
.form-button-disabled {
  border: none;
  border-radius: 10px;
  background: rgb(192, 192, 192);
  padding: 10px 20px;
  color: black;
}
.form-button {
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
  right: 35px;
  cursor: pointer;
}
.password-show-icon {
  position: absolute;
  right: 10px;
  cursor: pointer;
}
.has_required {
  text-decoration: line-through;
  color: #689868;
}
.additional-field-container {
  display: flex;
  text-align: left;
  margin: 10px 4px;
  font-size: 14px;
  height: 20px;
}
.additional-text {
  color: #288b8b;
  cursor: pointer;
}
.additional-text:hover {
  color: #072101;
  opacity: 0.6;
  font-size: 16px;
}
</style>