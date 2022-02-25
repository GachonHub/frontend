<template>
    <div class="input-group" style="height:35px;">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{category}}</button>
        <ul class="dropdown-menu">
            <li v-for="item in snsKind" :key="item" ><a @click="category = item" class="dropdown-item">{{item}}</a></li>
        </ul>
        <input type="text" class="form-control" aria-label="Text input with dropdown button" @input="$emit('save', countVal - 1, category, $event.target.value)">
    </div>
</template>

<script>
export default {
    props : {
        countVal : Number
    },
    data() {
        return {
            category:"GitHub",
            snsKind: ["GitHub", "GitHub_Blog", "Velog", "Tistory","Brunch", "Facebook", "Instagram", "Twitter"]
        }
    }
}

</script>