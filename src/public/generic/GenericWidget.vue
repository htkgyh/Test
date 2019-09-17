<template>
</template>
<script>

  export default {
    data() {
      return {
        events: {},
        exports: {},
        apis: {}
      }
    },
    props: ['widgetId', 'targets'],
    mounted() {
      this.$et.define(this);
      this.$nextTick(() => {
        this.$em.define(this);
        this.$am.define(this);
        this.$et.finish(this);
        this.processPointer();
      });
    },
    destroyed() {
      this.$et.release(this);
      this.$am.release(this);
      this.$em.release(this);
    },
    methods: {
      trigger(event, param) {
        this.$et.trigger(this, event, param);
      },
      getWidget(name) {
        let widgets = this.$em.get(name, this.targets);
        if (widgets && widgets.length > 0) {
          return widgets[0];
        }
        return {};
      },
      getWidgets(name) {
        return this.$em.get(name, this.targets);
      },
      exec(cmd) {
        eval(cmd);
      },
      processPointer() {
        if (!this.$el.style['pointer-events']) {
          this.$el.style['pointer-events'] = 'auto';
        }
      },
      close() {
        this.$emit('close');
      }
    }
  }
</script>
