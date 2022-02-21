<template>
    <div>
        <span id="category_span">
          <select class="form-select" id="main" @change="mainCategory">
            <option :value="index" v-for="(item, index) in items" :key="item" :selected="index == 0">
              {{item.val}}
            </option>
          </select>
        </span>
        <span id="category_span">
            <select class="form-select" id="sub" @change="subCategory">
                <option :value="item.num" v-for="item in items[mainNum].sub" v-bind:key="item" :selected="index == 0">
                    {{ item.val }}
                </option>
            </select>
        </span>
    </div>
</template>

<script>
export default {
  name: "secondary-category",
  components: {
  },
  data() {
    return {
      mainNum: 0,
      main : 0,
      sub : 0
    };
  },
  props : {
    items: Array,
    index : Number
  },
  methods : {
    mainCategory () {
      this.mainNum = document.getElementById("main").value;
      this.main = this.items[this.mainNum].num;
      console.log(this.mainNum);
      console.log(this.main);
    },
    subCategory () {
      this.sub = document.getElementById("sub").value;
      this.$emit('save', this.main, this.sub);
      console.log(this.sub);
    }
  }
}
</script>

<style scoped>

#category_span {
  margin-right: 5px;
}

.search {
  float: right;
}

.form-select {
  display: inline-block;
  font-size: 14px;
  width: 0px;
  font-size: 13px;
  width: 100px;
  height: 35px;
  text-align: center;
}

option {
  font-size: 14px;
}

</style>
