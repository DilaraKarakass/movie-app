<template>
    <header class="header">
        <div class="container">
            <img src="img/logo.svg" alt="logo">

            <nav>
                <a href="#">Movies</a>
                <a href="#">Tv Shows</a>
                <a href="#">
                    Suggest Me
                    <img src="img/arrow-right.svg" alt="arrow">
                </a>                
            </nav>
        </div>
    </header>
</template>

<script>
export default (await import('vue')).defineComponent({})
</script>

<style>
.header .container{
    display: flex;
    align-items: center;
    justify-content:space-between ;
}

.header nav{
    display: flex;
    align-items: center;
}

.header a{
    display: block;
    padding: 12px 16px;
    font-weight: 600;
    text-decoration: none;
    color: var(--gray--200);
    align-items: center;
}

.header a img {
    margin-left: 5px;
}
</style>