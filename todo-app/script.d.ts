type Todo = {
    text: string;
    disabled: boolean;
};
declare let saved: string | null;
declare let safeString: string;
declare let todo: Todo[];
declare const todoInput: HTMLInputElement;
declare const todoList: HTMLLIElement;
declare const todoCount: HTMLSpanElement;
declare const addButton: HTMLButtonElement;
declare const deleteButton: HTMLButtonElement;
declare function addTask(): void;
declare function displayTasks(): void;
declare function editTask(index: number): void;
declare function toggleTask(index: number): void;
declare function saveToLocalStorage(): void;
declare function deleteAllTasks(): void;
declare function deleteTask(index: number): void;
//# sourceMappingURL=script.d.ts.map