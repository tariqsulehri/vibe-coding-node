# Node.js JavaScript Coding Standards and Best Practices

Follow these rules line-by-line for writing clean, professional, and production-ready code.

---

## 1. Code Style and Formatting
1.1 Use **2 spaces** for indentation, no tabs.  
1.2 Use **camelCase** for variables and functions.  
1.3 Use **PascalCase** for class names.  
1.4 Use **semicolon (;)** consistently to terminate statements.  
1.5 Use **single quotes** for strings (`'example'`) unless using template literals.  
1.6 Keep lines under **100 characters** in length.  

---

## 2. File and Project Structure
2.1 Use a modular folder structure (`routes/`, `controllers/`, `services/`, `models/`, `utils/`).  
2.2 Keep each file focused on a single responsibility.  
2.3 Name files according to their purpose in lowercase with dashes (`user-controller.js`).  

---

## 3. Variables and Constants
3.1 Use `const` by default, only use `let` when reassignment is needed.  
3.2 Do not use `var`.  
3.3 Name constants in UPPER_CASE if they are module-level (e.g., `MAX_LIMIT`).  
3.4 Declare variables as close as possible to where they are used.

---

## 4. Functions
4.1 Keep functions short and focused on a single task.  
4.2 Use arrow functions (`const sum = (a, b) => a + b`) unless `this` binding is required.  
4.3 Avoid side effects—functions should return values instead of modifying external state.
4.4 Write Function Signature for readability

---

## 5. Asynchronous Code
5.1 Use `async/await` instead of `.then()` and `.catch()` where possible.  
5.2 Always handle promise rejections with try/catch.  
5.3 Avoid using `await` inside loops—use `Promise.all` where possible for parallelism.

---

## 6. Error Handling
6.1 Never swallow errors silently.  
6.2 Use consistent error messages and HTTP status codes.  
6.3 Centralize error handling using middleware or utility classes.  
6.4 Throw custom error classes instead of plain strings or Error objects.

---

## 7. Code Readability
7.1 Write self-explanatory code—**prefer clarity over cleverness**.  
7.2 Add inline comments only when logic is complex.  
7.3 Write meaningful names for variables, functions, and classes.  
7.4 Do not abbreviate unless it's a widely known acronym.

---

## 8. Security Best Practices
8.1 Never trust user input—**always validate and sanitize**.  
8.2 Avoid exposing stack traces to clients.  
8.3 Use environment variables for secrets.  
8.4 Keep dependencies updated to avoid known vulnerabilities.

---

## 9. Testing and Quality
9.1 Write unit tests for every service and utility.  
9.2 Use tools like Jest, Mocha, or Vitest.  
9.3 Ensure 80%+ code coverage where feasible.  
9.4 Use `eslint` and `prettier` for linting and formatting.  

---

## 10. Documentation
10.1 Write JSDoc comments for exported functions and classes.  
10.2 Keep README.md updated with installation, usage, and API docs.  
10.3 Comment logic that is not obvious or business-critical.

---

## 11. Git and Version Control
11.1 Commit frequently with clear, descriptive messages.  
11.2 Use `.gitignore` to avoid committing sensitive or irrelevant files.  
11.3 Branch naming should follow the pattern `feature/login-api` or `bugfix/missing-token`.

---

## 12. Dependency Management
12.1 Avoid using unnecessary packages—**prefer native Node.js modules**.  
12.2 Pin exact versions in `package.json`.  
12.3 Use `npm audit` or `yarn audit` regularly.  

---

By following these rules, AI and developers can ensure consistent, maintainable, and secure JavaScript code for Node.js projects.