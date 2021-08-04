const { Post } = require('../models');


const postdata = [
    {
      title: 'Donec',
      post_text: 'Donec posuere metus vitae ipsum.',
       user_id: 1
    },
    {
      title: 'Morbi',
      post_text: 'Morbi non quam nec dui luctus rutrum.',
      user_id: 3
    },
    {
      title: 'Donec2',
      post_text: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
      user_id: 2
    },
    {
      title: 'Nunc',
      post_text: 'Nunc purus.',
      user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;