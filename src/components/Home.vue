<template>
  <div class="home col-3 border rounded" @click="viewHome()">
    <h5>{{homeProp.bedrooms}}</h5>
    <h5>{{homeProp.bathrooms}}</h5>
    <h5>{{homeProp.levels}}</h5>
    <h5>{{homeProp.description}}</h5>
  </div>
</template>


<script>
export default {
  name: "home",
  data() {
    return {};
  },
  props: ["homeProp"],

  computed: {},
  methods: {
    viewHome() {
      this.$router.push({
        name: "home",
        params: { homeId: this.homeProp._id }
      });
      //   this.$router.push("/cars/" + this.homeProp._id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>