/*
nav-bar interactions:
.hover() -> when user hovers over a list item -> change highlight the list item
.on('click) -> when user clicks on an item -> scroll down to selected section 

project interactions:
.hover() -> when user hovers over a project container, highlight conatiner
.on('click') -> when user clicks on a project, open page in new tab

contact interactions:
.hover() -> when user hovers over button change background color to either black or white depending on default color
.on('click') -> when user clicks on a button, open page in new tab

*/

//project container
const $projectContainer = $('<div>').attr('id', 'project-container'); //project section container
//project 1 container
const $landscaperBrowserProject = $('<div>')
  .attr('id', 'landscaper-container')
  .addClass('project-item'); //main conatiner
const $p1ImgContainer = $('<div>') //img container
  .attr('id', 'p1ImgContainer')
  .addClass('project-img-container')
  .appendTo($landscaperBrowserProject);
const $project1Img = $('<img>')
  .appendTo($p1ImgContainer)
  .addClass('project-img'); //img container
const $project1Description = $('<p>')
  .appendTo($landscaperBrowserProject)
  .addClass('project-p'); //text container

//project 2 container
const $landscaperTerminalProject = $('<div>')
  .attr('id', 'landscaperTerminal-container')
  .addClass('project-item');
const $p12mgContainer = $('<div>')
  .attr('id', 'p1ImgContainer')
  .addClass('project-img-container')
  .appendTo($landscaperTerminalProject);
const $project2Img = $('<img>')
  .appendTo($p12mgContainer)
  .addClass('project-img');
const $project2Description = $('<p>')
  .appendTo($landscaperTerminalProject)
  .addClass('project-p');

//project 2 container
const $toDoListProject = $('<div>')
  .attr('id', 'todo-list-container')
  .addClass('project-item');
const $p3ImgContainer = $('<div>')
  .attr('id', 'p1ImgContainer')
  .addClass('project-img-container')
  .appendTo($toDoListProject);
const $project3Img = $('<img>')
  .appendTo($p3ImgContainer)
  .addClass('project-img');
const $project3Description = $('<p>')
  .appendTo($toDoListProject)
  .addClass('project-p')
  .text('description');

//displays project section
function displayProjects() {
  $('body').append($projectContainer);
  $projectContainer.append(
    $landscaperBrowserProject,
    $landscaperTerminalProject,
    $toDoListProject
  );
}

$(() => {
  displayProjects();
});
