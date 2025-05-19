import vine from '@vinejs/vine'

export const addTaskValidator = vine.compile(vine.object({
    task_name: vine.string().maxLength(255),
    note : vine.string().optional(),
    is_done: vine
        .any()  // ou .boolean() selon le cas
        .optional()
        .transform((value) => value === undefined ? false : value),
            priorite : vine.number().optional(),
    liste : vine.string().maxLength(255).optional()
    //faudra vérifier si elle appartient aux listes existantes dans la BD 


    
}))

