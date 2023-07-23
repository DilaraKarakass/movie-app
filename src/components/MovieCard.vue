<template>
    <RouterLink class="card" :to="path">
        <img :src="poster" alt="movie">
        <span class="name" v-html="title"></span>
    </RouterLink>
</template>

<script>
export default (await import ('vue')).defineComponent({
    props: {
        poster: { type: String, default: "" },
        name: { type: String, default: "" },
        highlight: { type: String, default: "" },
        path: { type: [String, Object], default: "" }
    },
    computed: {
        title() {
            if (!this.highlight)
                return this.name;
            return this.name.replace(new RegExp(`(${this.highlight})`, "gi"), "<mark>$1</mark>");
        }
    },
    
})
</script>
<style>
.card{
    padding: 8px;
    border-radius: 12px;
    background-color: rgba(32, 40, 62, 0.8);
    backdrop-filter: blur(40px);
}

.card .name{
    display: block;
    padding: 8px;
    margin-top: 16px;
    margin-bottom: 8px;
    color: white;
    font-weight: 600;
}

.card img{
    height: 400px;
    max-width: 100%;
    object-fit: cover;
    border-radius: 8px;
}

</style>