<!-- 审核状态标签展示 根据审核状态来判断这么展示审核标签 -->
<script>
import StateTag from './index.vue'
export default {
  name: 'StateShowTag',
  functional: true,
  components: {
    StateTag
  },
  props: {
    auditCode: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { auditCode } = context.props
    const vnodes = []

    if (auditCode === '0') {
      vnodes.push(<state-tag title='未提交' tag-type='nostart'></state-tag>)
    } else if (auditCode === '1') {
      vnodes.push(<state-tag title='审签通过' tag-type='pass'></state-tag>)
    } else if (auditCode === '6') {
      vnodes.push(<state-tag title='审核不通过' tag-type='nopass'></state-tag>)
    } else if (auditCode === '2') {
      vnodes.push(<state-tag title='审签不通过' tag-type='nopass'></state-tag>)
    } else if (auditCode === '11') {
      vnodes.push(<state-tag title='待审核' tag-type='nostart'></state-tag>)
    } else if (auditCode === '21') {
      vnodes.push(<state-tag title='待复审' tag-type='going'></state-tag>)
    } else if (auditCode === '31') {
      vnodes.push(<state-tag title='待三审' tag-type='going'></state-tag>)
    } else if (auditCode === '41') {
      vnodes.push(<state-tag title='待四审' tag-type='going'></state-tag>)
    } else if (auditCode === '99') {
      vnodes.push(<state-tag title='待审签' tag-type='going'></state-tag>)
    }
    return vnodes
  }
}
</script>
