const btnLogout = document.getElementById('btnLogout');
btnLogout.addEventListener('click',e=>{
 firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
    } else {
        alert('Please Login');
        window.location.href = "index.html";
    }
});