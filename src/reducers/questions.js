import { get_Questions, Add_question } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case get_Questions:
            return {
                ...state,
                ...action.questions
            }
        case Add_question:
            return {
                ...state,
                [action.question.id]: {
                    ...action.question
                },
                
            }
        default:
            return state
    }
}