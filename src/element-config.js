import {
  Tabs,
  TabPane,
  Steps,
  Step
} from 'element-ui'

export default {
  install (V) {
    V.use(Tabs)
    V.use(TabPane)
    V.use(Steps)
    V.use(Step)
  }
}
