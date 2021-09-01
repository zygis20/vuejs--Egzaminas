<template>
  <div class="wrapper">
    <div class="giveaway">
      <h4>{{ giveaway.title }}</h4>
      <div class="green" v-if="this.price < 10">
        <p>{{ giveaway.worth }}</p>
      </div>
      <div class="yellow" v-else>
        <p>{{ giveaway.worth }}</p>
      </div>
      <button @click="viewGiveaway">view more</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "SingleGiveaway",
  props: ['giveaway'],
  data: () => {
    return {
      price: 0
    }
  },
  methods: {
    viewGiveaway() {
      return this.$router.push('/particulargiveaway/' + this.giveaway.id)
    },
  },
  created() {
    const worth = this.giveaway.worth;
    if (worth !== "N/A") {
      this.price = Number(worth.substring(1));
    }
  }
}
</script>
<style scoped>
.wrapper {
  width: 25%;
  display: flex;
}

.giveaway {
  width: 250px;
  margin: 10px;
  background-color: #808080;
  border-radius: 8px;
  justify-content: center;
}

.yellow {
  background-color: yellow;
  width: 50px;
  margin: 0 auto;
  border-radius: 8px;
  padding: 5px;
}

.green {
  background-color: green;
  width: 50px;
  margin: 0 auto;
  border-radius: 8px;
  padding: 5px;
}

p {
  font-weight: bold;
  margin: 0 auto;
}

h4 {
  height: 50px;
}

button {
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 8px;
  border: none;
  background-color: #9e069b;
  cursor: pointer;
}
</style>

