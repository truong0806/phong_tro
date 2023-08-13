import * as authService from '../service/auth'

export const register = async (req, res) => {
    const { phone, name, password } = req.body
    console.log("🚀 ~ file: authController.js:5 ~ register ~ phone:", phone)
    try {
        if (!phone || !password || !name) return res.status(400).json({ err: 1, msg: "Missing input" })
        const isCorrectphones = /^-?[\d.]+(?:e-?\d+)?$/.test(phone);
        if (isCorrectphones) {
            if (phone.toString().length === 10) {
                const response = await authService.registerService(req.body)
                return res.status(200).json(response)
            } else {
                return res.status(400).json({
                    err: 1, msg: "The number does not have 10 digits."
                })
            }
        } else {
            return res.status(400).json({ err: 1, msg: "Input not number" })
        }

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at authentication controller" + error
        })
    }
}
export const login = async (req, res) => {
    const { phone, password } = req.body
    try {
        if (!phone || !password) return res.status(400).json({ err: 1, msg: "Missing input" })
        const isCorrectphones = /^-?[\d.]+(?:e-?\d+)?$/.test(phone);
        if (isCorrectphones) {
            if (phone.toString().length === 10) {
                const response = await authService.loginService(req.body)
                return res.status(200).json(response)
            } else {
                return res.status(400).json({
                    err: 1, msg: "The number does not have 10 digits."
                })
            }
        } else {
            return res.status(400).json({ err: 1, msg: "Input not number" })
        }
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at authentication controller" + error
        })
    }
}