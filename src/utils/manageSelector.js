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
      collection: 'education',
      isList: true
    },
    {
      id: 'WorkExperienceList',
      editId: 'WorkExpForm',
      title: 'Work Experience',
      collection: 'workExperience',
      isList: true
    },
    {
      id: 'CertificateList',
      editId: 'CertificateForm',
      title: 'Certificates',
      collection: 'certificates',
      isList: true
    },
    {
      id: 'SkillsDataList',
      editId: 'SkillsDataForm',
      title: 'Skills',
      collection: 'skills',
      isList: true
    },
    {
      id: 'SkillsCategoryList',
      editId: 'SkillsCategoryForm',
      title: 'Skills Category',
      collection: 'skillsCategory',
      isList: true
    },
    {
      id: 'ActiveLearningList',
      editId: 'ActiveLearningForm',
      title: 'Active Learning',
      collection: 'activeLearning',
      isList: true
    },
    {
      id: 'ProjectsDataList',
      editId: 'ProjectsDataForm',
      title: 'Projects',
      collection: 'projects',
      isList: true
    },
    {
      id: 'ToolsList',
      editId: 'ToolsForm',
      title: 'Tools',
      collection: 'tools',
      isList: true
    },
    {
      id: 'FrameworkList',
      editId: 'FrameworkForm',
      title: 'Frameworks',
      collection: 'frameworks',
      isList: true
    }
  ]
}
const getEditId = (activeId) => {
  const data = selector.manageData
  const foundItem = data.find((item) => item.id === activeId)

  return foundItem ? foundItem.editId : null
}

const getCollectionId = (activeId) => {
  const data = selector.manageData
  const foundItem = data.find((item) => item.id === activeId)

  return foundItem ? foundItem.collection : null
}
export { selector, getEditId, getCollectionId }
