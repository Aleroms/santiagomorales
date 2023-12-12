const selector = {
  managePages: [
    {
      id: 'HomeForm',
      title: 'Home Page',
      isList: false
    },
    {
      id: 'AboutForm',
      title: 'About Page',
      isList: false
    },
    {
      id: 'ProjectsForm',
      title: 'Projects Page',
      isList: false
    },
    {
      id: 'SkillsForm',
      title: 'Skills Page',
      isList: false
    }
  ],
  manageData: [
    {
      id: 'EducationList',
      editId: 'EducationForm',
      title: 'Education',
      isList: true
    },
    {
      id: 'WorkExperienceList',
      editId: 'WorkExpForm',
      title: 'Work Experience',
      isList: true
    },
    {
      id: 'CertificateList',
      editId: 'CertificateForm',
      title: 'Certificates',
      isList: true
    },
    {
      id: 'SkillsDataList',
      editId: 'SkillsDataForm',
      title: 'Skills',
      isList: true
    },
    {
      id: 'SkillsCategoryList',
      editId: 'SkillsCategoryForm',
      title: 'Skills Category',
      isList: true
    },
    {
      id: 'ActiveLearningList',
      editId: 'ActiveLearningForm',
      title: 'Active Learning',
      isList: true
    },
    {
      id: 'ProjectsDataList',
      editId: 'ProjectsDataForm',
      title: 'Projects',
      isList: true
    },
    {
      id: 'ToolsList',
      editId: 'ToolsForm',
      title: 'Tools',
      isList: true
    }
  ]
}
const getEditId = (activeId) => {
  const data = selector.manageData
  const foundItem = data.find((item) => item.id === activeId)

  return foundItem ? foundItem.editId : null
}
export { selector, getEditId }
