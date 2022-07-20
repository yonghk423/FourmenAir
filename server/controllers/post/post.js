const { post, tags } = require('../../models');

module.exports = async (req, res) => {
  // Season 카테고리 검색
  if(req.query.season) {
    let postIdList = [];
    
    const seasonPost = await tags.findAll({
      where: { seasonTag: req.query.season }
    })
  
    seasonPost.map((seasonPostId) => {
      postIdList.push(seasonPostId.postId)
    })
  
    const postList = await post.findAll({
      include: [
        { model: tags, attributes: ["localTag", "seasonTag"] }
      ],
      where: { id: postIdList }
    })
  
  
    res.status(200).json({ data: { post: postList } })
  }

  // Local 카테고리 검색
  if(req.query.local) {
    let postIdList = [];
    
    const localPost = await tags.findAll({
      where: { localTag: req.query.local }
    })
  
    localPost.map((localPostId) => {
      postIdList.push(localPostId.postId)
    })
  
    const postList = await post.findAll({
      include: [
        { model: tags, attributes: ["localTag", "seasonTag"] }
      ],
      where: { id: postIdList }
    })
  
  
    res.status(200).json({ data: { post: postList } })
  }

  const postList = await post.findAll({
    include: [
      { model: tags, attributes: ["localTag", "seasonTag"] }
    ]
  })

  if(postList) {
    res.status(200).json({ data: { post: postList } })
  }
  
  res.status(404).send('게시물을 찾지 못했습니다.')
};
