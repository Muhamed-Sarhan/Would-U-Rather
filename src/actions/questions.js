import { _saveQuestion } from '../utils/_DATA';

export const get_Questions = 'get_Questions';
export const Add_question = 'Add_question';

export function getQuestions(questions) {
  return {
    type: get_Questions,
    questions,
  };
}

export function AddQuestion(question) {
  return {
    type: Add_question,
    question,
  };
}

export function handleSavedData(firstOptionText, secondOptionText) {
  return (dispatch, getState) => {
    const { AuthUser } = getState();
    return _saveQuestion({
      firstOptionText,
      secondOptionText,
      author: AuthUser,
    }).then((question) => {
      dispatch(AddQuestion(question));
    });
  };
}
