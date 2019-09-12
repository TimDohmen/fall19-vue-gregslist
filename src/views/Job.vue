<template>
  <div class="job">
    JobStuff
    <h1>{{job.company}}</h1>
    <h5>{{job.description}}</h5>
    <h5>{{job.jobTitle}}</h5>
    <h5>{{job.hours}}</h5>
    <!-- <button class="btn btn-danger" @click="delort">Delort</button> -->
  </div>
</template>


<script>
export default {
  name: "job",
  data() {
    return {};
  },
  mounted() {
    let payload = {
      jobId: this.$route.params.jobId
    };
    this.$store.dispatch("getJobById", payload);
  },
  computed: {
    job() {
      return this.$store.state.activeJob;
    }
  },
  methods: {
    // delort() {
    //   this.$store.dispatch("delortCar", this.job._id);
    // }
  },
  components: {}
};
</script>


<style scoped>
img {
  height: 500px;
}
</style>