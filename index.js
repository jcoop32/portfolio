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
const $p1InfoContainer = $('<div>')
  .addClass('project-info')
  .appendTo($landscaperBrowserProject);
const $project1Description = $('<p>')
  .appendTo($p1InfoContainer)
  .text('description')
  .addClass('project-p'); //text container
const $project1Btn = $('<button>')
  .appendTo($p1InfoContainer)
  .addClass('project-btn')
  .text('Go');

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
const $p2InfoContainer = $('<div>')
  .addClass('project-info')
  .appendTo($landscaperTerminalProject);
const $project2Description = $('<p>')
  .appendTo($p2InfoContainer)
  .text('description')
  .addClass('project-p');
const $project2Btn = $('<button>')
  .appendTo($p2InfoContainer)
  .addClass('project-btn')
  .text('Go');

//project 3 container
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
const $p3InfoContainer = $('<div>')
  .addClass('project-info')
  .appendTo($toDoListProject);
const $project3Title = $('<h3>')
  .appendTo($p3InfoContainer)
  .addClass('project-h3')
  .text('ToDo List');
const $project3Description = $('<p>')
  .appendTo($p3InfoContainer)
  .addClass('project-p')
  .text('description');
const $project3Btn = $('<button>')
  .appendTo($p3InfoContainer)
  .addClass('project-btn')
  .text('Go');

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
