<template>
    <Menu mode="horizontal" theme="dark" @on-select="select" >
        <template v-for="group in items">
            <Submenu v-if="group.type == 'menu'" :name="group.title" :key="group.title">
                <template slot="title">
                    <Icon :type="group.icon"/>
                    {{ group.title }}
                </template>
                <template v-for="item in group.menu">
                    <MenuGroup v-if="item.type == 'menu'" :title="item.title" :key="item.title">
                        <MenuItem v-for="sub in item.menu" :name="sub.title" :key="sub.title">
                            <Icon :type="sub.icon"/>
                            {{ sub.title }}
                        </MenuItem>
                    </MenuGroup>
                    <MenuItem :name="item.title" :key="item.title">
                        <Icon :type="item.icon"/>
                        {{ item.title }}
                    </MenuItem>
                </template>
            </Submenu>
            <MenuItem v-else :name="group.title" :key="group.title">
                <Icon :type="group.icon"/>
                {{ group.title }}
            </MenuItem>
        </template>
    </Menu>
</template>

<script>
    export default {
        name: "despMenu",
        props: [ 'items' ],
        data(){
            const actionMap = this.findAction(this.items)
            return{
                actionMap
            }
        },
        methods: {
            select(name) {
                window.showComponent(name)
                let cmd = this.actionMap[name];
                if (cmd) {
                    eval(cmd);
                }
            },
            findAction(arr){
                if(!arr) return
                const actions = {}
                arr.forEach((item)=>{
                    if(item.type==='menu')
                        Object.assign(actions,this.findAction(item.menu))
                    else
                        actions[item.title] = item.action
                })
                return actions
            }
        }
    }
</script>

<style scoped>

</style>