let tasks = [
    { name: "Complete project report", isCompleted: false, dueDate: "2025-03-01" },
    { name: "Submit assignment", isCompleted: true, dueDate: "2025-02-28" },
    { name: "Prepare for meeting", isCompleted: false, dueDate: "2025-03-03" }
];


function getIncompleteTasks(taskList) {
    return taskList.filter(task => !task.isCompleted);
}
console.log("Incomplete Tasks:", getIncompleteTasks(tasks));


let formattedTasks = tasks.map(function(task) {
    let today = new Date().toISOString().split('T')[0]; 
    if (task.dueDate && task.dueDate < today) {
        return { ...task, name: `[Overdue] ${task.name}` };
    }
    return task;
});
console.log("Formatted Tasks:", formattedTasks);


let countTasks = taskList => taskList.length;
console.log("Total Tasks:", countTasks(tasks));

let countCompletedTasks = taskList => taskList.filter(task => task.isCompleted).length;
console.log("Completed Tasks:", countCompletedTasks(tasks));
