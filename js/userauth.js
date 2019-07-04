const btnLogout = document.getElementById('btnLogout');
const btnLogout2 = document.getElementById('btnLogout2');

btnLogout.addEventListener('click',signOut);
btnLogout2.addEventListener('click',signOut);

function signOut() {
    firebase.auth().signOut();
  }


firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
    } else {
        alert('Please Login');
        window.location.href = "index.html";
    }
});