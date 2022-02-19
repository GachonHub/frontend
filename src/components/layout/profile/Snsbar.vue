<template>
    <div>
        <div style="text-align:center; width:30px">
            <span>SNS</span>
            <a v-for="item in snsList" :key="item" :href="item.url" target="_blank">
                <img id="group-img" :src="require(`@/assets/icons/${item.category}`)" alt="">
            </a>
        </div>
        <div style="text-align:center; width:30px; margin-top:7px;">
            <span>Club</span>
            <a v-for="item in clubList" :key="item" :href="item.url">
                <img id="group-img" :src="item.link" alt="">
            </a>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            link : "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
            snsList : [
                {
                    category : "tistory",
                    url : "https://jaeesu.tistory.com/"
                },
                {
                    category : "github",
                    url : "https://github.com/jaeesu"
                },
                // {
                //     category : "github_blog",
                //     url : "https://jaeesu.tistory.com/"
                // },
                {
                    category : "brunch",
                    url : "https://github.com/jaeesu"
                },
                {
                    category : "facebook",
                    url : "https://github.com/jaeesu"
                },
                {
                    category : "instagram",
                    url : "https://github.com/jaeesu"
                },
                {
                    category : "twitter",
                    url : "https://github.com/jaeesu"
                },
                {
                    category : "velog",
                    url : "https://github.com/jaeesu"
                },
            ],
            clubList : [
                {
                    link : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKCHXslBqFEz3VVSSgcZUTlTUtlxvuNcVFQ&usqp=CAU",
                    url : "https://jaeesu.tistory.com/"
                },
                {
                    link : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKCHXslBqFEz3VVSSgcZUTlTUtlxvuNcVFQ&usqp=CAU",
                    url : "https://github.com/jaeesu"
                },
            ],

        }
    },
    created() {
        for (var i = 0; i < this.snsList.length; i++) {
            var category = this.snsList[i].category;
            this.snsList[i].category = category + "_logo.png";

        }
        for (i = 0; i < this.clubList.length; i++) {
            category = this.clubList[i].category;
            if (category == "tistory") {
                this.clubList[i].category = this.link;
            }
            else if (category == "github") {
                this.clubList[i].category = this.link;
            }
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