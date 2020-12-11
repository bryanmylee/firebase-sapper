<script lang="ts">
  import { goto } from "@sapper/app";
  import firebase from "firebase/app";

  let email = "";
  let password = "";

  const login = async () => {
    try {
      const credentials = await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log(credentials);
      goto("/dashboard");
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
