// 引入mongoose模块
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// 创建评论集合规则
const commentSchema = new mongoose.Schema({
	// 文章id
	aid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Article'
	},
	// 评论人用户id
	uid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	// 评论时间
	time: {
		type: Date
	},
	// 评论内容
	content: {
		type: String
	}
});

// 创建评论集合
const Comment = mongoose.model('Comment', commentSchema);
async function createComment () {
	const comment = await Comment.create({
		aid: '60cffec960f3040efcdea59f',
		auid: '60cf2650014c195cb49958d1',
		time:'',
		content:'黄捷凯写的好棒'
	});
}
createComment ()
// 将评论集合构造函数作为模块成员进行导出
module.exports = {
	Comment
}