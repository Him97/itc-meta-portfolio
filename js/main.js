// Select the relevant HTML elements using their ids
const profileImage = document.querySelector('#profile-image');
const profileName = document.querySelector('#profile-name');

// Use fetch to connect to the GitHub API and retrieve user data
fetch('https://api.github.com/users/Him97')
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    // Update the profile image source and alt text
    profileImage.src = data.avatar_url;
    profileImage.alt = `Profile picture of ${data.login}`;
    
    // Update the profile name text
    profileName.textContent = `Xin Li (GitHub: ${data.login})`;
  })
  .catch(error => {
    console.error('Error retrieving user data:', error);
  });