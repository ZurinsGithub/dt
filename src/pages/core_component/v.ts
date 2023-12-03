// https://cn.vuejs.org/guide/extras/render-function.html#creating-vnodes
import { ref, h } from 'vue'
import type { VNode } from 'vue'
import './v.css'
import {project_name,items} from '../../ts/example_data/item';

let view:Array<VNode> = [];
function init_v(){
    view.push(h('view', { class: 'v_bg', innerHTML: 'hello' }))
}

export default {
  props: {
    /* ... */
    project_name
  },
  setup(props:any) {
    // const count = ref(1)
    // 返回渲染函数
    // return () => h('view', { class: 'v_bg', innerHTML: 'hello' })
    init_v()
    return () => h('view', view)
  }
}