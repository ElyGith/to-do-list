import vine from '@vinejs/vine'

export const addTaskValidator = vine.compile(vine.object({
    task_name: vine.string().maxLength(255),
    note : vine.string(),
    is_done : vine.boolean(),
    

    
}))

