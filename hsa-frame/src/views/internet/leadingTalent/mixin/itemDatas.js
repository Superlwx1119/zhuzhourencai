export default {
  data() {
    return {
      rules: {
        userName: [{ required: true, message: '请输入', trigger: 'blur' }],
        sex: [{ required: true, message: '请选择', trigger: 'blur' }],
        psnCertTypeName: [{ required: true, message: '请选择', trigger: 'blur' }],
        certno: [{ required: true, message: '请输入', trigger: 'blur' }],
        brdy: [{ required: true, message: '请选择', trigger: 'blur' }],
        naty: [{ required: true, message: '请选择', trigger: 'blur' }],
        polstasName: [{ required: true, message: '请选择', trigger: 'blur' }],
        籍贯: [{ required: true, message: '请输入', trigger: 'blur' }]

      },
      itemDatas: [
        { label: '姓名', prop: 'userName', type: 'input', span: 12 },
        { label: '性别', prop: 'sex', type: 'select', span: 12, options: [{ value: '0', label: '女' }, { value: '1', label: '男' }], placeholder: '请选择' },
        { label: '证件类型', prop: 'psnCertTypeName', type: 'select', span: 12, options: [{ value: '0', label: '身份证' }, { value: '1', label: '护照' }, { value: '2', label: '往来港澳通信证' }, { value: '3', label: '往来台湾通信证' }], placeholder: '请选择' },
        { label: '证件号码', prop: 'certno', type: 'input', span: 12, placeholder: '身份证：校验；其他：长度<18位' },
        { label: '出生日期', prop: 'brdy', type: 'date', span: 12 },
        { label: '籍贯', prop: '籍贯', span: 12, type: 'input' },
        { label: ' 民族', prop: 'naty', type: 'select', span: 12, options: [{ value: '0', label: '汉族' }, { value: '1', label: '其他' }], placeholder: '请选择' },
        { label: '政治面貌', prop: 'polstasName', type: 'select', span: 12, options: [{ value: '0', label: '群众' }, { value: '1', label: '其他' }], placeholder: '请选择' }
      ],
      rules1: {
        educName: [{ required: true, message: '请输入', trigger: 'blur' }],
        educ: [{ required: true, message: '请选择', trigger: 'blur' }],
        ytime: [{ required: true, message: '请选择', trigger: 'blur' }],
        admdut: [{ required: true, message: '请输入', trigger: 'blur' }],
        admDutName: [{ required: true, message: '请选择', trigger: 'blur' }],
        proTechDutyLvName: [{ required: true, message: '请选择', trigger: 'blur' }],
        addr: [{ required: true, message: '请选择', trigger: 'blur' }],
        email: [{ required: true, message: '请输入', trigger: 'blur' }],
        tel: [{ required: true, message: '请输入', trigger: 'blur' }],
        conerEmail: [{ required: true, message: '请输入', trigger: 'blur' }]
      },
      itemDatas1: [
        { label: '文化程度', prop: 'educName', span: 8, type: 'select', placeholder: '请选择' },
        { label: '学位', prop: 'educ', span: 8, type: 'select', placeholder: '请选择' },
        { label: '授予时间', prop: 'ytime', span: 8, type: 'date' },
        { label: '职称', prop: 'admdut', span: 8, type: 'input' },
        { label: '职务', prop: 'admDutName', span: 8, type: 'input' },
        { label: '从事专业', span: 8, prop: 'proTechDutyLvName', type: 'input' },
        { label: '通讯地址', prop: 'addr', type: 'input', span: 16 },
        { label: '邮编', prop: 'email', type: 'input', span: 8 },
        { label: '联系电话', prop: 'tel', type: 'input', span: 8 },
        { label: '电子邮箱', prop: 'conerEmail', type: 'input', span: 8 }
      ],
      rules2: {
        empName: [{ required: true, message: '请输入', trigger: 'blur' }],
        empAddr: [{ required: true, message: '请选择', trigger: 'blur' }],
        acctname: [{ required: true, message: '请选择', trigger: 'blur' }],
        bankName: [{ required: true, message: '请输入', trigger: 'blur' }],
        bankacct: [{ required: true, message: '请选择', trigger: 'blur' }],
        contactPerson: [{ required: true, message: '请选择', trigger: 'blur' }],
        contactTel: [{ required: true, message: '请选择', trigger: 'blur' }]
      },
      itemDatas2: [
        { label: '单位名称', prop: 'empName', type: 'select', span: 8 },
        { label: '单位地址', prop: 'empAddr', type: 'input', span: 16 },
        { label: '户名', prop: 'acctname', type: 'input', span: 8 },
        { label: '开户行', prop: 'bankName', type: 'input', span: 8 },
        { label: '账号', prop: 'bankacct', type: 'input', span: 8 },
        { label: '单位联系人', prop: 'contactPerson', type: 'input', span: 8 },
        { label: '联系电话', prop: 'contactTel', type: 'input', span: 8 }
      ],
      itemDatas22: [
        { label: '单位联系人', prop: 'empName', type: 'select', span: 8 },
        { label: '联系电话', prop: 'empAddr', type: 'input', span: 8 },
        { label: '电子邮箱', prop: 'acctname', type: 'input', span: 8 },
        { label: '创业投资方式', prop: 'bankName', type: 'input', span: 8 },
        { label: '投资额(万元)', prop: 'bankacct', type: 'input', span: 8 },
        { label: '持股比例', prop: 'contactPerson', type: 'input', span: 8 }
      ],
      itemDatas3: [
        { label: '', prop: '', type: 'textarea', autosize: true, span: 24 }
      ],
      itemDatas4: [
        { label: '企业名称', prop: 'empName', type: 'input', span: 16 },
        { label: '组织机构代码', prop: 'empName', type: 'input', span: 8 },
        { label: '法定代表人', prop: 'empName', type: 'input', span: 8 },
        { label: '成立时间', prop: 'empName', type: 'input', span: 8 },
        { label: '注册资金(万元)', prop: 'empName', type: 'input', span: 8 },
        { label: '户名', prop: 'empName', type: 'input', span: 8 },
        { label: '开户行', prop: 'empName', type: 'input', span: 8 },
        { label: '账号', prop: 'empName', type: 'input', span: 8 },
        { label: '职工总数', prop: 'empName', type: 'input', span: 8 },
        { label: '研发人员总数', prop: 'empName', type: 'input', span: 8 },
        { label: '研发人员占比', prop: 'empName', type: 'input', span: 8 },
        { label: '授权专利', prop: 'empName', type: 'input', span: 8 },
        { label: '其中发明专利', prop: 'empName', type: 'input', span: 8 },
        { label: '发明专利占比', prop: 'empName', type: 'input', span: 8 }
      ],
      tableColumns: [
        { label: '序号', type: 'index' },
        { label: '业绩成果形式', prop: '业绩成果形式', sortable: false, align: 'center', overflow: true, width: '120px' },
        { label: '基本信息', prop: '基本信息', sortable: false, align: 'center', overflow: true, width: '120px' },
        { label: '本人排名/总人数', prop: '本人排名', sortable: false, align: 'center' },
        { label: '创新价值或经济、社会效益', prop: '创新价值或经济', sortable: false, align: 'center' },
        { type: 'operation', label: '操作', fixed: 'right', width: '120px' }
      ],
      tableColumns1: [
        { label: '序号', type: 'index' },
        { label: '附件', prop: '附件', sortable: false, align: 'center', overflow: true, width: '120px' },
        { label: '材料名称', prop: '材料名称', sortable: false, align: 'center', overflow: true, width: '120px' },
        { label: '是否必须', prop: '本人排名', sortable: false, align: 'center' },
        { label: '模板下载', prop: '模板下载', sortable: false, align: 'center' },
        { type: 'operation', label: '操作', fixed: 'right', width: '120px' }
      ],
      tableColumns2: [
        { label: '企业经营情况', prop: '企业经营情况' },
        { label: 'N-3年', prop: 'N-3年', sortable: false, align: 'center', overflow: true, width: '120px' },
        { label: 'N-2年', prop: 'N-2年', sortable: false, align: 'center', overflow: true, width: '120px' },
        { label: 'N-1年', prop: 'N-1年', sortable: false, align: 'center' },
        { label: 'N年（1月-6月）', prop: 'N年（1月-6月）', sortable: false, align: 'center' }
      ]
    }
  }
}
