const router = require('express').Router();
const { MenuProduct } = require('../../models');

// post new menuproduct
router.post('/', (req, res) => {
    MenuProduct.bulkCreate(
        req.body.newProductArray,
        {
            ignoreDuplicates: true
        }
    )
    .then(dbMPData => {        
            res.json(dbMPData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;