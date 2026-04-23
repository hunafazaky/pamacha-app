import { defineStore } from "pinia";
import { ref, computed } from "vue";

// Interface
export interface Account {
  id: string;
  username: string;
  password: string;
}

// Logic
export const useAccountStore = defineStore("account", () => {
  const accounts = ref<Account[]>([
    { id: "abc", username: "hunafa", password: "123" },
    { id: "def", username: "zaky", password: "456" },
  ]);

  const addAccount = (username: string, password: string) => {
    if (!(username && password)) return;
    accounts.value.push({
      id: crypto.randomUUID(),
      username,
      password,
    });
  };

  const updateAccount = (username: string, password: string, id: string) => {
    if (!(username && password)) return;
    const account = accounts.value.find((item) => item.id === id);
    if (account) {
      if (account.username !== username) account.username = username;
      if (account.password !== password) account.password = password;
    }
  };

  return { accounts, addAccount, updateAccount };
});


// export interface Todo {
//   id: number;
//   text: string;
//   isDone: boolean;
// }
// export const useTodoStore = defineStore("todo", () => {
//   // --- STATE (Data Reaktif) ---
//   const todos = ref<Todo[]>([
//     { id: 1, text: "Pelajari Vuetify 3", isDone: true },
//     { id: 2, text: "Migrasi ke Pinia", isDone: false },
//   ]);
//   // --- ACTIONS (Fungsi Pengubah Data) ---
//   function addTodo(newText: string) {
//     if (!newText.trim()) return;
//     todos.value.push({
//       id: Date.now(),
//       text: newText,
//       isDone: false,
//     });
//   }
//   function toggleTodo(id: number) {
//     const todo = todos.value.find((t) => t.id === id);
//     if (todo) {
//       todo.isDone = !todo.isDone;
//     }
//   }
//   function removeTodo(id: number) {
//     todos.value = todos.value.filter((t) => t.id !== id);
//   }
//   // --- GETTERS (Data Turunan) ---
//   const pendingCount = computed(() => {
//     return todos.value.filter((t) => !t.isDone).length;
//   });
//   // WAJIB me-return semua yang ingin diakses oleh komponen
//   return { todos, addTodo, toggleTodo, removeTodo, pendingCount };
// });
