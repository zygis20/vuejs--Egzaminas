<template>
  <div class="particular">
    <h1>Particulargiveaway</h1>
    <Showgiveaway v-for="(item, index) in giveaways" :key="index" :giveaway="item"/>
  </div>
</template>
<script>
import Showgiveaway from "@/components/Showgiveaway";

export default {
  name: "particulargiveaway",
  components: {
    Showgiveaway
  }, data: () => {
    return {
      giveaways: []
    }
  },
  created() {
    const id = this.$route.params.id
    const allGiveaways = this.$store.state.data.giveaways
    this.giveaways = allGiveaways.filter(x => String(x.id) === id)
  }
}
</script>
<style scoped>
div {
  width: 950px;
}
.particular {
  margin: 0 auto;
  color: black;
}
</style>