get '/' do
  erb :'/index'
end

get '/api/posts' do
  posts = [
    {
      path: '/posts/1',
      title: 'Post Number 1',
      author: 'Alfred',
      preview: 'This is post number 1 for an example.'
    },
    {
      path: '/posts/2',
      title: 'Post Number 2',
      author: 'Alfred',
      preview: 'This is post number 2 for an example.'
    },
    {
      path: '/posts/3',
      title: 'Post Number 3',
      author: 'Alfred',
      preview: 'This is post number 3 for an example.'
    },
    {
      path: '/posts/4',
      title: 'Post Number 4',
      author: 'Alfred',
      preview: 'This is post number 4 for an example.'
    },
  ]

  p '*' * 100
  p posts

  return posts.to_json
end