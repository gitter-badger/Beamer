/**
 * Blog.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    schema: true,

    attributes: {

        text: {
            type: 'text',
            required: false,
            unique: false

        },

        title: {
            type: 'string',
            required: 'true',
            unique: false
        },

        userid: {

        }



    },

    beforeDestroy: function(values, next) {

        console.log('hehe');
        console.log(values);
    }



};