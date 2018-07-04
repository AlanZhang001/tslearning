import Vue from 'vue';
import SelectHour from './components/SelectHour.vue';
Vue.component('page-selecthour',SelectHour);

new Vue({
    el: '#app',
    data: function(){
        return {
            startHour: '12:00'
        };
    },
    methods: {
        chooseStartHour: function(hour) {
            this.startHour = hour;
        }
    },
    mounted: function() {

    },
    watch: {

    },
    components: {

    }
});