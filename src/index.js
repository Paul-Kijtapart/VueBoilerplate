import Vue from 'vue';


// Views
import Home from './views/Home.vue';

new Vue({
    el: '#app',
    render: h => h(Home)
});