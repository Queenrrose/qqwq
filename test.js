const { profileImage } = require('./index');
const fs = require('fs');

async function run() {
  try {
    console.log('Generating profile image...');
    const buffer = await profileImage('1081004946872352958');
    fs.writeFileSync('test_profile.png', buffer);
    console.log('Profile image generated: test_profile.png');
  } catch (error) {
    console.error('Error:', error);
  }
}

run();
