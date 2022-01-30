import React from "react";
import Arcticle from "./Article";

function ArticleList ({posts}) {

    const artic= posts.map((post) =>  (
< Arcticle
key={post.id}
title={post.title}
date={post.date}
preview={post.preview}
minutes={post.minutes} />
));
 return <main> { artic } </main>

   
}

export default ArticleList;