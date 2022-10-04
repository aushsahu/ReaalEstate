//----FORM SCRIPT START----
const scriptURL = 'https://script.google.com/macros/s/AKfycbzCxgiJKtTNxK1gFH8BxvF7eRs-sFZc_tc9LWwjJ8bRmuoWfZOE6EgwjhXAo_ikLk99/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert("Submited Successfully")
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
//----FORM SCRIPT END----