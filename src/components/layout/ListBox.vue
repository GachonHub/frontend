<template>
  <div class="ranking">
    <div class="table">
      <table>
        <th v-for="item in fields" v-bind:key="item" :class="item.thClass" class="text-vertical-center">{{item.label}}</th>
        <tr v-for="item in items" v-bind:key="item">
          <td class="text-center">{{item.seq}}</td>
          <td>{{item.title}}</td>
          <td class="text-center">{{item.user}}</td>
          <td class="text-center">{{item.category}}</td>
          <td class="text-center">{{item.hit}}</td>
          <td class="text-center">{{item.good}}</td>
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
  },
  data() {
    return {
      fields: [
        { key: "seq", label: "#", thClass: "w10" },
        { key: "title", label: "제목", thClass: "w50" },
        { key: "user", label: "작성자", thClass: "w10" },
        { key: "category", label: "분야", thClass: "w10" },
        { key: "hit", label: "조회수", thClass: "w10" },
        { key: "good", label: "좋아요", thClass: "w10" },
      ],
      items: [
        {
          seq: 1,
          title: "질문 있습니다.",
          user: "tearofglass",
          category: "정보보안",
          hit: "10",
          good: "8",
        },
        {
          seq: 2,
          title: "질문 있습니다.",
          user: "tearofglass",
          category: "정보보안",
          hit: "10",
          good: "8",
        },
        {
          seq: 3,
          title: "질문 있습니다.",
          user: "tearofglass",
          category: "정보보안",
          hit: "10",
          good: "8",
        },
        {
          seq: 4,
          title: "질문 있습니다.",
          user: "tearofglass",
          category: "정보보안",
          hit: "10",
          good: "8",
        },
        {
          seq: 5,
          title: "질문 있습니다.",
          user: "tearofglass",
          category: "정보보안",
          hit: "10",
          good: "8",
        },
        {
          seq: 6,
          title: "질문 있습니다.",
          user: "tearofglass",
          category: "정보보안",
          hit: "10",
          good: "8",
        },
        {
          seq: 7,
          title: "질문 있습니다.",
          user: "tearofglass",
          category: "정보보안",
          hit: "10",
          good: "8",
        },
        {
          seq: 8,
          title: "질문 있습니다.",
          user: "tearofglass",
          category: "정보보안",
          hit: "10",
          good: "8",
        },
        {
          seq: 9,
          title: "질문 있습니다.",
          user: "tearofglass",
          category: "정보보안",
          hit: "10",
          good: "8",
        },
        {
          seq: 10,
          title: "질문 있습니다.",
          user: "tearofglass",
          category: "정보보안",
          hit: "10",
          good: "8",
        },
        {
          seq: 11,
          title: "질문 있습니다.",
          user: "tearofglass",
          category: "정보보안",
          hit: "10",
          good: "8",
        },
      ],
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
