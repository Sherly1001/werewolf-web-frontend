<template>
  <div class="login-form">
    <form v-on:submit.prevent="signup">
      <label for="username" class="required">User Name</label>
      <input
        type="text"
        name="username"
        id="username"
        v-model="username"
        @change="remove"
        required
      />
      <label for="passwd" class="required">Password</label>
      <input
        type="password"
        name="passwd"
        id="passwd"
        v-model="password"
        @change="remove"
        required
      />
      <div class="alert" v-if="message !== ''">
        {{ message }}
      </div>
      <div class="button-group">
        <button class="signup-btn" type="submit">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
import user from "../services/user.js";
export default {
  data() {
    return {
      username: "",
      password: "",
      message: "",
    };
  },
  methods: {
    signup() {
      user
        .signup(this.username, this.password)
        .then((token) => {
          if (token) {
            this.$cookies.set("token", token, 60 * 60 * 24 * 5);
            this.$router.push({ name: "Chat", params: { name: "rules" } });
            this.message = "";
          }
        })
        .catch((error) => {
          this.message = error;
        });
    },
    remove() {
      this.message = "";
    },
  },
};
</script>

<style scoped>
input {
  background-color: #3a3b3c;
  height: 3.5rem;
  outline: none;
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  color: white;
  border-radius: 6px;
  font-size: 1.5rem;
}
form {
  display: flex;
  flex-direction: column;
  background-color: #242526;
  width: 400px;
  margin: 30px auto;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  min-height: 360px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
button {
  height: 3rem;
  width: 100%;
  cursor: pointer;
  border: none;
  color: white;
  font-size: 1.5rem;
  border-radius: 6px;
}
.alert {
  width: 100%;
  color: #f02849;
  font-size: 20px;
  line-height: 16px;
  margin-top: 1.5rem;
  text-align: left;
  text-transform: capitalize;
}
.button-group {
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
}
.signup-btn {
  background-color: #5865f2;
  border: none;
  color: white;
  font-size: 1.5rem;
}
</style>
