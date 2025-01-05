# BrowserRouter

**Route 설치**
```console
> npm install react-router-dom
```

**Route 설정**
```javascript
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={process.env.NODE_ENV === 'production' ? '/React-Project1' : '/'} element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
```


**Typescript에서 Node.js 사용**
```console
> npm i --save-dev @types/node
```


```javascript
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/React-Project1/' : '/',
  resolve: {
    alias: {
    }
  },
})
```

# Recoil
**Recoil 설치**
```console
> npm install recoil
```

# Axios
**Axios 설치**
```console
> npm install axios
```


# className
**className 설치**
```console
> npm install classnames
```
