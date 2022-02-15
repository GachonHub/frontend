<template>
    <div>
        <!-- <span>카테고리</span> -->
        <span id="category_span">
            <select class="form-select" id="main" @change="mainCategory()">
                <option :value="index" v-for="(item, index) in items" v-bind:key="item">
                    {{ item.val }}
                </option>
            </select>
        </span>
        <span id="category_span">
            <select class="form-select" id="sub" @change="subCategory()">
                <option :value="item" v-for="item in items2[item1Val]" v-bind:key="item">
                    {{ item }}
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
      currentPage: (!isNaN(this.$route.query.page)) ? this.$route.query.page : 1,
      modal: false,
      item1Val: 0,
      apiRes : []
    };
  },
  props : {
    items: Array,
    items2: Array
  },
  methods : {
    mainCategory () {
      var s = document.getElementById("main");
      this.item1Val = s.options[s.selectedIndex].value;
      this.$parent.mainF(this.items[this.item1Val].val);

      this.$parent.subF(this.items2[this.item1Val][(this.items2[this.item1Val]).length - 1]);
    },
    subCategory () {
      var s = document.getElementById("sub");
      this.$parent.subF(s.options[s.selectedIndex].value);
    }
  },
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
