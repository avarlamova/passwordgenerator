new Vue({
  el: "#app",
  data() {
    return {
      password: "",
      length: 18,
      options: {
        lowercase: {
          name: "Include lowercase",
          checked: false,
        },
        uppercase: {
          name: "Include uppercase",
          checked: false,
        },
        digits: {
          name: "Include digits",
          checked: true,
        },
        special: {
          name: "Include special symbols",
          checked: false,
        },
      },
    };
  },
  computed: {
    generatedPassword() {
      let letters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      let specialsymbols = ["!", "$", "%", "&", "?", "+", "*", "#", "-"];

      let passwordArr = [];

      if (this.checkedOptions === 0)
        return "You should check at least one option!";

      for (i = 0; i < this.length; i++) {
        let random = Math.floor(Math.random() * this.length);
        if (this.options["lowercase"].checked === true)
          passwordArr.push(letters[random]);
        if (this.options["uppercase"].checked === true)
          passwordArr.push(letters[random].toUpperCase());
        if (this.options["digits"].checked === true)
          passwordArr.push(Math.round(Math.random() * 9));
        if (this.options["special"].checked === true)
          passwordArr.push(specialsymbols[random]);
      }
      return passwordArr
        .sort(() => Math.random() - 0.5)
        .join("")
        .slice(0, this.length);
    },
    checkedOptions() {
      return Object.values(this.options).filter((el) => el.checked === true)
        .length;
    },
  },
  methods: {
    async copy() {
      if (this.checkedOptions > 0) {
        await navigator.clipboard.writeText(this.generatedPassword);
        alert("Copied successfully!");
      }
    },
  },
});
