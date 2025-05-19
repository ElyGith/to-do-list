import vine from '@vinejs/vine'

export const registerValidator = vine.compile(vine.object({
    email: vine.string().email().unique(
        async (db, value) => {
        const user = await db.from('users').where('email', value).first()
        return !user
    }
), 
    password: vine
        .string()
        .minLength(8)
        .maxLength(32)
        .confirmed(),
        full_name : vine.string().minLength(3).maxLength(32),
}))


export const loginValidator = vine.compile(vine.object({
    email: vine.string().email(),
    password: vine
        .string()
        .minLength(8)
        .maxLength(32),

}))