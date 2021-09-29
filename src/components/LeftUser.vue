<template>
  <div class="loggedin_as">
    <div class="loggedin_as__content">
      <div class="connto">Connected to</div>
      <div class="connection">
        <span
          title="Connection Active"
          class="indicator indicator--green"
        ></span
        ><span>dcslab030</span>
      </div>
      <div class="conntime">1 hr 28 min</div>
      <input type="button" value="Log out" class="hollow_button" />
    </div>
  </div>
</template>


<script>
export default {
    name: 'User',
}
</script>