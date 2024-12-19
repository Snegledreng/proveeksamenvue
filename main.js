const baseUri = "http://localhost:5090/api/";

const app = Vue.createApp({
  data() {
    return {
      intro: "Hello World",
      items: [],
      tempprop1: "",
      tempprop2: "",
      tempprop3: "",
    };
  },
  methods: {
    addTempItem(){
        this.items.push({"prop1":this.tempprop1,"prop2":this.tempprop2,"prop3":this.tempprop3})
    },
    getAll() {
      axios
        .get(baseUri + "items")
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    postItem(){
        axios.post(baseUri+"items",
            {"prop1":this.tempprop1,"prop2":this.tempprop2,"prop3":this.tempprop3}
        )
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

    },
  },
  computed: {
    myComputed() {
      return "";
    },
  },
});
app.mount('#app');
