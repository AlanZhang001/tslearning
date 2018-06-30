<!--
选择小时的组件
-->
<style>
.ui-form .ui-form-text.selectHour{
    width: 100px;
}
</style>
<template>
    <select @change="onChange" v-model="selecthour" class="ui-form-text sem-input selectHour" :disabled="disabled">
        <option v-for="(name,key) in options" :value="key" :key="key">{{name}}</option>
    </select>
</template>
<script>
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
