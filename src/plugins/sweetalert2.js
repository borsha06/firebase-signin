
import swal from 'sweetalert2'
// import something here

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  // something to do
  Vue.prototype.swal = swal
}
