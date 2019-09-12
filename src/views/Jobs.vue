<template>
  <div class="Jobs container-fluid">
    <div class="row">
      <Job v-for="job in jobs" :jobProp="job" :key="job._id" />
    </div>
  </div>
</template>


<script>
import Job from "../components/Job";
export default {
  name: "Jobs",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getJobs");
  },
  computed: {
    jobs() {
      return this.$store.state.jobs;
    }
  },
  methods: {},
  components: {
    Job
  }
};
</script>


<style scoped>
</style>