### README.md for To-Do List Project

---

## **To-Do List**

This project is a feature-rich To-Do List application developed using **HTML**, **CSS**, **JavaScript**, and **Bootstrap**. It is designed to help users manage their tasks efficiently by offering features such as adding, editing, and deleting tasks, as well as setting reminders for specific tasks.

---

### **Key Features**

1. **Add Tasks**: Users can add tasks to the list with an optional reminder.
2. **Edit Tasks**: Tasks can be edited directly by clicking the edit button.
3. **Mark as Completed**: Click on a task to toggle between completed and pending states.
4. **Delete Tasks**: Remove tasks from the list using the delete button.
5. **Reminders**: Alerts notify the user at the specified time.
6. **Persistent Storage**: Tasks are saved in the browser's `localStorage` to retain data even after page reloads.
7. **Responsive Design**: Styled with Bootstrap for a clean, responsive interface.

---

### **Project Structure**

```
.
├── index.html        # Main HTML file
├── midterm2.css      # Custom CSS for styling
├── midterm2.js       # JavaScript logic for the app
```

#### **Files Overview**
- **`index.html`**: Contains the structure of the app, including input fields, buttons, and the task list.
- **`midterm2.css`**: Custom styles for buttons and interaction enhancements, leveraging Bootstrap.
- **`midterm2.js`**: Core logic for adding, editing, deleting, and managing tasks, as well as reminders.

---

### **Usage**

1. **Add a Task**:
   - Enter a task in the input field.
   - Optionally, set a reminder using the date and time picker.
   - Click "Add Task" or  press "Enter" button to add it to the list.

2. **Edit a Task**:
   - Click the pencil icon next to a task.
   - Modify the text in the input field and press **Enter** or click outside the field to save changes.

3. **Mark as Completed**:
   - Click on the task text to mark it as completed or toggle it back to pending.

4. **Delete a Task**:
   - Click the trash icon to remove the task.

5. **Reminders**:
   - Set a reminder time while adding a task. An alert will notify the user at the specified time.

---

### **Technologies Used**

- **HTML**: Structure and content of the app.
- **CSS**: Custom styles for buttons and task interactions.
- **Bootstrap**: Responsive and visually appealing design.
- **JavaScript**: Task management logic, DOM manipulation, and event handling.
- **localStorage**: Persistent storage for tasks.

---

### **Requirements**
To run the project:
- A modern web browser (Google Chrome, Firefox, etc.)
- No additional server setup is required.

---

### **How It Works**

1. **Adding a Task**:
   - Tasks are pushed into an array (`tasks`), stored in `localStorage`, and rendered on the page.

2. **Rendering Tasks**:
   - The `renderTasks()` function dynamically creates task list items (`<li>`) and attaches event listeners for interactions.

3. **Editing and Deleting**:
   - Editing uses an inline input field for seamless updates.
   - Deletion updates the `tasks` array and re-renders the list.

4. **Reminders**:
   - `setTimeout()` schedules an alert based on the reminder time set by the user.

---

### **Bootstrap Integration**

- **`list-group`**: Used to style the task list.
- **Button styles**: `btn-warning`, `btn-danger`, and custom styles enhance the interactivity and usability of buttons.
- **Utility classes**: `text-break`, `text-wrap`, and `d-flex` for proper text handling and alignment.

---

### **Future Enhancements**

1. Adding task categories or tags.
2. Implementing drag-and-drop for task prioritization.
3. Integrating with a database for multi-user functionality.
4. Adding notifications using the browser's Notification API.

---

### **Author**
- Developed by: Onashov Aidos

If you have questions or suggestions, feel free to reach out! 😊
