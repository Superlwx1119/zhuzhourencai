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
    },
    auditName: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { auditCode, auditName } = context.props
    const vnodes = []

    if (auditCode === '0') {
      vnodes.push(<state-tag title= {auditName || '未提交'} tag-type='nostart'></state-tag>)
    } else if (auditCode === '1') {
      vnodes.push(<state-tag title= {auditName || '审核通过'} tag-type='pass'></state-tag>)
    } else if (auditCode === '2') {
      vnodes.push(<state-tag title= {auditName || '审核终止'} tag-type='nopass'></state-tag>)
    } else if (auditCode === '11') {
      vnodes.push(<state-tag title= {auditName || '待初审'} tag-type='nostart'></state-tag>)
    } else if (auditCode === '21') {
      vnodes.push(<state-tag title= {auditName || '待复审'} tag-type='going'></state-tag>)
    } else if (auditCode === '31') {
      vnodes.push(<state-tag title= {auditName || '待三审'} tag-type='going'></state-tag>)
    } else if (auditCode === '41') {
      vnodes.push(<state-tag title= {auditName || '待四审'} tag-type='going'></state-tag>)
    } else if (auditCode === '99') {
      vnodes.push(<state-tag title= {auditName || '待终审'} tag-type='going'></state-tag>)
    } else if (auditCode === '3') {
      vnodes.push(<state-tag title= {auditName || '正式取消'} tag-type='nopass'></state-tag>)
    }
    return vnodes
  }
}
</script>
