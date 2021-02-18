import validator from '@/utils/el-validator'
export default {
  methods: {
    /**
     * @param v 证件类型选择的值
     * @param rules 校验规则
     * @param form  当前元素的form
     * @param formRef 当前元素的form ref
     * @param prop  当前元素证件号码的prop
     * @param required  当前元素是否必填
     */
    cardTypeChange(v, rules, form, formRef, prop, required) {
      // form[prop] = ''  这里不能去清空，会出问题有bug
      this.$refs[formRef].elForm.clearValidate(prop)
      switch (v) {
        case '01': // 身份证
          this.$set(rules, prop, this.concatRule(required, 'identityCard'))
          break
        case '02': // 军官证
          this.$set(rules, prop, this.concatRule(required, 'jgz'))
          break
        case '08': // 护照
          this.$set(rules, prop, this.concatRule(required, 'hz'))
          break
        default:
          this.$set(rules, prop, this.concatRule(required))
      }
    },
    concatRule(required, reg) {
      return [
        { required: required, message: '请输入证件号码', trigger: 'blur' },
        reg ? { required: required, validator: validator, regexp: reg, trigger: 'blur' } : {}
      ]
    }
  }
}
