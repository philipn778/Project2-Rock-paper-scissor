const selectionButtons = document.querySelectorAll('[data-selection]')
const SELECTIONS = [
{
name: 'rock',
emoji: '✊🏾',
beats: 'scissors'
}
{
name: 'paper',
emoji: '✋🏽',
beats: 'rock'
}
{
name: 'scissors',
emoji: '✌🏻',
beats: 'paper'
}
]
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selectionName)

    })

})

function makeSelection(selection) {
    console.log(selection)
}