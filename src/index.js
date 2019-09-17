import microbiologyDemo from './content/microbiologyDemo'

const despComponents = {
    microbiologyDemo
}


const install = function (Vue, opts = {}) {
  if (install.installed) return;

  Object.keys(despComponents).forEach(key => {
    if(Vue.component(key)){
      console.error('组件'+key+'名称重复，请修改')
    }
    Vue.component(key, despComponents[key]);
  });

};

export default {
  install
}
