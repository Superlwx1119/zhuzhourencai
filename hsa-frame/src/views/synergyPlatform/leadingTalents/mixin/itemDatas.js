export default {
  data() {
    return {
      itemDatas: [
        { label: '姓名', prop: '姓名', type: 'input' },
        { label: '性别', prop: '性别', type: 'select', options: [{ value: '0', label: '女' }, { value: '1', label: '男' }], placeholder: '请选择' },
        { label: '证件类型', prop: '证件类型', type: 'select', options: [{ value: '0', label: '身份证' }, { value: '1', label: '护照' }, { value: '2', label: '往来港澳通信证' }, { value: '3', label: '往来台湾通信证' }], placeholder: '请选择' },
        { label: '证件号码', prop: '证件号码', type: 'input', placeholder: '身份证：校验；其他：长度<18位' },
        { label: '出生日期', prop: '出生日期', type: 'date' },
        { label: '籍贯', prop: '籍贯', type: 'input' },
        { label: ' 民族', prop: ' 民族', type: 'select', options: [{ value: '0', label: '汉族' }, { value: '1', label: '其他' }], placeholder: '请选择' },
        { label: '政治面貌', prop: '政治面貌', type: 'select', options: [{ value: '0', label: '群众' }, { value: '1', label: '其他' }], placeholder: '请选择' }
      ],
      itemDatas1: [
        { label: '文化程度', prop: '文化程度', type: 'select', placeholder: '请选择' },
        { label: '学位', prop: '学位', type: 'select', placeholder: '请选择' },
        { label: '授予时间', prop: '授予时间', type: 'date' },
        { label: '职称', prop: '职称', type: 'input' },
        { label: '职务', prop: '职务', type: 'input' },
        { label: '从事专业', prop: '从事专业', type: 'input' },
        { label: '通讯地址', prop: '通讯地址', type: 'input' },
        { label: '邮编', prop: '邮编', type: 'input' },
        { label: '联系电话', prop: '联系电话', type: 'input' },
        { label: '电子邮箱', prop: '电子邮箱', type: 'input' }
      ],
      itemDatas2: [
        { label: '文化程度', prop: '文化程度', type: 'select' },
        { label: '学位', prop: '学位', type: 'select', codeType: 'EMP_MGT_TYPE' },
        { label: '授予时间', prop: '授予时间', type: 'date', codeType: 'EMP_TYPE' },
        { label: '职称', prop: '职称', type: 'input' },
        { label: '职务', prop: '职务', type: 'input' },
        { label: '从事专业', prop: '从事专业', type: 'input' },
        { label: '通讯地址', prop: '通讯地址', type: 'input' },
        { label: '联系电话', prop: '联系电话', type: 'input' },
        { label: '电子邮箱', prop: '电子邮箱', type: 'input' }
      ],
      itemDatas3: [
        { label: '', prop: '', type: 'textarea', rows: 1 }
      ]
    }
  }
}
