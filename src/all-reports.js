import { database as realtimeDb, auth } from './firebaseInit.js';
import { ref, get } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";


const goHome = document.getElementById('home')
const backButton = document.getElementById('back-btn')


goHome.addEventListener('click', async () => {
  
    //getting current user
    const user = auth.currentUser;
    console.log("clicked!")

    if (user) {
        try {
            const userRef = ref(realtimeDb, 'users/' + user.uid)

            get(userRef).then((snapshot) => {
                const userData = snapshot.val();
                const role = userData.role;

                if (role === "Manager") {
                    window.location.href = 'manager-main-page.html'
                }
                else if (role === "HR") {
                    window.location.href = 'admin-main-page.html'
                }
                else {
                    window.location.href = 'main-page.html'
                }
            });
        }
        catch (error) {
            console.error("Error getting user role:", error)
        }
    }
    else {
        window.location.href = 'index.html'
    }
})


backButton.addEventListener('click', async () => {
   
    //getting current user
    const user = auth.currentUser;
    console.log("clicked!")

    if (user) {
        try {
            const userRef = ref(realtimeDb, 'users/' + user.uid)
            get(userRef).then((snapshot) => {

                const userData = snapshot.val();
                const role = userData.role;
                
                if (role === "Manager") {
                    window.location.href = 'manager-main-page.html'
                }
                else if (role === "HR") {
                    window.location.href = 'admin-main-page.html'
                } 
                else {
                    window.location.href = 'main-page.html'
                }
            });
        }
        catch (error) {
            console.error("Error getting user role:", error)
        }
    }
    else {
        window.location.href = 'index.html'
    }
})

