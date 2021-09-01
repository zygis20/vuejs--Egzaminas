<template>
  <div>
    <h2>Sort Giveaways by:</h2>
    <label for="Types">Types:</label>
    <select name="Types" id="Types">
      <option value="game">Game</option>
      <option value="loot">loot</option>
      <option value="beta">beta</option>
    </select>
    <label for="SortBy">SortBy:</label>
    <select name="SortBy" id="SortBy">
      <option value="date">date</option>
      <option value="value">value</option>
      <option value="popularity">popularity</option>
    </select>
    <label for="Platforms">Platforms:</label>
    <select name="Platforms" id="Platforms">
      <option value="pc">pc</option>
      <option value="steam ">steam</option>
      <option value="epic-games-store">epic-games-store</option>
      <option value="ubisoft ">ubisoft</option>
      <option value="gog ">gog</option>
      <option value="itchio ">itchio</option>
      <option value="ps4 ">ps4</option>
      <option value="xbox-one">xbox-one</option>
      <option value="switch ">switch</option>
      <option value="android">android</option>
      <option value="ios ">ios</option>
      <option value="vr ">vr</option>
      <option value="battlenet ">battlenet</option>
      <option value="origin ">origin</option>
      <option value="drm-free ">drm-free</option>
    </select>
    <button @click="sort">Sort</button>
  </div>
</template>
<script>
export default {
  name: "SortBy",
  data: () => {
    return {
      searchByType: true,
      text: ''
    }
  }
}
</script>
<style scoped>
div {
  text-align: center;
}
.sort {
  padding: 15px;
  border: solid 2px red;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 200px;
  cursor: pointer;
}
</style>