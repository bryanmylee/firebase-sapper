<script lang="ts">
  import { goto } from "@sapper/app";
  import firebase from "firebase/app";

  let email = "";
  let password = "";

  const login = async () => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
        console.log(res);
        goto('/dashboard');
      })
    } catch (error) {
      let message = error.message ?? error;
      console.log(`Something went wrong: ${message}`);
    }
  };
</script>

<h1>Login form</h1>

<input type="email" bind:value={email} placeholder="your email"/>
<input type="password" bind:value={password} placeholder="your password"/>

<button on:click={login}>Login</button>
