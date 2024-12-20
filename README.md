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
       <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
```

**useState & React.ReactNode**



npm i --save-dev @types/node

base: process.env.NODE_ENV === 'production' ? '/React-Project1' : '/', 

