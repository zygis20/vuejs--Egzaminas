<template>
  <div class="showgiveaway">
    <div class="imgDiv">
      <img :src="giveaway.image">
      <div class="date">
        <p><span>Status</span>: {{ giveaway.status }}</p>
        <p><span>Valid</span>: {{ giveaway.published_date }} - {{ giveaway.end_date }} </p>
        <p><span>Users</span>: {{ giveaway.users }}</p>
        <p><span>Instructions</span>: {{ giveaway.instructions }}</p>
      </div>
    </div>
    <div class="left">
      <div class="mainInfo">
        <h2>{{ giveaway.title }}</h2>
        <h4><span>Price</span>: {{ giveaway.worth }}</h4>
        <div class="info">
          <p><span>Type</span>: {{ giveaway.type }}</p>
          <p><span>Platforms</span>: {{ giveaway.platforms }}</p>
          <p><span>Description</span>: {{ giveaway.description }}</p>
        </div>
      </div>
      <div class="buttons">
        <button><a :href="giveaway.open_giveaway">Open Giveaway on Origin Shop</a></button>
        <button><a :href="giveaway.gamerpower_url">Open Giveaway on Gamerpower Shop</a></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Showgiveaway",
  props: ['giveaway'],
}
</script>
<style scoped>
.showgiveaway {
  width: 250px;
  margin: 10px;
  background-color: #efefef;
}
a {
  text-decoration: none;
  color: black;
}
.showgiveaway {
  width: 940px;
  display: flex;
  margin: 0 auto;
}
.imgDiv {
  width: 50%;
}
img {
  border-radius: 8px;
}
.left {
  width: 50%;
}
p {
  margin: 0 auto;
}
span {
  font-weight: bold;
}
.info, p {
  margin: 10px
}
button {
  border: none;
  padding: 10px;
  margin-top: 40px;
  margin-left: 2px;
  background-color: #999504;
  border-radius: 8px;
}
.date {
  text-align: left;
}
.info {
  text-align: left;
}
</style>

