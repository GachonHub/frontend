<template>
    <div class="input-group" style="height:35px;">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{sns}}</button>
        <ul class="dropdown-menu">
            <li v-for="item in snsKind" :key="item" ><a @click="changeSns(item)" class="dropdown-item">{{item}}</a></li>
        </ul>
        <input type="text" class="form-control" aria-label="Text input with dropdown button">
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            sns:"GitHub",
            snsKind: ["GitHub", "GitHub_Blog", "Velog", "Brunch", "Facebook", "Instagram", "Twitter"]
        }
    },
    methods: {
        changeSns(word) {
            this.sns = word;
        },
        minusBtn() {
            
        }
    }
}
</script>