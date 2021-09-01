<template>
  <div class="wrapper">
    <h1> All Giveaways</h1>
    <div class="home">
      <SingleGiveaway v-for="(item, index) in giveaways" :key="index" :giveaway="item"/>
    </div>
  </div>
</template>
<script>
import SingleGiveaway from "@/components/SingleGiveaway";

export default {
  name: 'Home',
  components: {
    SingleGiveaway,
  }, computed: {
    giveaways() {
      return this.$store.state.data.giveaways
    }
  }
}
</script>
<style scoped>
.home {
  width: 950px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
