var inter2 = new Vue({
  el: '.container',
  data: {
    upvotes: 0,
  },
  methods: {
    upvoting: function () {
      this.upvotes++
    }
  }
})
