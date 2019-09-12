<template>
  <div class="job col-3 border rounded" @click="viewJob()">
    <h5>{{jobProp.company}}</h5>
    <h5>{{jobProp.jobTitle}}</h5>
    <h5>{{jobProp.hours}}</h5>
    <h5>{{jobProp.description}}</h5>
  </div>
</template>


<script>
export default {
  name: "job",
  props: ["jobProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    viewJob() {
      this.$router.push({ name: "job", params: { jobId: this.jobProp._id } });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>