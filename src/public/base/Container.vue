<template>
    <div class="container">
        <div class="content">
            <slot></slot>
        </div>
        <div class="header">
            <p ref="title" :style="{position:'absolute',top:top+'px',right:'20px'}">{{title}}</p>
            <a class="close" @click="$emit('close')">
                <Icon type="ios-close"></Icon>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Container",
        props: {
            title: String
        },
        data(){
          return{
              top:0
          }
        },
        mounted() {
            this.top =  600 - this.$refs.title.offsetHeight/2
        }
    }
</script>

<style scoped>
    .container {
        width: 4600px;
        height: 1200px;
        /*padding: 5px;*/
        position: relative;
        pointer-events:auto;
        color: white;
    }

    .header {
        position: relative;height: 1200px;width: 100px;display: inline-block;float: left;
        letter-spacing: 20px;
        text-align: center;
        font-size: 50px;
        font-weight: 700;
        color:white;
    }

    .content{
        position: relative;height: 1200px;width: 4500px;display: inline-block;float: left
    }

    .close{
        position: absolute;
        cursor: pointer;
        right: 15px;
        top: 10px;
        overflow: hidden;
        color: #ffffff;
        transition: color .2s ease;
    }

    .ivu-icon-ios-close{
        font-size: 60px;
    }

    .fig-caption{
        font-size: 40px;
    }
</style>