<!-- To prevent flash of content, we check if user exists before rendering the page.
     Therefore, we perform the auth check in preload function. -->
<script context="module" lang="ts">
  import { goto } from "@sapper/app";
  import type Common from "@sapper/common";
  import firebase from "firebase/app";

  export const preload: Common.Preload = async function(this, page, session) {
    if (!session.userToken) {
      return this.redirect(302, "/login");
    }
  };

  const logout = async () => {
    await firebase.auth().signOut();
    goto("/login");
  };
</script>

<h1>This dashboard is protected!</h1>
<button on:click={logout}>Logout</button>
