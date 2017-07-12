/*
Create Angular component blogList into module app.blog
*/
let admin = {
  templateUrl: 'js/components/admin/admin.html',
  controller: ['UsersService', 'PostsService','$state', function(UsersService, PostsService,$state) {

    this.$onInit = () => {
    console.log(this)
  }
  
      UsersService.getCurrent().then((user) => {
        console.log(user)
        if (user) {
          $state.go('blog.list')
          let toastContent = `Not Authorized !`
          Materialize.toast(toastContent, 4000, 'toast-error')
        }
      }).catch((err) => {
        $state.go('blog.list')
        let toastContent = `Not Authorized !`
        Materialize.toast(toastContent, 4000, 'toast-error')
      })
    
    
  }]
}

export default admin
