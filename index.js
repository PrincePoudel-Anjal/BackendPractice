require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const Data = {
  "login": "PrincePoudel-Anjal",
  "id": 232180748,
  "node_id": "U_kgDODdbMDA",
  "avatar_url": "https://avatars.githubusercontent.com/u/232180748?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/PrincePoudel-Anjal",
  "html_url": "https://github.com/PrincePoudel-Anjal",
  "followers_url": "https://api.github.com/users/PrincePoudel-Anjal/followers",
  "following_url": "https://api.github.com/users/PrincePoudel-Anjal/following{/other_user}",
  "gists_url": "https://api.github.com/users/PrincePoudel-Anjal/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/PrincePoudel-Anjal/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/PrincePoudel-Anjal/subscriptions",
  "organizations_url": "https://api.github.com/users/PrincePoudel-Anjal/orgs",
  "repos_url": "https://api.github.com/users/PrincePoudel-Anjal/repos",
  "events_url": "https://api.github.com/users/PrincePoudel-Anjal/events{/privacy}",
  "received_events_url": "https://api.github.com/users/PrincePoudel-Anjal/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 14,
  "public_gists": 0,
  "followers": 6,
  "following": 7,
  "created_at": "2025-09-14T10:15:12Z",
  "updated_at": "2026-07-30T10:13:22Z"
}
app.get('/facebook',(req,res)=>{
    res.send('"Account:"Prince_Poudel');
});
app.get('/login',(req,res) => {
    res.send('<h1>Please Login</h1>');
});
app.get('/data',(req,res)=>{
    res.json(Data);


});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});