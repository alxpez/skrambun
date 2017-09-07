function newActionCreator(type, ...argNames) {
  return function (...args) {
    let action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

const ADD_STORY = 'ADD_STORY'
const EDIT_STORY = 'EDIT_STORY'
const REMOVE_STORY = 'REMOVE_STORY'

export const addStory = newActionCreator(ADD_STORY, 'title', 'description', 'reportedBy', 'assignedTo')
export const editStory = newActionCreator(EDIT_STORY, 'id', 'text')
export const removeStory = newActionCreator(REMOVE_STORY, 'id')
