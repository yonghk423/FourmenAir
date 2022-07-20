// 특정 포스트가 선택되면, 전달된 객체를 바탕으로 DB에서 post를 찾아 전달
// 게시판에서 새로고침이나 댓글 작성시 조회수가 증가하지 않도록 수정 필요
const { post, tags, user, post_contents, post_image, post_post_contents, post_post_image } = require('../../models');

module.exports = async (req, res) => {
  const id = req.params.id.split(':')[1];

  const isItExist = await post.findOne({
    where: { id: id }
  })

  if(!isItExist) {
    res.status(404).send("데이터가 존재하지 않습니다.")
  }

  await post.findOne({
    where: { id: id }
  })
  .then(selectedPost => {
    selectedPost.increment('viewCount', { by: 1 });
  })

  const findedPost = await post.findOne({
    include: [
      { model: tags, attributes: ["localTag", "seasonTag"] }
    ],
    where: { id: id }
  })

  // post의 contents 데이터 조회
  const postPostContents = await post_post_contents.findOne({
    include: [
      {
        model: post,
        attributes: ["id"]
      }
    ],
    where: { postId: findedPost.id }
  })

  const findContent = await post_contents.findOne({
    include: [
      {
        model: post_post_contents,
        attributes: ["postContentId"]
      }
    ],
    where: { id: postPostContents.postContentId }
  })

  // post의 image 데이터 조회
  const postPostImage = await post_post_image.findOne({
    include: [
      {
        model: post,
        attributes: ["id"]
      }
    ],
    where: { postId: findedPost.id }
  })
  const findImage = await post_image.findOne({
    include: [
      {
        model: post_post_image,
        attributes: ["postImageId"]
      }
    ],
    where: { id: postPostImage.postImageId }
  })

  // post 작성자 데이터 조회
  const postedUser = await user.findOne({
    where: { id: findedPost.userId }
  })

  const clickedPost = {
    id: findedPost.id,
    title: findedPost.title,
    viewCount: findedPost.viewCount,
    url: findImage.image,
    postcontents: findContent.contents,
    createdAt: findedPost.createdAt,
    updatedAt: findedPost.updatedAt,
    postedUserData: {
      id: postedUser.id,
      name: postedUser.name,
      email: postedUser.email,
      gender: postedUser.gender,
      image: postedUser.image
    },
    tags: [
      {
        localTag: findedPost.tags[0].localTag,
        seasonTag: findedPost.tags[0].seasonTag
      }
    ]
  }

  res.status(200).json({ data: { post: clickedPost } })
};
