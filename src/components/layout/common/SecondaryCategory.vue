<template>
    <div t>
        <button class="btn btn-outline-secondary dropdown-toggle select-option" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{main}}</button>
        <ul class="dropdown-menu">
            <li v-for="(item, index) in items" :key="item" ><a @click="main=item.val; mainNum=index" class="dropdown-item">{{item.val}}</a></li>
        </ul>

        <button class="btn btn-outline-secondary dropdown-toggle select-option" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{sub}}</button>
        <ul class="dropdown-menu">
            <li v-for="item in items[mainNum].sub" :key="item" ><a @click="sub = item.val; $emit('save', mainNum, item.num)" class="dropdown-item">{{item.val}}</a></li>
        </ul>
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
      main : "선택",
      sub : "선택",
    };
  },
  props : {
    items: Array,
    index : Number
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


.select-option {
  display: inline-block;
  font-size: 14px;
  width: 0px;
  font-size: 13px;
  width: 100px;
  height: 35px;
  text-align: center;
  margin-left: 5px;
}

option {
  font-size: 14px;
}

ul {
  cursor: pointer;
}

</style>
