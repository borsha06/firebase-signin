<template>
  <q-page class="flex flex-center">
    <!--<img alt="Quasar logo" src="~assets/quasar-logo-full.svg">-->
    <q-card>
      <div id="recaptcha-container"></div>
      <q-card-title>
        Already a user? Sign In To DanceApp!
      </q-card-title>
      <q-card-separator/>
      <q-card-main>

        <q-field
          label="Number"
          label-width=3
          helper="Enter your registered email address to Log in"
          error-label="Please type a valid email address"
        >
          <q-input
            type="text"
            v-model="form.number"></q-input>
        </q-field>

      </q-card-main>
      <q-card-separator/>
      <q-card-actions align="center">
        <q-btn color="primary" align="center" label="Sign In" v-on:click="submit()"></q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>import firebase from 'firebase'

// import swal from 'sweetalert2'

export default {
  name: 'PageIndex',
  data () {
    return {
      form: {
        number: ''
      },
      code: ''
    }
  },
  mounted () {
    // const self = this
    // Start Firebase invisible reCAPTCHA verifier

  },
  methods: {
    submit () {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        // size: 'invisible',
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // self.sendSMS()
          console.log(response)
          const phoneNumberString = this.form.number
          firebase.auth().signInWithPhoneNumber(phoneNumberString, window.recaptchaVerifier).then(function (confirmationResult) {
            // window.confirmationResult = confirmationResult
            var verificationCode = window.prompt('Please enter the verification ')
            console.log(verificationCode)
            confirmationResult.confirm(verificationCode).then(function (result) {
              var user = result.user
              console.log(user)
            })
          })
            .catch(function (error) {
              console.log(error)
            })
        }
      })
      window.recaptchaVerifier.render().then((widgetId) => {
        window.recaptchaWidgetId = widgetId
      })
      // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container'){
      // const phoneNumberString = this.form.number
      // firebase.auth().signInWithPhoneNumber(phoneNumberString, window.recaptchaVerifier)
      //   .then(function (confirmationResult) {
      //     var verificationCode = window.prompt('Please enter the verification ' +
      //       'code that was sent to your mobile device.')
      //     return confirmationResult.confirm(verificationCode).then(function (result) {
      //       var user = result.user
      //       console.log(user)
      //     })
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      // Handle Errors here.
      // swal({
      //   input: 'text',
      //   showCancelButton: true,
      //   closeOnConfirm: false,
      //   animation: 'slide-from-top',
      //   inputPlaceholder: 'User'
      // }).then(function (value) {
      //   // console.log(value)
      //   // if (value === false) return false
      //   // if (value === '') {
      //   //   swal('Error')
      //   //   return false
      //   // } else {
      //   console.log(value)
      //   confirmationResult.confirm(value)
      //     .then(function (result) {
      //       console.log(result)
      //       alert('hell')
      //       console.log(result)
      //       var user = result.user
      //       console.log(user)
      //     })
      //   // }
      // })

      // var myFunction = function () {
      //     window.confirmationResult.confirm(document.getElementById("verificationcode").value).then(function (result) {
      //         console.log(result);
      //     }, function (error) {
      //       console.log(error);
      //     });
      // };
      // })
    }
  }
}
</script>
