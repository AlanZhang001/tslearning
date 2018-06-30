import Vue from 'vue';
import SelectHour from './components/SelectHour.vue';
Vue.component('page-selecthour',SelectHour);

import {Student} from 'Student.ts';

var s = new Student('alan','-','alanzhang');

new Vue({
    el: '#app',
    data: function(){
        return {
            startHour: '12:00',
            student: s
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