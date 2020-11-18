const express = require('express')
const bcrypt = require('bcryptjs')
const Profile = require('../models/profile')
const User = require('../models/user')
const router = express.Router()

router.post('/register', async (req, res) => {
    const { email } = req.body

    try{
        if(await User.findOne({ email }))
            return res.status(400).send({ error: 'User already exists' })

        // Cria o perfil
        const profile = await Profile.create({ name: req.body.name })

        // Cria o user
        const user = await User.create({ ...req.body, profiles: [profile._id] })

        // Atualiza com o profile ID
        profile.userId = user._id
        profile.save()

        user.password = undefined

        return res.send({ user })
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Registration failed' })
    }
})

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password')

    if(!user)
        return res.status(400).send({ error: 'User not found' })
    
    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Invalid password' })

    user.password = undefined
    
    res.send({ user })
})

module.exports = app => app.use('/auth', router)