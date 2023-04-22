<template>
    <div class="container">
        <h1>VueOS</h1>
        <input ref="usern" type="text" placeholder="Username">
        <input ref="passw" type="password" placeholder="Password">
        <button>join the buggy mess</button>
    </div>
</template>

<style>

html, body {
    width: 100%;
    position: absolute;
    height: 100%;
    background-color: rgb(57, 57, 57);
    color: white;
    text-align: center;
}

.container {
    padding: 3rem;
    width: min-content;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: rgb(90, 90, 90);
    border-radius: 3rem;
}

.container > * {
    margin-top: 1rem;
}

input[type="password"], input[type="text"] {
    background: none;
    border: none;
    border-bottom: 0.2rem solid white;
    color: white;
    font-size: larger;
    transition: 300ms;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}

</style>