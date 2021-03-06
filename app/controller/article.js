'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  /**
   * 获取文章列表
   */
  async findArticles() {
    const { ctx, service } = this;
    const articles = await service.article.find();
    ctx.body = {
      code: 200,
      success: true,
      message: 'success',
      data: articles,
    };
  }

  /**
   * 新增文章
   */
  async addArticle() {
    const { ctx } = this;
    const requestBody = ctx.request.body;
    const createdResult = await ctx.model.Article.create({
      ...requestBody,
    });
    if (createdResult._id) {
      // 创建成功
      ctx.body = {
        code: 200,
        success: true,
        message: '文章创建成功',
        results: {
          article_id: createdResult._id,
        },
      };
    } else {
      ctx.body = {
        code: 500,
        success: false,
        message: createdResult,
      };
    }
  }

  /**
   * 编辑文章
   */
  async editArticle() {
    const { ctx, service } = this;
    const res = await service.article.editArticle();
    if (res.success) {
      ctx.body = {
        code: 200,
        ...res,
      };
    } else {
      ctx.body = {
        code: 500,
        ...res,
      };
    }
  }

  /**
   * 文章发布
   */
  async articlePublish() {
    const { ctx, service } = this;
    const res = await service.article.articlePublish();
    if (res.success) {
      ctx.body = {
        code: 200,
        ...res,
      };
    } else {
      ctx.body = {
        code: 500,
        ...res,
      };
    }
  }

  /**
   * 文章取消发布
   */
  async articleUnpublish() {
    const { ctx, service } = this;
    const res = await service.article.articleUnpublish();
    if (res.success) {
      ctx.body = {
        code: 200,
        ...res,
      };
    } else {
      ctx.body = {
        code: 500,
        ...res,
      };
    }
  }

  /**
   * 获取文章详情页
   */
  async getArticleDetailById() {
    const { ctx, service } = this;
    const res = await service.article.getArticleDetailById();
    if (res.success) {
      ctx.body = {
        code: 200,
        ...res,
      };
    } else {
      ctx.body = {
        code: 500,
        ...res,
      };
    }
  }
}

module.exports = ArticleController;
