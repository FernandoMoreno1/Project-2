const router =require('express').Router();
const { Post } = require('../../../14.5.mvc/models');
const { User } = require('../../models');

//get all users
router.get('/',(req,res)=>{
    User.findAll({
        attributes: {exclude:['password']}
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err =>{
        console.log(err);
        res.status(500).json(err);
    });
});

// router.get('/:id', (req,res)=> {
//     User.findOne({
//         attributes: { exclude: ['password']},
//         where:{
//             id:req.params.id
//         },
//         include:[
//             {
//                 model:,
//                 attributes:['id','title','created_at']
//             },
//             {
//                 model:
//             }
//         ]
//     })
// })

module.exports =router;