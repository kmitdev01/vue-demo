<template>
    <div class="fullWrap">
        <form class="signUp-form">
            <h1>Log In</h1>
            <input type="email" placeholder="Enter Email" />
            <input type="password" placeholder="Enter Password" />
            <button>Log In</button>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css" scoped>
    .fullWrap{
        justify-content: center;
       
    }
    form{
        width: 100%;
        margin: 0 auto;
        max-width: 500px;
    }
    input{
        width: 100%;
        margin: 10px auto;
        padding: 10px 10px;
        border-radius: 10px;
        border: none;
        background: aliceblue;
    }
    input:focus {
        border-radius: 10px;
        border: none;
        outline: none;
        background: aliceblue;
        color: black;
    }
    button{
        border: none;
        border-radius: 10px;
        background: darkcyan;
        padding: 10px 20px;
        color: white;
    }
</style>