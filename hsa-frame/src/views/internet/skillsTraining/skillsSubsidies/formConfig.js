import validator from '@/utils/el-validator'
export const baseItems = [ // 业务信息
  { label: '姓名', prop: '姓名', type: 'input' },
  { label: '身份证号', prop: '身份证号', type: 'input' },
  { label: '手机号', prop: '手机号', type: 'input' },
  { label: '职业资格', prop: '职业资格', type: 'select', clearable: true },
  { label: '证书编号', prop: '证书编号', type: 'input' },
  { label: '证书获得日期', prop: '证书获得日期', type: 'date' },
  { label: '工作单位', prop: '工作单位', type: 'input', span: 16 },
  { label: '签订劳动合同时间', prop: '签订劳动合同时间', type: 'date' },
  { label: '本人银行账号', prop: '本人银行账号', type: 'input' },
  { label: '银行卡开户行', prop: '银行卡开户行', type: 'input' }
]

export const rules = {
  姓名: [{ required: true, message: '请填写姓名', trigger: 'blur' }],
  身份证号: [{ required: true, validator: validator, regexp: 'identityCard', trigger: 'blur' }],
  手机号: [{ required: true, validator: validator, regexp: 'phone', trigger: 'blur' }],
  职业资格: [{ required: true, message: '请选择职业资格', trigger: 'change' }],
  证书编号: [{ required: true, message: '请填写证书编号', trigger: 'blur' }],
  证书获得日期: [{ required: true, message: '请选择证书获得日期', trigger: 'change' }],
  工作单位: [{ required: true, message: '请填写工作单位', trigger: 'blur' }],
  签订劳动合同时间: [{ required: true, message: '请选择签订劳动合同时间', trigger: 'change' }],
  本人银行账号: [{ required: true, message: '请填写本人银行账号', trigger: 'blur' }],
  银行卡开户行: [{ required: true, message: '请填写银行卡开户行', trigger: 'blur' }]
}
