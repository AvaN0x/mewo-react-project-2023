const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const commentValidation = require('../../validations/comment.validation');
const commentController = require('../../controllers/comment.controller');

const router = express.Router();

router.route('/').post(auth(), validate(commentValidation.createComment), commentController.createComment);

module.exports = router;

/**
 * @swagger
 * tags:
 *  name: Comments
 *  description: Comment management and retrieval
 */

/**
 * @swagger
 * /comments:
 *   post:
 *     summary: Create a comment
 *     description: Only authenticated users can create comments.
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *               - discussionId
 *             properties:
 *               content:
 *                 type: string
 *                 description: The content of the comment.
 *                 example: I want to create a comment.
 *                 required: true
 *               discussionId:
 *                 type: number
 *                 description: The id of the discussion.
 *                 example: 1
 *                 required: true
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
