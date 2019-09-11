<template>
  <div class="house">
    House Stuff
    <h1>{{house.make}}</h1>
    <h5>{{house.model}}</h5>
    <h5>{{house.year}}</h5>
    <h5>{{house.price}}</h5>
    <img :src="house.imgUrl" alt />
    <h5>{{house.description}}</h5>
    <button class="btn btn-danger" @click="removeHouse">Delete</button>
  </div>
</template>


<script>
export default {
  name: "house",
  data() {
    return {};
  },
  mounted() {
    let payload = {
      homeId: this.$route.params.homeId
    };
    this.$store.dispatch("getHouseById", payload);
  },
  computed: {
    house() {
      return this.$store.state.activeHome;
    }
  },
  methods: {
    removeHouse() {
      this.$store.dispatch("removeHouse", this.house._id);
    }
  },
  components: {}
};
</script>


<style scoped>
img {
  height: 500px;
}
</style>