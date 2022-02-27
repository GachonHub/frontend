<template>
    <div>
        <div style="text-align:center; width:30px">
            <span>SNS</span>
            <a v-for="item in items" :key="item" :href="item.url" target="_blank">
                <img id="group-img" :src="require(`@/assets/icons/${item.imageUrl}`)" alt="">
            </a>
        </div>
        <div style="text-align:center; width:30px; margin-top:7px;">
            <span>Club</span>
                <a v-for="item in groupList" :key="item">
                    <router-link :to="{path : '/groups/' + item.type.toLowerCase() + '/info/' + item.id}">
                        <img id="group-img" :src="item.mainImage" alt="">
                    </router-link>
                </a>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        snsList : Array,
        groupList : Array
    },
    data() {
        return {
            items : [],
            link : "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
        }
    },
    created() {
        this.items = this.snsList;
        for (var i = 0; i < this.items.length; i++) {
            var category = this.items[i].category.toLowerCase();
            this.items[i].imageUrl = category + "_logo.png";
        }

    }

}
</script>

<style scoped>

span {
    font-size: 14px;
    font-weight: 800;
}

#group-img {
    width: 30px;
    height: 30px;
    border-radius: 70%;
    margin-bottom: 2px;
}

</style>