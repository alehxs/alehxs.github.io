---
title: "Mastering React Hooks"
date: "2026-01-10"
excerpt: "My journey learning React Hooks and how they transformed the way I write components. Tips, tricks, and common pitfalls to avoid."
tags: ["learning"]
author: "Alexander Sangurima"
---

# Mastering React Hooks

React Hooks fundamentally changed how I approach component development. Coming from class components, the transition was both exciting and challenging.

## Why Hooks Matter

Hooks solve several problems that class components struggled with:

- **Logic reuse** - Custom hooks let you extract and share stateful logic
- **Simpler components** - No more confusing `this` keyword
- **Better code organization** - Related logic stays together

## My Favorite Hooks

### useState

The bread and butter of React Hooks. I use it constantly for managing component state:

```javascript
const [count, setCount] = useState(0);
const [user, setUser] = useState(null);
```

**Pro tip**: When updating state based on previous state, always use the functional form:

```javascript
// Good
setCount(prevCount => prevCount + 1);

// Avoid
setCount(count + 1);
```

### useEffect

Understanding `useEffect` dependencies was tricky at first. The key insight: **think about synchronization, not lifecycle methods**.

```javascript
useEffect(() => {
  // This runs when 'userId' changes
  fetchUserData(userId);
}, [userId]);
```

### Custom Hooks

Building custom hooks is where Hooks really shine. Here's a simple example:

```javascript
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
```

## Common Pitfalls

### 1. Missing Dependencies

The ESLint rule `react-hooks/exhaustive-deps` is your friend. Don't ignore it.

### 2. Stale Closures

Be careful with callbacks that reference state:

```javascript
// Problem
useEffect(() => {
  const interval = setInterval(() => {
    setCount(count + 1); // Stale closure!
  }, 1000);
  return () => clearInterval(interval);
}, []);

// Solution
useEffect(() => {
  const interval = setInterval(() => {
    setCount(c => c + 1); // Use functional update
  }, 1000);
  return () => clearInterval(interval);
}, []);
```

### 3. Overusing useEffect

Not everything needs `useEffect`. If you can calculate something during render, do it:

```javascript
// Unnecessary
const [fullName, setFullName] = useState('');
useEffect(() => {
  setFullName(`${firstName} ${lastName}`);
}, [firstName, lastName]);

// Better
const fullName = `${firstName} ${lastName}`;
```

## Resources I Found Helpful

- [React Docs](https://react.dev) - The new docs are excellent
- Dan Abramov's blog posts on overreacted.io
- Kent C. Dodds' Epic React course

## Final Thoughts

Hooks took my React skills to the next level. They encourage better patterns and make code more maintainable. If you're still using class components, I highly recommend making the switch.

Happy coding!
