<template>
  <div class="Homes container-fluid">
    <div class="row">
      <home v-for="home in homes" :homeProp="home" :key="home._id" />
    </div>
  </div>
</template>


<script>
import Home from "../components/Home";
export default {
  name: "Homes",
  data() {
    return {};
  },
  computed: {
    homes() {
      return this.$store.state.houses;
    }
  },
  mounted() {
    this.getHomes();
  },
  methods: {
    getHomes() {
      this.$store.dispatch("getHomes");
    }
  },
  components: {
    Home
  }
};
</script>


<style scoped>
</style>