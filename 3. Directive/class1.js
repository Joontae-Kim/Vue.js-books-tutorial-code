var directiveVue = new Vue({
  el: '#app',
  data: {
    message: 'Our king is dead!',
  }
})

var directiveVue2 = new Vue({
  el: '#app2',
  data: {
    message: 'Our king is dead!',
  },
})

var directiveVue3 = new Vue({
  el: '#app3',
  data: {
    message: 'Our king is dead!',
  },
  methods: {
    alert: function () {
        alert(this.message)
    },
  },
})
