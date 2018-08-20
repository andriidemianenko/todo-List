export default function displayFilter(state = 'DISPLAY_ALL', action) {
    switch (action.type) {
        case 'DISPLAY_ALL' : 
        return 'DISPLAY_ALL'
        case 'DISPLAY_DONE':
        return  'DISPLAY_DONE'
        case 'DISPLAY_ACTIVE':
        return 'DISPLAY_ACTIVE'
        default : 
        return state
    }
}