db.tweets.find({'entities.user_mentions': {$size: 3}, 'entities.hashtags': {$size: 2} }).count()