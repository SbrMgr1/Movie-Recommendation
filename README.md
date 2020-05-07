#  Movie-Recommendation (Project 2)
## Instructions
### Objective: 
#### -Build movie recommender systems.
### goals:
#### - Demographic: Recommend top trending movies ( no user customization ), if no context about the user is known
#### - Content based (item-item) :Recommend top 10 similar movies, given a recently watched movie. Make sure you engineer a comprehensive set of features to find most similar movies.
#### - Collaborative filtering: given a data set  of user-movie ratings (feel free to change your data set if you need to), predict a movie rating for a given user and movie. ( use SVD or any matrix factorization technique you prefer)
#### - Serve your model prediction over a restful api (deployed on docker)
### Grading Criteria :
#### EDA ( plots, comments, feature selection, preprocessing ) : 20
#### Demographic (Top trends) : 10
#### Content based (item-item similarity)  : 40
#### Collaborative filtering (SVD, NMF) : 20
#### docker/API : 10
#### netflix like UI : +10
#### AUTOML (NCF) : +5