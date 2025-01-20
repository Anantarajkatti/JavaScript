function getUserData(userId, callback) {
    setTimeout(() => {
        console.log(`Fetched data for user ${userId}`);
        callback(userId);                                         //(userId) => {
                                                                         //     getPosts(userId, (postId) => {
                                                                        //                                     getComments(postId,   () => {
                                                                        //                                                                  console.log("Fetched all data");
                                                                        //                                                                  } 
                                                                        //                                                 ); 
                                                                                 //                          }
                                                                                 //     );
                                                                             // }   
    }, 1000);
}

function getPosts(userId, callback) {
    setTimeout(() => {
        console.log(`Fetched posts for user ${userId}`);
        callback(userId);
                                                                    //(postId) => {
                                                                        //         getComments(postId,   () => {
                                                                        //                                     console.log("Fetched all data");
                                                                        //                                      } 
                                                                        //

    }, 1000);
}

function getComments(postId, callback) {
    setTimeout(() => {
        console.log(`Fetched comments for post ${postId}`);
        callback();         
                                                                                 //() => {
                                                                        //             console.log("Fetched all data");
                                                                        //         }

    }, 1000);
}


getUserData(1, (userId) => {
                            getPosts(userId, (postId) => {
                                                            getComments(postId, () => {
                                                                                        console.log("Fetched all data");
                                                                                        }
                                                                         );
                                                            }
                                    );
                            }
