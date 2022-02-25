<template>
    <div class="input-group" style="height:35px;">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{category}}</button>
        <ul class="dropdown-menu" v-if="auto == 'false'">
            <li v-for="item in snsKind" :key="item" ><a @click="category = item" class="dropdown-item">{{item}}</a></li>
        </ul>
        <input type="text" id="urlInput" class="form-control" @input="$emit('save', countVal - 1, category, $event.target.value)" :value="url">
    </div>
</template>

<script>
export default {
    props : {
        countVal : Number,
        data: Object
    },
    data() {
        return {
            auto: false,
            category:"GitHub",
            url:"",
            snsKind: ["GitHub", "GitHub_Blog", "Velog", "Tistory","Brunch", "Facebook", "Instagram", "Twitter"]
        }
    },
    created() {
        if (this.data != undefined) {
            for (var i = 0; i < this.snsKind.length; i++) {
                if(this.snsKind[i].toUpperCase() == this.data.category) this.category = this.snsKind[i];
            }
            this.url = this.data.url;
            if (this.data.auto) {
                document.getElementById("urlInput").readOnly = true;
                this.auto = true;
            }
        }
    }
}

</script>