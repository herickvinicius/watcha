const express = require('express')
const Profile = require('../models/profile')
const User = require('../models/user')
const router = express.Router()

router.post('/register', async (req, res) => {
    const { email } = req.body

    try{
        if(await User.findOne({ email }))
            return res.status(400).send({ error: 'User already exists' })

        //console.log(req.body.name)

        // Cria o perfil
        const profile = await Profile.create({ name: req.body.name })

        // Cria o user
        const user = await User.create({ ...req.body, profiles: [profile._id] })

        // Atualizo com o profile ID
        profile.userId = user._id
        profile.save()

        //const profile = await profile.create()
        console.log(user, profile)

        user.password = undefined

        return res.send({ user })
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Registration failed' })
    }
})

module.exports = app => app.use('/auth', router)