/*
nav-bar interactions:
.hover() -> when user hovers over a list item -> change highlight the list item
.on('click) -> when user clicks on an item -> scroll down to selected section 

project interactions:
.hover() -> when user hovers over a project container, highlight conatiner
.on('click') -> when user clicks on view description, description appears

contact interactions:
.hover() -> when user hovers over button change background color to either black or white depending on default color
.on('click') -> when user clicks on a button, open page in new tab


check in on thurs
*/

//project container

$(() => {
  //   const $projectDescription = $('#project1-description');
  const $project1Description = $('#project1-description');
  const $project2Description = $('#project2-description');
  const $project3Description = $('#project3-description');
  const $projectBtn = $('button');
  $project1Description.hide();
  $project2Description.hide();
  $project3Description.hide();
  $projectBtn.on('click', () => {
    let currentBtn = $('.project-btn').attr('id');
    console.log(currentBtn);
    switch (currentBtn) {
      case 'btn1':
        $project1Description.toggle('slow');
        break;
      case 'btn2':
        $project2Description.toggle('slow');
        break;
      case 'btn3':
        $project3Description.toggle('slow');
        break;
    }
  });
});
