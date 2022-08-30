
export default {
  data() {
    return {
      count: 0
    }
  },
  template:` <button @click="count++">组件-点击计数：{{ count }}</button>`
}

