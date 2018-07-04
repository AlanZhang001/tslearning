<!--
选择小时的组件
-->
<style>
.ui-form .ui-form-text.selectHour{
    width: 100px;
}
</style>
<template>
    <div>
        <select @change="onChange" v-model="selecthour" class="ui-form-text sem-input selectHour" :disabled="disabled">
            <option v-for="(name,key) in options" :value="key" :key="key">{{name}}</option>
        </select>
        <p>ts实例：{{student}}</p>
    </div>
</template>
<script>
import {Student} from '../Student.ts';

var s = new Student('alan','+','thobian2');
console.log(s);
export default{
    props:{
        disabled:{
            default:false,
            type:Boolean
        },
        value:{
            default: '12:00',
            type:String
        },
        options: {
            type: Object,
            default: function(){
                var list = {};
                var hour = '';
                for (var i = 0; i < 24; i++) {
                    hour = ('00' + i).substr(-2) + ':00';
                    list[hour] = hour;
                }
                return list;
            }
        }
    },
    data:function(){
        return {
            student: s,
            selecthour: this.value
        };
    },
    methods:{
        onChange: function(e){
            this.$emit('onchange',this.selecthour);
        }
    },
    watch:{
        value: function(val){
            this.selecthour = val;
        }
    }
};
</script>
