<template>
  <div style="height: 100%;width: 4600px;background-image:url('./assets/img/right.png');">
    <XView
      style="display: inline-block;width: 4600px;height: 1200px;"
      v-for="(view, index) in views"
      :key="view.id"
      :view="view"
      :index="index"
      :active="active"
      @show="showView"
    >
      <div v-for="layer in view.layers" :key="layer.id" class="dv_layer">
        <div v-for="widget in layer.widgets" :key="widget.id">
          <XPanel
            :settings="widget.settings"
            :widget="widget"
            :file="widget.type"
            @show="showWidget"
            @close="closeWidget"
          ></XPanel>
        </div>
      </div>
    </XView>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  beforeCreate() {
    axios
      .get("./assets/configurations/config.json")
      .then(res => {
        this.views = res.data;
        //查找Xmenu 并存储
        this.views.forEach(viewer => {
          viewer.layers.forEach(layer => {
            layer.widgets.forEach(widget => {
              // if(widget.type==='XMenu'){
              //   this.menu = widget
              //   return
              // }
              if (widget.settings.display === "pin") {
                this.pins.push(widget);
              }
            });
          });
        });
        this.$et.finish();
      })
      .catch(error => {});
  },
  created() {},
  data() {
    return {
      active: 0,
      views: [],
      reg: {},
      pins: []
    };
  },
  mounted() {
    this.initDisplayControl();
  },
  methods: {
    showView(index) {
      this.active = index;
      this.initDisplayControl();
    },
    initDisplayControl() {
      this.displayControl = {
        solo: null,
        mutex: null,
        widgets: []
      };
    },
    showWidget(widget) {
      const display = widget.settings.display;
      //solo存在 不允许激活其他类型组件
      if (this.displayControl.solo) return;
      if (display === "solo") {
        //关闭mutex和所有widgets
        for (let idx in this.displayControl.widgets) {
          this.displayControl.widgets[idx].settings.visible = false;
        }
        this.displayControl.widgets = [];

        if (this.displayControl.mutex) {
          this.displayControl.mutex.visible = false;
          this.displayControl.mutex = null;
        }

        for (let idx in this.pins) {
          this.pins[idx].settings.visible = false;
        }

        this.displayControl.solo = widget;
        widget.settings.visible = true;

        //打开solo时自动隐藏menu
        // this.menu.settings.visible = false
      } else if (widget.settings.display == "mutex") {
        if (
          this.displayControl.mutex &&
          this.displayControl.mutex.id != widget.id
        ) {
          this.displayControl.mutex.settings.visible = false;
        }
        //不关闭widgets
        /*for (let idx in this.displayControl.widgets) {
            this.displayControl.widgets[idx].settings.visible = false;
          }*/
        this.displayControl.mutex = widget;
        widget.settings.visible = true;
        //不关闭widgets
        //this.displayControl.widgets = [];
      } else if (widget.settings.display == "widget") {
        this.displayControl.widgets.push(widget);
        widget.settings.visible = true;
      }
    },
    closeWidget(widget) {
      widget.settings.visible = false;
      if (widget.settings.display === "solo") {
        this.displayControl.solo = null;
        for (let idx in this.pins) {
          this.pins[idx].settings.visible = true;
        }
        // this.menu.settings.visible = true
      } else if (widget.settings.display === "mutex") {
        this.displayControl.mutex = null;
      } else {
        this.displayControl.widgets.splice(
          this.displayControl.widgets.indexOf(widget),
          1
        );
      }
    }
  }
};
</script>

<style lang="less">
.dv_layer {
  width: 100%;
  height: 100%;
}
</style>
