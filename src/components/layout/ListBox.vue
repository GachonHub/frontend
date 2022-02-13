<template>
  <div class="ranking">
    <div class="table">
      <table>
        <th v-for="item in fields" v-bind:key="item" :class="item.thClass" class="text-vertical-center">{{item.label}}</th>
        <tr v-for="item in items" v-bind:key="item">
          <td class="text-center">{{item.id}}</td>
          <td>{{item.title}}</td>
          <td class="text-center">{{item.user}}</td>
          <td class="text-center">{{item.category}}</td>
          <td class="text-center">{{item.hit}}</td>
          <td class="text-center">{{item.likes}}</td>
        </tr>

      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "table-rank",
  props: {
    msg: String,
    items: Array
  },
  data() {
    return {
      fields: [
        { key: "id", label: "#", thClass: "w10" },
        { key: "title", label: "제목", thClass: "w50" },
        { key: "user", label: "작성자", thClass: "w10" },
        { key: "category", label: "분야", thClass: "w10" },
        { key: "hit", label: "조회수", thClass: "w10" },
        { key: "likes", label: "좋아요", thClass: "w10" },
      ]
    };
  },
};
</script>

<style scope>
table {
  border-collapse: collapse;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  margin: auto;
  width: 100%;
}

table th {
  height: 45px;
  border-bottom: 1.5px solid black;
}

table td {
  height: 45px;
  font-size: 13px;
  vertical-align: middle;
  border-bottom: 1px solid black;
}

.w10 {
  width: 10%;
}
.w50 {
  width: 50%;
}

.text-center {
  text-align: center;
}

.text-vertical-center {
  line-height: 45px;
}

</style>
