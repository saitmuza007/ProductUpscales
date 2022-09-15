import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/nav-bar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { ProfilePage } from './pages/profile/profile.page';
import { AdminPage } from './pages/admin/admin.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { UnauthorizedPage } from './pages/unauthorized/unauthorized.page';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './models/role';
import Header from './pages/home/Header';
import { AdminDash } from './pages/admin/admin.dash';
import Dash from './pages/admin/Dash';
import { Profile } from './pages/profile/Profile';
import { ProductSave } from './components/product-save';
import DisplayDetails from './pages/admin/DisplayDetails';
import AddDetails from './pages/admin/AddDetails';
import Quotations from './pages/quotations/Quotations';
import QuotationsDisplay from './pages/quotations/QuotationsDisplay';



function App() {
  return (
      <BrowserRouter>
          <NavBar/>
          
        
          <div >
              <Routes>
                  <Route path="/" element={<Header/>}/>
                  <Route path="/home" element={<Header/>}/>
                  <Route path="/login" element={<LoginPage/>}/>
                  <Route path="/register" element={<RegisterPage/>}/>
                 

                  <Route path="/homepage" element={
                      <AuthGuard roles={[Role.ADMIN, Role.USER]}>
                          <HomePage/>
                      </AuthGuard>
                  }
                  />
                <Route path="/profile" element={
                      <AuthGuard roles={[Role.ADMIN, Role.USER]}>
                          <ProfilePage/>
                      </AuthGuard>
                  }
                  />

                  <Route path="/admin" element={
                      <AuthGuard roles={[Role.ADMIN]}>
                          <AdminPage/>
                      </AuthGuard>
                  }/>

                    <Route path="/dashboard" element={
                      <AuthGuard roles={[Role.ADMIN]}>
                          <Dash/>
                      </AuthGuard>
                  }/>   
                   <Route path="/prdsave" element={
                      <AuthGuard roles={[Role.ADMIN]}>
                          <ProductSave/>
                      </AuthGuard>
                  }/>
                   <Route path="/add" element={
                      <AuthGuard roles={[Role.ADMIN]}>
                          <AdminPage></AdminPage>
                      </AuthGuard>
                  }/>
                   <Route path="/display" element={
                      <AuthGuard roles={[Role.ADMIN]}>
                          <DisplayDetails></DisplayDetails>
                      </AuthGuard>
                  }/>
                  <Route path="/quotations" element={
                      <AuthGuard roles={[Role.USER]}>
                          <Quotations/>
                      </AuthGuard>
                  }
                  />
                    <Route path="/displayQuotes" element={
                      <AuthGuard roles={[Role.ADMIN]}>
                          <QuotationsDisplay/>
                      </AuthGuard>
                  }
                  />

                  <Route path="/404" element={<NotFoundPage/>}/>
                  <Route path="/401" element={<UnauthorizedPage/>}/>
                  <Route path="*" element={<NotFoundPage/>}/>
               
                 
                 
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
