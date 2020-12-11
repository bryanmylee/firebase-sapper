<!-- To prevent flash of content, we check if user exists before rendering the page.
     Therefore, we perform the auth check in preload function. -->
<script context="module" lang="ts">
  import type Common from "@sapper/common";

  export const preload: Common.Preload = async function(this, page, session) {
    const { user } = session;
    if (!user) {
      return this.redirect(302, '/login');
    }
  };
</script>
