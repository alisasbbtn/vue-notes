import { nanoid } from 'nanoid'

export default [
  {
    id: nanoid(),
    name: 'Example Card',
    items: [
      {
        id: nanoid(),
        type: 'task',
        content: 'I am an example task. Check me!',
        isCompleted: false
      },
      {
        id: nanoid(),
        type: 'task',
        content: 'Try adding other types of items',
        isCompleted: false
      }
    ]
  }
]
