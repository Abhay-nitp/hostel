// Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyCdSejQWUt2WB9Ab8-OMknHF1TR0I7nRXM",

    authDomain: "hostel1-ebc10.firebaseapp.com",

    projectId: "hostel1-ebc10",

    storageBucket: "hostel1-ebc10.appspot.com",

    messagingSenderId: "114725413830",

    appId: "1:114725413830:web:355d256ac54b0b05e788c7",

    measurementId: "G-QT92BJJ7Y2"

  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById('complaintForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const rollNo = document.getElementById('rollNo').value;
    const roomNo = document.getElementById('roomNo').value;
    const problem = document.getElementById('problem').value;

    console.log("Submitting complaint:", { rollNo, roomNo, problem }); // Log the form data

    db.collection('complaints').add({
        rollNo: rollNo,
        roomNo: roomNo,
        problem: problem,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        console.log('Complaint submitted successfully!');
        document.getElementById('message').textContent = 'Complaint submitted successfully!';
        document.getElementById('complaintForm').reset();
    })
    .catch((error) => {
        console.error('Error adding document: ', error);
        document.getElementById('message').textContent = 'Failed to submit complaint.';
    });
});
