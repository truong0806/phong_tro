import * as authService from '../service/auth'


export const register = async (req, res) => {
    const { phone, name, password } = req.body
    try {
        if (!phone || !password || !name) return res.status(400).json({ err: 1, msg: "Missing input" })
        const response = await authService.registerService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at authentication controller" + error
        })
    }
}