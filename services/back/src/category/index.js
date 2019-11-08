
export function getCategory(req, res) {
    res.send({
        id: req.params.id,
        type: 'CATEGORY',
        name: 'Test',
        slug: 'test'
    })
}
