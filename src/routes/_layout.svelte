<script lang="ts">
  import { onMount } from "svelte";
  import { stores } from "@sapper/app";
  import firebase from "firebase/app";
  import Nav from '../components/Nav.svelte';

  export let segment: string;

  const { session } = stores();

  onMount(async () => {
    firebase.auth().onIdTokenChanged(async (user) => {
      try {
        if (!user) {
          console.log("User does not exist");
          $session.userToken = false;
          return;
        }
        $session.userToken = await user.getIdToken();
        console.log("User found and token set");
      } catch (error) {
        console.log("Something went wrong");
        $session.user = false;
        return;
      }
    });
  });
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment}/>

<main>
  <slot></slot>
</main>