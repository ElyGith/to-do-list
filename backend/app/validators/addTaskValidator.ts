import vine from '@vinejs/vine'

export const addTaskValidator = vine.compile(vine.object({
    task_name: vine.string().maxLength(255),
    note : vine.string().optional(),
    is_done : vine.accepted().optional(),
    priorite : vine.number().optional(),
    liste : vine.string().maxLength(255).optional()
    //faudra vérifier si elle appartient aux listes existantes dans la BD 


    
}))

