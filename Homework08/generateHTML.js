function generatehtml(userInfo) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
        .mypic{
            
            background-color: ${userInfo.color}
        }
        </style>
    </head>
    <body>
        <div>
            
            <h1> username:${userInfo.username}</h1>
            <h2> URL:${userInfo.url}</h2>
            <h2> followers:${userInfo.followers}</h2>
            <h2>following: ${userInfo.following}</h2>
            <h2> color:${userInfo.color}</h2>
            <h2>location:${userInfo.location}</h2>
            <h3>repo:${userInfo.repos}</h3>
            <h3>blog: ${userInfo.blog}</h3>
            <a href = "${userInfo.starred_url}">starred</a>
        </div>
        <div class="mypic">
            <img src="${userInfo.url}" height = 300 width= 300 />
        </div>
        
    
    </body>
    </html>`;
}
module.exports = generatehtml;
