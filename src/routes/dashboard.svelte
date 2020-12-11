<!-- To prevent flash of content, we check if user exists before rendering the page.
     Therefore, we perform the auth check in preload function. -->
<script context="module" lang="ts">
  import { goto } from "@sapper/app";
  import type Common from "@sapper/common";
  import firebase from "firebase/app";

  let userToken: string | boolean = false;

  export const preload: Common.Preload = async function(this, page, session) {
    userToken = session.userToken;
    if (!userToken) {
      return this.redirect(302, "/login");
    }
  };

  const logout = async () => {
    await firebase.auth().signOut();
    goto("/login");
  }
</script>

<h1>This dashboard is protected!</h1>
<p>Current user token: {userToken}</p>
<button on:click={logout}>Logout</button>
