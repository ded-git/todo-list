export const store = {
    storageNotes: [
        { id: 1, isEdit: false, isArchived: false, title: 'Shopping list', created: 'April 20, 2022', category: 'task', content: 'tomateos, bread', dates: [], },
        { id: 2, isEdit: false, isArchived: false, title: 'lie teory of evolut...', created: 'April 27, 2022', category: 'random thought', content: 'frontend or backend', dates: [], },
        { id: 3, isEdit: false, isArchived: false, title: 'New Feature', created: 'May 05, 2022', category: 'idea', content: 'implement storage', dates: [], },
        { id: 4, isEdit: false, isArchived: false, title: 'William Gaddis', created: 'May 07, 2022', category: 'idea', content: 'develop some app', dates: [], },
        { id: 5, isEdit: false, isArchived: false, title: 'Books', created: 'May 07, 2021', category: 'task', content: 'buy JS books 05.03.2022', dates: ['05/03/2022'], },
        { id: 6, isEdit: false, isArchived: false, title: 'Shopping list', created: 'May 15, 2022', category: 'task', content: 'car, bicycle, moto', dates: [], },
        { id: 7, isEdit: false, isArchived: false, title: 'Independace Day', created: 'Aug 24, 2022', category: 'task', content: 'go at war', dates: [], },
    ], 
    imgCatgSrc: {
        task: 'task-catg.png',
        idea: 'idea-catg.png',
        "random thought": 'random-catg.png',
    },
    buttonCreate: {
        active: false,
        yesVal: 'Create Note',
        noVal: 'Don\'t Create'
    },
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    inputs: {
        title: '',
        category: '',
        content: '',
    },
    editInputs: {
        editTitle: '',
        editSelector: '',
        editContent: '',

    },
    addingButtonState: false,
}