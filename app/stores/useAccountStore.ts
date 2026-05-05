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
  const currentUser = ref<Account | null>(null);

  const signUpAccount = (username: string, password: string) => {
    if (!username || !password)
      return { status: 400, message: "username or password cannot be empty." };
    
    const existingAccount = accounts.value.some((item) => item.username === username);
    if (existingAccount) return { status: 400, message: "Username sudah terdaftar!" };
    
    accounts.value.push({
      id: crypto.randomUUID(),
      username,
      password,
    });
  };

  const signInAccount = (username: string, password: string) => {
    if (!(username && password)) return;
    const account = accounts.value.find((item) => item.username === username);
    if (account && account.password === password)
      return { message: "Sign In Success." };
    else return { message: "Username or Password mismatch." };
  };

  const updateAccount = (username: string, password: string, id: string) => {
    if (!(username && password)) return;
    const account = accounts.value.find((item) => item.id === id);
    if (account) {
      if (account.username !== username) account.username = username;
      if (account.password !== password) account.password = password;
    }
  };

  return { accounts, signUpAccount, signInAccount, updateAccount };
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
