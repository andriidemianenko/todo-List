
export default function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.payload
            ]

        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id)

        case 'CHECK_TODO': 
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed : !todo.completed
                    })
                } else {
                return todo
                }
            })

        default:
            return state

    }
}

