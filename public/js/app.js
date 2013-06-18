
var Controllers = (function(Controllers, blogPosts) {

  "use strict";

  /**
   * Main controller for the page.
   */
  Controllers.Main = function($scope, $http) {
    // Bring the blog posts into the scope of this controller
    $scope.posts = blogPosts;

    /**
     * Shows the post at the given index by redirecting the user.
     * @param {Number} idx
     */
    $scope.showPost = function(idx) {
      if (idx < 0 || idx >= $scope.posts.length) return;

      var post = $scope.posts[idx];

      // If the post is showing, hide it. Else, if we already
      // have the post content, just show it
      if (post.show) {
        post.show = false;
        return;
      } else if (post.content) {
        post.show = true;
        return;
      }

      // Asynchronously get the post content and display it
      $http.get('/post/' + post._id).success(function(p) {
        post.content = p.content;
        post.show = true;
      });
    };
  };
  Controllers.Main.$inject = ['$scope','$http'];

  return Controllers;

})(Controllers || {}, blogPosts);