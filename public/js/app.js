
var Controllers = (function(Controllers, blogPosts) {

  "use strict";

  /**
   * Main controller for the page.
   */
  Controllers.Main = function($scope) {
    // Bring the blog posts into the scope of this controller
    $scope.posts = blogPosts;

    /**
     * Shows the post at the given index by redirecting the user.
     * @param {Number} idx
     */
    $scope.showPost = function(idx) {
      if (idx >= 0 && idx < $scope.posts.length) {
        window.location = '/post/' + $scope.posts[idx]._id;
      }
    };
  };
  Controllers.Main.$inject = ['$scope'];

  return Controllers;

})(Controllers || {}, blogPosts);