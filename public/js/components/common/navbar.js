import moment from 'moment'

let navbar = {
    templateUrl: 'js/components/common/navbar.html',
    controller: ['UsersService', '$state','$interval', function(UsersService, $state, $interval) {
        'use strict'
        
        this.$onInit = () => {
            UsersService.getCurrent().then((user) => {
                this.user = user
            }).catch((err) => {
                
            })
            
                
        }            
        
        this.disconnect = () =>{
            UsersService.disconnect().then(() => {
                Materialize.toast('Disconnected', 4000, 'toast-warning')
                this.user = null
                $state.reload()
            })
        }
        
        $interval(() => {
             this.moment = moment().format('MMMM Do YYYY, h:mm:ss a')
         },1000) 
        

}]
}

export default navbar
