# BrowserRouter

**Route 설치**
```console
> npm install react-router-dom
> npm i --save-dev @types/node
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

**useState & React.ReactNode**


**className**
```console
> npm install classnames
```





base: process.env.NODE_ENV === 'production' ? '/React-Project1' : '/', 

