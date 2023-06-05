//project container
const $projectContainer = $('<div>').attr('id', 'project-container');
//project 1 container
const $landscaperBrowserProject = $('<div>').attr('id', 'landscaper-container');
const $project1Img = $('<img>').appendTo($landscaperBrowserProject);
const $project1Description = $('<p>').appendTo($landscaperBrowserProject);
//project 2 container
const $landscaperTerminalProject = $('<div>').attr(
  'id',
  'landscaperTerminal-container'
);
const $project2Img = $('<img>').appendTo($landscaperTerminalProject);
const $project2Description = $('<p>').appendTo($landscaperTerminalProject);

//project 2 container
const $toDoListProject = $('<div>').attr('id', 'todo-list-container');
const $project3Img = $('<img>').appendTo($toDoListProject);
const $project3Description = $('<p>').appendTo($toDoListProject);

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
