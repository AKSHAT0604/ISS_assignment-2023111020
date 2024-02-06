// Function to hide and show content based on navbar clicks
function showContent(sectionId) {
    const sections = ['about', 'education', 'achievements', 'skills', 'blog', 'resume'];

    sections.forEach((section) => {
        const element = document.getElementById(section);
        console.log(section);
        console.log(sectionId);
        if (section === sectionId) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}

// Updated function for liking a blog post
// Function to handle liking comments
// function likeComment(postId, commentId) {
//     // Retrieve liked comments from local storage or default to an empty array
//     var likedComments = JSON.parse(localStorage.getItem(postId + '_liked_comments')) || [];

//     // Check if the comment has already been liked
//     if (!likedComments.includes(commentId)) {
//         // Add the comment to the liked comments array
//         likedComments.push(commentId);

//         // Update the liked comments array in local storage
//         localStorage.setItem(postId + '_liked_comments', JSON.stringify(likedComments));

//         // Increment the like count for the comment
//         var likesElement = document.getElementById('comment_likes_' + commentId);
//         var currentLikes = parseInt(likesElement.textContent) || 0;
//         currentLikes++;
//         likesElement.textContent = currentLikes + ' Likes';
//     }
// }


// Updated function for showing comments on a blog post
// function showComments(postId) {
//     var commentsSection = document.getElementById('comments_' + postId);

//     // Toggle visibility of comments section
//     if (commentsSection.style.display === 'none' || commentsSection.style.display === '') {
//         commentsSection.style.display = 'block';  // Show comments when clicked
//     } else {
//         commentsSection.style.display = 'none';   // Hide comments when clicked again
//     }
// }

// Updated function for toggling light/dark mode
// Updated function for toggling light/dark mode
// Updated function for toggling light/dark mode
function toggleMode() {
    const body = document.body;
    const videoBackground = document.getElementById('video-background');
    const modeToggle = document.getElementById('mode-toggle');

    // Add a class to indicate the transition
    body.classList.add('mode-transition');

    // Check the current state of the toggle
    if (modeToggle.checked) {
        // Dark mode
        body.classList.add('dark-mode');
        videoBackground.src = 'dark_mode.mp4';
    } else {
        // Light mode
        body.classList.remove('dark-mode');
        videoBackground.src = 'light_mode.mp4';
    }

    // Implement saving the mode preference in local storage if needed

    // Remove the transition class after the transition is complete
    setTimeout(() => {
        body.classList.remove('mode-transition');
    }, 500); // Adjust the timeout to match the transition duration (0.5s in this case)
}

function showSchoolImage(school) {
    const schoolImages = {
        'trinity': 'Trinity.jpeg', // Replace with the actual image file for Trinity School
        'eicher': 'Eicher.jpeg', // Replace with the actual image file for Eicher School
        'vidya_niketan': 'MVN.jpg' // Replace with the actual image file for Vidya Niketan
    };

    const schoolImagesDiv = document.getElementById('school-images');
    schoolImagesDiv.innerHTML = `<img src="${schoolImages[school]}" alt="${school} Image">`;
}

// Function to hide school image when not hovering
function hideSchoolImage() {
    const schoolImagesDiv = document.getElementById('school-images');
    schoolImagesDiv.innerHTML = ''; // Clear the content to hide the image
}

document.addEventListener("DOMContentLoaded", function () {
    var achievements = document.querySelectorAll(".achievement");

    achievements.forEach(function (achievement) {
        achievement.addEventListener("mouseover", function () {
            achievements.forEach(function (otherAchievement) {
                if (otherAchievement !== achievement) {
                    otherAchievement.style.color = "";
                    otherAchievement.querySelector("img").style.display = "none";
                }
            });

            achievement.querySelector("img").style.display = "block";
        });
    });
});

// Add this function to show details on hover
function showDetails(achievementId) {
    // Hide all details and images
    var allAchievements = document.querySelectorAll('.achievement');
    allAchievements.forEach(function (achievement) {
        achievement.querySelector('.details').style.display = 'none';
        achievement.querySelector('img').style.display = 'none';
    });

    // Show details and image for the hovered achievement
    var hoveredAchievement = document.getElementById(achievementId);
    hoveredAchievement.querySelector('.details').style.display = 'block';
    hoveredAchievement.querySelector('img').style.display = 'block';
}